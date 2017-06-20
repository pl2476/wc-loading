<style scoped lang="less"> 
  .loading{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    img {
      display: block;
      margin:0 auto;
    }
    .text{
      text-align: center;
      margin-top: 8px;
      font-size: 14px;
    }
  }
  .loading-mask {
    position: fixed;
    z-index: 998;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
<template>
	<div v-show="loading">
      <div class="loading">
         <img src="./imgs/juhua.gif" alt="">
         <p class="text">{{text}}</p>
      </div>
      <div class="loading-mask"></div>
	</div>
</template>
<script>
  export default {
    name: 'loading',
    props: {
      loading: {
        type: Boolean,
        default: true
      },
      text: {
        type: String,
        default: '正在加载...'
      }      
    }
  }
</script>