package com.bin.mapper;

import com.bin.entity.Message;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.springframework.stereotype.Repository;


/**
 * 留言
 *
 * @author bin
 * @date 2021/08/10
 */
@Repository
public interface MessageMapper extends BaseMapper<Message> {

}
