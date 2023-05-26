/*
 * @Author: fengyinxqy 572752189@qq.com
 * @Date: 2023-05-25 12:26:14
 * @LastEditors: fengyinxqy 572752189@qq.com
 * @LastEditTime: 2023-05-26 10:30:53
 * @FilePath: \TODO\src\router\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home-view'
import DashBoard from '@/views/dashboard-view'
import TodoView from '@/views/todo-view'
import DayScheduleView from '@/views/day-schedule-view'
import WeekScheduleView from '@/views/week-schedule-view'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: DashBoard
      },
      {
        path: 'todo',
        name: 'todo',
        component: TodoView
      },
      {
        path: 'day',
        name: 'day',
        component: DayScheduleView
      },
      {
        path: 'week',
        name: 'week',
        component: WeekScheduleView
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
