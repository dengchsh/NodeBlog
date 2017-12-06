<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="#/admin/article-add">添加文章</a>
  </div>
</template>

<script>
// import API from '../../api/api_article'
export default {
  name: 'List',
  data () {
    return {
      msg: '文章列表'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
