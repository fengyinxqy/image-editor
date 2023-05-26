/*
 * @Author: fengyinxqy 572752189@qq.com
 * @Date: 2023-05-25 12:26:14
 * @LastEditors: fengyinxqy 572752189@qq.com
 * @LastEditTime: 2023-05-25 19:57:32
 * @FilePath: \font-image-editor\src\main.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import '@/plugins/element'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
