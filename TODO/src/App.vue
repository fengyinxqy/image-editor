<!--
 * @Author: fengyinxqy 572752189@qq.com
 * @Date: 2023-05-25 12:26:14
 * @LastEditors: fengyinxqy 572752189@qq.com
 * @LastEditTime: 2023-05-25 20:09:31
 * @FilePath: \font-image-editor\src\App.vue
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div id="app">
    <router-link to="/" />
    <router-view />
  </div>
</template>

<style>
body,html{
  height: 100%;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
