<template>
  	<div class="home_container"> 
	 <headers></headers>
      {{manInfo}}
	  <hr>
	  {{woman}}
	  <hr>
	  <p v-for="(item,index) in data" :key="index" class="lists"> 
		STATE::{{item.Name}}
	  </p>
  
    </div>
</template>

<script>
import headers from '../../components/header';
import { mapGetters ,mapState,mapMutations,mapActions} from "vuex";
export default {
	computed:{
		...mapGetters(["manInfo"]),
		...mapState(["man","woman",'data'])
	},
	components:{
		headers,
	}
}
</script>

<style lang="less" scoped>
 .home_container{
	padding: 0 15px;
	position: fixed;
	left: 0;
	width: 100%;
	height: 100%;
	font-size: 16px;
	color: #202020;
}
.lists{
	padding: 5px ;
	border-bottom: 1px solid #efefef;
	overflow: hidden;
}
    
</style>
