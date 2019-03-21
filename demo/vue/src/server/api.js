import http from './http.js'

// 获取nos的token
export const getNosToken = data =>
    http({
        url: `rest/file/nos/token?bucket=${data.bucket}&postfix=${data.postfix}&botId=000001`,
        method: 'get',
        data
    })
