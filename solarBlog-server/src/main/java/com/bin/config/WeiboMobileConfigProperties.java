package com.bin.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * 微博配置属性
 *
 * @author bin
 * @date 2021/06/14
 **/
@Data
@Configuration
@ConfigurationProperties(prefix = "weibo-mobile")
public class WeiboMobileConfigProperties {

    /**
     * 微博appId
     */
    private String appId;

    /**
     * 微博appSecret
     */
    private String appSecret;

    /**
     * 微博登录类型
     */
    private String grantType;

    /**
     * 微博回调域名
     */
    private String redirectUrl;

    /**
     * 微博访问令牌地址
     */
    private String accessTokenUrl;

    /**
     * 微博用户信息地址
     */
    private String userInfoUrl;

}
