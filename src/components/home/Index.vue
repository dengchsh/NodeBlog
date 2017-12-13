<template>
  <div>
    <li v-for="aricle in articles">{{ aricle.title }}</li>
  </div>
</template>
<script>
import axios from 'axios'
axios.defaults.withCredentials = true
export default({
  data () {
    return {
      articles: []
    }
  },
  created: function () {
    this.query()
  },
  methods: {
    query () {
      var _this = this
      axios.get('http://localhost:3000/api/article/query')
      .then(function (data) {
        console.log(data)
        if (data.data.status === 200) {
          _this.articles = data.data.articles
        }
      })
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
