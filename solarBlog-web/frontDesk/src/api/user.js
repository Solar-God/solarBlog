import service from "../utils/request";

// 获取关于我的信息
export function getAbout(query) {
    return service({
        url: "/siteNavigation",
        method: "get",
        params: query
    });
}

// 获取友链列表
export function getLinks() {
    return service({
        url: "/links",
        method: "get"
    });
}

// 保存留言
export function saveMessage(data) {
    return service({
        url: "/messages",
        method: "post",
        data: data
    })
}

// 获取留言列表
export function getMessages() {
    return service({
        url: "/messages",
        method: "get"
    })
}

// 修改用户信息
export function updateUserInfo(data) {
    return service({
        url: "/users/info",
        method: "put",
        data: data
    })
}

// 邮箱登录
export function emailLogin(data) {
    return service({
        url: "/login",
        method: "post",
        data: data
    })
}

// 获取导航网站列表
export function getSiteNavList() {
    return service({
        url: "/siteNavs",
        method: "get"
    })
}

