package com.bin.service;

import com.bin.dto.FriendLinkBackDTO;
import com.bin.dto.FriendLinkDTO;
import com.bin.vo.ConditionVO;
import com.bin.vo.FriendLinkVO;
import com.bin.vo.PageResult;
import com.bin.entity.FriendLink;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * 友链服务
 *
 * @author bin
 * @date 2021/07/29
 */
public interface FriendLinkService extends IService<FriendLink> {

    /**
     * 查看友链列表
     *
     * @return 友链列表
     */
    List<FriendLinkDTO> listFriendLinks();

    /**
     * 查看后台友链列表
     *
     * @param condition 条件
     * @return 友链列表
     */
    PageResult<FriendLinkBackDTO> listFriendLinkDTO(ConditionVO condition);

    /**
     * 保存或更新友链
     *
     * @param friendLinkVO 友链
     */
    void saveOrUpdateFriendLink(FriendLinkVO friendLinkVO);

}
