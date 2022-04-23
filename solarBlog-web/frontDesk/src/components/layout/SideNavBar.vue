<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    width="250"
    disable-resize-watcher
    left
    overlay-opacity="0.8"
  >
    <!-- 博主介绍 -->
    <div class="blogger-info">
      <v-avatar size="110" style="margin-bottom:0.5rem">
        <img :src="websiteAvatar" />
      </v-avatar>
    </div>
    <!-- 博客信息 -->
    <div class="blog-info-wrapper">
      <div class="blog-info-data">
        <router-link to="/archives">
          <div style="font-size: 0.875rem">文章</div>
          <div style="font-size: 1.125rem;">
            {{ this.$store.state.blogInfo.articleCount }}
          </div>
        </router-link>
      </div>
      <div class="blog-info-data">
        <router-link to="/categories">
          <div style="font-size: 0.875rem">分类</div>
          <div style="font-size: 1.125rem">
            {{ this.$store.state.blogInfo.categoryCount }}
          </div>
        </router-link>
      </div>
      <div class="blog-info-data">
        <router-link to="/tags">
          <div style="font-size: 0.875rem">标签</div>
          <div style="font-size: 1.125rem">
            {{ this.$store.state.blogInfo.tagCount }}
          </div>
        </router-link>
      </div>
    </div>
    <hr />
    <!-- 页面导航 -->
    <div class="menu-container">
      <div class="menus-item">
        <router-link to="/">
          <svg-icon icon-class="home"/>
          <span style="margin-left: 2.3rem">首页</span>
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/archives">
          <svg-icon icon-class="archive"/>
          <span style="margin-left: 2.3rem">归档</span>
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/albums">
          <svg-icon icon-class="picture"/>
          <span style="margin-left: 2.3rem">相册</span>
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/categories">
          <svg-icon icon-class="classify"/>
          <span style="margin-left: 2.3rem">分类</span>
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/tags">
          <svg-icon icon-class="tag"/>
          <span style="margin-left: 2.3rem">标签</span>
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/links">
          <svg-icon icon-class="link"/>
          <span style="margin-left: 2.3rem">友链</span>
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/siteNavigation">
          <svg-icon icon-class="siteNavigation"/>
          <span style="margin-left: 2.3rem">网站导航</span>
        </router-link>
      </div>
      <div class="menus-item">
        <router-link to="/message">
          <svg-icon icon-class="message"/>
          <span style="margin-left: 2.3rem">欢迎留言</span>
        </router-link>
      </div>
      <div class="menus-item" v-if="!this.$store.state.avatar">
        <a @click="openLogin">
          <svg-icon icon-class="user"/>
          <span style="margin-left: 2.3rem">登录</span>
        </a>
      </div>
      <div v-else>
        <div class="menus-item">
          <router-link to="/user">
            <svg-icon icon-class="user"/>
            <span style="margin-left: 2.3rem">个人中心</span>
          </router-link>
        </div>
        <div class="menus-item">
          <a @click="logout">
            <svg-icon icon-class="exit"/>
            <span style="margin-left: 2.3rem">退出登录</span>
          </a>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<style scoped>
.blogger-info {
  padding: 26px 30px 0;
  text-align: center;
}
.blog-info-wrapper {
  display: flex;
  align-items: center;
  padding: 12px 10px 0;
}
.blog-info-data {
  flex: 1;
  line-height: 2;
  text-align: center;
}
hr {
  border: 2px dashed #d2ebfd;
  margin: 20px 0;
}
.menu-container {
  padding: 0 10px 40px;
  animation: 0.8s ease 0s 1 normal none running sidebarItem;
}
.menus-item a {
  padding: 6px 30px;
  display: block;
  line-height: 2;
}
.menus-item i {
  margin-right: 2rem;
}
@keyframes sidebarItem {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

<script>
export default {
  computed: {
    websiteAvatar() {
      if (this.$store.state.avatar === null) {
        return this.$store.state.blogInfo.websiteConfig.websiteAvatar;
      } else {
        return this.$store.state.avatar;
      }
    },
    drawer: {
      set(value) {
        this.$store.state.drawer = value;
      },
      get() {
        return this.$store.state.drawer;
      }
    },
    isLogin() {
      return this.$store.state.userId;
    }
  },
  methods: {
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
          this.$toast({ type: "success", message: "注销成功", duration:100 });
        } else {
          this.$toast({ type: "error", message: data.message });
        }
      });
    }
  }
};
</script>
