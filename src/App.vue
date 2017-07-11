<style>
  
  * {
    margin:0;
    padding:0;
  }

  button {



    position: relative;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    color: #333;
    text-align: center;
    white-space: nowrap;
    vertical-align: top;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    -webkit-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
    color: #fff;
    background-color: #007aff;
    border: 1px solid #007aff;


  }
</style>
<template>
  <div class="container">
    <button @click="fn">loading</button>
    <button @click="test">loading 出现之后我就不可点击</button>
  </div>
</template>
<script>
  export default {
    methods: {
      fn () {
        this.$loading.start();
        setTimeout(()=>{
          this.$loading.stop();
        },3000);
      },
      test () {
        this.$alert('hello world')
      }
    }
  }
</script>