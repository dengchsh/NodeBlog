/**
 * Created by jerry on 2017/11/13.
 * 图书相关api
 */

var API = {

  // 查询获取book列表(通过page分页)
  query: params => {
    return API.GET('/api/article/query', params)
  }
}

module.exports = API
