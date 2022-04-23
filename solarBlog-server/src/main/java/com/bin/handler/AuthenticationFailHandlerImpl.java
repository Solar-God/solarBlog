package com.bin.handler;

import com.alibaba.fastjson.JSON;
import com.bin.entity.LoginLog;
import com.bin.mapper.LoginLogMapper;
import com.bin.util.IpUtils;
import com.bin.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.event.AuthenticationFailureBadCredentialsEvent;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 登录失败处理
 *
 * @author bin
 * @date 2021/07/28
 */
@Component
public class AuthenticationFailHandlerImpl extends UsernamePasswordAuthenticationFilter implements AuthenticationFailureHandler {
    @Autowired
    private LoginLogMapper loginLogMapper;

    @Override
    public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException {
        httpServletResponse.setContentType("application/json;charset=UTF-8");
        httpServletResponse.getWriter().write(JSON.toJSONString(Result.fail(e.getMessage())));
        // 登录日志
        String username = obtainUsername(httpServletRequest);
        LoginLog loginLog = new LoginLog();
        loginLog.setUsername(username);
        loginLog.setNickname(username);
        String ipAddress = IpUtils.getIpAddress(httpServletRequest);
        loginLog.setIpAddress(ipAddress);
        loginLog.setIpSource(IpUtils.getIpSource(ipAddress));
        loginLog.setStatus(0);
        loginLog.setLoginType(1);
        loginLog.setMessage(e.getMessage());
        loginLogMapper.insert(loginLog);
    }


    /**
     * @Description: TODO 定义UsernamePasswordAuthenticationFilter继承
     **/
    @Autowired
    @Override
    public void setAuthenticationManager(AuthenticationManager authenticationManager) {
        super.setAuthenticationManager(authenticationManager);
    }
}
