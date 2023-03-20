<template>
	<ucHead :menuIndex="1"></ucHead>
	<section class="uc-detail">
		<div class="uc-content">
			<div class="g-crumb">
				<router-link class="" to="/">银龄读书社区</router-link>
				<router-link class="" to="">银龄读书分享</router-link>
				<router-link class="" to="">人物代表</router-link>
			</div>
			<h1>人物代表</h1>
			<article>
				<img src="@/assets/images/detail-img-1.png" alt="">
				<div class="sub-title">
					<h3>连素华</h3>
					<p>银龄教师老少共读代表</p>
				</div>
				<div class="box">
					<p>连素华，八十一岁，国家老年大学学员。曾任解放军6901厂幼儿园老师，一生热爱读书。听说国家老年大学成立了，连素华和女儿周小玲一起第一时间报名了。热爱学习的她，经常和学友们一起读书交流。</p>
					<p>不仅如此，她还经常和女儿在家附近的书店读书，号召邻居伙伴一起阅读，邻里间形成了温馨和谐的阅读氛围。邻居经常带着小女儿一起参加，小朋友稚嫩的声音勾起连奶奶的回忆。连奶奶跟着小朋友一起朗读经典名著，朗诵红色经典诗歌，孜孜不倦的求学精神和热爱阅读积极向上的态度也感染着小朋友。朗读让连奶奶找到很多乐趣，既锻炼了表达能力，又动手动脑，朋友也常夸连奶奶带上老花镜阅读的时候精神矍铄、声音优美、吐字清晰。现在，连奶奶经常与小朋友一起朗读，专注的阅读让她觉得自己仿佛年轻了许多，与小朋友共同成长，也让生活变得很充实，晚年生活其乐融融。</p>
				</div>
			</article>
		</div>
	</section>
	<ucFoot></ucFoot>
</template>
<script setup>
	import { ref } from 'vue'
	const name = ref('小')
</script>