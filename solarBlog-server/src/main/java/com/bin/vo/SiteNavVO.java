package com.bin.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * @Author: bin
 * @Description: TODO
 * @Date: 2022/1/21
 **/
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "导航网站")
public class SiteNavVO {
    /**
     * id
     */
    @ApiModelProperty(name = "id", value = "导航网站id", dataType = "Integer")
    private Integer id;

    /**
     * 网站名称
     */
    @ApiModelProperty(name = "webSiteName", value = "网站名称", dataType = "String", required = true)
    private String webSiteName;

    /**
     * 网站链接
     */
    @ApiModelProperty(name = "webSiteUrl", value = "网站链接", dataType = "String", required = true)
    private String webSiteUrl;

    /**
     * 网站图标链接
     */
    @ApiModelProperty(name = "webSiteIcon", value = "网站图标链接", dataType = "String", required = true)
    private String webSiteIcon;

    /**
     * 网站标签分类id
     */
    @ApiModelProperty(name = "tagsId", value = "网站标签分类id", dataType = "Integer", required = true)
    private Integer tagsId;

    /**
     * 网站描述
     */
    @ApiModelProperty(name = "webSiteDesc", value = "网站描述", dataType = "String", required = true)
    private String webSiteDesc;

    /**
     * 网站排序
     */
    @ApiModelProperty(name = "orderNum", value = "网站排序", dataType = "Integer", required = true)
    private Integer orderNum;

}
