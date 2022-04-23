package com.bin.service;

import com.bin.dto.UserAreaDTO;
import com.bin.dto.UserBackDTO;
import com.bin.dto.UserInfoDTO;
import com.bin.vo.*;
import com.bin.entity.UserAuth;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;


/**
 * 用户账号服务
 *
 * @author bin
 * @date 2021/07/29
 */
public interface UserAuthService extends IService<UserAuth> {

    /**
     * 发送邮箱验证码
     *
     * @param username 邮箱号
     */
    Result<?> sendCode(String username);

    /**
     * 获取用户区域分布
     *
     * @param conditionVO 条件签证官
     * @return {@link List< UserAreaDTO >} 用户区域分布
     */
    List<UserAreaDTO> listUserAreas(ConditionVO conditionVO);

    /**
     * 用户注册
     *
     * @param user 用户对象
     */
    void register(UserVO user);

    /**
     * qq登录
     *
     * @param qqLoginVO qq登录信息
     * @return 用户登录信息
     */
    UserInfoDTO qqLogin(QQLoginVO qqLoginVO);

    /**
     * 微信登录
     *
     * @param wxLoginVO 微信登录信息
     * @return 用户登录信息
     */
    UserInfoDTO wxLogin(wxLoginVO wxLoginVO);

    /**
     * 微博登录
     *
     * @param weiboLoginVO 微博登录信息
     * @return 用户登录信息
     */
    UserInfoDTO weiboLogin(WeiboLoginVO weiboLoginVO);

    /**
     * 修改密码
     *
     * @param user 用户对象
     */
    void updatePassword(UserVO user);

    /**
     * 修改管理员密码
     *
     * @param passwordVO 密码对象
     */
    void updateAdminPassword(PasswordVO passwordVO);

    /**
     * 查询后台用户列表
     *
     * @param condition 条件
     * @return 用户列表
     */
    PageResult<UserBackDTO> listUserBackDTO(ConditionVO condition);

}
