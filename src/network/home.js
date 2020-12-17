import {request} from './request';
// 仅面向主页的网络请求对象
export function getHomeMultiData(){
    return request({
        url: '/home/multidata'
    })
}