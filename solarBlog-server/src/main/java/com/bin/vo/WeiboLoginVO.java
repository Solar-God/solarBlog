package com.bin.vo;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

/**
 * 微博登录
 *
 * @author yezhqiu
 * @date 2021/06/14
 * @since 1.0.0
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WeiboLoginVO {

    /**
     * code(可选)
     */
    @ApiModelProperty(name = "code", value = "code", dataType = "String")
    private String code;

    /**
     * uid(可选)
     */
    @ApiModelProperty(name = "uid", value = "uid", dataType = "String")
    private String uid;

    /**
     * accessToken(可选)
     */
    @ApiModelProperty(name = "accessToken", value = "accessToken", dataType = "String")
    private String accessToken;

    /**
     * @Description: TODO 判断是PC端还是移动端
     **/
    @ApiModelProperty(name = "platform", value = "platform", dataType = "String")
    private String platform;

}
