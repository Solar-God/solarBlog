<template>
  <div class="rightSide" :style="isShow">
    <div :class="'rightSide-config-hide ' + isOut">
      <svg-icon @click="check"
                :class="icon"
                :icon-class="icon"
                style="height: 2rem;
                width: 2rem;
                cursor: pointer;
                margin: 0.5rem 0;">
      </svg-icon>
    </div>
      <svg-icon @click="backTop"
                class="backTop"
                icon-class="backTop"
                style="height: 2rem;
                width: 2rem;
                cursor: pointer;
                margin: 0.5rem 0;">
      </svg-icon>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  data: function() {
    return {
      isShow: "",
      isOut: "rightSide-in",
      icon: "moon"
    };
  },
  methods: {
    // 回到顶部方法
    backTop() {
      window.scrollTo({
        behavior: "smooth",
        top: 0
      });
    },
    // 为了计算距离顶部的高度，当高度大于100显示回顶部图标，小于100则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 20) {
        that.isShow = "opacity: 1;transform: translateX(-38px);";
      } else {
        that.isShow = "";
      }
    },
    show() {
      const flag = this.isOut === "rightSide-out";
      this.isOut = flag ? "rightSide-in" : "rightSide-out";
    },
    check() {
      const flag = this.icon === "moon"
      this.icon = flag ? "sun" : "moon"
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped>
.rightSide {
  z-index: 4;
  position: fixed;
  right: -38px;
  bottom: 85px;
  transition: all 0.5s;
}
.rightSide-config-hide {
  transform: translate(35px, 0);
}
.rightSide-out {
  animation: rightsideOut 0.3s;
}
.rightSide-in {
  transform: translate(0, 0) !important;
  animation: rightsideIn 0.3s;
}
.rightSide-icon,
.setting-container {
  display: block;
  margin-bottom: 2px;
  width: 30px;
  height: 30px;
  background-color: #49b1f5;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  cursor: pointer;
}
.rightSide-icon:hover,
.setting-container:hover {
  background-color: #ff7242;
}
.setting-container i {
  display: block;
  animation: turn-around 2s linear infinite;
}
@keyframes turn-around {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rightSideOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(30px, 0);
  }
}
@keyframes rightSideIn {
  0% {
    transform: translate(30px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
.moon:hover {
  background-color: steelblue;
}
.sun:hover{
  transform: scale(1.2);
  transition: transform 0.3s;
}
.backTop:hover {
  transform: scale(1.3);
  transition: transform 0.3s;
}
</style>
