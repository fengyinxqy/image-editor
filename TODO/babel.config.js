/*
 * @Author: fengyinxqy 572752189@qq.com
 * @Date: 2023-05-25 12:26:14
 * @LastEditors: fengyinxqy 572752189@qq.com
 * @LastEditTime: 2023-05-25 17:11:01
 * @FilePath: \font-image-editor\babel.config.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
