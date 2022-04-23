package com.bin.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 社交登录token
 *
 * @author bin
 * @date 2021/07/28
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SocialTokenDTO {

    /**
     * 开放id
     */
    private String openId;

    /**
     * 用户唯一标识id
     */
    private String unionId;

    /**
     * 访问令牌
     */
    private String accessToken;

    /**
     * 登录类型
     */
    private Integer loginType;

    /**
     * @Description: TODO 用户昵称
     **/
    private String nickName;

    /**
     * @Description: TODO 用户头像
     **/
    private String avatar;

    /**
     * @Description: TODO 判断是PC端还是移动端
     **/
    private String platform;

    /**
     * @Description: TODO 重新请求的appId
     **/
    private String appId;

}
