<template>
  <div id="app">
		<div class="container">
			<appHeader></appHeader>
		</div>
		<div class="container">
			<!-- 路由切换的内容在这里显示 -->
			<router-view></router-view> 
		</div>
		<br>
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-4">
					<router-view name="orderingGuide"></router-view>
				</div>
				<div class="col-sm-12 col-md-4">
					<router-view name="history"></router-view>
				</div>
				<div class="col-sm-12 col-md-4">
					<router-view name="delivery"></router-view>
				</div>
			</div>
		</div>
  </div>
</template>



<script>
import Header from './components/Header.vue'
export default {
	components:{
		"appHeader":Header
	}
}
</script>

<style>

</style>
