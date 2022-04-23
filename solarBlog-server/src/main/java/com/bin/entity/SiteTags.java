package com.bin.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * @Author: bin
 * @Description: TODO 网站导航标签分类
 * @Date: 2022/1/20
 **/
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@TableName("tb_website_tags")
public class SiteTags {

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 网站标签名称
     */
    private String tagsName;

    /**
     * 网站标签排序
     */
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
