import axios from 'axios'

export function Request(config){
    const instance=axios.create({
        baseURL: 'https://localhost:5001',
        headers:{
            'Access-Control-Allow-Origin' : 'http://localhost:5001'
        },
        timeout: 10000
    })

     // 2.axios的拦截器
     // 2.1.请求拦截的作用
     instance.interceptors.request.use(config=>{
         return config //正常就继续走
     },err=>{

     })
     //相应拦截
     instance.interceptors.response.use(res=>{
         return res.data;
     },err=>{
        console.log(err);
     })

    // 3.发送真正的网络请求
    return instance(config)
}