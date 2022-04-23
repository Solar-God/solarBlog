import service from "../utils/request";

// 获取归档列表
export function getArchives(query) {
    return service({
        url: "/articles/archives",
        method: "get",
        params: query
    });
}

// 查询文章列表
export function getArticles(query) {
    return service({
        url: "/articles",
        method: "get",
        params: query
    });
}

// 查询文章内容
export function getArticle(route) {
    return service({
        url: route,
        method: "get"
    });
}

// 根据文章id查询评论列表
export function getComments(query) {
    return service({
        url: "/comments",
        method: "get",
        params: query
    });
}

// 给文章点赞
export function addLike(articleId) {
    return service({
        url: "/articles/"+articleId+"/like",
        method: 'post',
    })
}

// 根据分类列表
export function getCategories() {
    return service({
        url: "/categories",
        method: "get"
    });
}

// 根据分类查询文章列表
export function getCategoryArticles(query) {
    return service({
        url: "/articles/condition",
        method: "get",
        params: query
    });
}

// 获取标签列表
export function getTags() {
    return service({
        url: "/tags",
        method: "get"
    });
}
