package com.bin.mapper;

import com.bin.dto.CategoryBackDTO;
import com.bin.dto.CategoryDTO;
import com.bin.entity.Category;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.bin.vo.ConditionVO;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * 分类
 *
 * @author bin
 * @date 2021/08/10
 */
@Repository
public interface CategoryMapper extends BaseMapper<Category> {

    /**
     * 查询分类和对应文章数量
     *
     * @return 分类列表
     */
    List<CategoryDTO> listCategoryDTO();

    /**
     * 查询后台分类列表
     *
     * @param current   页码
     * @param size      大小
     * @param condition 条件
     * @return {@link List< CategoryBackDTO >} 分类列表
     */
    List<CategoryBackDTO> listCategoryBackDTO(@Param("current") Long current, @Param("size") Long size, @Param("condition") ConditionVO condition);

}
