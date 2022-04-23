<template>
  <div>
    <v-card class="blog-container">
      <div>
        <span class="info-title">基本信息</span>
      </div>
      <v-row class="info-wrapper">
        <v-col md="3" cols="12">
          <button id="pick-avatar">
            <v-avatar size="140">
              <img :src="this.$store.state.avatar" />
            </v-avatar>
          </button>
          <avatar-cropper
            @uploaded="uploadAvatar"
            trigger="#pick-avatar"
            upload-url="/api/users/avatar"
          />
        </v-col>
        <v-col md="7" cols="12">
          <div class="mt-7 binding">
            <label>昵称：</label>
            <input type="text" v-model="userInfo.nickname" placeholder="请输入您的昵称" maxlength="10">
          </div>
          <div class="mt-7 binding">
            <label>个人网站：</label>
            <input type="text" v-model="userInfo.webSite" placeholder="http://你的网址">
          </div>
          <div class="mt-7 binding">
            <label>简介：</label>
            <input type="text" v-model="userInfo.intro" placeholder="介绍下自己吧！" maxlength="19">
          </div>
          <div v-if="loginType !== 0" class="mt-7 binding">
              <label>邮箱号：</label>
              <input type="text" v-model="email" placeholder="请绑定邮箱！">
            <div>
              <v-btn v-if="email" text small @click="openEmailModel">
                修改绑定
              </v-btn>
              <v-btn v-else text small @click="openEmailModel">
                绑定邮箱
              </v-btn>
            </div>
          </div>
          <v-btn @click="updateUserInfo" outlined class="mt-5">修改</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import AvatarCropper from "vue-avatar-cropper";
import {updateUserInfo} from "../../api/user";
export default {
  components: { AvatarCropper },
  data: function() {
    return {
      userInfo: {
        nickname: this.$store.state.nickname,
        intro: this.$store.state.intro,
        webSite: this.$store.state.webSite,
        loginType: this.$store.state.loginType
      }
    };
  },
  methods: {
    updateUserInfo() {
      updateUserInfo(this.userInfo).then(res => {
        console.log("res",res)
        if (res.flag) {
          this.$store.commit("updateUserInfo", this.userInfo);
          this.$toast({ type: "success", message: "修改成功" });
        } else {
          this.$toast({ type: "error", message: res.message });
        }
      });
    },
    uploadAvatar(data) {
      if (data.flag) {
        this.$store.commit("updateAvatar", data.data);
        this.$toast({ type: "success", message: "上传成功" });
      } else {
        this.$toast({ type: "error", message: data.message });
      }
    },
    openEmailModel() {
      this.$store.state.emailFlag = true;
    }
  },
  computed: {
    email() {
      return this.$store.state.email;
    },
    loginType() {
      return this.$store.state.loginType;
    },
  }
};
</script>

<style scoped lang="scss">
.info-title {
  font-size: 1.25rem;
  font-weight: bold;
}
.info-wrapper {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
#pick-avatar {
  outline: none;
  position: relative;
}
#pick-avatar:hover:after{
  content: '+';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: #eee;
  background: rgba(0, 0, 0, 0.5);
  font-size: 24px;
  -webkit-font-smoothing: antialiased; /*chrome、safari*/
  -moz-osx-font-smoothing: grayscale; /*firefox*/
  cursor: pointer;
  line-height: 140px;
  border-radius: 50%;
}
.binding {
  display: flex;
  align-items: center;

  input{
    border: 0.1rem solid #bfcbd9;
    height: 2.3rem;
    width: 13rem;
    border-radius: 0.9rem;
    color: #1f2d3d;
    text-align: center;
  }

  input:focus{
    border: 0.1rem solid #03a9f4;
    border-radius: 0.9rem;
    outline: none;
  }

  label{
    width: 5rem;
    text-align: right;
  }
}
  .mt-5{
    float: right;
  }
</style>
