package com.bin.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.bin.constant.CommonConst;
import com.bin.mapper.PhotoAlbumMapper;
import com.bin.mapper.PhotoMapper;
import com.bin.dto.PhotoAlbumBackDTO;
import com.bin.dto.PhotoAlbumDTO;
import com.bin.enums.PhotoAlbumStatusEnum;
import com.bin.exception.BizException;
import com.bin.util.BeanCopyUtils;
import com.bin.util.PageUtils;
import com.bin.vo.ConditionVO;
import com.bin.vo.PageResult;
import com.bin.vo.PhotoAlbumVO;
import com.bin.entity.Photo;
import com.bin.entity.PhotoAlbum;
import com.bin.service.PhotoAlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;


/**
 * 相册服务
 *
 * @author bin
 * @date 2021/08/04
 */
@Service
public class PhotoAlbumServiceImpl extends ServiceImpl<PhotoAlbumMapper, PhotoAlbum> implements PhotoAlbumService {
    @Autowired
    private PhotoAlbumMapper photoAlbumMapper;
    @Autowired
    private PhotoMapper photoMapper;

    @Transactional(rollbackFor = Exception.class)
    @Override
    public void saveOrUpdatePhotoAlbum(PhotoAlbumVO photoAlbumVO) {
        // 查询相册名是否存在
        PhotoAlbum album = photoAlbumMapper.selectOne(new LambdaQueryWrapper<PhotoAlbum>()
                .select(PhotoAlbum::getId)
                .eq(PhotoAlbum::getAlbumName, photoAlbumVO.getAlbumName()));
        if (Objects.nonNull(album) && !album.getId().equals(photoAlbumVO.getId())) {
            throw new BizException("相册名已存在");
        }
        PhotoAlbum photoAlbum = BeanCopyUtils.copyObject(photoAlbumVO, PhotoAlbum.class);
        this.saveOrUpdate(photoAlbum);
    }

    @Override
    public PageResult<PhotoAlbumBackDTO> listPhotoAlbumBacks(ConditionVO condition) {
        // 查询相册数量
        Integer count = photoAlbumMapper.selectCount(new LambdaQueryWrapper<PhotoAlbum>()
                .like(StringUtils.isNotBlank(condition.getKeywords()), PhotoAlbum::getAlbumName, condition.getKeywords())
                .eq(PhotoAlbum::getIsDelete, CommonConst.FALSE));
        if (count == 0) {
            return new PageResult<>();
        }
        // 查询相册信息
        List<PhotoAlbumBackDTO> photoAlbumBackList = photoAlbumMapper.listPhotoAlbumBacks(PageUtils.getLimitCurrent(), PageUtils.getSize(), condition);
        return new PageResult<>(photoAlbumBackList, count);
    }

    @Override
    public List<PhotoAlbumDTO> listPhotoAlbumBackInfos() {
        List<PhotoAlbum> photoAlbumList = photoAlbumMapper.selectList(new LambdaQueryWrapper<PhotoAlbum>()
                .eq(PhotoAlbum::getIsDelete, CommonConst.FALSE));
        return BeanCopyUtils.copyList(photoAlbumList, PhotoAlbumDTO.class);
    }

    @Override
    public PhotoAlbumBackDTO getPhotoAlbumBackById(Integer albumId) {
        // 查询相册信息
        PhotoAlbum photoAlbum = photoAlbumMapper.selectById(albumId);
        // 查询照片数量
        Integer photoCount = photoMapper.selectCount(new LambdaQueryWrapper<Photo>()
                .eq(Photo::getAlbumId, albumId)
                .eq(Photo::getIsDelete, CommonConst.FALSE));
        PhotoAlbumBackDTO album = BeanCopyUtils.copyObject(photoAlbum, PhotoAlbumBackDTO.class);
        album.setPhotoCount(photoCount);
        return album;
    }

    @Override
    public void deletePhotoAlbumById(Integer albumId) {
        // 查询照片数量
        Integer count = photoMapper.selectCount(new LambdaQueryWrapper<Photo>()
                .eq(Photo::getAlbumId, albumId));
        if (count > 0) {
            // 若相册下存在照片则逻辑删除相册和照片
            photoAlbumMapper.updateById(PhotoAlbum.builder()
                    .id(albumId)
                    .isDelete(CommonConst.TRUE)
                    .build());
            photoMapper.update(new Photo(), new LambdaUpdateWrapper<Photo>()
                    .set(Photo::getIsDelete, CommonConst.TRUE)
                    .eq(Photo::getAlbumId, albumId));
        } else {
            // 若相册下不存在照片则直接删除
            photoAlbumMapper.deleteById(albumId);
        }
    }

    @Override
    public List<PhotoAlbumDTO> listPhotoAlbums() {
        // 查询相册列表
        List<PhotoAlbum> photoAlbumList = photoAlbumMapper.selectList(new LambdaQueryWrapper<PhotoAlbum>()
                .eq(PhotoAlbum::getStatus, PhotoAlbumStatusEnum.PUBLIC.getStatus())
                .eq(PhotoAlbum::getIsDelete, CommonConst.FALSE)
                .orderByDesc(PhotoAlbum::getId));
        return BeanCopyUtils.copyList(photoAlbumList, PhotoAlbumDTO.class);
    }

}




