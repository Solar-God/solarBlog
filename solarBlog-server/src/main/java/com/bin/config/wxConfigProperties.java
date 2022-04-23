package com.bin.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * @Author: bin
 * @Description: TODO 微信配置属性
 * @Date: 2022/3/23
 **/
@Data
@Configuration
@ConfigurationProperties(prefix = "wx")
public class wxConfigProperties {

    /**
     * 微信 appId
     */
    private String appId;

    /**
     * 微信 secret
     */
    private String secret;

    /**
     * 微信用户信息地址
     */
    private String openidUrl;
}
