<template>
  	<div class="home_container"> 
	<headers></headers>  
	<ul>
			<li><router-link to="/my" exact>  <i class="Cecilia icon-chuangxin"></i>&nbsp;TAB</router-link></li>
			<li><router-link to="/submy2" ><i class="Cecilia icon-dashuju"></i>&nbsp;TABA</router-link></li>
			<li><router-link to="/submy3" ><i class="Cecilia icon-yunyingguanli"></i>&nbsp;TABB</router-link></li>
			<li><router-link to="/submy4" ><i class="Cecilia icon-wangluo"></i>&nbsp;TABC</router-link></li>
			
	</ul>
    <router-view ></router-view>
	<a href="https://router.vuejs.org/zh/" target="_blank" class="org">
		https://router.vuejs.org/zh/
    </a>
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
	top:0px;
	left: 0;
	width: 100%;
	height: 100%;
	ul{
		display: flex;
		margin-top: 15px;
		li{
			flex: 1;
			text-align: center;
			a{
				font-size: 16px;
				text-align: center;
				display: block;
				height:35px;
				position: relative;
				i{
					color:#fd7801;
					font-size: 18px;
					font-weight: bold;
				}
			
				
				&.router-link-active{
					color: #fd7801;
					&:after{
						content: "";
						height: 2px;
						width: 100%;
						position: absolute;
						bottom: 0;
						left: 0;
						background-color: #fd7801;
					}
				
			}
			}
		}
	}
	
}
.org{
	position: fixed;
	width: 100%;
	height: 40px;
	text-align: center;
	font-size: 16px;
	color: slategray;
	bottom: 0px;
}
    
</style>
