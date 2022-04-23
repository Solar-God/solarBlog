import Layout from "@/layout/index.vue";
import router from "../../router";
import store from "../../store";
import axios from "axios";
import Vue from "vue";

export function generaMenu() {
  // 查询用户菜单
  axios.get("/api/admin/user/menus").then(({ data }) => {
    if (data.flag) {
      var userMenuList = data.data;
      userMenuList.forEach(item => {
        if (item.icon != null) {
          item.icon = "iconfont " + item.icon;
        }
        if (item.component == "Layout") {
          item.component = Layout;
        }
        if (item.children && item.children.length > 0) {
          item.children.forEach(route => {
            route.icon = "iconfont " + route.icon;
            route.component = loadView(route.component);
          });
        }
      });
      // 添加侧边栏菜单
      store.commit("saveUserMenuList", userMenuList);
      // 添加菜单到路由
      router.addRoutes(userMenuList);
    } else {
      Vue.prototype.$message.error(data.message);
      router.push({ path: "/login" });
    }
  });
}

export const loadView = view => {
  // 路由懒加载
  return resolve => require([`@/views${view}`], resolve);
};
