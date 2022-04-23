package com.bin.service.impl;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.bin.constant.RedisPrefixConst;
import com.bin.mapper.PageMapper;
import com.bin.util.BeanCopyUtils;
import com.bin.vo.PageVO;
import com.bin.entity.Page;
import com.bin.service.PageService;
import com.bin.service.RedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Objects;

/**
 * 页面服务
 *
 * @author bin
 * @date 2021/08/07
 */
@Service
public class PageServiceImpl extends ServiceImpl<PageMapper, Page> implements PageService {
    @Autowired
    private RedisService redisService;
    @Autowired
    private PageMapper pageMapper;

    @Transactional(rollbackFor = Exception.class)
    @Override
    public void saveOrUpdatePage(PageVO pageVO) {
        Page page = BeanCopyUtils.copyObject(pageVO, Page.class);
        this.saveOrUpdate(page);
        // 删除缓存
        redisService.del(RedisPrefixConst.PAGE_COVER);
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public void deletePage(Integer pageId) {
        pageMapper.deleteById(pageId);
        // 删除缓存
        redisService.del(RedisPrefixConst.PAGE_COVER);
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public List<PageVO> listPages() {
        List<PageVO> pageVOList;
        // 查找缓存信息，不存在则从mysql读取，更新缓存
        Object pageList = redisService.get(RedisPrefixConst.PAGE_COVER);
        if (Objects.nonNull(pageList)) {
            pageVOList = JSON.parseObject(pageList.toString(), List.class);
        } else {
            pageVOList = BeanCopyUtils.copyList(pageMapper.selectList(null), PageVO.class);
            redisService.set(RedisPrefixConst.PAGE_COVER, JSON.toJSONString(pageVOList));
        }
        return pageVOList;
    }

}




