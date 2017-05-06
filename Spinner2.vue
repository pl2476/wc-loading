<style scoped lang="less">
  
  .spinner{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .spinner-mask {
    position: fixed;
    z-index: 998;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    background: white;
  }


  img{
    height: 35px;
    width: 35px;
    margin: 0 auto;
    display: block;
  }

</style>
<template>
	<div v-show="show">
      <div class="spinner">
         <img src="./imgs/loading.gif" alt="">
         <p>{{text}}</p>
      </div>
      <div class="spinner-mask"></div>
	</div>
</template>
<script>
  export default {
    name: 'Spinner',
    props: {
      show: {
        type: Boolean,
        default: true
      },
      text: {
        type: String,
        default: '正在加载'
      }
    }
  }
</script>