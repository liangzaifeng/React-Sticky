## 使用了 prop-types 类型检查
yarn add prop-types  --save

## 使用
```
import React, { Component } from 'react'

import Sticky from './components/Sticky'

const list = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
]


export default class App extends Component {
  render() {
    return (
      <div className="App">

        {/* 为了撑开顶部距离, 示范所用 */}
        <div style={{ height: 30 }}></div>

        <Sticky offsetTop={20}>
          我是粘性布局1
        </Sticky>

        {list.map(item => {
          return (
            <div style={{ height: 50 }} key={item}>{item}</div>
          )
        })}

      </div>
    )
  }
}
