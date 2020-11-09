import axios from 'axios'
export default function request(config){
  // 1、创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  // 2、实施拦截
  instance.interceptors.response.use(config=>{
    return config
  },error=>{
    return error
  })
  // 3.返回promise，发送网络请求
  return instance(config)
}