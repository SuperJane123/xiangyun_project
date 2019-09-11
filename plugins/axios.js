import {Message} from 'element-ui'
export default ({$axios,redirect}) => {
    // 这里的store指向的是nuxt实例对象
//   console.log(nuxt)

// 捕捉错误信息
$axios.onError(err=>{
    console.log(err.response)
    const { message,statusCode} = err.response.data
    if(statusCode === 400){
        Message.error(message)
    }
    // 未登陆的处理  401、403表示服务器拒绝请求的访问
    if(statusCode === 401 || statusCode === 403){
        Message.error('请前往登陆')
        setTimeout(()=>{
            redirect('/user/login')
        },4000)
        
        
    }

})
}