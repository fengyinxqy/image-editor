<template>
  <el-aside width="200px">
    <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo"
      @select="handleSelect"
    >
      <el-menu-item
        index="/dashboard"
        class="el-submenu"
      >
        <i class="el-icon-menu" />
        <span slot="title">看板</span>
      </el-menu-item>
      <el-menu-item
        index="/todo"
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
          <el-menu-item index="/day">
            今天日程
          </el-menu-item>
          <el-menu-item index="/week">
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
    handleSelect (index) {
      this.$router.push(index)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
