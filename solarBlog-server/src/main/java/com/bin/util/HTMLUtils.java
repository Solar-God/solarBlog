package com.bin.util;

/**
 * HTML工具类
 *
 * @author bin
 * @date 2021/07/27
 */
public class HTMLUtils {

    /**
     * 删除标签
     *
     * @param source 需要进行剔除HTML的文本
     * @return 过滤后的内容
     */
    public static String deleteTag(String source) {
        // 敏感词过滤
        source = SensitiveUtils.filter(source);
        // 保留图片标签
        source = source.replaceAll("(?!<(img).*?>)<.*?>", "")
                .replaceAll("(on[^\"]+)", "");
        return deleteHMTLTag(source);
    }

    /**
     * 删除标签
     *
     * @param source 文本
     * @return 过滤后的文本
     */
    private static String deleteHMTLTag(String source) {
        // 删除转义字符
        source = source.replaceAll("&.{2,6}?;", "");
        // 删除script标签
        source = source.replaceAll("<[\\s]*?script[^>]*?>[\\s\\S]*?<[\\s]*?\\/[\\s]*?script[\\s]*?>", "");
        // 删除style标签
        source = source.replaceAll("<[\\s]*?style[^>]*?>[\\s\\S]*?<[\\s]*?\\/[\\s]*?style[\\s]*?>", "");
        return source;
    }

}
