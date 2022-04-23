import service from "../utils/request";

// 删除标签
export function deleteTag(data) {
    return service({
        url: "/admin/tags",
        method: "delete",
        data: data
    })
}

// 获取标签列表
export function getTagList() {
    return service({
        url: "/admin/tags",
        method: "get"
    })
}

// 添加或编辑标签
export function addOrEditTag(data) {
    return service({
        url: "/admin/tags",
        method: "post",
        data: data
    })
}

// 删除留言
export function deleteMessage(data) {
    return service({
        url: "/admin/messages",
        method: "delete",
        data: data
    })
}

// 检查留言是否通过
export function updateMessageReview(data) {
    return service({
        url: "/admin/messages/review",
        method: "put",
        data: data
    })
}

// 获取留言列表
export function getMessageList(query) {
    return service({
        url: "/admin/messages",
        method: "get",
        params: query
    })
}

// 检查评论是否通过
export function updateCommentReview(data) {
    return service({
        url: "/admin/comments/review",
        method: "put",
        data: data
    })
}

// 删除评论
export function deleteComments(data) {
    return service({
        url: "/admin/comments",
        method: "delete",
        data: data
    })
}

// 获取评论列表
export function getCommentsList(query) {
    return service({
        url: "/admin/comments",
        method: "get",
        params: query
    })
}

// 获取分类列表
export function getCategoryList(query) {
    return service({
        url: "/admin/categories",
        method: "get",
        params: query
    })
}

// 添加或修改分类
export function addOrEditCategory(data) {
    return service({
        url: "/admin/categories",
        method: "post",
        data: data
    })
}

// 删除分类
export function deleteCategory(data) {
    return service({
        url: "/admin/categories",
        method: "delete",
        data: data
    })
}

// 批量逻辑删除文章
export function logicDeleteArticles(data) {
    return service({
        url: "/admin/articles",
        method: "put",
        data: data
    })
}

// 批量彻底删除文章
export function deleteArticles(data) {
    return service({
        url: "/admin/articles",
        method: "delete",
        data: data
    })
}

// 置顶文章
export function articleTop(data) {
    return service({
        url: "/admin/articles/top",
        method: "put",
        data: data
    })
}

// 获取文章列表
export function getArticleList(query) {
    return service({
        url: "/admin/articles",
        method: "get",
        params: query
    })
}
