package com.bin.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.bin.annotation.OptLog;
import com.bin.entity.SiteNav;
import com.bin.entity.SiteTags;
import com.bin.mapper.SiteNavMapper;
import com.bin.mapper.SiteTagsMapper;
import com.bin.service.SiteNavService;
import com.bin.vo.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

import static com.bin.constant.OptTypeConst.REMOVE;
import static com.bin.constant.OptTypeConst.SAVE_OR_UPDATE;

/**
 * @Author: bin
 * @Description: TODO 网站导航模块
 * @Date: 2022/1/20
 **/

@Api(tags = "网站导航模块")
@RestController
public class SiteNavController {
    @Autowired
    SiteNavService siteNavService;

    @Autowired
    SiteTagsMapper siteTagsMapper;

    @Autowired
    SiteNavMapper siteNavMapper;

    @ApiOperation(value = "查看后台网站导航列表")
    @GetMapping("/admin/siteNavs")
    public String getAdminSiteNavList(@RequestParam Map<String, Object> map) {
        return siteNavService.getAdminSiteNavList(map);
    }

    @OptLog(optType = SAVE_OR_UPDATE)
    @ApiOperation(value = "添加或修改网站导航")
    @PostMapping("/admin/siteNavs")
    public String saveOrUpdateSiteNav(@RequestBody Map<String, Object> map) {
        return siteNavService.saveOrUpdateSiteNav(map);
    }

    @OptLog(optType = REMOVE)
    @ApiOperation(value = "删除网站导航")
    @DeleteMapping("/admin/siteNavs")
    public Result<?> deleteSiteNav(@RequestBody List<Integer> siteNavIdList) {
        siteNavService.removeByIds(siteNavIdList);
        return Result.ok(null,"删除成功");
    }

    @ApiOperation(value = "查看后台网站导航标签列表")
    @GetMapping("/admin/siteNavTags")
    public String getAdminSiteTagsList(@RequestParam Map<String,Object> map) {
        return siteNavService.getAdminSiteTagsList(map);
    }

    @OptLog(optType = SAVE_OR_UPDATE)
    @ApiOperation(value = "添加或修改网站导航标签")
    @PostMapping("/admin/siteNavTags")
    public Result<?> saveOrUpdateSiteNavTags(@RequestBody SiteTags siteTags) {
        if (Objects.isNull(siteTags.getId())) {
            siteTagsMapper.insert(siteTags);
            return Result.ok(null,"添加成功");
        } else {
            siteTagsMapper.updateById(siteTags);
            return Result.ok(null,"更新成功");
        }
    }

    @OptLog(optType = REMOVE)
    @ApiOperation(value = "删除网站导航标签")
    @DeleteMapping("/admin/siteNavTags")
    public Result<?> deleteSiteTags(@RequestBody List<Integer> siteTagsList) {
        // 判断该导航网站标签下是否有网站
        Integer count = siteNavMapper.selectCount(new LambdaQueryWrapper<SiteNav>()
                .in(SiteNav::getTagsId,siteTagsList));
        if (count > 0) {
            return Result.fail("此标签下有导航网站，禁止删除！");
        } else {
            siteTagsMapper.deleteBatchIds(siteTagsList);
            return Result.ok(null,"删除成功");
        }

    }

    /**
     * @Description: TODO 获取网站导航列表
     **/
    @ApiOperation(value = "获取网站导航列表")
    @GetMapping("/siteNavs")
    public String getSiteNavList() {
        return siteNavService.getSiteNavList();
    }
}
