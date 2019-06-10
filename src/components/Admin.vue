<template>
	<h1>Admin</h1>	
</template>

<script>
	export default{
		data(){
			return {
				name:"Shane"
			}
		},
		beforeRouteEnter:(to,from,next) =>{
			// alert("Hello "+this.name)
			// 异步获取data属性
			next(vm =>{
				alert("Hello "+vm.name)
			})
		},
		beforeRouteLeave:(to,from,next) =>{
			if (confirm("确认离开吧") == true) {
				next()
			} else{
				next(false)
			}
		}
	}
</script>

<style>
</style>
