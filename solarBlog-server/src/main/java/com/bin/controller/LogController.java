package com.bin.controller;

import com.bin.dto.LoginLogDTO;
import com.bin.dto.OperationLogDTO;
import com.bin.service.LoginLogService;
import com.bin.vo.ConditionVO;
import com.bin.vo.PageResult;
import com.bin.vo.Result;
import com.bin.service.OperationLogService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 日志控制器
 *
 * @author bin
 * @date 2021/07/27
 */
@Api(tags = "日志模块")
@RestController
public class LogController {
    @Autowired
    private OperationLogService operationLogService;
    @Autowired
    private LoginLogService loginLogService;

    /**
     * 查看操作日志
     *
     * @param conditionVO 条件
     * @return {@link Result < OperationLogDTO >} 日志列表
     */
    @ApiOperation(value = "查看操作日志")
    @GetMapping("/admin/operation/logs")
    public Result<PageResult<OperationLogDTO>> listOperationLogs(ConditionVO conditionVO) {
        return Result.ok(operationLogService.listOperationLogs(conditionVO));
    }

    /**
     * 删除操作日志
     *
     * @param logIdList 日志id列表
     * @return {@link Result<>}
     */
    @ApiOperation(value = "删除操作日志")
    @DeleteMapping("/admin/operation/logs")
    public Result<?> deleteOperationLogs(@RequestBody List<Integer> logIdList) {
        operationLogService.removeByIds(logIdList);
        return Result.ok();
    }

    /**
     * @Description: TODO 查看登录日志
     **/
    @ApiOperation(value = "查看登录日志")
    @GetMapping("/admin/login/logs")
    public Result<PageResult<LoginLogDTO>> listLoginLogs(ConditionVO conditionVO) {
        return Result.ok(loginLogService.listLoginLogs(conditionVO));
    }

    /**
     * @Description: TODO 删除登录日志
     **/
    @ApiOperation(value = "删除登录日志")
    @DeleteMapping("/admin/login/logs")
    public Result<?> deleteLoginLogs(@RequestBody List<Integer> logIdList) {
        loginLogService.removeByIds(logIdList);
        return Result.ok();
    }

}
