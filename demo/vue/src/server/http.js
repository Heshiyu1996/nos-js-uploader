import Vue from 'vue'
import axios from 'axios'
import { rootURL } from '@/utils/config'

const service = axios.create({
    baseURL: rootURL, // api的base_url
    timeout: 300000, // 请求超时时间，原15000
    withCredentials: true // 允许携带cookie
})

// request拦截器
service.interceptors.request.use(
    config => {
        if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
            config.headers['Content-Type'] = 'application/json'
            if (config.type === 'form') {
                config.headers['Content-Type'] = 'multipart/form-data'
            } else {
                // 序列化
                config.data = JSON.stringify(config.data)
            }
        }
        config.headers['botid'] = '000001'
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        console.log(res)
        if (res.code === 200) {
            return res.detail // 直接返回数据
        } else {
            !response.config.error && Vue.prototype.$toast.show(res.desc, 'error') // 错误统一报出
            return Promise.reject(res)
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
