package com.bin.strategy.impl;

import com.alibaba.fastjson.JSON;
import com.bin.config.WeiboMobileConfigProperties;
import com.bin.dto.SocialTokenDTO;
import com.bin.dto.SocialUserInfoDTO;
import com.bin.dto.WeiboTokenDTO;
import com.bin.dto.WeiboUserInfoDTO;
import com.bin.enums.LoginTypeEnum;
import com.bin.enums.StatusCodeEnum;
import com.bin.exception.BizException;
import com.bin.vo.WeiboLoginVO;
import com.bin.config.WeiboConfigProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import static com.bin.constant.SocialLoginConst.*;

/**
 * 微博登录策略实现
 *
 * @author bin
 * @date 2021/07/28
 */
@Service("weiboLoginStrategyImpl")
public class WeiboLoginStrategyImpl extends AbstractSocialLoginStrategyImpl {
    @Autowired
    private WeiboConfigProperties weiboConfigProperties;
    @Autowired
    private WeiboMobileConfigProperties weiboMobileConfigProperties;
    @Autowired
    private RestTemplate restTemplate;

    @Override
    public SocialTokenDTO getSocialToken(String data) {
        if (Objects.isNull(JSON.parseObject(data).get("code"))) {
            System.out.println("移动端");
            // 返回Token信息
            return SocialTokenDTO.builder()
                    .openId(JSON.parseObject(data).get("uid").toString())
                    .unionId(JSON.parseObject(data).get("uid").toString())
                    .accessToken(JSON.parseObject(data).get("accessToken").toString())
                    .platform(JSON.parseObject(data).get("platform").toString())
                    .loginType(LoginTypeEnum.WEIBO.getType())
                    .build();
        } else {
            System.out.println("PC端");
            WeiboLoginVO weiBoLoginVO = JSON.parseObject(data, WeiboLoginVO.class);
            // 获取微博token信息
            WeiboTokenDTO weiboToken = getWeiboToken(weiBoLoginVO);
            System.out.println("weiboToken=>"+weiboToken);
            // 返回token信息
            return SocialTokenDTO.builder()
                    .openId(weiboToken.getUid())
                    .unionId(weiboToken.getUid())
                    .accessToken(weiboToken.getAccess_token())
                    .loginType(LoginTypeEnum.WEIBO.getType())
                    .build();
        }
    }

    @Override
    public SocialUserInfoDTO getSocialUserInfo(SocialTokenDTO socialTokenDTO) {
        // 定义请求参数
        Map<String, String> data = new HashMap<>(2);
        data.put(UID, socialTokenDTO.getOpenId());
        data.put(ACCESS_TOKEN, socialTokenDTO.getAccessToken());
        if (Objects.nonNull(socialTokenDTO.getPlatform())) {
            // 获取移动端微博用户信息
            WeiboUserInfoDTO weiboUserInfoDTO = restTemplate.getForObject(weiboMobileConfigProperties.getUserInfoUrl(), WeiboUserInfoDTO.class, data);
            System.out.println("移动端weiboUserInfoDTO=>"+weiboUserInfoDTO);
            // 返回用户信息
            return SocialUserInfoDTO.builder()
                    .nickname(Objects.requireNonNull(weiboUserInfoDTO).getScreen_name())
                    .avatar(weiboUserInfoDTO.getAvatar_hd())
                    .build();
        } else {
            // 获取PC端微博用户信息
            WeiboUserInfoDTO weiboUserInfoDTO = restTemplate.getForObject(weiboConfigProperties.getUserInfoUrl(), WeiboUserInfoDTO.class, data);
            System.out.println("PC端weiboUserInfoDTO=>"+weiboUserInfoDTO);
            // 返回用户信息
            return SocialUserInfoDTO.builder()
                    .nickname(Objects.requireNonNull(weiboUserInfoDTO).getScreen_name())
                    .avatar(weiboUserInfoDTO.getAvatar_hd())
                    .build();
        }
    }

    /**
     * 获取微博token信息
     *
     * @param weiBoLoginVO 微博登录信息
     * @return {@link WeiboTokenDTO} 微博token
     */
    private WeiboTokenDTO getWeiboToken(WeiboLoginVO weiBoLoginVO) {
        // 根据code换取微博uid和accessToken
        MultiValueMap<String, String> weiboData = new LinkedMultiValueMap<>();
        // 定义微博token请求参数
        weiboData.add(CLIENT_ID, weiboConfigProperties.getAppId());
        weiboData.add(CLIENT_SECRET, weiboConfigProperties.getAppSecret());
        weiboData.add(GRANT_TYPE, weiboConfigProperties.getGrantType());
        weiboData.add(REDIRECT_URI, weiboConfigProperties.getRedirectUrl());
        weiboData.add(CODE, weiBoLoginVO.getCode());
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(weiboData, null);
        try {
            return restTemplate.exchange(weiboConfigProperties.getAccessTokenUrl(), HttpMethod.POST, requestEntity, WeiboTokenDTO.class).getBody();
        } catch (Exception e) {
            throw new BizException(StatusCodeEnum.WEIBO_LOGIN_ERROR);
        }
    }

}
