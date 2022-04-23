package com.bin.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: bin
 * @Description: TODO
 * @Date: 2022/4/8
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class qqUnionInfoDTO {
    /**
     * YOUR_APPID
     */
    private String client_id;

    /**
     * YOUR_OPENID
     */
    private String openid;

    /**
     * YOUR_UNIONID
     */
    private String unionid;
}
