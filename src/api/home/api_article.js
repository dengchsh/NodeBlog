/**
 * Created by jerry on 2017/11/13.
 * 图书相关api
 */
 import * as API from './'

export default {
  // 查询获取book列表(通过page分页)
  query: params => {
    return API.GET('/api/article/query', params)
  }
}