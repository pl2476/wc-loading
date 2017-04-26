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
1. clone 当前仓库
2. cd 仓库
3. npm i
4. npm run dev
源代码的目录在 src/wc-spinner 中


## LICENSE
[MIT](https://opensource.org/licenses/MIT)
