package com.bin.service;


import com.baomidou.mybatisplus.extension.service.IService;
import com.bin.dto.SiteNavDTO;
import com.bin.entity.SiteNav;

import java.util.Map;

/**
 * @Author: bin
 * @Description: TODO 网站导航service
 * @Date: 2022/1/20
 **/
public interface SiteNavService extends IService<SiteNav> {

    /**
     * @Description: TODO 获取后台管理网站导航列表
     **/
    String getAdminSiteNavList(Map<String,Object> map);

    /**
     * @Description: TODO 保存或编辑网站导航
     **/
    String saveOrUpdateSiteNav(Map<String,Object> map);

    /**
     * @Description: TODO 查询后台管理的网站导航标签列表分页数据
     **/
    String getAdminSiteTagsList(Map<String,Object> map);

    /**
     * @Description: TODO 获取前台网站导航分类数据
     **/
    String getSiteNavList();
}
