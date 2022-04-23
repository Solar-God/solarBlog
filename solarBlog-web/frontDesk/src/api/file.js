import service from "../utils/request";

// 获取相册分类
export function getAlbums(query) {
    return service({
        url: "/photos/albums",
        method: "get",
        params: query
    });
}

// 获取相册里的照片
export function getAlbumsPhotos(query,route) {
    return service({
        url: "/albums/"+route+"/photos",
        method: "get",
        params: query
    });
};

