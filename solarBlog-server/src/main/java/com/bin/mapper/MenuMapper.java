package com.bin.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.bin.entity.Menu;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * 菜单
 *
 * @author bin
 * @date 2021/08/10
 */
@Repository
public interface MenuMapper extends BaseMapper<Menu> {

    /**
     * 根据用户id查询菜单
     * @param userInfoId 用户信息id
     * @return 菜单列表
     */
    List<Menu> listMenusByUserInfoId(Integer userInfoId);

}
