<!--
 * @Author: fengyinxqy 572752189@qq.com
 * @Date: 2023-05-25 17:43:17
 * @LastEditors: fengyinxqy 572752189@qq.com
 * @LastEditTime: 2023-05-25 23:37:46
 * @FilePath: \font-image-editor\src\views\home-view.vue
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <el-container class="page-container">
    <el-header>TODO</el-header>
    <el-container>
      <aside-area-vue />
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideAreaVue from '@/components/aside-area.vue'
export default {
  name: 'HomeView',

  components: {
    AsideAreaVue
  },

  data () {
    return {

    }
  },

  mounted () {

  },

  // TODO:做一个带时间线的TODO，然后使用echarts来展示数据

  methods: {

  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 100%;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.page-container{
  height: 100%;
}

</style>
