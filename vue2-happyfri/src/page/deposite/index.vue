<template>
  	<div class="home_container"> 
	  <headers></headers>
	  <div class="wraper">
		<a href="javascript:;" @click="chageState">
			<i class="Cecilia icon-music_play_button">&nbsp;赋值 </i>
		</a>
		<a href="javascript:;" @click="clearState">
			<i class="Cecilia icon-music_pause_button">&nbsp;清除</i>
		</a>
		
	  </div>
		
 























    </div>
</template>

<script>
import headers from '../../components/header';
import { mapGetters ,mapState,mapMutations,mapActions} from "vuex";
import TYPES from '../../store/mutation-types'
export default {

	components:{
		headers,
	},
	methods:{
		chageState(){
          this.$store.commit(TYPES.OPERAWOMAN,{'Job':"小仙女",'name':"张小月",'sex':"老阿姨",'age':"18","s":"100"})
		},
		clearState(){
		  this.$store.commit(TYPES.OPERAWOMAN,{'Job':"",'name':"",'sex':"",'age':"","s":""})
		}
	}
}
</script>

<style lang="less" scoped>
.home_container{
	padding:0 15px;
	position: fixed;
	top:0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	
}
.Cecilia{font-size: 24px;color: #09ba07;}
.wraper{
	display: flex;
	margin-top: 40px;
	a{
		flex: 1;

	}
}
 
    
</style>
