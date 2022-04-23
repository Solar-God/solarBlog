package com.bin.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * @Author: bin
 * @Description: TODO 登录日志实体类
 * @Date: 2022/4/20
 **/

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@TableName("tb_login_log")
public class LoginLog {
    /**
     * 登录日志主键id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * @Description: TODO 用户名称
     **/
    private String username;

    /**
     * @Description: TODO 用户昵称
     **/
    private String nickname;

    /**
     * @Description: TODO 登录方式
     **/
    private Integer loginType;

    /**
     * @Description: TODO 用户登录ip
     **/
    private String ipAddress;

    /**
     * @Description: TODO ip来源
     **/
    private String ipSource;

    /**
     * @Description: TODO 浏览器
     **/
    private String browser;

    /**
     * @Description: TODO 操作系统
     **/
    private String os;

    /**
     * @Description: TODO 登录状态(0代表成功，1代表失败)
     **/
    private Integer status;

    /**
     * @Description: TODO 登录信息
     **/
    private String message;

    /**
     * @Description: TODO 创建时间
     **/
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    /**
     * @Description: TODO 更新时间
     **/
    @TableField(fill = FieldFill.UPDATE)
    private LocalDateTime updateTime;
}
