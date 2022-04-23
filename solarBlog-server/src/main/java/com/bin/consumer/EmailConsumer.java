package com.bin.consumer;

import com.alibaba.fastjson.JSON;
import com.bin.dto.EmailDTO;
import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;


import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import static com.bin.constant.MQPrefixConst.EMAIL_QUEUE;

/**
 * 通知邮箱
 *
 * @author bin
 * @date 2021/06/13
 * @since 1.0.0
 **/
@Component
@RabbitListener(queues = EMAIL_QUEUE)
public class EmailConsumer {

    /**
     * 邮箱号
     */
    @Value("${spring.mail.username}")
    private String email;

    @Autowired
    private JavaMailSender javaMailSender;

    @RabbitHandler
    public void process(byte[] data) throws MessagingException {
        // 构建一个邮件对象
        MimeMessage message = javaMailSender.createMimeMessage();
        // 获取邮件实体类信息
        EmailDTO emailDTO = JSON.parseObject(new String(data), EmailDTO.class);
        // 设置邮件主题
        message.setSubject(emailDTO.getSubject());
        MimeMessageHelper messageHelper = new MimeMessageHelper(message,true,"utf-8");
        // 设置邮件发送者
        messageHelper.setFrom(email);
        // 设置邮件接收者
        messageHelper.setTo(emailDTO.getEmail());
        // 设置邮件正文
        messageHelper.setText(emailDTO.getContent(),true); //true 代表发送html格式
        // 发送邮件
        javaMailSender.send(message);
    }

}
