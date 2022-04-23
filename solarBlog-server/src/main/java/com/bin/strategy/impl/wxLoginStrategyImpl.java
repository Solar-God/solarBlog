package com.bin.strategy.impl;

import com.alibaba.fastjson.JSON;
import com.bin.config.wxConfigProperties;
import com.bin.dto.SocialTokenDTO;
import com.bin.dto.SocialUserInfoDTO;
import com.bin.enums.LoginTypeEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import static com.bin.constant.SocialLoginConst.*;

/**
 * @Author: bin
 * @Description: TODO
 * @Date: 2022/3/23
 **/
@Service("wxLoginStrategyImpl")
public class wxLoginStrategyImpl extends AbstractSocialLoginStrategyImpl{
    @Autowired
    private wxConfigProperties wxConfigProperties;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public SocialTokenDTO getSocialToken(String data) {
        // 定义请求参数(微信小程序)
        Map<String,String> formData = new HashMap<>(3);
        formData.put(WX_APP_ID,wxConfigProperties.getAppId());
        formData.put(WX_SECRET,wxConfigProperties.getSecret());
        formData.put(CODE,JSON.parseObject(data).get("code").toString());
        String result = restTemplate.getForObject(wxConfigProperties.getOpenidUrl(), String.class, formData);
        // 返回Token信息
        return SocialTokenDTO.builder()
                .openId(JSON.parseObject(result).get("openid").toString())
                .unionId(JSON.parseObject(result).get("openid").toString())
                .accessToken(JSON.parseObject(result).get("session_key").toString())
                .loginType(LoginTypeEnum.WX.getType())
                .nickName(JSON.parseObject(data).get("nickname").toString())
                .avatar(JSON.parseObject(data).get("avatar").toString())
                .build();
    }

    @Override
    public SocialUserInfoDTO getSocialUserInfo(SocialTokenDTO socialTokenDTO) {
        // 返回用户信息
        return SocialUserInfoDTO.builder()
                .nickname(socialTokenDTO.getNickName())
                .avatar(socialTokenDTO.getAvatar())
                .build();
    }
}
