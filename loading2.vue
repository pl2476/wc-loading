<style scoped lang="less"> 
  .loading{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>
<template>
	<div v-show="loading">
      <div class="loading">
         <img src="./imgs/ajax-loader.gif" alt="">
      </div>
	</div>
</template>
<script>
  export default {
    name: 'loading',
    props: {
      loading: {
        type: Boolean,
        default: true
      }
    }
  }
</script>