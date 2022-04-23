package com.bin.vo;

import com.bin.enums.StatusCodeEnum;
import lombok.Data;

/**
 * 接口返回类
 *
 * @author bin
 * @date 2021/08/10
 */
@Data
public class Result<T> {

    /**
     * 返回状态
     */
    private Boolean flag;
    /**
     * 返回码
     */
    private Integer code;
    /**
     * 返回信息
     */
    private String message;
    /**
     * 返回数据
     */
    private T data;

    public static <T> Result<T> ok() {
        return restResult(true, null, StatusCodeEnum.SUCCESS.getCode(), StatusCodeEnum.SUCCESS.getDesc());
    }

    public static <T> Result<T> ok(T data) {
        return restResult(true, data, StatusCodeEnum.SUCCESS.getCode(), StatusCodeEnum.SUCCESS.getDesc());
    }

    public static <T> Result<T> ok(T data, String message) {
        return restResult(true, data, StatusCodeEnum.SUCCESS.getCode(), message);
    }

    public static <T> Result<T> fail() {
        return restResult(false, null, StatusCodeEnum.FAIL.getCode(), StatusCodeEnum.FAIL.getDesc());
    }

    public static <T> Result<T> fail(StatusCodeEnum statusCodeEnum) {
        return restResult(false, null, statusCodeEnum.getCode(), statusCodeEnum.getDesc());
    }

    public static <T> Result<T> fail(String message) {
        return restResult(false, message);
    }

    public static <T> Result<T> fail(T data) {
        return restResult(false, data, StatusCodeEnum.FAIL.getCode(), StatusCodeEnum.FAIL.getDesc());
    }

    public static <T> Result<T> fail(T data, String message) {
        return restResult(false, data, StatusCodeEnum.FAIL.getCode(), message);
    }

    public static <T> Result<T> fail(Integer code, String message) {
        return restResult(false, null, code, message);
    }

    private static <T> Result<T> restResult(Boolean flag, String message) {
        Result<T> apiResult = new Result<>();
        apiResult.setFlag(flag);
        apiResult.setCode(flag ? StatusCodeEnum.SUCCESS.getCode() : StatusCodeEnum.FAIL.getCode());
        apiResult.setMessage(message);
        return apiResult;
    }

    private static <T> Result<T> restResult(Boolean flag, T data, Integer code, String message) {
        Result<T> apiResult = new Result<>();
        apiResult.setFlag(flag);
        apiResult.setData(data);
        apiResult.setCode(code);
        apiResult.setMessage(message);
        return apiResult;
    }

}
