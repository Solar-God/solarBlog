package com.bin.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.bin.dto.SiteNavDTO;
import com.bin.entity.SiteNav;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @Author: bin
 * @Description: TODO 网站导航接口
 * @Date: 2022/1/20
 **/
@Repository
public interface SiteNavMapper extends BaseMapper<SiteNav> {

    /**
     * @Description: TODO 查询网站导航列表
     **/
    List<SiteNavDTO> inquiryAdminSiteNav(Map<String,Object> map);

    /**
     * @Description: TODO 新增网站导航
     **/
    Integer saveSiteNav(Map<String,Object> map);

    /**
     * @Description: TODO 修改网站导航
     **/
    Integer updateSiteNav(Map<String,Object> map);

    /**
     * @Description: TODO 查询网站导航列表总数
     **/
    Integer inquiryAdminSiteNavCount(Map<String,Object> map);
}
