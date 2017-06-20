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
// 用户自定义的 loading 效果集合
// 路径为 用户放置 loading 的路径
import LoadingComponent from './user-path/loading'

import Loading from 'wc-loading'
Vue.use(Loading, {
	component: LoadingComponent
})
```
### 调用方式
```javasript
this.$loading.start() // 打开 loading
this.$loading.stop()  // 隐藏 loading
```

## 用户自定义 LoadingComponent 的要求
* 代码里面做了处理, 用户仅仅只需要关系, 真正 loading 效果的实现即可, 遮罩层不需要考虑.
所以 LoadingComponent 的正确格式是:
```html
	<tempalte>
		.loading // 这个就是正中央的, 那个 loading, 只要关注这个就行了
	</template>
```

* 我认为, 当 loading 出现的时候, 页面处于锁死状态, 即: 不可点击, 不可滚动, 不能进行任何操作.
所以在出现 loading 效果的时候:
	* 为组件的根元素默认加上一个 lock class
	* lock class 的定义如下
		```css
			.wc-loading-lock {
				
			}
		```
* 有时候, 可能需要一个带遮罩层的 loading 效果, 而因为 lock class 实际上就是一个透明度为0的
遮罩层, 所以我们只要改变它的 reba, 就可以实现的遮罩效果. 为此, 抽离出来一个配置遮罩层的属性:
```javascript
 {
 	rgba: rgba(0, 0, 0, 0.5);
 }
```


* 默认我们认为, loading 的位置都是在正中央, 所以提供了一个默认的class, 暂时没有给定接口取消.



## 预定义的 loading 效果的集合
![wc-loading-effects](https://opensource.org/licenses/MIT)

## LICENSE
[MIT](https://opensource.org/licenses/MIT)