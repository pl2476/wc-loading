<style scoped lang="less">
.spinner {

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 

    
    font-size: 60px;
    width: 1em;
    height: 1em;
    // margin: 100px auto;
    border-radius: 50%;
    box-shadow: inset 0 0 0 .1em rgba(58, 168, 237, .2);
}

.spinner i {
    position: absolute;
    clip: rect(0, 1em, 1em, .5em);
    width: 1em;
    height: 1em;
    animation: spinner-circle-clipper 1s ease-in-out infinite;
}

@keyframes spinner-circle-clipper {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(180deg);
    }
}

.spinner i:after {
    position: absolute;
    clip: rect(0, 1em, 1em, .5em);
    width: 1em;
    height: 1em;
    content: '';
    animation: spinner-circle 1s ease-in-out infinite;
    border-radius: 50%;
    box-shadow: inset 0 0 0 .1em #3aa8ed;
}

@keyframes spinner-circle {
    0% {
        transform: rotate(-180deg);
    }

    100% {
        transform: rotate(180deg);
    }
}	
</style>
<template>
	<div class="spinner"><i></i></div>
</template>
<script>
	export default {}
</script>