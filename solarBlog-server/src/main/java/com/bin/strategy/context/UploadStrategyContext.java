package com.bin.strategy.context;

import com.bin.entity.Photo;
import com.bin.enums.UploadModeEnum;
import com.bin.strategy.UploadStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;


/**
 * 上传策略上下文
 *
 * @author bin
 * @date 2021/07/28
 */
@Service
public class UploadStrategyContext {
    /**
     * 上传模式
     */
    @Value("${upload.mode}")
    private String uploadMode;

    @Autowired
    private Map<String, UploadStrategy> uploadStrategyMap;

    /**
     * 上传文件
     *
     * @param file 文件
     * @param path 路径
     * @return {@link String} 文件地址
     */
    public String executeUploadStrategy(MultipartFile file, String path) {
        return uploadStrategyMap.get(UploadModeEnum.getStrategy(uploadMode)).uploadFile(file, path);
    }

    /**
     * @Author: bin
     * @Description: TODO 删除文件
     * @Date: 2022/4/15
     **/
    public void deleteFile(List<Photo> photoList) {
        uploadStrategyMap.get(UploadModeEnum.getStrategy(uploadMode)).deleteFile(photoList);
    }

}
