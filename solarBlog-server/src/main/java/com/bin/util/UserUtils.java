package com.bin.util;

import com.bin.dto.UserDetailDTO;
import com.bin.entity.LoginLog;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Objects;


/**
 * 用户工具类
 *
 * @author bin
 * @date 2021/08/10
 */
@Component
public class UserUtils {

    /**
     * 获取当前登录用户
     *
     * @return 用户登录信息
     */
    public static UserDetailDTO getLoginUser() {
        return (UserDetailDTO) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    /**
     * @Description: TODO 返回用户登录日志
     **/
    public static LoginLog getLoginLog(UserDetailDTO userDetailDTO) {
        return BeanCopyUtils.copyObject(userDetailDTO, LoginLog.class);
    }

}
