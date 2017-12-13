/**
 * Created by jerry on 2017/6/9.
 */
import Env from './env'
import axios from 'axios'

axios.defaults.withCredentials = true

// 基地址
let base = Env.baseURL

// 测试使用
export const ISDEV = Env.isDev

// 通用方法
export const POST = (url, params) => {
  return axios.post(`${base}${url}`, params).then(res => res.data)
}

export const GET = (url, params) => {
  return axios.get(`${base}${url}`, {params: params}).then(res => res.data)
}

export const PUT = (url, params) => {
  return axios.put(`${base}${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return axios.delete(`${base}${url}`, {params: params}).then(res => res.data)
}

export const PATCH = (url, params) => {
  return axios.patch(`${base}${url}`, params).then(res => res.data)
}
