package com.bin.strategy.impl;

import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.internal.OSSUtils;
import com.aliyun.oss.model.DeleteObjectsRequest;
import com.aliyun.oss.model.DeleteObjectsResult;
import com.bin.config.OssConfigProperties;
import com.bin.entity.Photo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * oss上传策略
 *
 * @author bin
 * @date 2021/07/28
 */
@Service("ossUploadStrategyImpl")
public class OssUploadStrategyImpl extends AbstractUploadStrategyImpl {
    @Autowired
    private OssConfigProperties ossConfigProperties;

    @Override
    public Boolean exists(String filePath) {
        return getOssClient().doesObjectExist(ossConfigProperties.getBucketName(), filePath);
    }

    @Override
    public void upload(String path, String fileName, InputStream inputStream) {
        getOssClient().putObject(ossConfigProperties.getBucketName(), path + fileName, inputStream);
    }

    @Override
    public String getFileAccessUrl(String filePath) {
        return ossConfigProperties.getUrl() + filePath;
    }

    @Override
    public void deleteFile(List<Photo> photoList) {
        List<String> filePathList = new ArrayList<>();
        for (Photo photo:photoList) {
            String filePath = photo.getPhotoSrc().replace(ossConfigProperties.getUrl(),"");
            filePathList.add(filePath);
        }
        DeleteObjectsResult deleteObjectsResult = getOssClient()
                .deleteObjects(new DeleteObjectsRequest(ossConfigProperties
                        .getBucketName())
                        .withKeys(filePathList));
        List<String> deletedObjects = deleteObjectsResult.getDeletedObjects();
        System.out.println("deletedObjects=>"+deletedObjects);
    }

    /**
     * 获取ossClient
     *
     * @return {@link OSS} ossClient
     */
    private OSS getOssClient() {
        return new OSSClientBuilder().build(ossConfigProperties.getEndpoint(), ossConfigProperties.getAccessKeyId(), ossConfigProperties.getAccessKeySecret());
    }

}
