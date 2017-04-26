## wc-spinner
基于 Vue 的 spinner 效果, 叫 spinner 不叫 loading, 是因为它专门指圆形的loading效果

## Installation
```shell
npm i wc-spinner --save
```

## Quick Start
```javascript
import Spinner from 'wc-spinner'
import 'wc-spinner/dist/spinner.css'
Vue.use(Spinnner);
```
## API
```javascript
this.$spinner.start();
this.$spinner.stop();
```

## Usage
1. 默认提供了一种比较炫酷的效果
2. 如果你想要更改动画效果, 重新写一个 SpinnerComponent.vue, 然后替换掉即可

## LICENSE
[MIT](https://opensource.org/licenses/MIT)
