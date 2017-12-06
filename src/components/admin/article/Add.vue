<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="文章简述">
      <el-input type="textarea" v-model="form.description"></el-input>
    </el-form-item>
    <el-form-item label="文章分类">
      <el-select v-model="form.category" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="富文本" name="first">
          <div id="editorElem" style="text-align:left" v-model="form.content"></div>
          <!-- <button :click="getContent">查看内容</button> -->
        </el-tab-pane>
        <el-tab-pane label="MarkDown" name="second">
          <!-- 使用双向绑定修饰符 -->
          <mavonEditor v-model="form.content"/>
          <!-- 当value发生改变 , 触发change事件 -->
          <!--<mavonEditor :value="value" @change="function"/>-->
        </el-tab-pane>
      </el-tabs>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加文章</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// 引入WangEditor
import E from 'wangeditor'

// 引入MarkDown编辑器
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'editor',
  data () {
    return {
      editorContent: '',
      value: '',
      activeName: 'first',
      form: {
        name: '',
        description: '',
        category: '',
        content: ''
      }

    }
  },
  components: {
    mavonEditor
  },
  methods: {
    getContent: function () {
      alert(this.editorContent)
    },
    onSubmit () {
      console.log('submit!')
    }
  },
  mounted () {
    var editor = new E('#editorElem')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
