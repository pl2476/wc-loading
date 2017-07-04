## 问题描述
对于 loading 效果, 通常会存在这么一种情况:
不同的项目中, 使用的 loading 效果不一致. 但是 loading 的逻辑是一致的.

因此, 希望存在一种方式, 提供了一套通用的 loading 逻辑, 而 loading 效果可以由用户自己定义
这也是当前项目存在的原因.

## 使用方式
### 安装
```shell
npm i wc-loading --save
```
```javascript
// 引入用户自定义的 loading 效果
import LoadingComponent from './user-path/loading'

import Loading from 'wc-loading'
Vue.use(Loading, {
	'default': LoadingComponent1,
	'page': LoadingComponent2, // 设置不同情景下的loading 组件
	rgba: 'rgba(0,0,0,0.5)'  // 设置遮罩层颜色 + 透明度
})
```
### 调用方式
```javasript
this.$loading.start() // 打开 loading
this.$loading.stop()  // 隐藏 loading

```


## 用户自定义 Loading 的要求
用户自定义loading.vue 文件, 格式应该如下
```javascript
<style>
</style>
<template>
	.loading-ele
</template>
<script>
	exports {
		// 这里为空, 为空就行了
	}
</script>
```

## 特点
当 loading 出现的时候, 页面处于锁死状态, 即: 不可点击, 不可滚动, 不能进行任何操作.


## LICENSE
[MIT](https://opensource.org/licenses/MIT)