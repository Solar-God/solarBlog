package com.bin.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.bin.dto.LabelOptionDTO;
import com.bin.dto.MenuDTO;
import com.bin.dto.UserMenuDTO;
import com.bin.vo.ConditionVO;
import com.bin.vo.MenuVO;
import com.bin.entity.Menu;

import java.util.List;

/**
 * 菜单服务
 *
 * @author bin
 * @date 2021/07/29
 */
public interface MenuService extends IService<Menu> {

    /**
     * 查看菜单列表
     *
     * @param conditionVO 条件
     * @return 菜单列表
     */
    List<MenuDTO> listMenus(ConditionVO conditionVO);

    /**
     * 新增或修改菜单
     *
     * @param menuVO 菜单信息
     */
    void saveOrUpdateMenu(MenuVO menuVO);

    /**
     * 删除菜单
     *
     * @param menuId 菜单id
     */
    void deleteMenu(Integer menuId);

    /**
     * 查看角色菜单选项
     *
     * @return 角色菜单选项
     */
    List<LabelOptionDTO> listMenuOptions();

    /**
     * 查看用户菜单
     *
     * @return 菜单列表
     */
    List<UserMenuDTO> listUserMenus();

}
