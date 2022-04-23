package com.bin.handler;

import com.alibaba.fastjson.JSON;
import com.bin.dto.LoginLogDTO;
import com.bin.entity.LoginLog;
import com.bin.mapper.LoginLogMapper;
import com.bin.mapper.UserAuthMapper;
import com.bin.dto.UserInfoDTO;
import com.bin.util.BeanCopyUtils;
import com.bin.util.UserUtils;
import com.bin.vo.Result;
import com.bin.entity.UserAuth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


/**
 * 登录成功处理
 *
 * @author bin
 * @date 2021/07/28
 */
@Component
public class AuthenticationSuccessHandlerImpl implements AuthenticationSuccessHandler {
    @Autowired
    private UserAuthMapper userAuthMapper;
    @Autowired
    private LoginLogMapper loginLogMapper;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException {
        // 返回登录信息
        UserInfoDTO userLoginDTO = BeanCopyUtils.copyObject(UserUtils.getLoginUser(), UserInfoDTO.class);
        httpServletResponse.setContentType("application/json;charset=UTF-8");
        httpServletResponse.getWriter().write(JSON.toJSONString(Result.ok(userLoginDTO)));
        // 更新用户ip，最近登录时间
        updateUserInfo();
        // 登录日志
        LoginLog loginLog = UserUtils.getLoginLog(UserUtils.getLoginUser());
        loginLog.setStatus(1);
        loginLog.setMessage("登录成功");
        loginLogMapper.insert(loginLog);
    }

    /**
     * 更新用户信息
     */
    @Async
    public void updateUserInfo() {
        UserAuth userAuth = UserAuth.builder()
                .id(UserUtils.getLoginUser().getId())
                .ipAddress(UserUtils.getLoginUser().getIpAddress())
                .ipSource(UserUtils.getLoginUser().getIpSource())
                .lastLoginTime(UserUtils.getLoginUser().getLastLoginTime())
                .build();
        userAuthMapper.updateById(userAuth);
    }

}
