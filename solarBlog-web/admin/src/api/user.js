import service from "../utils/request";

// 管理员登录
export function adminLogin(data) {
    return service({
        url: "/login",
        method: "post",
        data: data
    })
}

// 用户禁用
export function userDisable(data) {
    return service({
        url: "/admin/users/disable",
        method: "put",
        data: data
    })
}

// 编辑用户的角色信息
export function editUserRole(data) {
    return service({
        url: "/admin/users/role",
        method: "put",
        data: data
    })
}

// 获取用户列表
export function getUserList(query) {
    return service({
        url: "/admin/users",
        method: "get",
        params: query
    })
}

// 获取角色名称列表
export function getRoleName() {
    return service({
        url: "/admin/users/role",
        method: "get"
    })
}

// 获取在线用户列表
export function getOnlineUserList() {
    return service({
        url: "/admin/users/online",
        method: "get"
    })
}

// 踢出在线用户
export function removeOnlineUser(userInfoId) {
    return service({
        url: "/admin/users/"+userInfoId+"/online",
        method: "delete"
    })
}

// 修改个人信息
export function updateUserInfo(data) {
    return service({
        url: "/users/info",
        method: "put",
        data: data
    })
}

// 修改密码
export function updatePassword(data) {
    return service({
        url: "/admin/users/password",
        method: "put",
        data: data
    })
}

// 获取角色列表
export function getRoleList(query) {
    return service({
        url: "/admin/roles",
        method: "get",
        params: query
    })
}

// 获取角色资源
export function getRoleResource() {
    return service({
        url: "/admin/role/resources",
        method: "get"
    })
}

// 获取角色菜单
export function getRoleMenus() {
    return service({
        url: "/admin/role/menus",
        method: "get"
    })
}

// 删除角色
export function deleteRoles(data) {
    return service({
        url: "/admin/roles",
        method: "delete",
        data: data
    })
}

// 保存或修改角色资源
export function saveOrUpdateRoleResource(data) {
    return service({
        url: "/admin/role",
        method: "post",
        data: data
    })
}

// 保存或修改角色菜单资源
export function saveOrUpdateRoleMenu(data) {
    return service({
        url: "/admin/role",
        method: "post",
        data: data
    })
}

// 获取友链列表
export function getLinkList(query) {
    return service({
        url: "/admin/links",
        method: "get",
        params: query
    })
}

// 添加或修改友链
export function addOrEditLinks(data) {
    return service({
        url: "/admin/links",
        method: "post",
        data: data
    })
}
