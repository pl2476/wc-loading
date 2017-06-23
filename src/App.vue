<style>
  
</style>
<template>
  <div class="container">
    <button @click="fn">看看我是不是可以点击</button>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p><p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>

    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>

    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>

    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>

    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>
    <p>试试我能不能滚动</p>


  </div>
</template>
<script>
  import LoadingComponent from './wc-loading-effects/loading2'
  export default {
    mounted () {
      this.$loading.start(LoadingComponent);

      // setTimeout(()=>{
      //   this.$loading.stop();
      // },2000)
      
      
    },
    methods: {
      fn () {
        alert('!!!');
      }
    }
  }
</script>