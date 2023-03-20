<template>
	<footer class="c-footer">
		<div class="uc-content">
			<div class="ft1">
				<div class="part1">
					<div class="item"><img src="@/assets/images/icon-tel.png" class="uc-icon28" alt="">联系电话：010-66490665（9：00-17：00）</div>
					<div class="item"><img src="@/assets/images/icon-addr.png" class="uc-icon28" alt="">地址：北京市海淀区复兴路75号</div>
				</div>
				<div class="part2">
					<div class="item">
						<img src="@/assets/images/footer-code-1.png" alt="">
						<p>打开小程序</p>
					</div>
					<div class="item">
						<img src="@/assets/images/footer-code-2.png" alt="">
						<p>下载APP</p>
					</div>
				</div>
			</div>
			<div class="ft2">
				<router-link class="logo" to=""><img src="@/assets/images/logo-footer.svg" alt=""></router-link>
				<div class="right">
					<nav>
						<router-link class="item" to="">课程介绍</router-link>|<router-link class="item" to="">新闻资讯</router-link>
					</nav>
					<div class="cpt">
						<span>COPYRIGHT © 2015-2025</span>
						<router-link class="item" to="">国家开放大学版权所有</router-link>
						<router-link class="item" to="">京ICP备05064925-7</router-link>
						<router-link class="item" to="">京公网安备11010802039505号</router-link>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
<script setup>
	import { ref } from 'vue'
	const name = ref('小')
</script>