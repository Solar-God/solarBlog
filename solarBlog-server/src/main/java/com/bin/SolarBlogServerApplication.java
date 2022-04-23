package com.bin;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.client.RestTemplate;

/**
 * 博客启动类
 *
 * @author bin
 * @date 2021/08/14
 */
@MapperScan("com.bin.mapper")
@SpringBootApplication
@EnableScheduling
public class SolarBlogServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(SolarBlogServerApplication.class, args);
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

}
