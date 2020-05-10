import {Request} from './request'


export function getAllPost(pageIndex,pageSize,orderBy){
    return Request({
        url:'/api/posts',
        params:{
            pageIndex,pageSize,orderBy
        }
    })
}

export function getPostById()
{
    return Request({
        url:'/api/posts'
    })
}

export function PostBlog(Title,Body,token){
    return Request({
        method:"post",
        url:'/api/posts',
        data:{
            Title,Body
        },
        headers:{
            'Authorization': 'Bearer ' +token
        }
    })
}

export function ESPost(query){
    return Request({
        method:"post",
        url:'/api/es',
        params:{
            query:query
        }
    })
}