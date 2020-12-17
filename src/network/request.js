import axios from 'axios'

export function request(config){
    // axios实例
    const instance = axios.create({
        baseURL : 'http://123.207.32.32:8000',
        timeout: 1000,
    });
    // 拦截器
    instance.interceptors.request.use(config => {
        console.log(config);
        return config;
    },err => {
        console.log(err);
    });
    instance.interceptors.response.use(res => {
        console.log(res);
        return res;
    },err =>{
        console.log(err);
    });

    return instance(config)

}
