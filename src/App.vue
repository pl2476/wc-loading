<template>
  <div id="app">
	<spinner :show="show"/>
  </div>
</template>
<script>
  import Spinner from './wc-spinner/Spinner2'
  export default {
    name: 'app',
    components: {
    	Spinner
    },
    data () {
    	return {
    		show: true
    	}
    },
    mounted () {
    	// setTimeout(()=>{
    	// 	this.show = false
    	// },3000)
    }
  }
</script>