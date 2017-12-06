import Vue from 'vue'
import Router from 'vue-router'

/** 博客后台 **/

// 博客后台首页
import AdminHome from '@/components/admin/Home'
// 设置-作者信息
import AuthorInfo from '@/components/admin/setting/AuthorInfo'

// 文章-文章列表
import ArticleList from '@/components/admin/article/List'
// 文章-添加文章
import ArticleAdd from '@/components/admin/article/Add'

// 分类-分类列表
import CategoryList from '@/components/admin/category/List'
// 分类-添加分类
import CategoryAdd from '@/components/admin/category/Add'

/** 博客前端 **/

// 博客前端首页
import Index from '@/components/home/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: '文章管理',
      left: true,
      icon: 'fa fa-navicon fa-fw',
      menuShow: true,
      component: AdminHome,
      redirect: '/admin/article-list',
      children: [
        {
          path: '/admin/article-list',
          name: '文章列表',
          component: ArticleList,
          menuShow: true,
          icon: ''
        },
        {
          path: '/admin/article-add',
          name: '添加文章',
          menuShow: false,
          component: ArticleAdd,
          icon: ''
        }
      ]
    },
    {
      path: '/admin',
      name: '分类管理',
      left: true,
      icon: 'fa fa-tags fa-fw',
      menuShow: true,
      component: AdminHome,
      redirect: '/admin/category-list',
      children: [
        {
          path: '/admin/category-list',
          name: '分类列表',
          component: CategoryList,
          menuShow: true,
          icon: ''
        },
        {
          path: '/admin/category-add',
          name: '添加分类',
          component: CategoryAdd,
          menuShow: true,
          icon: ''
        }
      ]
    },
    {
      path: '/admin',
      name: '系统设置',
      left: true,
      icon: 'fa fa-cog fa-fw',
      menuShow: true,
      component: AdminHome,
      redirect: '/admin/author-info',
      children: [
        {
          path: '/admin/author-info',
          name: '作者信息',
          component: AuthorInfo,
          menuShow: true,
          icon: ''
        }
      ]
    },
    {
      path: '/',
      name: '博客前端首页',
      component: Index,
      left: false,
      menuShow: false
    }
  ]
})
