package com.bin.service.impl;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.bin.dto.SiteNavDTO;
import com.bin.entity.SiteNav;
import com.bin.entity.SiteTags;
import com.bin.mapper.SiteNavMapper;
import com.bin.mapper.SiteTagsMapper;
import com.bin.service.SiteNavService;
import com.bin.util.PageUtils;
import com.bin.vo.SiteNavTagsVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/**
 * @Author: bin
 * @Description: TODO
 * @Date: 2022/1/20
 **/
@Service
public class SiteNavServiceImpl extends ServiceImpl<SiteNavMapper, SiteNav> implements SiteNavService {

    @Autowired
    SiteNavMapper siteNavMapper;

    @Autowired
    SiteTagsMapper siteTagsMapper;

    /**
     * @Description: TODO 查询后台管理的网站导航列表分页数据
     **/
    @Override
    public String getAdminSiteNavList(Map<String, Object> map) {
        Map<String,Object> reqMap = new HashMap<>();
        try {
            // 查询导航网站列表总数
            Integer count = siteNavMapper.inquiryAdminSiteNavCount(map);
            map.put("current",PageUtils.getLimitCurrent());
            map.put("size",PageUtils.getSize());
            // 查询导航网站列表
            List<SiteNavDTO> siteNavDTOList = siteNavMapper.inquiryAdminSiteNav(map);
            reqMap.put("code",200);
            reqMap.put("data",siteNavDTOList);
            reqMap.put("count",count);
        } catch (Exception e) {
            System.out.println("查询失败=>"+e);
            return null;
        }
        return JSON.toJSONString(reqMap);
    }

    /**
     * @Description: TODO 保存或编辑网站导航
     **/
    @Override
    public String saveOrUpdateSiteNav(Map<String,Object> map) {
        Map<String,Object> reqMap = new HashMap<>();
        try {
            if (map.get("submitType").equals("create")) {
                if (siteNavMapper.saveSiteNav(map).equals(1)) {
                    reqMap.put("code",200);
                    reqMap.put("message","新增网站成功！");
                } else {
                    reqMap.put("code",500);
                    reqMap.put("message","新增网站失败");
                }
            }
            if (map.get("submitType").equals("update")) {
                if (siteNavMapper.updateSiteNav(map).equals(1)) {
                    reqMap.put("code",200);
                    reqMap.put("message","修改网站成功！");
                } else {
                    reqMap.put("code",500);
                    reqMap.put("message","修改网站失败");
                }
            }
            return JSON.toJSONString(reqMap);
        } catch (Exception e) {
            System.out.println("操作失败=>"+e);
            return null;
        }
    }


    /**
     * @Description: TODO 查询后台管理的网站导航标签列表分页数据
     **/
    @Override
    public String getAdminSiteTagsList(Map<String, Object> map) {
        Map<String,Object> reqMap = new HashMap<>();
        try {
            // 查询导航网站标签列表总数
            Integer count = siteTagsMapper.selectCount(null);
            // 查询导航网站标签列表
            List<SiteTags> siteTagsList = siteTagsMapper.selectList(new LambdaQueryWrapper<SiteTags>()
                    .orderByAsc(SiteTags::getOrderNum));
            reqMap.put("code",200);
            reqMap.put("data",siteTagsList);
            reqMap.put("count",count);
        }catch (Exception e) {
            System.out.println("查询失败=>"+e);
            return null;
        }
        return JSON.toJSONString(reqMap);
    }

    /**
     * @Description: TODO 获取前台网站导航分类数据
     **/
    @Override
    public String getSiteNavList() {
        Map<String,Object> reqMap = new HashMap<>();
        try {
            List<SiteTags> siteTagsList = siteTagsMapper.selectList(new LambdaQueryWrapper<SiteTags>()
                    .orderByAsc(SiteTags::getOrderNum));
            List<SiteNavTagsVO> siteNavTagsVOList = new LinkedList<>();
            for (SiteTags siteTags:siteTagsList) {
                SiteNavTagsVO siteNavTagsVO = new SiteNavTagsVO();
                siteNavTagsVO.setTagsName(siteTags.getTagsName());
                siteNavTagsVO.setSiteNavList(siteNavMapper.selectList(new LambdaQueryWrapper<SiteNav>()
                        .eq(SiteNav::getTagsId,siteTags.getId()).orderByAsc(SiteNav::getOrderNum)
                        ));
                if (!siteNavTagsVO.getSiteNavList().isEmpty()) {
                    siteNavTagsVOList.add(siteNavTagsVO);
                }
            }
            reqMap.put("code",200);
            reqMap.put("data",siteNavTagsVOList);
        } catch (Exception e) {
            System.out.println("操作获取前台导航网站分类数据失败=>"+e);
            return null;
        }
        return JSON.toJSONString(reqMap);
    }


}
