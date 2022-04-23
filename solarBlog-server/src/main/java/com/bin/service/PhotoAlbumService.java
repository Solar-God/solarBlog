package com.bin.service;

import com.bin.dto.PhotoAlbumBackDTO;
import com.bin.dto.PhotoAlbumDTO;
import com.bin.vo.ConditionVO;
import com.bin.vo.PageResult;
import com.bin.vo.PhotoAlbumVO;
import com.bin.entity.PhotoAlbum;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * 相册服务
 *
 * @author bin
 * @date 2021/08/04
 */
public interface PhotoAlbumService extends IService<PhotoAlbum> {

    /**
     * 保存或更新相册
     *
     * @param photoAlbumVO 相册信息
     */
    void saveOrUpdatePhotoAlbum(PhotoAlbumVO photoAlbumVO);

    /**
     * 查看后台相册列表
     *
     * @param condition 条件
     * @return {@link PageResult < PhotoAlbumBackDTO >} 相册列表
     */
    PageResult<PhotoAlbumBackDTO> listPhotoAlbumBacks(ConditionVO condition);

    /**
     * 获取后台相册列表信息
     *
     * @return {@link List< PhotoAlbumDTO >} 相册列表信息
     */
    List<PhotoAlbumDTO> listPhotoAlbumBackInfos();

    /**
     * 根据id获取相册信息
     *
     * @param albumId 相册id
     * @return {@link PhotoAlbumBackDTO} 相册信息
     */
    PhotoAlbumBackDTO getPhotoAlbumBackById(Integer albumId);

    /**
     * 根据id删除相册
     *
     * @param albumId 相册id
     */
    void deletePhotoAlbumById(Integer albumId);

    /**
     * 获取相册列表
     *
     * @return {@link List<PhotoAlbumDTO>}相册列表
     */
    List<PhotoAlbumDTO> listPhotoAlbums();

}
