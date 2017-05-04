## wc-spinner
基于 Vue 的 spinner 效果

## 已经存在的效果的列表
1. Spinner1: 一个特别炫酷的效果, 来自于http://codepen.io/Mattykins/pen/wfJqk
2. Spinner2: 一个最普通的 spinner效果, 就是一个空白页面, 中间有一个菊花图

## 使用方式
下载这个仓库, 找到 src/wc-spinner 目录, 拷贝到项目中
在需要有 spinner 效果的页面中:
```javascript
import Spinner from './wc-spinner/Spinner1'

export default {
	components: {
		Spinner
	}
}

<spinner :show="show" :text="text">
```

## LICENSE
[MIT](https://opensource.org/licenses/MIT)