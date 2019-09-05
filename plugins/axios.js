import {Message} from 'element-ui'
export default ({$axios}) => {
    // 这里的store指向的是nuxt实例对象
//   console.log(nuxt)
$axios.onError(err=>{
    console.log(err.response)
    const { message,statusCode} = err.response.data
    if(statusCode === 400){
        Message.error(message)
    }

})
}