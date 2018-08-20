import axios from 'axios'

let api = axios.create({
  timeout: 10000,
  baseURL: 'http://localhost:8080/api',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

// 处理axios响应
api.interceptors.response.use(function (response) {
  return response
}, (error) => {
  return Promise.reject(error)
})

// 编写接口函数
const goods = params => api.get(`/goods`, {params})
const rattings = params => api.get(`/rattings`, {params})
const seller = params => api.get(`/seller`, {params})

// 导出接口
export default {
  goods,
  rattings,
  seller
}
