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
@ApiModel(description = "导航网站标签")
public class SiteTagsVO {

    /**
     * id
     */
    @ApiModelProperty(name = "id", value = "导航网站id", dataType = "Integer")
    private Integer id;

    /**
     * 网站标签名称
     */
    @ApiModelProperty(name = "tagsName", value = "导航网站标签名称", required = true, dataType = "String")
    private String tagsName;

    /**
     * 网站标签名称
     */
    @ApiModelProperty(name = "orderNum", value = "导航网站标签排序", required = true, dataType = "Integer")
    private Integer orderNum;

}
