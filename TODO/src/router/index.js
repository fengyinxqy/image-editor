/*
 * @Author: fengyinxqy 572752189@qq.com
 * @Date: 2023-05-25 12:26:14
 * @LastEditors: fengyinxqy 572752189@qq.com
 * @LastEditTime: 2023-05-25 23:29:08
 * @FilePath: \font-image-editor\src\router\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home-view'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
