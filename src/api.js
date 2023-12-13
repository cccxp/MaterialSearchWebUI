import axios from "axios"
import { ElMessage } from "element-plus"
import config from "../config.json"

// 前端开发服务器与API服务器分离，因此无法直接使用相对路径
config.restApiBaseUrl
const restApiBaseUrl = config.restApiBaseUrl  // TODO: 在合适的时候改为/api/v2
const wsApiBaseUrl = config.wsApiBaseUrl

const api = axios.create({
    baseURL: restApiBaseUrl
})
api.interceptors.response.use((resp) => {
    return resp
}, (error) => {
    // 统一的错误处理
    console.log(error)
    ElMessage.error(error)
    return Promise.reject(error)
})

export { restApiBaseUrl as baseURL, wsApiBaseUrl as baseWsUrl, api };
