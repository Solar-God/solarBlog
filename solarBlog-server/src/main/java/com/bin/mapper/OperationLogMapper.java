package com.bin.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.bin.entity.OperationLog;
import org.springframework.stereotype.Repository;


/**
 * 操作日志
 *
 * @author bin
 * @date 2022/04/10
 */
@Repository
public interface OperationLogMapper extends BaseMapper<OperationLog> {
}
