<template>
  	<section class="header">
    	<ul>
			<li><router-link to="/" exact><i class="Cecilia icon-shouye1"></i>&nbsp;首页</router-link></li>
			<li><router-link to="/server" ><i class="Cecilia icon-kefu1"></i>&nbsp;客服</router-link></li>
			<li><router-link to="/deposite" ><i class="Cecilia icon-chongzhifanxian"></i>&nbsp;充值</router-link></li>
			<li><router-link to="/game" ><i class="Cecilia icon-iconset0263"></i>&nbsp;游戏</router-link></li>
			<li><router-link to="/my" ><i class="Cecilia icon-wode"></i>&nbsp;我的</router-link></li>
		</ul>
  	</section>
</template>

<script>
export default {
	
}
</script>

<style lang="less" scoped>
.header{
	ul{
		height: 35px;
		display: flex;
		line-height: 35px;
		margin-bottom: 10px;
		li{
			flex: 1;
			a{
				font-size: 16px;
				text-align: center;
				display: block;
				height:35px;
				position: relative;
				i{
					font-size: 18px;
				}
				&.router-link-active{
					color: #09ba07;
					i{
						color: #09ba07
					}
					&:after{
						content: "";
						height: 2px;
						width: 100%;
						position: absolute;
						bottom: 0;
						left: 0;
						background-color: #09ba07;
					}
				}
			}
		}

	}
	
}

	
</style>
