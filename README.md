## wc-loading
提供一个通用的 loading 工具, 使得:
用户不必自己写一遍 loading 的逻辑, 而只要提供一个 loading 效果即可. 

## why?
对于 loading 效果, 通常会存在这么一种情况:
不同的项目中, 使用的 loading 效果不一致. 但是 loading 的逻辑是一致的.
因此, 希望存在一种方式, 提供了一套通用的 loading 逻辑, 而 loading 效果可以由用户自己定义.

## 效果
![没加载出来点这里](https://ooo.0o0.ooo/2017/07/11/596482963cbda.gif)

## 实现的相关的点
* loading 出现的时候, 阻止页面滚动
* loading 自带 fade-in, fade-out 效果
* loading 出现之后, 阻止页面的所有 touch 行为


## Install 
```shell
npm i wc-loading --save
```

## Usage
```javascript
// 1 引入用户自定义的 loading 效果
import Loading1 from './user-path/loading1'
import Loading2 from './user-path/loading2'

// 2 引入 wc-loading
import Loading from 'wc-loading'
Vue.use(Loading, {
	default: Loading1,
	page: Loading2, // 设置不同情景下的loading 组件
});

// 3 调用
this.$loading.start(who);  // 唤起 loading
start() 方法拥有一个可选参数 who, 用来告知当前使用哪一个 loading 效果, 不设置则默认为
default 指定的 loading 效果. 

this.$loading.stop()  // 隐藏 loading

```

## 用户自定义 Loading 的要求
用户自定义loading.vue 文件, 格式应该如下
```html
<style>
</style>
<template>
	.loading-ele
</template>
<script>
	export default{
		// 这里为空, 为空就行了
	}
</script>
```

## 项目地址
[项目地址](https://github.com/helicopters/wc-loading)

## LICENSE
[MIT](https://opensource.org/licenses/MIT)