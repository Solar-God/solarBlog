import axios from "axios";
import Vue from "vue";


// 封装axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 60 * 3 // 请求超时时间
});

// 响应拦截
service.interceptors.response.use(res =>{
    console.log('res',res)
    if (res.data.code === 50000) {
        Vue.prototype.$toast({
            type: "error",
            message: "系统异常"
        });
    } else {
        return res.data;
    }
})

export default service;
