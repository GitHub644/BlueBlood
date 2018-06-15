<template>
  	<div class="home_container"> 
	<headers></headers>
    </div>
</template>

<script>

import headers from '../../components/header';
export default {
	components:{
		headers,
	}
}
</script>

<style lang="less" scoped>
 .home_container{
	padding: 0 15px;
	position: fixed;
	top:0;
	left: 0;
	width: 100%;
	height: 100%;
	
}
    
</style>
