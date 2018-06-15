<template>
  	<div class="home_container"> 
		  <headers></headers>
	  <ul v-if="newsList.length>1">
		  <li v-for="(item,index) in newsList" :key="index">
			  <p>单位-{{item.Unit}}</p>
			  <p>名字-{{item.Name}}</p>
			  <p>价格-{{item.TotalCount}}</p>
		  </li>
	  </ul>
	  <hr>
	  <ul>
		  <li v-for="(item,index) in filterData" :key="index">
			  <p>单位-{{item.Unit}}</p>
			  <p>名字-{{item.Name}}</p>
			  <p>价格-{{item.TotalCount}}</p>
		  </li>
	  </ul>
    </div>
</template>

<script>


import headers from '../../components/header';
import TYPES from '../../store/mutation-types'
export default {
	data(){
      return{
		  newsList:[]
	  }
	},
	components:{
		headers,
	},
    created(){
		console.log("created")  //查看钩子函数的执行顺序
        this.getNewsList();
	},
	mounted () {
		console.log("mounted")  //查看钩子函数的执行顺序
	},
	computed: {
		filterData(){
			console.log("computed")  //查看钩子函数的执行顺序
			return this.newsList.filter((item,index)=>{
				return item.Unit.includes("个")
			})
		}	
	},
	distoryed(){
		console.log("distoryed")  //查看钩子函数的执行顺序
	},
	methods:{	
		getNewsList(){
			let _this=this;
			this.$jsonp('http://api.homedo.com/Product/GetPinDanPromotion_SD',{callback:'?','PageSize':6,'CurrentPage':1}).then((response)=>{
				_this.newsList=response;
				_this.$store.dispatch(TYPES.ACTION_SAVEWEBDATA,response)
			 }).catch((response)=>{
					console.log(response);
      	    })
    	},
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
	font-size: 16px;
	.Cecilia{
		color: #d81e06;
		font-size: 36px;
	}
	ul{
		li{
			display: flex;
			p{
				flex: 1;
				padding: 0 10px;
				text-align: left;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
	
}
    
</style>
