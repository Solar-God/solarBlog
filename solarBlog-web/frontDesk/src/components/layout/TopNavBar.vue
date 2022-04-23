<template>
  <v-app-bar app class="nav" :hide-on-scroll="hideScroll" flat height="70">
    <!-- 手机端导航栏 -->
    <div class="d-md-none nav-mobile-container">
      <div style="display: flex;justify-content: space-between;margin-top: 13px">
        <div style="font-size:18px;font-weight:bold">
          <a @click="openDrawer" style="font-size:20px">
            <svg-icon icon-class="sidebar-right" style="height: 1.3rem;width: 1.3rem;color: black"/>
          </a>
        </div>
        <div>
          <router-link
            to="/"
            style="font-size:18px;font-weight:bold;color: black"
          >
            <svg-icon icon-class="titleLogo" style="width: 9rem;height: 2.5rem;color: black"/>
          </router-link>
        </div>
        <div>
          <a @click="openSearch"><svg-icon icon-class="search" style="margin-left:1rem;height: 1.3rem;width: 1.3rem"/></a>
        </div>
      </div>
      <div>
        <!--滚动字幕-->
        <marquee
          direction="left"
          onMouseOut="this.start()"
          onMouseOver="this.stop()"
        >
          <strong>
            <svg-icon icon-class="trumpet"></svg-icon>
            <font size="3" style="color: black">
              :欢迎您的到来！ 如果您遇到任何问题，请联系博主qq:
              <font style="color:#FF0000;">180181332</font>
            </font>
          </strong>
        </marquee>
      </div>
    </div>
    <!-- 电脑导航栏 -->
    <div class="d-md-block d-none nav-container">
      <div style="display: flex;justify-content: space-between;">
        <div class="float-left blog-title">
          <router-link to="/">
            <svg-icon icon-class="titleLogo" style="width: 9rem;height: 3rem;color: black;"/>
          </router-link>
        </div>
        <div class="float-right nav-title">
          <div class="menus-item">
            <a class="menu-btn" @click="openSearch">
              <svg-icon icon-class="search"/> 搜索
            </a>
          </div>
          <div class="menus-item">
            <router-link class="menu-btn" to="/">
              <svg-icon icon-class="home"/> 首页
            </router-link>
          </div>
          <div class="menus-item">
            <a class="menu-btn">
              <svg-icon icon-class="article"/> 文章
              <svg-icon icon-class="arrowDown" style="width: 0.7rem;height: 0.7rem"/>
            </a>
            <ul class="menus-submenu">
              <li>
                <router-link to="/archives">
                  <svg-icon icon-class="archive"/> 归档
                </router-link>
              </li>
              <li>
                <router-link to="/categories">
                  <svg-icon icon-class="classify"/> 分类
                </router-link>
              </li>
              <li>
                <router-link to="/tags">
                  <svg-icon icon-class="tag"/> 标签
                </router-link>
              </li>
            </ul>
          </div>
          <div class="menus-item">
            <a class="menu-btn">
              <svg-icon icon-class="function"/> 娱乐
              <svg-icon icon-class="arrowDown" style="width: 0.7rem;height: 0.7rem"/>
            </a>
            <ul class="menus-submenu">
              <li>
                <router-link to="/albums">
                  <svg-icon icon-class="picture"/> 相册
                </router-link>
              </li>
              <li>
                <a href="https://www.solaryyds.com/images.html" target="_blank">
                  <svg-icon icon-class="picture"/> 壁纸
                </a>
              </li>
              <li>
                <a href="https://www.solaryyds.com/videos.html" target="_blank">
                  <svg-icon icon-class="video"/> 视频
                </a>
              </li>
              <li>
                <a href="https://www.solaryyds.com/live.html" target="_blank">
                  <svg-icon icon-class="live"/> 直播
                </a>
              </li>
            </ul>
          </div>
          <div class="menus-item">
            <router-link class="menu-btn" to="/links">
              <svg-icon icon-class="link"/> 友链
            </router-link>
          </div>
          <div class="menus-item">
            <router-link class="menu-btn" to="/message">
              <svg-icon icon-class="message"/> 留言
            </router-link>
          </div>
          <div class="menus-item">
            <router-link class="menu-btn" to="/siteNavigation">
              <svg-icon icon-class="siteNavigation"/> 网站导航
            </router-link>
          </div>
          <div class="menus-item">
            <a
              class="menu-btn"
              v-if="!this.$store.state.avatar"
              @click="openLogin"
            >
                <svg-icon icon-class="user"/> 登录
            </a>
            <template v-else>
              <img
                class="user-avatar"
                :src="this.$store.state.avatar"
                height="30"
                width="30"
              />
              <ul class="menus-submenu">
                <li>
                  <router-link to="/user">
                    <svg-icon icon-class="user"/> 个人中心
                  </router-link>
                </li>
                <li>
                  <a @click="logout">
                      <svg-icon icon-class="exit"/> 退出
                  </a>
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
      <div style="position:absolute;margin-left:9rem;top:2.5rem;width: 100%;">
        <!--滚动字幕-->
        <marquee
                direction="left"
                onMouseOut="this.start()"
                onMouseOver="this.stop()"
        >
          <strong>
            <svg-icon icon-class="trumpet"></svg-icon>
            <font size="3" style="color: black">
              :欢迎您的到来！ 如果您遇到任何问题，请联系博主qq:
              <font style="color:#FF0000;">180181332</font>
            </font>
          </strong>
        </marquee>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: function() {
    return {
      navClass: "",
      screenWidth: document.documentElement.clientWidth, //获取屏幕宽度
      screenHeight: document.documentElement.clientHeight, //获取屏幕高度
      hideScroll: false,
    };
  },
  mounted() {
    const that = this;
    window.addEventListener("scroll", that.scroll);
  },
  created() {
    this.handleHideScroll();
  },
  methods: {
    handleHideScroll() {
      const that = this
      window.fullHeight = document.documentElement.clientHeight;
      window.fullWidth = document.documentElement.clientWidth;
      that.screenHeight = window.fullHeight; // 高
      that.screenWidth = window.fullWidth; // 宽
      // console.log("实时屏幕高度：", that.screenHeight);
      // console.log("实时屏幕宽度：", that.screenWidth);
      if (that.screenWidth > 760) {
        that.hideScroll = true
      } else {
        that.hideScroll = false
      }
    },
    scroll() {
      const that = this;
      let scrollTop =
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        // that.navClass = "nav-fixed";
        that.navClass = "nav";
      } else {
        that.navClass = "nav";
      }
    },
    openSearch() {
      this.$store.state.searchFlag = true;
    },
    openDrawer() {
      this.$store.state.drawer = true;
    },
    openLogin() {
      this.$store.state.loginFlag = true;
    },
    logout() {
      //如果在个人中心则跳回上一页
      if (this.$route.path === "/user") {
        this.$router.go(-1);
      }
      this.axios.get("/api/logout").then(({ data }) => {
        if (data.flag) {
          this.$store.commit("logout");
          this.$toast({ type: "success", message: "退出成功" });
        } else {
          this.$toast({ type: "error", message: data.message });
        }
      });
    }
  },
  computed: {
    avatar() {
      return this.$store.state.avatar;
    },
    blogInfo() {
      return this.$store.state.blogInfo;
    }
  }
};
</script>

<style scoped>
i {
  margin-right: 4px;
  color: black;
}
ul {
  list-style: none;
}
.nav {
  background: rgba(0, 0, 0, 0) !important;
}
.nav a {
  color: black !important;
}
.nav .menu-btn {
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
}
.nav .blog-title a {
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
}
/*.theme--light.nav-fixed {*/
/*  background: rgba(255, 255, 255, 0.8) !important;*/
/*  box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.6);*/
/*}*/
/*.theme--dark.nav-fixed {*/
/*  color: rgba(255, 255, 255, 0.8) !important;*/
/*}*/
/*.theme--dark.nav-fixed a {*/
/*  color: rgba(255, 255, 255, 0.8) !important;*/
/*}*/
/*.theme--light.nav-fixed a {*/
/*  color: #4c4948 !important;*/
/*}*/

/*.nav-fixed .menus-item a,*/
/*.nav-fixed .blog-title a {*/
/*  text-shadow: none;*/
/*}*/

.nav-container {
  font-size: 14px;
  width: 100%;
  height: 100%;
  display: flex;
}

.nav-mobile-container {
  width: 100%;
}
.blog-title,
.nav-title {
  display: flex;
  align-items: center;
  height: 100%;
}
.nav-title a {
  color: black !important;
}
.blog-title a {
  font-size: 18px;
  font-weight: bold;
}
.menus-item {
  position: relative;
  display: inline-block;
  margin: 0 0 0 0.875rem;
}
.menus-item a {
  transition: all 0.2s;
}
/*.nav-fixed .menu-btn:hover {*/
/*  color: #49b1f5 !important;*/
/*}*/
.menu-btn:hover:after {
  width: 100%;
}
.menus-item a:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  z-index: -1;
  width: 0;
  height: 3px;
  background-color: #80c8f8;
  content: "";
  transition: all 0.3s ease-in-out;
}
.user-avatar {
  cursor: pointer;
  border-radius: 50%;
}
.menus-item:hover .menus-submenu {
  display: block;
  z-index: 20;  /**解决层级覆盖问题*/
}
.menus-submenu {
  position: absolute;
  display: none;
  right: 0;
  width: max-content;
  margin-top: 3px;
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  animation: submenu 0.3s 0.1s ease both;
}
.menus-submenu:before {
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;
  height: 20px;
  content: "";
}
.menus-submenu a {
  line-height: 2;
  color: #4c4948 !important;
  text-shadow: none;
  display: block;
  padding: 6px 14px;
}
.menus-submenu a:hover {
  background: #4ab1f4;
}
@keyframes submenu {
  0% {
    opacity: 0;
    filter: alpha(opacity=0);
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    filter: none;
    transform: translateY(0);
  }
}
</style>
