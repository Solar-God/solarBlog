package com.bin.strategy;

import com.bin.entity.Photo;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * 上传策略
 *
 * @author bin
 * @date 2021/07/28
 */
public interface UploadStrategy {

    /**
     * 上传文件
     *
     * @param file 文件
     * @param path 上传路径
     * @return {@link String} 文件地址
     */
    String uploadFile(MultipartFile file, String path);

    /**
     * @Author: bin
     * @Description: TODO 删除文件
     * @Date: 2022/4/15
     **/
    void deleteFile(List<Photo> photoList);

}
