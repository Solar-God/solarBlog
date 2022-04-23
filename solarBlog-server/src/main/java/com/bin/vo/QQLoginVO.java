package com.bin.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

/**
 * QQ登录
 *
 * @author yezhqiu
 * @date 2021/06/14
 * @since 1.0.0
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ApiModel(description = "qq登录信息")
public class QQLoginVO {

    /**
     * openId
     */
    @ApiModelProperty(name = "openId", value = "qq openId", dataType = "String")
    private String openId;

    /**
     * accessToken
     */
    @ApiModelProperty(name = "accessToken", value = "qq accessToken", dataType = "String")
    private String accessToken;

    /**
     * @Description: TODO 判断是PC端还是移动端
     **/
    @ApiModelProperty(name = "platform", value = "platform", dataType = "String")
    private String platform;

    /**
     * @Description: TODO qq小程序的code
     **/
    @ApiModelProperty(name = "code", value = "code", dataType = "String")
    private String code;

    /**
     * qq用户昵称
     */
    @ApiModelProperty(name = "nickname", value = "nickname", dataType = "String")
    private String nickname;

    /**
     * qq用户头像
     */
    @ApiModelProperty(name = "avatar", value = "avatar", dataType = "String")
    private String avatar;

}
