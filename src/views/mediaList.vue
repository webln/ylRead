<template>
	<ucHead :menuIndex="1"></ucHead>
	<section class="uc-mediaList">
		<div class="uc-content">
			<div class="g-crumb">
				<router-link class="" to="/">银龄读书社区</router-link>
				<router-link class="" to="">音视频资源</router-link>
			</div>
			<div class="g-title">
				<h2>音视频资源</h2>
			</div>
			<ul class="list">
				<li v-for="(item,index) in list31" :key="index">
					<a :href="item.hrefSrc" target="_blank">
						<div class="img">
							<!--<router-link class="" to="">-->
								<img :src="item.imgSrc" alt="">
							<!--</router-link>-->
						</div>
						<h3>
							<!--<router-link class="" to="">-->
								<b>{{item.name}}</b>
							<!--</router-link>-->
						</h3>
						<div class="txt">{{item.introTxt}}</div>
					</a>
				</li>
			</ul>
		</div>
	</section>
	<ucFoot></ucFoot>
</template>
<script setup>
	import { ref } from 'vue'
	const name = ref('小')
	
	const list31 = ref([
	{id:'1',name:'正确认识食品安全问题',introTxt:'本课程讲述正确认识食品安全问题系列相关课程。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2023/0131/73cbdb78b3841e560aa0eb74ccf3cedfbf9b9bf0abf3494bbc4de7202b0f17d7.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=43377&wareInfoId=43378&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'2',name:'养生就是生活——养生勿离三原则',introTxt:'本课程主要讲述养生的原则，包括中医养生、心脏保健等。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/0906/0dda3a9c12cfa39a677f199818f1cd379bbc4088e191ae1865143ff58a95261a.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=28455&wareInfoId=28456&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'3',name:'做自己的营养师——肠胃不好如何调整',introTxt:'本课程主要讲述通过营养食疗改善疲劳、腰酸背痛、肠胃不好、失眠等病症。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/0906/99643d20cdd141bc57e31642ddc083ef92e6aa8fc8a3503292925e5091a4045b.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=28482&wareInfoId=28483&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'4',name:'健身气功八段锦',introTxt:'根据国家体育总局办公厅和科学技术部办公厅关于全国体育科普作品征集大赛相关通知的要求，2021-2070年，体育总局科教司会同群体司组织开展了“首届全国体育科普作品征集大赛”，面向全国公开征集体育科普作品，经过网络展播、公众评选和专家组评议等阶段，首批全国优秀体育科普作品和展播作品名单出炉。',imgSrc:'https://resource.lndx.edu.cn/beihero/orgspace/lndx_ggfwpt/org_2/a/png/2022/0711/21934e2feb82456f6af2126d81cd42f39b989314442be2eb3a0657371baa7ee9.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=11083&wareInfoId=11084&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'5',name:'炖肉耗时长，炖不烂，怎么办',introTxt:'',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2023/0308/0999ad1ff7e73cedea75e5403a24434daa00ef83ebb6d8889e3f46ea21bb381c.png',hrefSrc:'https://w.yangshipin.cn/video?type=0&vid=z000015cqma'},
	
	{id:'6',name:'保持良好坐姿，要从正确的入座姿势开始！',introTxt:'',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/jpg/2023/0308/122c7a1b75ca211df994a37c249f3d82baa6b11152602f1104ebae6181aee6b4.jpg',hrefSrc:'https://w.yangshipin.cn/video?type=0&vid=y000019t21l'},
	{id:'7',name:'平衡力和骨质疏松有关，专家教您自测骨质疏松风险!',introTxt:'',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/jpg/2022/1026/30fc03885f11095eda6bd4af160bdc1230ad73ef1418ff526e7298c497eade8a.jpg',hrefSrc:'https://w.yangshipin.cn/video?type=0&vid=i000030l8jq'},
	{id:'8',name:'肿瘤防治之胖熊讲科普-血栓',introTxt:'本课程讲述肿瘤防治之胖熊讲科普-血栓系列相关课程。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/1128/735652ad73c2101930c049d1f7dea0f99f7a500a21cd5cd379d741e49b64ce0b.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=43252&wareInfoId=43253&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'9',name:'肿瘤防治之胖熊讲科普-肠息肉',introTxt:'本课程讲述肿瘤防治之胖熊讲科普-肠息肉系列相关课程。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/1128/2eeb1b005761f2f8da4e0ed6d78edae7d70a9219058b48a27e79acb1b930be48.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=43212&wareInfoId=43213&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'10',name:'老年病',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://laoniandaxue-guoguanjv.obs.cn-north-1.myhuaweicloud.com/beihero/orgspace/lndx_ggfwpt/org-2/a/040a3300eea1ae08eae99c0a8bc6d791.jpg',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=491&wareInfoId=492&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	
	{id:'11',name:'湖南株洲阿乐 健身舞蹈队表演舞蹈《就爱广场舞》踩着熟悉的节奏',introTxt:'',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/jpg/2023/0308/2319df6167daba570a1337944e302278e7a0bef84958998dd2c74f4748c6449c.jpg',hrefSrc:'https://w.yangshipin.cn/video?type=0&vid=y000011wchc'},
	{id:'12',name:'回宫格习字法-常规外延的特点及表现方法',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://resource.lndx.edu.cn/beihero/orgspace/lndx_ggfwpt/org_2/a/jpg/2022/0707/8111415dfac47a0a3b32ba2d87ebecfe1b4eb4160d6694b8390aae89f7f9f492.jpg',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=4744&wareInfoId=4745&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'13',name:'回宫格习字法-行书笔画的变化形式',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://resource.lndx.edu.cn/beihero/orgspace/lndx_ggfwpt/org_2/a/jpg/2022/0707/9c0b1492b67d14c8e460e300067fb0d3732262b08bd939a08a7ce095575ca10e.jpg',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=4706&wareInfoId=4707&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'14',name:'中国古代建筑文化——乡土艺术',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2023/0201/06007809cb112f011a054d2b577ca3cb6f372f59dfa841c933e1507b3b80ae78.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=2046&wareInfoId=2047&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'15',name:'揭秘《黄帝内经》',introTxt:'《黄帝内经》分《灵枢》、《素问》两部分，是中国最早的医学典籍，传统医学四大经典著作之一，奠定了人体生理、病理、诊断以及治疗的认识基础，是中国影响极大的一部医学著作，被称为医之始祖。',imgSrc:'https://laoniandaxue-guoguanjv.obs.cn-north-1.myhuaweicloud.com/beihero/orgspace/lndx_ggfwpt/org-2/a/025d11e44a9b289ad0a4388d2513e585.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=11&wareInfoId=12&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	
																																																																											
	{id:'16',name:'开学第一课：张伯礼《中医药助力老年健康》',introTxt:'2023年3月17日，由中国工程院院士、国医大师、天津中医药大学名誉校长张伯礼先生讲授国家老年大学开学第一课《中医药助力老年健康》，从我们日常的起居作息、饮食、运动等方面介绍了中医养生的原则和方法，并以冠心病、高血压、脑卒中等老年常见病为例，讲解了老年人心脑血管疾病的防治方法。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/jpg/2023/0317/c3f1fa380b990bfd727f63003a754d652a37fdcdd2efe6c85364a9c163e2610b.jpg',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=60117&wareInfoId=60116&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'17',name:'二十四节气与养生',introTxt:'本课程讲述二十四节气与养生相关内容。',imgSrc:'https://laoniandaxue-guoguanjv.obs.cn-north-1.myhuaweicloud.com/beihero/orgspace/lndx_ggfwpt/org-2/a/454b2983956684f0d2125d480b065134.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=294&wareInfoId=295&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'18',name:'老年心理专题',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/1124/6c44d9033583632aa502bb48a89c40333269f8f41a2a97a173c9cf96ae90eded.png',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=458&wareInfoId=459&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'19',name:'中国书法大讲堂：行书四大家-王铎',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/1124/d158b172452a2f4ecfd1c3ea56f2c36d812c11fb2007b6983f4c73e3de794fc1.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=5191&wareInfoId=5192&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'20',name:'中国书法大讲堂：楷书四大家-柳公权',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://resource.lndx.edu.cn/beihero/orgspace/lndx_ggfwpt/org_2/a/jpg/2022/0707/0e187c89e89b8b0c39588f5259f02ca4dd4efbdd7d49f762dc847a80855c09be.jpg',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=5251&wareInfoId=5252&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	])

</script>