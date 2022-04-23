import axios from "axios";
import Vue from "vue";
import router from "../router";


// 封装axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 1000 * 60 * 3 // 请求超时时间
});

// 响应拦截器
service.interceptors.response.use(response => {
        switch (response.data.code) {
            case 40001:
                Vue.prototype.$message({
                    type: "error",
                    message: response.data.message
                });
                router.push({ path: "/login" });
                break;
            case 50000:
                Vue.prototype.$message({
                    type: "error",
                    message: response.data.message
                });
                break;
        }
        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default service
