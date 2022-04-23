package com.bin.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 网站导航
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@TableName("tb_website_nav")
public class SiteNav {

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 网站名称
     */
    @TableField(value = "website_name")
    private String webSiteName;

    /**
     * 网站链接
     */
    @TableField(value = "website_url")
    private String webSiteUrl;

    /**
     * 网站图标链接
     */
    @TableField(value = "website_icon")
    private String webSiteIcon;

    /**
     * 网站标签分类id
     */
    @TableField(value = "tags_id")
    private Integer tagsId;

    /**
     * 网站描述
     */
    @TableField(value = "website_desc")
    private String webSiteDesc;

    /**
     * 网站排序
     */
    @TableField(value = "order_num")
    private Integer orderNum;

    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    /**
     * 修改时间
     */
    @TableField(fill = FieldFill.UPDATE)
    private LocalDateTime updateTime;
}
