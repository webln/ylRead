<template>
	<header class="c-header">
		<div class="hd-top">
			<div class="uc-content">
				<router-link class="logo" to="">
					<img src="@/assets/images/logo.png" alt="">
				</router-link>
				<div class="uc-flex">
					<div class="txt">无障碍模式</div>
					<div class="search-box">
						<input type="text" class="uc-input" placeholder="请输入关键字搜索" value="" placeholder-class="uc-phColor" />
						<div class="btn">
							<i class="uc-font uc-search"></i>
						</div>
					</div>
					<div class="user-box">
						<router-link class="btn" to="">登录</router-link>/
						<router-link class="btn" to="">注册</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="hd-menu">
			<div class="uc-content">
				<nav>
					<router-link v-for="(item,index) in menu" :key="index" class="item" :class="index==menuIndex?'on':''" to="/">{{item}}</router-link>
				</nav>
				<router-link class="link" to="">
					全国老年教育公共服务平台
				</router-link>
			</div>
		</div>
	</header>
</template>
<script setup>
	import { ref } from 'vue'
	const name = ref('小')
	defineProps({
		menuIndex: 0
	})
	const menu = ['首页', '银龄读书社区', '课程学习', '教师研修', '项目活动', '新闻资讯', ]
</script>