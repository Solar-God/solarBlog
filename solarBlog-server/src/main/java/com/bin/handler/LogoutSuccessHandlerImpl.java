package com.bin.handler;

import com.alibaba.fastjson.JSON;
import com.bin.dto.LoginLogDTO;
import com.bin.dto.UserDetailDTO;
import com.bin.entity.LoginLog;
import com.bin.mapper.LoginLogMapper;
import com.bin.util.BeanCopyUtils;
import com.bin.util.UserUtils;
import com.bin.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 注销处理
 *
 * @author bin
 * @date 2021/07/28
 */
@Component
public class LogoutSuccessHandlerImpl implements LogoutSuccessHandler {
    @Autowired
    private LoginLogMapper loginLogMapper;

    @Override
    public void onLogoutSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException {
        httpServletResponse.setContentType("application/json;charset=UTF-8");
        httpServletResponse.getWriter().write(JSON.toJSONString(Result.ok()));
        // 登录日志
        UserDetailDTO userDetailDTO =(UserDetailDTO) authentication.getPrincipal();
        LoginLog loginLog = UserUtils.getLoginLog(userDetailDTO);
        loginLog.setStatus(1);
        loginLog.setMessage("退出成功");
        loginLogMapper.insert(loginLog);
    }

}
