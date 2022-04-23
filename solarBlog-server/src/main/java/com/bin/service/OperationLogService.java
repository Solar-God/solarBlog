package com.bin.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.bin.dto.OperationLogDTO;
import com.bin.vo.ConditionVO;
import com.bin.vo.PageResult;
import com.bin.entity.OperationLog;

/**
 * 操作日志服务
 *
 * @author bin
 * @date 2021/07/29
 */
public interface OperationLogService extends IService<OperationLog> {

    /**
     * 查询日志列表
     *
     * @param conditionVO 条件
     * @return 日志列表
     */
    PageResult<OperationLogDTO> listOperationLogs(ConditionVO conditionVO);

}
