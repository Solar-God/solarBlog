package com.bin.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.bin.entity.ChatRecord;
import org.springframework.stereotype.Repository;

/**
 * 聊天记录
 *
 * @author bin
 * @date 2021/08/10
 */
@Repository
public interface ChatRecordMapper extends BaseMapper<ChatRecord> {
}
