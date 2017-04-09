<style scoped lang="less">

	/*父元素样式, 控制loading效果始终是在当前页面的中心*/

.mui-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background-color: rgba(0,0,0,.4);
}
	.toast-container {
		position: fixed;

		z-index: 9999;
		line-height: 17px;
		-webkit-transition: opacity .3s;
		transition: opacity .3s;
		opacity: .9;
	}
	.bottom{
		left: 50%;
		-webkit-transform: translate(-50%, 0);
		transform: translate(-50%, 0);
		bottom: 50px;			
	}
	.center{
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);		
	}

	.toast-message {
		font-size: 14px;
		padding: 18px 25px;
		// text-align: center;
		color: #fff;
		border-radius: 2px;
		background-color: #323232;
		display: flex;
		align-items:center;
		img {
			height: .5rem;
			width: .5rem;
			margin:0 auto;
			display: block;
			margin-bottom: 12px;
		}
	}


.spinner {
  // margin: 100px auto;
  width: 24px;
  height: 24px;
  position: relative;
}
 
.container1 > div, .container2 > div, .container3 > div {
  width: 6px;
  height: 6px;
  background-color: white;
 
  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
 
.spinner .spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
 
.container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
 
.container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}
 
.circle1 { top: 0; left: 0; }
.circle2 { top: 0; right: 0; }
.circle3 { right: 0; bottom: 0; }
.circle4 { left: 0; bottom: 0; }
 
.container2 .circle1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.container3 .circle1 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.container1 .circle2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.container2 .circle2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
.container3 .circle2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
 
.container1 .circle3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
 
.container2 .circle3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
 
.container3 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
 
.container1 .circle4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
 
.container2 .circle4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
 
.container3 .circle4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}
 
@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}
 
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

.loading-text{
	margin-left: 18px;
}

</style>
<template>
	<div v-show="showSpinner">
		<!-- replace here -->

		<div class="toast-container center">



			<div class="toast-message">

<div class="spinner">
  <div class="spinner-container container1">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
  </div>
  <div class="spinner-container container2">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
  </div>
  <div class="spinner-container container3">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
  </div>
</div>


				<span class='loading-text'>
					{{content}}
				</span>

			</div>
		</div>


		<div class="mui-backdrop"></div>

	</div>
</template>
<script>
	export default {
		name: 'SpinnerComponent',
		data () {
			return {
				showSpinner: true,
				content:'正在付款'
			}
		}
	}
</script>