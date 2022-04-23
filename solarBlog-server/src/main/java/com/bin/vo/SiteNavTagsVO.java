package com.bin.vo;

import com.bin.entity.SiteNav;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * @Author: bin
 * @Description: TODO 前台导航网站和标签数据整合
 * @Date: 2022/1/21
 **/
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "导航网站和标签数据整合")
public class SiteNavTagsVO {
    /**
     * 网站标签名称
     */
    @ApiModelProperty(name = "tagsName", value = "导航网站标签名称", required = true, dataType = "String")
    private String tagsName;

    @ApiModelProperty(name = "siteNavList", value = "导航网站列表", required = true, dataType = "java.util.List")
    private List<SiteNav> siteNavList;
}
