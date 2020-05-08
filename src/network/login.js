import {Request} from './request'

export function postLogin(Id,pwd){
    return Request({
        url:'/login',
        method:"post",
        params:{
            Id,pwd
        }
    })
}