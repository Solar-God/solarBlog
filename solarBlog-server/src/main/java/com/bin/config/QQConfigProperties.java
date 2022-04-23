package com.bin.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * qq配置属性
 *
 * @author bin
 * @date 2021/06/14
 **/
@Data
@Configuration
@ConfigurationProperties(prefix = "qq")
public class QQConfigProperties {

    /**
     * QQ appId
     */
    private String appId;

    /**
     * 校验token地址
     */
    private String checkTokenUrl;

    /**
     * QQ用户信息地址
     */
    private String userInfoUrl;

    /**
     * @Description: TODO App唯一信息地址
     **/
    private String uniqueInfoUrl;

    /**
     * @Description: TODO qq小程序唯一信息地址
     **/
    private String qqUniqueInfoUrl;

}
