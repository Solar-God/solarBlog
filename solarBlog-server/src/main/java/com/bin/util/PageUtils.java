package com.bin.util;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import java.util.Objects;

/**
 * 分页工具类
 *
 * @author bin
 * @date 2021/07/18
 * @since 1.0.0
 **/
public class PageUtils {

    private static final ThreadLocal<Page<?>> PAGE_HOLDER = new ThreadLocal<>();

    public static void setCurrentPage(Page<?> page) {
        PAGE_HOLDER.set(page);
    }

    public static Page<?> getPage() {
        Page<?> page = PAGE_HOLDER.get();
        if (Objects.isNull(page)) {
            setCurrentPage(new Page<>());
        }
        return PAGE_HOLDER.get();
    }

    public static Long getCurrent() {
        return getPage().getCurrent();
    }

    public static Long getSize() {
        return getPage().getSize();
    }

    public static Long getLimitCurrent() {
        return (getCurrent() - 1) * getSize();
    }

    public static void remove() {
        PAGE_HOLDER.remove();
    }

}
