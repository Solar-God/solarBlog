## 博客介绍

<p align=center>
  <a href="https://www.solargod.cn">
    <img src="https://images.solargod.cn/avatar.png" alt="东君博客" style="border-radius: 50%;width:120px;heigth:120px">
  </a>
</p>



<p align=center>
   基于Springboot + Vue 开发的前后端分离博客(PC端自适应+移动端微信小程序+移动端App)
</p>



<p align="center">
   <a target="_blank" href="https://github.com/X1192176811/blog">
      <img src="https://img.shields.io/hexpm/l/plug.svg"/>
      <img src="https://img.shields.io/badge/JDK-1.8+-green.svg"/>
      <img src="https://img.shields.io/badge/springboot-2.4.2.RELEASE-green"/>
      <img src="https://img.shields.io/badge/vue-2.5.17-green"/>
      <img src="https://img.shields.io/badge/mysql-8.0.20-green"/>
      <img src="https://img.shields.io/badge/mybatis--plus-3.4.0-green"/>
      <img src="https://img.shields.io/badge/redis-6.0.5-green"/>
      <img src="https://img.shields.io/badge/elasticsearch-7.9.2-green"/>
      <img src="https://img.shields.io/badge/rabbitmq-3.8.5-green"/>
      <img src="https://img.shields.io/badge/uniapp-2.0.0-green"/>
   </a>
</p>


​				[在线地址](#在线地址) | [目录结构](#目录结构) | [项目特点](#项目特点) | [技术介绍](#技术介绍) | [运行环境](#运行环境) | [开发环境](#开发环境) | [项目截图](#项目截图) | [快速开始](#快速开始) | [注意事项](#注意事项) | [项目总结](#项目总结) | [技术交流群](#技术交流群)



## 在线地址

- PC端：

​	**前台链接：** [www.solargod.cn](https://www.solargod.cn)

​	**后台链接：** [admin.solargod.cn](https://admin.solargod.cn)

- 移动端：

​	**微信小程序:** 微信搜索东君博客

​	**App:**   [www.solargod.cn/app-download](https://www.solargod.cn/app-download/)

测试账号：test@qq.com，密码：123456，可登入后台查看。

**Github地址：** [https://github.com/Solar-God/solarBlog](https://github.com/Solar-God/solarBlog)

**Gitee地址：** [https://gitee.com/solargod/solarBlog](https://gitee.com/solargod/solarBlog)

您的star是我坚持的动力，感谢大家的支持，欢迎提交pr共同改进项目。

## 目录结构

PC端项目位于solarBlog-web下，frontDesk为前台，admin为后台。

移动端项目位于solarBlog-mobile下，可打包成微信小程序、qq小程序、App。

后端项目位于solarBlog-server下。

SQL文件位于根目录mysql下的mysql8-blog.sql，需要MYSQL8以上版本。

可直接导入该项目于本地，修改后端配置文件中的数据库等连接信息，项目中使用到的关于阿里云功能和第三方授权登录等需要自行开通。

当你克隆项目到本地后可使用邮箱账号：admin@qq.com，密码：123456 进行登录，也可自行注册账号并将其修改为admin角色。

本地访问接口文档地址：[http://127.0.0.1:8080/doc.html](http://127.0.0.1:8080/doc.html)

**ps：请先运行后端项目，再启动前端项目，前端项目配置由后端动态加载。** 

```
solarBlog-server
├── annotation    --  自定义注解
├── aspect        --  aop模块
├── config        --  配置模块
├── constant      --  常量模块
├── consumer      --  MQ消费者模块
├── controller    --  控制器模块
├── dao           --  框架核心模块
├── dto           --  dto模块
├── enums         --  枚举模块
├── exception     --  自定义异常模块
├── handler       --  处理器模块（扩展Security过滤器，自定义Security提示信息等）
├── service       --  服务模块
├── strategy      --  策略模块（用于扩展第三方登录，搜索模式，上传文件模式等策略）
├── util          --  工具类模块
└── vo            --  vo模块
```

## 项目特点

- 前台参考"Hexo"的"Butterfly"设计，美观简洁，响应式体验好。
- 后台参考"element-admin"设计，侧边栏，历史标签，面包屑自动生成。
- 采用Markdown编辑器，写法简单。
- 评论支持表情、GIF动图输入回复等，样式参考Valine。
- 前后端分离部署，适应当前潮流。
- 接入第三方登录，减少注册成本。
- 留言采用弹幕墙，更加炫酷。
- 支持代码高亮和复制，图片预览，深色模式等功能，提升用户体验。
- 搜索文章支持高亮分词，响应速度快。
- 新增文章目录、推荐文章等功能，优化用户体验。
- 新增在线聊天室，支持撤回、语音输入、统计未读数量等功能。
- 新增aop注解实现操作日志功能。 
- 支持动态权限修改，采用RBAC模型，前端菜单和后台权限实时更新。
- 后台管理支持修改背景图片，博客配置等信息，操作简单，支持上传相册。
- 代码支持多种搜索模式（Elasticsearch或MYSQL），支持多种上传模式（OSS或本地），可支持配置。Elasticsearch占内存较高，如果服务器配置太低，不建议使用。
- 新增网站导航功能，页面优雅美观。可自行添加自己常用的网站进行分类和排序。
- 新增聊天管理功能，方便清理垃圾聊天内容。
- 新增登录日志功能，随时查看用户的登录信息。
- 前台页面重新布局重构，页面布局更加简洁，首页加载速度更快。
- 前台首页文章列表顶部新增滚动消息，超级炫酷。
- 新增了监控用户是否授权的功能、增加了用户的体验性。
- 增加图片删除后也将该路径的图片删除的功能、大大提高了文件存储的利用率。
- 将接口进行**axios**二次封装、更利于接口的请求和响应。
- 新增本博客配套的**微信小程序**，可随时用手机浏览文章。并且接入微信登录，减少注册成本。
- **微信小程序**新增每日新闻热搜功能、可随时查看热搜。
- 新增本博客配套的**App**，同时接入qq、微博登录，使用更加方便。
- 代码遵循阿里巴巴开发规范，利于开发者学习。

## 技术介绍

**前端：** vue + vuex + vue-router + axios + vuetify + element + echarts + uniapp + uview + Html + Css + JavaScript

**后端：** SpringBoot + nginx + docker + SpringSecurity + Swagger2 + MyBatisPlus + Mysql + Redis + elasticsearch + RabbitMQ + MaxWell + Websocket

**其他：** 接入QQ，微博、微信第三方登录，接入腾讯云人机验证、websocket

## 运行环境

**服务器：** 腾讯云4核4G CentOS7.6

**对象存储：** 阿里云OSS

这套搭配响应速度非常快，可以做到响应100ms以下。

**最低配置：** 1核2G服务器（关闭ElasticSearch）

## 开发环境

|开发工具|说明|
|-|-|
|IDEA|Java开发工具IDE|
|VSCode|Vue开发工具IDE|
|Navicat|MySQL远程连接工具|
|Another Redis Desktop Manager|Redis远程连接工具|
|X-shell|Linux远程连接工具|
|Xftp|Linux文件上传工具|
|微信开发者工具|微信开发者工具|
|HbuilderX|移动端开发工具|

|开发环境|版本|
|-|-|
|JDK|1.8|
|MySQL|8.0.20|
|Redis|6.0.5|
|Elasticsearch|7.9.2|
|RabbitMQ|3.8.5|

## 项目截图

![blog-frontDesk.png](https://www.solargod.cn/images/blog-frontDesk.png)

![blog-article.png](https://www.solargod.cn/images/blog-article.png)

![blog-admin.png](https://www.solargod.cn/images/blog-admin.png)

## 快速开始

### Linux安装项目的Docker环境

详见文章[Linux安装Docker和运行环境](https://www.solargod.cn/articles/73)

详见文章[Docker安装运行环境](https://www.solargod.cn/articles/121)

### 项目配置及第三方授权申请教程

详见文章[项目配置及第三方授权申请教程](https://www.solargod.cn/articles/123)

### 后端项目部署

详见文章[后端项目部署教程](https://www.solargod.cn/articles/74)

### 前端项目部署

详见文章[前端项目部署教程](https://www.solargod.cn/articles/75)

### 全站https配置

详见文章[全站https配置教程](https://www.solargod.cn/articles/122)

## 注意事项

- 项目拉下来运行后，可到后台管理页面网站配置处修改博客相关信息.
- 邮箱配置，第三方授权配置需要自己申请。
- ElasticSearch需要自己先创建索引，项目运行环境教程中有介绍。

## 项目总结

- PC端新增了一些实用的功能，比如网站导航、聊天管理、登录日志等等。本博客没有太多的炫酷图片，减少了大量的资源加载。
- 移动端由uniapp开发而成，接入了qq、微信、微博登录，重写了整个后端的登录模块，保证了PC端和移动端用户的唯一性。
- 本博客所用的技术栈覆盖的也比较广，适合初学者学习。主要难点在于权限管理、第三方登录、websocket、登录日志这块。做的不好的地方请大家见谅，有问题的或者有好的建议可以私聊联系我。

## 技术交流群

![博客技术交流群聊二维码.png](https://www.solargod.cn/images/qqGroup.png)





