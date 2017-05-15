## wc-loading
基于 Vue 的 loading 效果, 自定义的 loading 元素

## 已经存在的效果的列表
1. loading1: 一个特别炫酷的效果, 来自于http://codepen.io/Mattykins/pen/wfJqk

2. loading2: 没有遮罩层, 中间是一圈点点的

3. loading3: 最常见的, 带遮罩层, 中间还有一个菊花图的
有两个配置选项
	<loading :loading="true" :text="xxx">

## 使用方式
1. 下载仓库, 直接将仓库放到组件中, 再引入即可
```javascript
import Loading from './components/wc-loading'

<loading/>
```

## LICENSE
[MIT](https://opensource.org/licenses/MIT)