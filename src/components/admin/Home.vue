<template>
  <div>
    <el-row :xs="24" :sm="24" :md="34" :lg="34" :xl="24" class="header">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        menu-trigger="click"
        active-text-color="#ffd04b">  
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-row>
    <el-row :gutter="10" class="content">
      <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="2">
        <el-menu class="el-menu-vertical-demo" router @open="handleOpen" @close="handleClose">
          <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''" :key="index" v-if="item.menuShow">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(value,key) in item.children" :index="value.path" :key="value.path" v-if="value.menuShow">
                <span slot="title">{{value.name}}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :xs="16" :sm="18" :md="20" :lg="20" :xl="22">
        <div class="grid-content bg-purple-light">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  padding-top: 30px;
}
</style>
