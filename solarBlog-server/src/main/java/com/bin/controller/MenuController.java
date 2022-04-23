package com.bin.controller;

import com.bin.dto.LabelOptionDTO;
import com.bin.dto.MenuDTO;
import com.bin.dto.UserMenuDTO;
import com.bin.vo.ConditionVO;
import com.bin.vo.MenuVO;
import com.bin.vo.Result;
import com.bin.service.MenuService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * 菜单控制器
 *
 * @author bin
 * @date 2021/07/29
 */
@Api(tags = "菜单模块")
@RestController
public class MenuController {
    @Autowired
    private MenuService menuService;

    /**
     * 查询菜单列表
     *
     * @param conditionVO 条件
     * @return {@link Result < MenuDTO >} 菜单列表
     */
    @ApiOperation(value = "查看菜单列表")
    @GetMapping("/admin/menus")
    public Result<List<MenuDTO>> listMenus(ConditionVO conditionVO) {
        return Result.ok(menuService.listMenus(conditionVO));
    }

    /**
     * 新增或修改菜单
     *
     * @param menuVO 菜单
     * @return {@link Result<>}
     */
    @ApiOperation(value = "新增或修改菜单")
    @PostMapping("/admin/menus")
    public Result<?> saveOrUpdateMenu(@Valid @RequestBody MenuVO menuVO) {
        menuService.saveOrUpdateMenu(menuVO);
        return Result.ok();
    }

    /**
     * 删除菜单
     *
     * @param menuId 菜单id
     * @return {@link Result<>}
     */
    @ApiOperation(value = "删除菜单")
    @DeleteMapping("/admin/menus/{menuId}")
    public Result<?> deleteMenu(@PathVariable("menuId") Integer menuId){
        menuService.deleteMenu(menuId);
        return Result.ok();
    }

    /**
     * 查看角色菜单选项
     *
     * @return {@link Result< LabelOptionDTO >} 查看角色菜单选项
     */
    @ApiOperation(value = "查看角色菜单选项")
    @GetMapping("/admin/role/menus")
    public Result<List<LabelOptionDTO>> listMenuOptions() {
        return Result.ok(menuService.listMenuOptions());
    }

    /**
     * 查看当前用户菜单
     *
     * @return {@link Result< UserMenuDTO >} 菜单列表
     */
    @ApiOperation(value = "查看当前用户菜单")
    @GetMapping("/admin/user/menus")
    public Result<List<UserMenuDTO>> listUserMenus() {
        return Result.ok(menuService.listUserMenus());
    }

}
