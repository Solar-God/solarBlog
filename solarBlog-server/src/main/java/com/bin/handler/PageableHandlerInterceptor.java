package com.bin.handler;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.bin.constant.CommonConst;
import com.bin.util.PageUtils;
import com.google.common.base.Strings;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.Optional;

/**
 * 分页拦截器
 *
 * @author bin
 * @date 2021/07/18
 **/
public class PageableHandlerInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String currentPage = request.getParameter(CommonConst.CURRENT);
        String pageSize = Optional.ofNullable(request.getParameter(CommonConst.SIZE)).orElse(CommonConst.DEFAULT_SIZE);
        if (!Strings.isNullOrEmpty(currentPage)) {
            PageUtils.setCurrentPage(new Page<>(Long.parseLong(currentPage), Long.parseLong(pageSize)));
        }
        return true;
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        PageUtils.remove();
    }

}