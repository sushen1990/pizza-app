<template>
	<div class="row">
		<div id="home" class="col-sm-12 text-center">
			<div class="background">
				<h1>欢迎大家品尝pizza</h1>
				<h2>这里有你钟意的pizza</h2>
				<button @click="gotoMenu" class="btn btn-success">开始订餐</button>
			</div>
		</div>		
	</div>
</template>

<script>
	export default{
		methods:{
			gotoMenu:function(){
				// 返回上一次浏览的地址 
				// this.$router.go(-1)
				
				// 前往指定的地址
				// this.$router.replace('/menu')
				
				// 前往指定的路由名下
				// this.$router.replace({name:'menuLink'})
				
				//push方法跳转
				this.$router.push({name:'menuLink'})
				// this.$router.push('/menu')

			}
		}
	}
</script>

<style>
#home{
	background: url(../assets/pizza.jpg);
	height: 85vh;
	padding: 10%;
}
h1,h2{
	margin: 6%;
}
.background{
	background: #eee;
	opacity: 0.8;
	max-width: 70vw;
	margin: 0 auto;
	padding: 20px 0;
}
</style>
