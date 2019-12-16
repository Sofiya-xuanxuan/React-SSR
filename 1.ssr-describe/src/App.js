// 入口文件
import React, { useState } from 'react'
// 路由
import { Route } from 'react-router-dom'

// 页面
import Index from './container/index'
import About from './container/about'

export default (
  <div>
    <Route path="/" exact component={Index}></Route>
    <Route path="/about" exact component={About}></Route>
  </div>
)
