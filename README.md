## wc-spinner
基于 Vue 的 spinner 效果, 叫 spinner 不叫 loading, 是因为它专门指圆形的loading效果

## Install 安装
```shell
npm i wc-spinner --save
```

## Usage 使用
```javascript
import Spinner from 'wc-spinner'
import 'wc-spinner/style.css'
Vue.use(Spinnner);
```

## API 接口
```javascript
this.$spinner.start();
this.$spinner.stop();
```

## Intro 说明
默认提供了一个比较炫酷的效果, 一般肯定不会使用这个, 所以建议在当前代码的基础上二次开发
二次开发的流程

clone 当前仓库
cd 仓库
npm i
npm run dev

源代码的目录在 src/wc-spinner 中

## About 关于
1. 如果一个项目中有多种 spinner, 这个问题还没有解决, 我个人认为这种情况比较少见
2. 仅仅给了两个 API, 并且不带参数, 因为我想让这玩意变的比较纯粹, 就是一个 spinner而已


## LICENSE
[MIT](https://opensource.org/licenses/MIT)
