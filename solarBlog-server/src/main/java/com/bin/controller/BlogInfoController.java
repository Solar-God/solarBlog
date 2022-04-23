package com.bin.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.bin.dto.BlogBackInfoDTO;
import com.bin.dto.BlogHomeInfoDTO;
import com.bin.entity.ChatRecord;
import com.bin.enums.FilePathEnum;
import com.bin.mapper.ChatRecordMapper;
import com.bin.util.BeanCopyUtils;
import com.bin.util.PageUtils;
import com.bin.vo.*;
import com.bin.annotation.OptLog;
import com.bin.service.BlogInfoService;
import com.bin.service.impl.WebSocketServiceImpl;
import com.bin.strategy.context.UploadStrategyContext;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import javax.validation.Valid;
import java.util.List;

import static com.bin.constant.OptTypeConst.UPDATE;

/**
 * 博客信息控制器
 *
 * @author bin
 * @date 2021/07/28
 */
@Api(tags = "博客信息模块")
@RestController
public class BlogInfoController {
    @Autowired
    private BlogInfoService blogInfoService;
    @Autowired
    private WebSocketServiceImpl webSocketService;
    @Autowired
    private UploadStrategyContext uploadStrategyContext;
    @Autowired
    private ChatRecordMapper chatRecordMapper;

    /**
     * 查看博客信息
     *
     * @return {@link Result < BlogHomeInfoDTO >} 博客信息
     */
    @ApiOperation(value = "查看博客信息")
    @GetMapping("/")
    public Result<BlogHomeInfoDTO> getBlogHomeInfo() {
        return Result.ok(blogInfoService.getBlogHomeInfo());
    }

    /**
     * 查看后台信息
     *
     * @return {@link Result< BlogBackInfoDTO >} 后台信息
     */
    @ApiOperation(value = "查看后台信息")
    @GetMapping("/admin")
    public Result<BlogBackInfoDTO> getBlogBackInfo() {
        return Result.ok(blogInfoService.getBlogBackInfo());
    }

    /**
     * 上传博客配置图片
     *
     * @param file 文件
     * @return {@link Result<String>} 博客配置图片
     */
    @ApiOperation(value = "上传博客配置图片")
    @ApiImplicitParam(name = "file", value = "图片", required = true, dataType = "MultipartFile")
    @PostMapping("/admin/config/images")
    public Result<String> savePhotoAlbumCover(MultipartFile file) {
        return Result.ok(uploadStrategyContext.executeUploadStrategy(file, FilePathEnum.CONFIG.getPath()));
    }

    /**
     * 更新网站配置
     *
     * @param websiteConfigVO 网站配置信息
     * @return {@link Result}
     */
    @ApiOperation(value = "更新网站配置")
    @PutMapping("/admin/website/config")
    public Result<?> updateWebsiteConfig(@Valid @RequestBody WebsiteConfigVO websiteConfigVO) {
        blogInfoService.updateWebsiteConfig(websiteConfigVO);
        return Result.ok();
    }

    /**
     * 获取网站配置
     *
     * @return {@link Result<WebsiteConfigVO>} 网站配置
     */
    @ApiOperation(value = "获取网站配置")
    @GetMapping("/admin/website/config")
    public Result<WebsiteConfigVO> getWebsiteConfig() {
        return Result.ok(blogInfoService.getWebsiteConfig());
    }

    /**
     * 查看关于我信息
     *
     * @return {@link Result<String>} 关于我信息
     */
    @ApiOperation(value = "查看关于我信息")
    @GetMapping("/about")
    public Result<String> getAbout() {
        return Result.ok(blogInfoService.getAbout());
    }

    /**
     * 修改关于我信息
     *
     * @param blogInfoVO 博客信息
     * @return {@link Result<>}
     */
    @OptLog(optType = UPDATE)
    @ApiOperation(value = "修改关于我信息")
    @PutMapping("/admin/about")
    public Result<?> updateAbout(@Valid @RequestBody BlogInfoVO blogInfoVO) {
        blogInfoService.updateAbout(blogInfoVO);
        return Result.ok();
    }

    /**
     * 保存语音信息
     *
     * @param voiceVO 语音信息
     * @return {@link Result<String>} 语音地址
     */
    @ApiOperation(value = "上传语音")
    @PostMapping("/voice")
    public Result<String> sendVoice(VoiceVO voiceVO) {
        webSocketService.sendVoice(voiceVO);
        return Result.ok();
    }

    /**
     * 上传访客信息
     *
     * @return {@link Result}
     */
    @PostMapping("/report")
    public Result<?> report() {
        blogInfoService.report();
        return Result.ok();
    }

    /**
     * @Description: 查看后台历史聊天记录列表
     **/
    @ApiOperation(value = "查看后台历史聊天记录列表")
    @GetMapping("/admin/chatList")
    public Result<PageResult<ChatRecord>> getChatList(ConditionVO condition) {
        // 分页查询聊天记录列表
        Page<ChatRecord> page = new Page<>(PageUtils.getCurrent(), PageUtils.getSize());
        LambdaQueryWrapper<ChatRecord> chatRecordLambdaQueryWrapper = new LambdaQueryWrapper<ChatRecord>()
                .orderByDesc(ChatRecord::getCreateTime);
        Page<ChatRecord> chatRecordPage = chatRecordMapper.selectPage(page, chatRecordLambdaQueryWrapper);
        // 转换DTO
        List<ChatRecord> chatRecordList = BeanCopyUtils.copyList(chatRecordPage.getRecords(),ChatRecord.class);
        return Result.ok(new PageResult<>(chatRecordList,(int)chatRecordPage.getTotal()));
    }

    /**
     * @Description: 删除历史聊天记录
     **/
    @ApiOperation(value = "删除历史聊天记录")
    @DeleteMapping("admin/chatRecord")
    public Result<?> deleteChatRecord(@RequestBody List<Integer> chatRecordIdList){
        chatRecordMapper.deleteBatchIds(chatRecordIdList);
        return Result.ok();
    }

}

