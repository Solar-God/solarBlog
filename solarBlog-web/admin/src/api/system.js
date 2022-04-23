import service from "../utils/request";

// 获取接口列表
export function getInterfaceList(query) {
    return service({
        url: "/admin/resources",
        method: "get",
        params: query
    })
}

// 是否公开接口
export function isPublicInterface(data) {
    return service({
        url: "/admin/resources",
        method: "post",
        data: data
    })
}

// 删除接口
export function deleteInterface(id) {
    return service({
        url: "/admin/resources/"+id,
        method: "delete"
    })
}

// 添加或修改接口
export function addOrEditInterface(data) {
    return service({
        url: "/admin/resources",
        method: "post",
        data: data
    })
}

// 获取页面列表
export function getPageList() {
    return service({
        url: "/admin/pages",
        method: "get"
    })
}

// 添加或者编辑页面
export function addOrEditPage(data) {
    return service({
        url: "/admin/pages",
        method: "post",
        data: data
    })
}

// 删除页面
export function deletePage(id) {
    return service({
        url: "/admin/pages/"+id,
        method: "delete",
    })
}

// 获取系统菜单列表
export function getMenuList(query) {
    return service({
        url: "/admin/menus",
        method: "get",
        params: query
    })
}

// 新增或修改系统菜单
export function addOrUpdateMenu(data) {
    return service({
        url: "/admin/menus",
        method: "post",
        data: data
    })
}

// 删除系统菜单
export function deleteMenu(id) {
    return service({
        url: "/admin/menus/" + id,
        method: "delete"
    })
}

// 获取系统日志列表
export function getLogsList(query) {
    return service({
        url: "/admin/operation/logs",
        method: "get",
        params: query
    })
}

// 删除系统日志
export function deleteLogs(data) {
    return service({
        url: "/admin/operation/logs",
        method: "delete",
        data: data
    })
}

// 查看登录日志列表
export function getLoginLogs(query) {
    return service({
        url: "/admin/login/logs",
        method: "get",
        params: query
    })
}

// 获取后台网站导航列表
export function getAdminSiteNavList(query) {
    return service({
        url: "/admin/siteNavs",
        method: "get",
        params: query
    })
}

// 保存或修改网站导航
export function saveOrUpdateSiteNav(data) {
    return service({
        url: "/admin/siteNavs",
        method: "post",
        data: data
    })
}

// 删除网站导航
export function deleteSiteNav(data) {
    return service({
        url: "/admin/siteNavs",
        method: "delete",
        data: data,
    })
}

// 获取后台网站导航标签列表
export function getAdminSiteTagsList(query) {
    return service({
        url: "/admin/siteNavTags",
        method: "get",
        params: query
    })
}

// 添加或修改网站导航标签
export function saveOrUpdateSiteNavTags(data) {
    return service({
        url: "/admin/siteNavTags",
        method: "post",
        data: data
    })
}

// 删除导航网站标签
export function deleteSiteTags(data) {
    return service({
        url: "/admin/siteNavTags",
        method: "delete",
        data: data,
    })
}

// 获取聊天室的历史聊天记录
export function getChatRecordList(query) {
    return service({
        url: "/admin/chatList",
        method: "get",
        params: query
    })
}

// 删除聊天室的历史聊天记录
export function deleteChatRecord(data) {
    return service({
        url: "admin/chatRecord",
        method: "delete",
        data: data
    })
}
