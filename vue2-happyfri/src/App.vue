<template>
	<div>
		<Home></Home>
    </div>
</template>

<script>
import Home from './page/home'
export default {
   components: {
  		Home
  	},
}

</script>

<style>
.list{
	position: fixed;
	z-index: 100000;
	color: yellow;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	font-size: 20px;
	line-height: 50px;
	
}
.list li{
		float: left;
}
  	
</style>
