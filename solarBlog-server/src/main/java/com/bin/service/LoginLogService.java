package com.bin.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.bin.dto.LoginLogDTO;
import com.bin.entity.LoginLog;
import com.bin.vo.ConditionVO;
import com.bin.vo.PageResult;

/**
 * @Author: bin
 * @Description: TODO
 * @Date: 2022/4/20
 **/
public interface LoginLogService extends IService<LoginLog> {

    /**
     * @Description: TODO 查询登录日志列表
     **/
    PageResult<LoginLogDTO> listLoginLogs(ConditionVO conditionVO);
}
