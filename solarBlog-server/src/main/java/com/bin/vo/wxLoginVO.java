package com.bin.vo;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

/**
 * @Author: bin
 * @Description: TODO 微信登录
 * @Date: 2022/3/23
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class wxLoginVO {

    /**
     * 微信code(可选)
     */
    @ApiModelProperty(name = "code", value = "code", dataType = "String")
    private String code;

    /**
     * 微信用户昵称
     */
    @NotBlank(message = "nickName不能为空")
    @ApiModelProperty(name = "nickname", value = "nickname", required = true, dataType = "String")
    private String nickname;

    /**
     * 微信用户头像
     */
    @NotBlank(message = "avatar不能为空")
    @ApiModelProperty(name = "avatar", value = "avatar", required = true, dataType = "String")
    private String avatar;

    /**
     * App的accessToken(可选)暂时不用
     */
    @ApiModelProperty(name = "accessToken", value = "accessToken", dataType = "String")
    private String accessToken;

    /**
     * App的openId(可选)以后都用unionId当唯一标识
     */
    @ApiModelProperty(name = "openId", value = "openId", dataType = "String")
    private String openId;
}
