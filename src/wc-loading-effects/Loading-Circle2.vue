<style scoped lang="less">
.loader {
	height: 76px;
	width: 76px;
}
.ui.loader {
	// display: none;
	// position: absolute;
	// top: 50%;
	// left: 50%;
	margin: 0;
	text-align: center;
	z-index: 1000;
	-webkit-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%)
}
.ui.loader:before {
	border-radius: 500rem;
	border: .2em solid rgba(0, 0, 0, .1)
}
.ui.loader:after, .ui.loader:before {
	position: absolute;
	content: "";
	top: 0;
	left: 0%;
	width: 100%;
	height: 100%
}
.ui.loader:after {
	-webkit-animation: loader .6s linear;
	animation: loader .6s linear;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	border-radius: 500rem;
	border-color: #767676 transparent transparent;
	border-style: solid;
	border-width: .2em;
	box-shadow: 0 0 0 1px transparent
}
@-webkit-keyframes loader {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg)
	}
	to {
		-webkit-transform: rotate(1turn);
		transform: rotate(1turn)
	}
}
@keyframes loader {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg)
	}
	to {
		-webkit-transform: rotate(1turn);
		transform: rotate(1turn)
	}
}


</style>
<template>
	<div class="ui massive text loader"></div>	
</template>
<script>
	export default {}
</script>