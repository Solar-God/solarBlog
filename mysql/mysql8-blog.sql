-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: solar_blog_test
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_article`
--

DROP TABLE IF EXISTS `tb_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL COMMENT '作者',
  `category_id` int DEFAULT NULL COMMENT '文章分类',
  `article_cover` varchar(1024) DEFAULT NULL COMMENT '文章缩略图',
  `article_title` varchar(50) NOT NULL COMMENT '标题',
  `article_content` longtext NOT NULL COMMENT '内容',
  `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '文章类型 1原创 2转载 3翻译',
  `original_url` varchar(255) DEFAULT NULL COMMENT '原文链接',
  `is_top` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否置顶 0否 1是',
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除  0否 1是',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态值 1公开 2私密 3评论可见',
  `create_time` datetime NOT NULL COMMENT '发表时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  FULLTEXT KEY `ft_search` (`article_content`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_article`
--

LOCK TABLES `tb_article` WRITE;
/*!40000 ALTER TABLE `tb_article` DISABLE KEYS */;
INSERT INTO `tb_article` VALUES (57,1,187,'https://images.solargod.cn/articles/d707b6874516e2c980a82ef04e4c4935.jpg','恭喜你！已经成功运行该博客！','# 恭喜你！已经成功运行该博客！',1,'',1,0,1,'2022-01-06 09:33:27','2022-04-22 20:57:13');
/*!40000 ALTER TABLE `tb_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_article_tag`
--

DROP TABLE IF EXISTS `tb_article_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_article_tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `article_id` int NOT NULL COMMENT '文章id',
  `tag_id` int NOT NULL COMMENT '标签id',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `fk_article_tag_1` (`article_id`) USING BTREE,
  KEY `fk_article_tag_2` (`tag_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=596 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_article_tag`
--

LOCK TABLES `tb_article_tag` WRITE;
/*!40000 ALTER TABLE `tb_article_tag` DISABLE KEYS */;
INSERT INTO `tb_article_tag` VALUES (595,57,33);
/*!40000 ALTER TABLE `tb_article_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_category`
--

DROP TABLE IF EXISTS `tb_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(20) NOT NULL COMMENT '分类名',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=188 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_category`
--

LOCK TABLES `tb_category` WRITE;
/*!40000 ALTER TABLE `tb_category` DISABLE KEYS */;
INSERT INTO `tb_category` VALUES (187,'测试分类','2022-04-22 20:57:13',NULL);
/*!40000 ALTER TABLE `tb_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_chat_record`
--

DROP TABLE IF EXISTS `tb_chat_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_chat_record` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int DEFAULT NULL COMMENT '用户id',
  `nickname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '昵称',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '头像',
  `content` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '聊天内容',
  `ip_address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ip地址',
  `ip_source` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ip来源',
  `type` tinyint NOT NULL COMMENT '类型',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=318 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_chat_record`
--

LOCK TABLES `tb_chat_record` WRITE;
/*!40000 ALTER TABLE `tb_chat_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_chat_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_comment`
--

DROP TABLE IF EXISTS `tb_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_comment` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int NOT NULL COMMENT '评论用户Id',
  `article_id` int DEFAULT NULL COMMENT '评论文章id',
  `comment_content` text NOT NULL COMMENT '评论内容',
  `reply_user_id` int DEFAULT NULL COMMENT '回复用户id',
  `parent_id` int DEFAULT NULL COMMENT '父评论id',
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除  0否 1是',
  `is_review` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否审核',
  `create_time` datetime NOT NULL COMMENT '评论时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `fk_comment_user` (`user_id`) USING BTREE,
  KEY `fk_comment_article` (`article_id`) USING BTREE,
  KEY `fk_comment_parent` (`parent_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_comment`
--

LOCK TABLES `tb_comment` WRITE;
/*!40000 ALTER TABLE `tb_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_friend_link`
--

DROP TABLE IF EXISTS `tb_friend_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_friend_link` (
  `id` int NOT NULL AUTO_INCREMENT,
  `link_name` varchar(20) NOT NULL COMMENT '链接名',
  `link_avatar` varchar(255) NOT NULL COMMENT '链接头像',
  `link_address` varchar(50) NOT NULL COMMENT '链接地址',
  `link_intro` varchar(50) NOT NULL COMMENT '链接介绍',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `fk_friend_link_user` (`link_name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_friend_link`
--

LOCK TABLES `tb_friend_link` WRITE;
/*!40000 ALTER TABLE `tb_friend_link` DISABLE KEYS */;
INSERT INTO `tb_friend_link` VALUES (21,'程序员斜阳','https://www.solaryyds.com/images/avatar.png','https://www.solaryyds.com/','专注于网络技术、网络资源、编程学习笔记的分享！','2022-01-11 09:56:00',NULL),(22,'斜阳技术博客','https://images.solargod.cn/config/161b16c6343438d5104be03415215c65.svg','https://www.solargod.cn/','前端、后端、服务器','2022-04-17 22:03:09','2022-04-17 22:09:25');
/*!40000 ALTER TABLE `tb_friend_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_login_log`
--

DROP TABLE IF EXISTS `tb_login_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_login_log` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `username` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '用户名称',
  `nickname` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '用户昵称',
  `login_type` tinyint(1) NOT NULL COMMENT '登录方式',
  `ip_address` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '用户登录ip',
  `ip_source` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '用户ip来源',
  `browser` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '浏览器',
  `os` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '操作系统',
  `status` tinyint(1) NOT NULL COMMENT '登录状态(0代表失败，1代表成功)',
  `message` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '登录信息',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='登录日志';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_login_log`
--

LOCK TABLES `tb_login_log` WRITE;
/*!40000 ALTER TABLE `tb_login_log` DISABLE KEYS */;
INSERT INTO `tb_login_log` VALUES (115,'admin@qq.com','管理员',1,'127.0.0.1','','Chrome 10','Windows 10',1,'退出成功','2022-04-22 21:27:33',NULL),(116,'admin@qq.com','admin@qq.com',1,'127.0.0.1','',NULL,NULL,0,'用户名或密码错误','2022-04-22 21:27:39',NULL),(117,'admin@qq.com','管理员',1,'127.0.0.1','','Chrome 10','Windows 10',1,'登录成功','2022-04-22 21:27:44',NULL);
/*!40000 ALTER TABLE `tb_login_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_menu`
--

DROP TABLE IF EXISTS `tb_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_menu` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(20) NOT NULL COMMENT '菜单名',
  `path` varchar(50) NOT NULL COMMENT '菜单路径',
  `component` varchar(50) NOT NULL COMMENT '组件',
  `icon` varchar(50) NOT NULL COMMENT '菜单icon',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `order_num` tinyint(1) NOT NULL COMMENT '排序',
  `parent_id` int DEFAULT NULL COMMENT '父id',
  `is_hidden` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否隐藏  0否1是',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=217 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_menu`
--

LOCK TABLES `tb_menu` WRITE;
/*!40000 ALTER TABLE `tb_menu` DISABLE KEYS */;
INSERT INTO `tb_menu` VALUES (1,'首页','/','/home/Home.vue','el-icon-myshouye','2021-01-26 17:06:51','2022-01-04 16:03:42',1,NULL,0),(2,'文章管理','/article-submenu','Layout','el-icon-mywenzhang-copy','2021-01-25 20:43:07','2021-01-25 20:43:09',2,NULL,0),(3,'消息管理','/message-submenu','Layout','el-icon-myxiaoxi','2021-01-25 20:44:17','2021-01-25 20:44:20',3,NULL,0),(4,'系统管理','/system-submenu','Layout','el-icon-myshezhi','2021-01-25 20:45:57','2021-01-25 20:45:59',5,NULL,0),(5,'个人中心','/setting','/setting/Setting.vue','el-icon-myuser','2021-01-26 17:22:38','2022-03-29 19:34:24',7,NULL,0),(6,'发布文章','/articles','/article/Article.vue','el-icon-myfabiaowenzhang','2021-01-26 14:30:48','2021-01-26 14:30:51',1,2,0),(7,'修改文章','/articles/*','/article/Article.vue','el-icon-myfabiaowenzhang','2021-01-26 14:31:32','2021-01-26 14:31:34',2,2,1),(8,'文章列表','/article-list','/article/ArticleList.vue','el-icon-mywenzhangliebiao','2021-01-26 14:32:13','2021-01-26 14:32:16',3,2,0),(9,'分类管理','/categories','/category/Category.vue','el-icon-myfenlei','2021-01-26 14:33:42','2021-01-26 14:33:43',4,2,0),(10,'标签管理','/tags','/tag/Tag.vue','el-icon-myicontag','2021-01-26 14:34:33','2021-01-26 14:34:36',5,2,0),(11,'评论管理','/comments','/comment/Comment.vue','el-icon-mypinglunzu','2021-01-26 14:35:31','2021-01-26 14:35:34',1,3,0),(12,'留言管理','/messages','/message/Message.vue','el-icon-myliuyan','2021-01-26 14:36:09','2021-01-26 14:36:13',2,3,0),(13,'用户列表','/users','/user/User.vue','el-icon-myyonghuliebiao','2021-01-26 14:38:09','2021-01-26 14:38:12',1,202,0),(14,'角色管理','/roles','/role/Role.vue','el-icon-myjiaoseliebiao','2021-01-26 14:39:01','2021-01-26 14:39:03',2,213,0),(15,'接口管理','/resources','/resource/Resource.vue','el-icon-myjiekouguanli','2021-01-26 14:40:14','2021-08-07 20:00:28',2,213,0),(16,'菜单管理','/menus','/menu/Menu.vue','el-icon-mycaidan','2021-01-26 14:40:54','2021-08-07 10:18:49',2,213,0),(17,'友链管理','/links','/friendLink/FriendLink.vue','el-icon-mydashujukeshihuaico-','2021-01-26 14:41:35','2021-01-26 14:41:37',3,4,0),(18,'网站导航管理','/siteNavigation','/siteNavigation/siteNavigation.vue','el-icon-myliuyan','2021-01-26 14:42:05','2022-03-30 10:13:02',4,4,0),(19,'日志管理','/log-submenu','Layout','el-icon-myguanyuwo','2021-01-31 21:33:56','2021-01-31 21:33:59',6,NULL,0),(20,'操作日志','/operation/log','/log/Operation.vue','el-icon-myguanyuwo','2021-01-31 15:53:21','2022-04-20 23:28:53',2,19,0),(201,'在线用户','/online/users','/user/Online.vue','el-icon-myyonghuliebiao','2021-02-05 14:59:51','2021-02-05 14:59:53',7,202,0),(202,'用户管理','/users-submenu','Layout','el-icon-myyonghuliebiao','2021-02-06 23:44:59','2021-02-06 23:45:03',4,NULL,0),(205,'相册管理','/album-submenu','Layout','el-icon-myimage-fill','2021-08-03 15:10:54','2021-08-07 20:02:06',5,NULL,0),(206,'相册列表','/albums','/album/Album.vue','el-icon-myzhaopian','2021-08-03 20:29:19','2021-08-04 11:45:47',1,205,0),(208,'照片管理','/albums/:albumId','/album/Photo.vue','el-icon-myzhaopian','2021-08-03 21:37:47','2021-08-05 10:24:08',1,205,1),(209,'页面管理','/pages','/page/Page.vue','el-icon-myyemianpeizhi','2021-08-04 11:36:27','2021-08-07 20:01:26',2,4,0),(210,'照片回收站','/photos/delete','/album/Delete.vue','el-icon-myhuishouzhan','2021-08-05 13:55:19',NULL,3,205,1),(213,'权限管理','/permission-submenu','Layout','el-icon-mydaohanglantubiao_quanxianguanli','2021-08-07 19:56:55','2021-08-07 19:59:40',4,NULL,0),(214,'网站管理','/website','/website/Website.vue','el-icon-myxitong','2021-08-07 20:06:41',NULL,1,4,0),(215,'聊天管理','/chat','/chat/Chat.vue','el-icon-myliuyan','2022-02-07 16:31:23',NULL,3,3,0),(216,'登录日志','/login/log','/log/Login.vue','el-icon-myyonghuliebiao','2022-04-20 23:28:47',NULL,1,19,0);
/*!40000 ALTER TABLE `tb_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_message`
--

DROP TABLE IF EXISTS `tb_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_message` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `nickname` varchar(50) NOT NULL COMMENT '昵称',
  `avatar` varchar(255) NOT NULL COMMENT '头像',
  `message_content` varchar(255) NOT NULL COMMENT '留言内容',
  `ip_address` varchar(50) NOT NULL COMMENT '用户ip',
  `ip_source` varchar(255) NOT NULL COMMENT '用户地址',
  `time` tinyint(1) DEFAULT NULL COMMENT '弹幕速度',
  `is_review` tinyint NOT NULL DEFAULT '1' COMMENT '是否审核',
  `create_time` datetime NOT NULL COMMENT '发布时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_message`
--

LOCK TABLES `tb_message` WRITE;
/*!40000 ALTER TABLE `tb_message` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_operation_log`
--

DROP TABLE IF EXISTS `tb_operation_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_operation_log` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `opt_module` varchar(20) NOT NULL COMMENT '操作模块',
  `opt_type` varchar(20) NOT NULL COMMENT '操作类型',
  `opt_url` varchar(255) NOT NULL COMMENT '操作url',
  `opt_method` varchar(255) NOT NULL COMMENT '操作方法',
  `opt_desc` varchar(255) NOT NULL COMMENT '操作描述',
  `request_param` longtext NOT NULL COMMENT '请求参数',
  `request_method` varchar(20) NOT NULL COMMENT '请求方式',
  `response_data` longtext NOT NULL COMMENT '返回数据',
  `user_id` int NOT NULL COMMENT '用户id',
  `nickname` varchar(50) NOT NULL COMMENT '用户昵称',
  `ip_address` varchar(255) NOT NULL COMMENT '操作ip',
  `ip_source` varchar(255) NOT NULL COMMENT '操作地址',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=660 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_operation_log`
--

LOCK TABLES `tb_operation_log` WRITE;
/*!40000 ALTER TABLE `tb_operation_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_operation_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_page`
--

DROP TABLE IF EXISTS `tb_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_page` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '页面id',
  `page_name` varchar(10) NOT NULL COMMENT '页面名',
  `page_label` varchar(20) DEFAULT NULL COMMENT '页面标签',
  `page_cover` varchar(255) NOT NULL COMMENT '页面封面',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='页面';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_page`
--

LOCK TABLES `tb_page` WRITE;
/*!40000 ALTER TABLE `tb_page` DISABLE KEYS */;
INSERT INTO `tb_page` VALUES (1,'首页','home','https://images.solargod.cn/config/ac577a7f0bf072e0d2825780cd0a57bf.jpg','2021-08-07 10:32:36','2022-01-21 22:35:10'),(2,'归档','archive','https://images.solargod.cn/config/ac577a7f0bf072e0d2825780cd0a57bf.jpg','2021-08-07 10:32:36','2022-01-21 22:35:17'),(3,'分类','category','https://images.solargod.cn/config/ac577a7f0bf072e0d2825780cd0a57bf.jpg','2021-08-07 10:32:36','2022-01-21 22:35:27'),(4,'标签','tag','https://images.solargod.cn/config/ac577a7f0bf072e0d2825780cd0a57bf.jpg','2021-08-07 10:32:36','2022-01-21 22:35:40'),(5,'相册','album','https://images.solargod.cn/config/ac577a7f0bf072e0d2825780cd0a57bf.jpg','2021-08-07 10:32:36','2022-01-21 22:35:49'),(6,'友链','link','https://images.solargod.cn/config/ac577a7f0bf072e0d2825780cd0a57bf.jpg','2021-08-07 10:32:36','2022-01-21 22:35:57'),(7,'关于','about','https://images.solargod.cn/config/ac577a7f0bf072e0d2825780cd0a57bf.jpg','2021-08-07 10:32:36','2022-01-21 22:36:05'),(8,'留言','message','https://images.solargod.cn/config/6f07591ea38711b0692cda7e3ba4f70d.jpg','2021-08-07 10:32:36','2022-04-15 15:33:53'),(9,'个人中心','user','https://images.solargod.cn/config/ac577a7f0bf072e0d2825780cd0a57bf.jpg','2021-08-07 10:32:36','2022-01-21 22:36:34'),(10,'文章列表','articleList','https://images.solargod.cn/config/ac577a7f0bf072e0d2825780cd0a57bf.jpg','2021-08-10 15:36:19','2022-04-15 15:34:02');
/*!40000 ALTER TABLE `tb_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_photo`
--

DROP TABLE IF EXISTS `tb_photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_photo` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `album_id` int NOT NULL COMMENT '相册id',
  `photo_name` varchar(20) NOT NULL COMMENT '照片名',
  `photo_desc` varchar(50) DEFAULT NULL COMMENT '照片描述',
  `photo_src` varchar(2560) NOT NULL COMMENT '照片地址',
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='照片';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_photo`
--

LOCK TABLES `tb_photo` WRITE;
/*!40000 ALTER TABLE `tb_photo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_photo_album`
--

DROP TABLE IF EXISTS `tb_photo_album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_photo_album` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `album_name` varchar(20) NOT NULL COMMENT '相册名',
  `album_desc` varchar(50) NOT NULL COMMENT '相册描述',
  `album_cover` varchar(255) NOT NULL COMMENT '相册封面',
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态值 1公开 2私密',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='相册';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_photo_album`
--

LOCK TABLES `tb_photo_album` WRITE;
/*!40000 ALTER TABLE `tb_photo_album` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_photo_album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_resource`
--

DROP TABLE IF EXISTS `tb_resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_resource` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `resource_name` varchar(50) NOT NULL COMMENT '资源名',
  `url` varchar(255) DEFAULT NULL COMMENT '权限路径',
  `request_method` varchar(10) DEFAULT NULL COMMENT '请求方式',
  `parent_id` int DEFAULT NULL COMMENT '父权限id',
  `is_anonymous` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否匿名访问 0否 1是',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=296 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_resource`
--

LOCK TABLES `tb_resource` WRITE;
/*!40000 ALTER TABLE `tb_resource` DISABLE KEYS */;
INSERT INTO `tb_resource` VALUES (165,'分类模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21','2022-01-04 15:23:08'),(166,'博客信息模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(167,'友链模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(168,'文章模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(169,'日志模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(170,'标签模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(171,'照片模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(172,'用户信息模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(173,'用户账号模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(174,'留言模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(175,'相册模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(176,'菜单模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(177,'角色模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(178,'评论模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(179,'资源模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(180,'页面模块',NULL,NULL,NULL,0,'2021-08-11 21:04:21',NULL),(181,'查看博客信息','/','GET',166,1,'2021-08-11 21:04:22','2021-08-11 21:05:29'),(182,'查看关于我信息','/about','GET',166,1,'2021-08-11 21:04:22','2021-08-11 21:05:29'),(183,'查看后台信息','/admin','GET',166,1,'2021-08-11 21:04:22','2022-03-24 10:02:54'),(184,'修改关于我信息','/admin/about','PUT',166,0,'2021-08-11 21:04:22',NULL),(185,'查看后台文章','/admin/articles','GET',168,0,'2021-08-11 21:04:22',NULL),(186,'添加或修改文章','/admin/articles','POST',168,0,'2021-08-11 21:04:22',NULL),(187,'恢复或删除文章','/admin/articles','PUT',168,0,'2021-08-11 21:04:22',NULL),(188,'物理删除文章','/admin/articles','DELETE',168,0,'2021-08-11 21:04:22',NULL),(189,'上传文章图片','/admin/articles/images','POST',168,0,'2021-08-11 21:04:22',NULL),(190,'修改文章置顶','/admin/articles/top','PUT',168,0,'2021-08-11 21:04:22',NULL),(191,'根据id查看后台文章','/admin/articles/*','GET',168,0,'2021-08-11 21:04:22',NULL),(192,'查看后台分类列表','/admin/categories','GET',165,0,'2021-08-11 21:04:22',NULL),(193,'添加或修改分类','/admin/categories','POST',165,0,'2021-08-11 21:04:22',NULL),(194,'删除分类','/admin/categories','DELETE',165,0,'2021-08-11 21:04:22',NULL),(195,'搜索文章分类','/admin/categories/search','GET',165,0,'2021-08-11 21:04:22',NULL),(196,'查询后台评论','/admin/comments','GET',178,0,'2021-08-11 21:04:22',NULL),(197,'删除评论','/admin/comments','DELETE',178,0,'2021-08-11 21:04:22',NULL),(198,'审核评论','/admin/comments/review','PUT',178,0,'2021-08-11 21:04:22',NULL),(199,'查看后台友链列表','/admin/links','GET',167,0,'2021-08-11 21:04:22',NULL),(200,'保存或修改友链','/admin/links','POST',167,0,'2021-08-11 21:04:22',NULL),(201,'删除友链','/admin/links','DELETE',167,0,'2021-08-11 21:04:22',NULL),(202,'查看菜单列表','/admin/menus','GET',176,0,'2021-08-11 21:04:22',NULL),(203,'新增或修改菜单','/admin/menus','POST',176,0,'2021-08-11 21:04:22',NULL),(204,'删除菜单','/admin/menus/*','DELETE',176,0,'2021-08-11 21:04:22',NULL),(205,'查看后台留言列表','/admin/messages','GET',174,0,'2021-08-11 21:04:22',NULL),(206,'删除留言','/admin/messages','DELETE',174,0,'2021-08-11 21:04:22',NULL),(207,'审核留言','/admin/messages/review','PUT',174,0,'2021-08-11 21:04:22',NULL),(208,'查看操作日志','/admin/operation/logs','GET',169,0,'2021-08-11 21:04:22','2022-04-21 09:43:57'),(209,'删除操作日志','/admin/operation/logs','DELETE',169,0,'2021-08-11 21:04:22',NULL),(210,'获取页面列表','/admin/pages','GET',180,0,'2021-08-11 21:04:22',NULL),(211,'保存或更新页面','/admin/pages','POST',180,0,'2021-08-11 21:04:22',NULL),(212,'删除页面','/admin/pages/*','DELETE',180,0,'2021-08-11 21:04:22',NULL),(213,'根据相册id获取照片列表','/admin/photos','GET',171,0,'2021-08-11 21:04:22',NULL),(214,'保存照片','/admin/photos','POST',171,0,'2021-08-11 21:04:22',NULL),(215,'更新照片信息','/admin/photos','PUT',171,0,'2021-08-11 21:04:22',NULL),(216,'删除照片','/admin/photos','DELETE',171,0,'2021-08-11 21:04:22',NULL),(217,'移动照片相册','/admin/photos/album','PUT',171,0,'2021-08-11 21:04:22',NULL),(218,'查看后台相册列表','/admin/photos/albums','GET',175,0,'2021-08-11 21:04:22',NULL),(219,'保存或更新相册','/admin/photos/albums','POST',175,0,'2021-08-11 21:04:22',NULL),(220,'上传相册封面','/admin/photos/albums/cover','POST',175,0,'2021-08-11 21:04:22',NULL),(221,'获取后台相册列表信息','/admin/photos/albums/info','GET',175,0,'2021-08-11 21:04:22',NULL),(222,'根据id删除相册','/admin/photos/albums/*','DELETE',175,0,'2021-08-11 21:04:22',NULL),(223,'根据id获取后台相册信息','/admin/photos/albums/*/info','GET',175,0,'2021-08-11 21:04:22',NULL),(224,'更新照片删除状态','/admin/photos/delete','PUT',171,0,'2021-08-11 21:04:22',NULL),(225,'查看资源列表','/admin/resources','GET',179,0,'2021-08-11 21:04:22',NULL),(226,'新增或修改资源','/admin/resources','POST',179,0,'2021-08-11 21:04:22',NULL),(227,'导入swagger接口','/admin/resources/import/swagger','GET',179,0,'2021-08-11 21:04:22',NULL),(228,'删除资源','/admin/resources/*','DELETE',179,0,'2021-08-11 21:04:22',NULL),(229,'保存或更新角色','/admin/role','POST',177,0,'2021-08-11 21:04:22',NULL),(230,'查看角色菜单选项','/admin/role/menus','GET',176,0,'2021-08-11 21:04:22',NULL),(231,'查看角色资源选项','/admin/role/resources','GET',179,0,'2021-08-11 21:04:22',NULL),(232,'查询角色列表','/admin/roles','GET',177,0,'2021-08-11 21:04:22',NULL),(233,'删除角色','/admin/roles','DELETE',177,0,'2021-08-11 21:04:22',NULL),(234,'查询后台标签列表','/admin/tags','GET',170,0,'2021-08-11 21:04:22',NULL),(235,'添加或修改标签','/admin/tags','POST',170,0,'2021-08-11 21:04:22',NULL),(236,'删除标签','/admin/tags','DELETE',170,0,'2021-08-11 21:04:22',NULL),(237,'搜索文章标签','/admin/tags/search','GET',170,0,'2021-08-11 21:04:22',NULL),(238,'查看当前用户菜单','/admin/user/menus','GET',176,0,'2021-08-11 21:04:22',NULL),(239,'查询后台用户列表','/admin/users','GET',173,0,'2021-08-11 21:04:22',NULL),(240,'修改用户禁用状态','/admin/users/disable','PUT',172,0,'2021-08-11 21:04:22',NULL),(241,'查看在线用户','/admin/users/online','GET',172,0,'2021-08-11 21:04:22',NULL),(242,'修改管理员密码','/admin/users/password','PUT',173,0,'2021-08-11 21:04:22',NULL),(243,'查询用户角色选项','/admin/users/role','GET',177,0,'2021-08-11 21:04:22',NULL),(244,'修改用户角色','/admin/users/role','PUT',172,0,'2021-08-11 21:04:22',NULL),(245,'下线用户','/admin/users/*/online','DELETE',172,0,'2021-08-11 21:04:22',NULL),(246,'获取网站配置','/admin/website/config','GET',166,0,'2021-08-11 21:04:22',NULL),(247,'更新网站配置','/admin/website/config','PUT',166,0,'2021-08-11 21:04:22',NULL),(248,'根据相册id查看照片列表','/albums/*/photos','GET',171,1,'2021-08-11 21:04:22','2021-08-11 21:06:35'),(249,'查看首页文章','/articles','GET',168,1,'2021-08-11 21:04:22','2021-08-11 21:05:45'),(250,'查看文章归档','/articles/archives','GET',168,1,'2021-08-11 21:04:22','2021-08-11 21:05:47'),(251,'根据条件查询文章','/articles/condition','GET',168,1,'2021-08-11 21:04:22','2021-08-11 21:05:47'),(252,'搜索文章','/articles/search','GET',168,1,'2021-08-11 21:04:22','2021-08-11 21:05:48'),(253,'根据id查看文章','/articles/*','GET',168,1,'2021-08-11 21:04:22','2021-08-11 21:05:49'),(254,'点赞文章','/articles/*/like','POST',168,0,'2021-08-11 21:04:22',NULL),(255,'查看分类列表','/categories','GET',165,1,'2021-08-11 21:04:22','2022-01-04 15:10:46'),(256,'查询评论','/comments','GET',178,1,'2021-08-11 21:04:22','2021-08-11 21:07:33'),(257,'添加评论','/comments','POST',178,0,'2021-08-11 21:04:22','2021-08-11 21:10:05'),(258,'评论点赞','/comments/*/like','POST',178,0,'2021-08-11 21:04:22',NULL),(259,'查询评论下的回复','/comments/*/replies','GET',178,1,'2021-08-11 21:04:22','2021-08-11 21:07:30'),(260,'查看友链列表','/links','GET',167,1,'2021-08-11 21:04:22','2021-08-11 21:05:41'),(261,'查看留言列表','/messages','GET',174,1,'2021-08-11 21:04:22','2021-08-11 21:07:14'),(262,'添加留言','/messages','POST',174,1,'2021-08-11 21:04:22','2021-08-11 21:07:15'),(263,'获取相册列表','/photos/albums','GET',175,1,'2021-08-11 21:04:22','2021-08-11 21:07:20'),(264,'用户注册','/register','POST',173,1,'2021-08-11 21:04:22','2021-08-11 21:07:01'),(265,'查询标签列表','/tags','GET',170,1,'2021-08-11 21:04:22','2021-08-11 21:06:30'),(267,'更新用户头像','/users/avatar','POST',172,0,'2021-08-11 21:04:22',NULL),(268,'发送邮箱验证码','/users/code','GET',173,1,'2021-08-11 21:04:22','2021-08-11 21:07:02'),(269,'绑定用户邮箱','/users/email','POST',172,0,'2021-08-11 21:04:22',NULL),(270,'更新用户信息','/users/info','PUT',172,0,'2021-08-11 21:04:22',NULL),(271,'qq登录','/users/oauth/qq','POST',173,1,'2021-08-11 21:04:22','2021-08-11 21:07:06'),(272,'微博登录','/users/oauth/weibo','POST',173,1,'2021-08-11 21:04:22','2021-08-11 21:07:06'),(273,'修改密码','/users/password','PUT',173,1,'2021-08-11 21:04:22','2021-08-11 21:07:09'),(274,'上传语音','/voice','POST',166,1,'2021-08-11 21:04:22','2021-08-11 21:05:33'),(275,'上传访客信息','/report','POST',166,1,'2021-08-24 11:24:08','2021-08-24 11:24:10'),(276,'获取用户区域分布','/admin/users/area','GET',173,0,'2021-08-24 11:24:33',NULL),(277,'网站导航模块',NULL,NULL,NULL,0,'2022-03-30 10:12:12','2022-03-30 10:12:34'),(278,'查看后台网站导航列表','/admin/siteNavs','GET',277,0,'2022-03-30 10:16:00','2022-04-21 09:39:37'),(279,'添加或修改网站导航','/admin/siteNavs','POST',277,0,'2022-03-30 10:18:37','2022-04-21 09:39:43'),(280,'删除网站导航','/admin/siteNavs','DELETE',277,0,'2022-03-30 10:19:22','2022-04-21 09:39:52'),(281,'查看后台导航标签列表','/admin/siteNavTags','GET',277,0,'2022-03-30 10:20:47','2022-04-21 09:40:21'),(286,'聊天模块',NULL,NULL,NULL,0,'2022-03-30 10:34:46',NULL),(287,'查看后台历史聊天记录','/admin/chatList','GET',286,0,'2022-03-30 10:35:06','2022-04-21 09:44:42'),(288,'删除历史聊天记录','/admin/chatRecord','DELETE',286,0,'2022-03-30 10:35:26','2022-03-30 10:50:44'),(290,'移除未保存的图片','/admin/removePhoto','DELETE',175,0,'2022-04-15 20:38:54',NULL),(291,'查看登录日志','/admin/login/logs','GET',169,0,'2022-04-20 23:29:51','2022-04-21 09:43:58'),(292,'删除登录日志','/admin/login/logs','DELETE',169,0,'2022-04-20 23:30:19',NULL),(293,'添加或修改导航标签','/admin/siteNavTags','POST',277,0,'2022-04-21 09:41:35',NULL),(294,'删除导航标签','/admin/siteNavTags','DELETE',277,0,'2022-04-21 09:41:45',NULL),(295,'获取网站导航列表','/siteNavs','GET',277,1,'2022-04-21 09:42:16','2022-04-21 09:42:18');
/*!40000 ALTER TABLE `tb_resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_role`
--

DROP TABLE IF EXISTS `tb_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_role` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `role_name` varchar(20) NOT NULL COMMENT '角色名',
  `role_label` varchar(50) NOT NULL COMMENT '角色描述',
  `is_disable` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否禁用  0否 1是',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_role`
--

LOCK TABLES `tb_role` WRITE;
/*!40000 ALTER TABLE `tb_role` DISABLE KEYS */;
INSERT INTO `tb_role` VALUES (1,'管理员','admin',0,'2021-03-22 14:10:21','2022-04-21 09:42:46'),(2,'用户','user',0,'2021-03-22 14:25:25','2022-01-04 14:48:59'),(3,'测试','test',0,'2021-03-22 14:42:23','2022-04-21 09:44:16');
/*!40000 ALTER TABLE `tb_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_role_menu`
--

DROP TABLE IF EXISTS `tb_role_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_role_menu` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `role_id` int DEFAULT NULL COMMENT '角色id',
  `menu_id` int DEFAULT NULL COMMENT '菜单id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2578 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_role_menu`
--

LOCK TABLES `tb_role_menu` WRITE;
/*!40000 ALTER TABLE `tb_role_menu` DISABLE KEYS */;
INSERT INTO `tb_role_menu` VALUES (1397,8,1),(1398,8,2),(1399,8,6),(1400,8,7),(1401,8,8),(1402,8,9),(1403,8,10),(1404,8,3),(1405,8,11),(1406,8,12),(1407,8,202),(1408,8,13),(1409,8,14),(1410,8,201),(1411,8,4),(1412,8,16),(1413,8,15),(1414,8,17),(1415,8,18),(1416,8,19),(1417,8,20),(1418,8,5),(1595,9,1),(1596,9,2),(1597,9,6),(1598,9,7),(1599,9,8),(1600,9,9),(1601,9,10),(1602,9,3),(1603,9,11),(1604,9,12),(1605,9,202),(1606,9,13),(1607,9,14),(1608,9,201),(1609,9,4),(1610,9,16),(1611,9,15),(1612,9,17),(1613,9,18),(1614,9,19),(1615,9,20),(1616,9,5),(1639,13,2),(1640,13,6),(1641,13,7),(1642,13,8),(1643,13,9),(1644,13,10),(1645,13,3),(1646,13,11),(1647,13,12),(2488,1,1),(2489,1,2),(2490,1,6),(2491,1,7),(2492,1,8),(2493,1,9),(2494,1,10),(2495,1,3),(2496,1,11),(2497,1,12),(2498,1,215),(2499,1,202),(2500,1,13),(2501,1,201),(2502,1,213),(2503,1,14),(2504,1,15),(2505,1,16),(2506,1,4),(2507,1,214),(2508,1,209),(2509,1,17),(2510,1,18),(2511,1,205),(2512,1,206),(2513,1,208),(2514,1,210),(2515,1,19),(2516,1,216),(2517,1,20),(2518,1,5),(2547,3,1),(2548,3,2),(2549,3,6),(2550,3,7),(2551,3,8),(2552,3,9),(2553,3,10),(2554,3,3),(2555,3,11),(2556,3,12),(2557,3,215),(2558,3,202),(2559,3,13),(2560,3,201),(2561,3,213),(2562,3,14),(2563,3,15),(2564,3,16),(2565,3,4),(2566,3,214),(2567,3,209),(2568,3,17),(2569,3,18),(2570,3,205),(2571,3,206),(2572,3,208),(2573,3,210),(2574,3,19),(2575,3,216),(2576,3,20),(2577,3,5);
/*!40000 ALTER TABLE `tb_role_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_role_resource`
--

DROP TABLE IF EXISTS `tb_role_resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_role_resource` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int DEFAULT NULL COMMENT '角色id',
  `resource_id` int DEFAULT NULL COMMENT '权限id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5049 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_role_resource`
--

LOCK TABLES `tb_role_resource` WRITE;
/*!40000 ALTER TABLE `tb_role_resource` DISABLE KEYS */;
INSERT INTO `tb_role_resource` VALUES (4193,2,254),(4194,2,267),(4195,2,269),(4196,2,270),(4197,2,257),(4198,2,258),(4917,1,165),(4918,1,192),(4919,1,193),(4920,1,194),(4921,1,195),(4922,1,166),(4923,1,184),(4924,1,246),(4925,1,247),(4926,1,167),(4927,1,199),(4928,1,200),(4929,1,201),(4930,1,168),(4931,1,185),(4932,1,186),(4933,1,187),(4934,1,188),(4935,1,189),(4936,1,190),(4937,1,191),(4938,1,254),(4939,1,169),(4940,1,208),(4941,1,209),(4942,1,291),(4943,1,292),(4944,1,170),(4945,1,234),(4946,1,235),(4947,1,236),(4948,1,237),(4949,1,171),(4950,1,213),(4951,1,214),(4952,1,215),(4953,1,216),(4954,1,217),(4955,1,224),(4956,1,172),(4957,1,240),(4958,1,241),(4959,1,244),(4960,1,245),(4961,1,267),(4962,1,269),(4963,1,270),(4964,1,173),(4965,1,239),(4966,1,242),(4967,1,276),(4968,1,174),(4969,1,205),(4970,1,206),(4971,1,207),(4972,1,175),(4973,1,218),(4974,1,219),(4975,1,220),(4976,1,221),(4977,1,222),(4978,1,223),(4979,1,290),(4980,1,176),(4981,1,202),(4982,1,203),(4983,1,204),(4984,1,230),(4985,1,238),(4986,1,177),(4987,1,229),(4988,1,232),(4989,1,233),(4990,1,243),(4991,1,178),(4992,1,196),(4993,1,197),(4994,1,198),(4995,1,257),(4996,1,258),(4997,1,179),(4998,1,225),(4999,1,226),(5000,1,227),(5001,1,228),(5002,1,231),(5003,1,180),(5004,1,210),(5005,1,211),(5006,1,212),(5007,1,277),(5008,1,278),(5009,1,279),(5010,1,280),(5011,1,281),(5012,1,293),(5013,1,294),(5014,1,286),(5015,1,287),(5016,1,288),(5017,3,192),(5018,3,195),(5019,3,246),(5020,3,199),(5021,3,185),(5022,3,191),(5023,3,254),(5024,3,208),(5025,3,291),(5026,3,234),(5027,3,237),(5028,3,213),(5029,3,241),(5030,3,239),(5031,3,276),(5032,3,205),(5033,3,218),(5034,3,223),(5035,3,202),(5036,3,230),(5037,3,238),(5038,3,232),(5039,3,243),(5040,3,196),(5041,3,257),(5042,3,258),(5043,3,225),(5044,3,231),(5045,3,210),(5046,3,278),(5047,3,281),(5048,3,287);
/*!40000 ALTER TABLE `tb_role_resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_tag`
--

DROP TABLE IF EXISTS `tb_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(20) NOT NULL COMMENT '标签名',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_tag`
--

LOCK TABLES `tb_tag` WRITE;
/*!40000 ALTER TABLE `tb_tag` DISABLE KEYS */;
INSERT INTO `tb_tag` VALUES (33,'测试标签','2022-04-22 20:57:13',NULL);
/*!40000 ALTER TABLE `tb_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_unique_view`
--

DROP TABLE IF EXISTS `tb_unique_view`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_unique_view` (
  `id` int NOT NULL AUTO_INCREMENT,
  `create_time` datetime NOT NULL COMMENT '时间',
  `views_count` int NOT NULL COMMENT '访问量',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_unique_view`
--

LOCK TABLES `tb_unique_view` WRITE;
/*!40000 ALTER TABLE `tb_unique_view` DISABLE KEYS */;
INSERT INTO `tb_unique_view` VALUES (19,'2022-01-29 00:00:00',54),(20,'2022-01-30 00:00:00',13),(21,'2022-01-31 00:00:00',59),(22,'2022-02-01 00:00:00',26),(23,'2022-02-02 00:00:00',3),(24,'2022-02-03 00:00:00',7),(25,'2022-02-04 00:00:00',1),(26,'2022-02-05 00:00:00',10),(27,'2022-02-06 00:03:28',8),(28,'2022-02-07 00:00:00',46),(29,'2022-02-08 00:00:00',32),(30,'2022-02-09 00:02:43',6),(31,'2022-02-10 00:00:00',27),(32,'2022-02-11 00:00:00',12),(33,'2022-02-12 00:00:00',6),(34,'2022-02-13 00:00:00',8),(35,'2022-02-14 00:00:00',14),(36,'2022-02-15 00:00:00',18),(37,'2022-02-16 00:00:00',19),(38,'2022-02-17 00:00:00',13),(39,'2022-02-18 00:00:00',26),(40,'2022-02-19 00:00:00',16),(41,'2022-02-20 00:00:00',13),(42,'2022-02-21 00:00:00',10),(43,'2022-02-22 00:00:00',30),(44,'2022-02-23 00:00:00',62),(45,'2022-02-24 00:00:00',69),(46,'2022-02-25 00:00:00',65),(47,'2022-02-26 00:00:00',36),(48,'2022-02-27 00:00:00',17),(49,'2022-02-28 00:00:00',32),(50,'2022-03-01 00:00:00',11),(51,'2022-03-02 00:00:00',38),(52,'2022-03-03 00:00:00',25),(53,'2022-03-04 00:00:00',23),(54,'2022-03-05 00:00:00',4),(55,'2022-03-06 00:00:00',13),(56,'2022-03-07 00:00:00',4),(57,'2022-03-08 00:00:00',17),(58,'2022-03-09 00:00:00',7),(59,'2022-03-10 00:00:00',10),(60,'2022-03-11 00:00:00',8),(61,'2022-03-12 00:00:00',2),(62,'2022-03-13 00:00:00',1),(63,'2022-03-14 00:00:00',6),(64,'2022-03-15 00:00:00',15),(65,'2022-03-16 00:00:00',4),(66,'2022-03-17 00:00:00',2),(67,'2022-03-18 00:00:00',12),(68,'2022-03-19 00:00:00',4),(69,'2022-03-20 00:00:00',0),(70,'2022-03-21 00:00:00',2),(71,'2022-03-22 00:00:00',4),(72,'2022-03-24 00:00:00',28),(73,'2022-03-25 00:00:00',41),(74,'2022-03-26 00:00:00',52),(75,'2022-03-27 00:00:00',32),(76,'2022-03-28 00:00:00',11),(77,'2022-03-29 00:00:00',29),(78,'2022-03-30 00:00:00',31),(79,'2022-03-31 00:00:00',14),(80,'2022-04-01 00:00:00',22),(81,'2022-04-02 00:00:00',18),(82,'2022-04-03 00:00:00',24),(83,'2022-04-04 00:00:00',25),(84,'2022-04-05 00:00:00',8),(85,'2022-04-06 00:00:00',10),(86,'2022-04-07 00:00:00',18),(87,'2022-04-08 00:00:00',19),(88,'2022-04-09 00:00:00',31),(89,'2022-04-10 00:00:00',23),(90,'2022-04-11 00:00:00',40),(91,'2022-04-12 00:00:00',53),(92,'2022-04-13 00:00:00',23),(93,'2022-04-14 00:00:00',41),(94,'2022-04-15 00:00:00',32),(95,'2022-04-16 00:00:00',73),(96,'2022-04-17 00:00:00',142),(97,'2022-04-18 00:00:00',126),(98,'2022-04-19 00:00:00',84),(99,'2022-04-20 00:00:00',109),(100,'2022-04-21 00:00:00',39);
/*!40000 ALTER TABLE `tb_unique_view` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user_auth`
--

DROP TABLE IF EXISTS `tb_user_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_user_auth` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_info_id` int NOT NULL COMMENT '用户信息id',
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `login_type` tinyint(1) NOT NULL COMMENT '登录类型',
  `ip_address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户登录ip',
  `ip_source` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'ip来源',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `last_login_time` datetime DEFAULT NULL COMMENT '上次登录时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `username` (`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user_auth`
--

LOCK TABLES `tb_user_auth` WRITE;
/*!40000 ALTER TABLE `tb_user_auth` DISABLE KEYS */;
INSERT INTO `tb_user_auth` VALUES (1,1,'admin@qq.com','$2a$10$jQMlC70y.Sewu9kfW8gk/../7nP7jUyFcm693nMs8EvWEvyi8ac4m',1,'127.0.0.1','','2022-04-22 21:15:59','2022-04-22 21:27:44','2022-04-22 21:27:44');
/*!40000 ALTER TABLE `tb_user_auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user_info`
--

DROP TABLE IF EXISTS `tb_user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_user_info` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '邮箱号',
  `nickname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户昵称',
  `avatar` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '用户头像',
  `intro` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户简介',
  `web_site` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '个人网站',
  `is_disable` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否禁用',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user_info`
--

LOCK TABLES `tb_user_info` WRITE;
/*!40000 ALTER TABLE `tb_user_info` DISABLE KEYS */;
INSERT INTO `tb_user_info` VALUES (1,'admin@qq.com','管理员','https://images.solargod.cn/config/8bd62f3b2e7d34a4134ff2e1428ff38d.png','admin@qq.com',NULL,0,'2022-04-22 15:23:22','2022-04-22 15:23:42');
/*!40000 ALTER TABLE `tb_user_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user_role`
--

DROP TABLE IF EXISTS `tb_user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_user_role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL COMMENT '用户id',
  `role_id` int DEFAULT NULL COMMENT '角色id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=578 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user_role`
--

LOCK TABLES `tb_user_role` WRITE;
/*!40000 ALTER TABLE `tb_user_role` DISABLE KEYS */;
INSERT INTO `tb_user_role` VALUES (577,1,1);
/*!40000 ALTER TABLE `tb_user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_website_config`
--

DROP TABLE IF EXISTS `tb_website_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_website_config` (
  `id` int NOT NULL AUTO_INCREMENT,
  `config` varchar(1000) DEFAULT NULL COMMENT '配置信息',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_website_config`
--

LOCK TABLES `tb_website_config` WRITE;
/*!40000 ALTER TABLE `tb_website_config` DISABLE KEYS */;
INSERT INTO `tb_website_config` VALUES (1,'{\"alipayQRCode\":\"https://images.solargod.cn/config/a7ec7b831ed2bf40a373f820c0449a4f.png\",\"gitee\":\"https://gitee.com/\",\"github\":\"https://github.com/\",\"isChatRoom\":1,\"isCommentReview\":0,\"isEmailNotice\":1,\"isMessageReview\":0,\"isMusicPlayer\":0,\"isReward\":1,\"qq\":\"180181332\",\"socialLoginList\":[\"qq\",\"weibo\"],\"socialUrlList\":[\"qq\",\"gitee\",\"github\"],\"touristAvatar\":\"https://images.solargod.cn/config/a2ea0aab3456fd6655785f860034ff45.png\",\"userAvatar\":\"https://images.solargod.cn/config/8bd62f3b2e7d34a4134ff2e1428ff38d.png\",\"websiteAuthor\":\"程序员斜阳\",\"websiteAvatar\":\"https://images.solargod.cn/config/161b16c6343438d5104be03415215c65.svg\",\"websiteCreateTime\":\"2022-01-18\",\"websiteIntro\":\"前端、后端、服务器\",\"websiteName\":\"斜阳技术博客\",\"websiteNotice\":\"欢迎使用本博客、喜欢的话给github点个赞吧!\",\"websiteRecordNo\":\"你的备案号\",\"websocketUrl\":\"wss://你的域名\",\"weiXinQRCode\":\"https://images.solargod.cn/config/446688e857c566cd6ae81743f3098f12.jpg\"}','2022-04-21 20:31:04','2022-04-22 21:24:37');
/*!40000 ALTER TABLE `tb_website_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_website_nav`
--

DROP TABLE IF EXISTS `tb_website_nav`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_website_nav` (
  `id` int NOT NULL AUTO_INCREMENT,
  `website_name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '网站名称',
  `website_url` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `website_icon` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '网站图标',
  `tags_id` int NOT NULL COMMENT '标签id',
  `website_desc` varchar(512) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '网站描述',
  `order_num` int NOT NULL COMMENT '网站排序',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='网站导航';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_website_nav`
--

LOCK TABLES `tb_website_nav` WRITE;
/*!40000 ALTER TABLE `tb_website_nav` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_website_nav` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_website_tags`
--

DROP TABLE IF EXISTS `tb_website_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_website_tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tags_name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '标签名称',
  `order_num` int NOT NULL COMMENT '导航网站标签排序',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='网站标签';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_website_tags`
--

LOCK TABLES `tb_website_tags` WRITE;
/*!40000 ALTER TABLE `tb_website_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_website_tags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-22 21:31:47
