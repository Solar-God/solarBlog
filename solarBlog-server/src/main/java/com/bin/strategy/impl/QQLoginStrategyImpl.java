package com.bin.strategy.impl;

import com.alibaba.fastjson.JSON;
import com.bin.dto.*;
import com.bin.enums.LoginTypeEnum;
import com.bin.enums.StatusCodeEnum;
import com.bin.exception.BizException;
import com.bin.util.CommonUtils;
import com.bin.vo.QQLoginVO;
import com.bin.config.QQConfigProperties;
import com.bin.constant.SocialLoginConst;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import static com.bin.constant.SocialLoginConst.*;

/**
 * qq登录策略实现
 *
 * @author bin
 * @date 2021/07/28
 */
@Service("qqLoginStrategyImpl")
class QQLoginStrategyImpl extends AbstractSocialLoginStrategyImpl {
    @Autowired
    private QQConfigProperties qqConfigProperties;
    @Autowired
    private RestTemplate restTemplate;

    @Override
    public SocialTokenDTO getSocialToken(String data) {
        if (Objects.nonNull((JSON.parseObject(data).get("code")))) {
            QQLoginVO qqLoginVO = JSON.parseObject(data, QQLoginVO.class);
            // 定义请求参数
            Map<String, String> formData = new HashMap<>(1);
            formData.put(CODE, JSON.parseObject(data).getString("code"));
            String result = restTemplate.getForObject(qqConfigProperties.getQqUniqueInfoUrl(), String.class, formData);
            return SocialTokenDTO.builder()
                    .openId(JSON.parseObject(result).get("openid").toString())
                    .unionId(JSON.parseObject(result).get("unionid").toString())
                    .accessToken(JSON.parseObject(result).get("session_key").toString())
                    .platform(qqLoginVO.getPlatform())
                    .nickName(qqLoginVO.getNickname())
                    .avatar(qqLoginVO.getAvatar())
                    .loginType(LoginTypeEnum.QQ.getType())
                    .build();
        } else {
            QQLoginVO qqLoginVO = JSON.parseObject(data, QQLoginVO.class);
            // 校验QQ token信息
            checkQQToken(qqLoginVO);
            // 定义请求参数
            Map<String, String> formData = new HashMap<>(1);
            formData.put(ACCESS_TOKEN, JSON.parseObject(data).getString("accessToken"));
            String result = restTemplate.getForObject(qqConfigProperties.getUniqueInfoUrl(), String.class, formData);
            qqUnionInfoDTO qqUnionInfoDTO = JSON.parseObject(result.substring(9,result.length()-3), qqUnionInfoDTO.class);
            // 返回token信息
            return SocialTokenDTO.builder()
                    .openId(qqLoginVO.getOpenId())
                    .unionId(qqUnionInfoDTO.getUnionid())
                    .accessToken(qqLoginVO.getAccessToken())
                    .appId(qqUnionInfoDTO.getClient_id())
                    .platform(qqLoginVO.getPlatform())
                    .loginType(LoginTypeEnum.QQ.getType())
                    .build();
        }
    }

    @Override
    public SocialUserInfoDTO getSocialUserInfo(SocialTokenDTO socialTokenDTO) {
        if (socialTokenDTO.getPlatform().equals("MP-QQ")) {
            // 返回用户信息
            return SocialUserInfoDTO.builder()
                    .nickname(socialTokenDTO.getNickName())
                    .avatar(socialTokenDTO.getAvatar())
                    .build();
        } else {
            // 定义请求参数
            Map<String, String> formData = new HashMap<>(3);
            formData.put(QQ_OPEN_ID, socialTokenDTO.getOpenId());
            formData.put(ACCESS_TOKEN, socialTokenDTO.getAccessToken());
            formData.put(OAUTH_CONSUMER_KEY, socialTokenDTO.getAppId());
            // 获取QQ返回的用户信息
            QQUserInfoDTO qqUserInfoDTO = JSON.parseObject(restTemplate.getForObject(qqConfigProperties.getUserInfoUrl(), String.class, formData), QQUserInfoDTO.class);
            // 返回用户信息
            return SocialUserInfoDTO.builder()
                    .nickname(Objects.requireNonNull(qqUserInfoDTO).getNickname())
                    .avatar(qqUserInfoDTO.getFigureurl_qq_1())
                    .build();
        }
    }

    /**
     * 校验qq token信息
     *
     * @param qqLoginVO qq登录信息
     */
    private void checkQQToken(QQLoginVO qqLoginVO) {
        // 根据token获取qq openId信息
        Map<String, String> qqData = new HashMap<>(1);
        qqData.put(SocialLoginConst.ACCESS_TOKEN, qqLoginVO.getAccessToken());
        try {
            String result = restTemplate.getForObject(qqConfigProperties.getCheckTokenUrl(), String.class, qqData);
            QQTokenDTO qqTokenDTO = JSON.parseObject(CommonUtils.getBracketsContent(Objects.requireNonNull(result)), QQTokenDTO.class);
            // 判断openId是否一致
            if (!qqLoginVO.getOpenId().equals(qqTokenDTO.getOpenid())) {
                throw new BizException(StatusCodeEnum.QQ_LOGIN_ERROR);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new BizException(StatusCodeEnum.QQ_LOGIN_ERROR);
        }
    }

}
