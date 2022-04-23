import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchFlag: false,
    loginFlag: false,
    registerFlag: false,
    forgetFlag: false,
    emailFlag: false,
    drawer: false,
    loginUrl: "",
    userId: null,
    avatar: null,
    nickname: null,
    intro: null,
    webSite: null,
    loginType: null,
    email: null,
    articleLikeSet: [],
    commentLikeSet: [],
    blogInfo: {
      articleCount: 3,
      categoryCount: 3,
      pageList: [{id: 1, pageCover: "", pageLabel: "home", pageName: "首页"}],
      tagCount: 3,
      viewsCount: "525",
      websiteConfig: {
        alipayQRCode: "",
        gitee: "https://gitee.com/",
        github: "https://github.com/",
        isChatRoom: 1,
        isCommentReview: 1,
        isEmailNotice: 1,
        isMessageReview: 1,
        isMusicPlayer: 0,
        isReward: 1,
        qq: "180181332",
        socialLoginList: ["qq","weibo"],
        socialUrlList: ["qq","gitee","github"],
        touristAvatar: "",
        userAvatar: "",
        websiteAuthor: "罗小黑",
        websiteAvatar: "",
        websiteCreateTime: "2021-01-18",
        websiteIntro: "编程技术分享！",
        websiteName: "程序员斜阳",
        websiteNotice: "目前网站处于测试阶段，有bug请及时反馈！",
        websiteRecordNo: "备案号：琼ICP备2021009065号-1",
        websocketUrl: "",
        weiXinQRCode: ""
      }
    }
  },
  mutations: {
    login(state, user) {
      state.userId = user.userInfoId;
      state.avatar = user.avatar;
      state.nickname = user.nickname;
      state.intro = user.intro;
      state.webSite = user.webSite;
      state.articleLikeSet = user.articleLikeSet ? user.articleLikeSet : [];
      state.commentLikeSet = user.commentLikeSet ? user.commentLikeSet : [];
      state.email = user.email;
      state.loginType = user.loginType;
    },
    logout(state) {
      state.userId = null;
      state.avatar = null;
      state.nickname = null;
      state.intro = null;
      state.webSite = null;
      state.articleLikeSet = [];
      state.commentLikeSet = [];
      state.email = null;
      state.loginType = null;
    },
    saveLoginUrl(state, url) {
      state.loginUrl = url;
    },
    saveEmail(state, email) {
      state.email = email;
    },
    updateUserInfo(state, user) {
      state.nickname = user.nickname;
      state.intro = user.intro;
      state.webSite = user.webSite;
    },
    savePageInfo(state, pageList) {
      state.pageList = pageList;
    },
    updateAvatar(state, avatar) {
      state.avatar = avatar;
    },
    checkBlogInfo(state, blogInfo) {
      state.blogInfo = blogInfo;
    },
    closeModel(state) {
      state.registerFlag = false;
      state.loginFlag = false;
      state.searchFlag = false;
      state.emailFlag = false;
    },
    articleLike(state, articleId) {
      var articleLikeSet = state.articleLikeSet;
      if (articleLikeSet.indexOf(articleId) !== -1) {
        articleLikeSet.splice(articleLikeSet.indexOf(articleId), 1);
      } else {
        articleLikeSet.push(articleId);
      }
    },
    commentLike(state, commentId) {
      var commentLikeSet = state.commentLikeSet;
      if (commentLikeSet.indexOf(commentId) !== -1) {
        commentLikeSet.splice(commentLikeSet.indexOf(commentId), 1);
      } else {
        commentLikeSet.push(commentId);
      }
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});
