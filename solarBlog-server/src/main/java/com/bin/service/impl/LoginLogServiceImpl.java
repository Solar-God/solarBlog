package com.bin.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.bin.dto.LoginLogDTO;
import com.bin.dto.OperationLogDTO;
import com.bin.entity.LoginLog;
import com.bin.entity.OperationLog;
import com.bin.mapper.LoginLogMapper;
import com.bin.service.LoginLogService;
import com.bin.util.BeanCopyUtils;
import com.bin.util.PageUtils;
import com.bin.vo.ConditionVO;
import com.bin.vo.PageResult;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: bin
 * @Description: TODO 登录日志实现类
 * @Date: 2022/4/20
 **/
@Service
public class LoginLogServiceImpl extends ServiceImpl<LoginLogMapper, LoginLog> implements LoginLogService {
    @Override
    public PageResult<LoginLogDTO> listLoginLogs(ConditionVO conditionVO) {
        Page<LoginLog> page = new Page<>(PageUtils.getCurrent(), PageUtils.getSize());
        // 查询日志列表
        Page<LoginLog> loginLogPage = this.page(page, new LambdaQueryWrapper<LoginLog>()
                .like(StringUtils.isNotBlank(conditionVO.getKeywords()), LoginLog::getLoginType, conditionVO.getKeywords())
                .or()
                .like(StringUtils.isNotBlank(conditionVO.getKeywords()), LoginLog::getNickname, conditionVO.getKeywords())
                .orderByDesc(LoginLog::getCreateTime));
        List<LoginLogDTO> loginLogDTOList = BeanCopyUtils.copyList(loginLogPage.getRecords(), LoginLogDTO.class);
        return new PageResult<>(loginLogDTOList, (int) loginLogPage.getTotal());
    }
}
