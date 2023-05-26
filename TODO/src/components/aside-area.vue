<!--
 * @Author: fengyinxqy 572752189@qq.com
 * @Date: 2023-05-25 23:36:12
 * @LastEditors: fengyinxqy 572752189@qq.com
 * @LastEditTime: 2023-05-25 23:36:34
 * @FilePath: \font-image-editor\src\components\aside-area.vue
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <el-aside width="200px">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
    >
      <el-menu-item
        index="1"
        class="el-submenu"
      >
        <i class="el-icon-menu" />
        <span slot="title">看板</span>
      </el-menu-item>
      <el-menu-item
        index="2"
        class="el-submenu"
      >
        <i class="el-icon-menu" />
        <span slot="title">待办</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location" />
          <span>日程</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
            今天日程
          </el-menu-item>
          <el-menu-item index="3-2">
            本周日程
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'AsideArea',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
