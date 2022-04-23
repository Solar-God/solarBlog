package com.bin.controller;

import com.bin.dto.PhotoBackDTO;
import com.bin.dto.PhotoDTO;
import com.bin.entity.Photo;
import com.bin.strategy.context.UploadStrategyContext;
import com.bin.vo.*;
import com.bin.annotation.OptLog;
import com.bin.service.PhotoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

import static com.bin.constant.OptTypeConst.*;

/**
 * 照片控制器
 *
 * @author bin
 * @date 2022/04/05
 */
@Api(tags = "照片模块")
@RestController
public class PhotoController {
    @Autowired
    private PhotoService photoService;
    @Autowired
    private UploadStrategyContext uploadStrategyContext;

    /**
     * 获取后台照片列表
     *
     * @param condition 条件
     * @return {@link Result < PhotoBackDTO >} 照片列表
     */
    @ApiOperation(value = "根据相册id获取照片列表")
    @GetMapping("/admin/photos")
    public Result<PageResult<PhotoBackDTO>> listPhotos(ConditionVO condition) {
        return Result.ok(photoService.listPhotos(condition));
    }

    /**
     * 更新照片信息
     *
     * @param photoInfoVO 照片信息
     * @return {@link Result}
     */
    @OptLog(optType = UPDATE)
    @ApiOperation(value = "更新照片信息")
    @PutMapping("/admin/photos")
    public Result<?> updatePhoto(@Valid @RequestBody PhotoInfoVO photoInfoVO) {
        photoService.updatePhoto(photoInfoVO);
        return Result.ok();
    }

    /**
     * 保存照片
     *
     * @param photoVO 照片
     * @return {@link Result<>}
     */
    @OptLog(optType = SAVE)
    @ApiOperation(value = "保存照片")
    @PostMapping("/admin/photos")
    public Result<?> savePhotos(@Valid @RequestBody PhotoVO photoVO) {
        photoService.savePhotos(photoVO);
        return Result.ok();
    }

    /**
     * 移动照片相册
     *
     * @param photoVO 照片信息
     * @return {@link Result<>}
     */
    @OptLog(optType = UPDATE)
    @ApiOperation(value = "移动照片相册")
    @PutMapping("/admin/photos/album")
    public Result<?> updatePhotosAlbum(@Valid @RequestBody PhotoVO photoVO) {
        photoService.updatePhotosAlbum(photoVO);
        return Result.ok();
    }

    /**
     * 更新照片删除状态
     *
     * @param deleteVO 删除信息
     * @return {@link Result<>}
     */
    @OptLog(optType = UPDATE)
    @ApiOperation(value = "更新照片删除状态")
    @PutMapping("/admin/photos/delete")
    public Result<?> updatePhotoDelete(@Valid @RequestBody DeleteVO deleteVO) {
        photoService.updatePhotoDelete(deleteVO);
        return Result.ok();
    }

    /**
     * 彻底删除照片
     *
     * @param photoIdList 照片id列表
     * @return {@link Result<>}
     */
    @OptLog(optType = REMOVE)
    @ApiOperation(value = "彻底删除照片")
    @DeleteMapping("/admin/photos")
    public Result<?> deletePhotos(@RequestBody List<Integer> photoIdList) {
        photoService.deletePhotos(photoIdList);
        return Result.ok();
    }

    /**
     * @Description: TODO 移除未保存的图片
     **/
    @OptLog(optType = REMOVE)
    @ApiOperation(value = "移除未保存的图片")
    @DeleteMapping("/admin/removePhoto")
    public Result<?> removePhoto(@RequestBody Photo photo) {
        List<Photo> photoList = new ArrayList<>();
        photoList.add(photo);
        uploadStrategyContext.deleteFile(photoList);
        return Result.ok();
    }

    /**
     * 根据相册id查看照片列表
     *
     * @param albumId 相册id
     * @return {@link Result<PhotoDTO>} 照片列表
     */
    @ApiOperation(value = "根据相册id查看照片列表")
    @GetMapping("/albums/{albumId}/photos")
    public Result<PhotoDTO> listPhotosByAlbumId(@PathVariable("albumId") Integer albumId) {
        return Result.ok(photoService.listPhotosByAlbumId(albumId));
    }

}
