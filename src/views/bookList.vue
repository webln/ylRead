<style type="text/css">
	.uc-bookList .list li a{
		margin-bottom: 30px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		position: relative;
		top: 0;
		transition: all 0.3s linear;
	}
	.uc-bookList .list .con{
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2; /* 超出几行省略 */
		overflow: hidden;
	}
	.uc-bookList .filter.pageBox{
		justify-content: center !important;
	}
	.pageBox li:first-child,.pageBox li:last-child{
		background-color: #f9f5ec;
		/* display: inline-block; */
	}
	.pageBox li:first-child b,.pageBox li:last-child b{
		display: inline-block;
		width: 8px;
		height: 15px;
		vertical-align: middle;
	}
	.pageBox li:first-child b{
		background: url("../assets/images/iconPerv.png") center no-repeat;
	}
	.pageBox li:last-child b{
		background: url("../assets/images/iconNext.png") center no-repeat;
	}
</style>
<template>
	<ucHead :menuIndex="1"></ucHead>
	<section class="uc-bookList">
		<div class="uc-content">
			<div class="g-crumb">
				<router-link class="" to="/">银龄读书社区</router-link>
				<router-link class="" to="">图书资源</router-link>
			</div>
			<div class="g-title">
				<h2>图书资源</h2>
			</div>
			<ul class="filter">
				<li v-for="(item,index) in listFilter1" :key="index">
					<div class="item" :class="item.checked?'on':''" @click="btnChooseFilter1(index)">
						{{ item.name }}
					</div>
				</li>
			</ul>
			<ul class="list">
				<li v-for="(item,index) in list11" :key="index">
					<a class=""  :href='"https://resource.lndx.edu.cn/test/readpdf/"+(index+1)+".html"' target="_blank">
					<!--<a class="" :href="item.urlSrc" target="_blank">-->
						<div class="img">
							<!--<router-link class="" to="">-->
								<img :src="item.imgSrc" alt="">
							<!--</router-link>-->
						</div>
						<div class="right">
							<div class="title">
								<!--<router-link class="name" to="">-->
									<b>{{item.name}}</b>
								<!--</router-link>-->
								<img :src="require(`@/assets/images/home-tag-1-${index%5+1}.png`)" class="uc-icon32" alt="">
							</div>
							<div class="con">{{item.introTxt}}</div>
							<div class="txt">
								<!--<router-link class="author" to="">-->
									{{item.source}}
								<!--</router-link>-->
							</div>
							<div class="tags">
								<span class="uc-tag">{{item.readNum}}w读过</span>
							</div>
							<div class="btm">
								<div class="sub-item">
									<img src="@/assets/images/icon-finger.png" class="uc-icon16" alt="">{{item.fingerNum}}+w
								</div>
								<div class="sub-item">
									<img src="@/assets/images/icon-star.png" class="uc-icon16" alt="">{{item.starNum}}+w
								</div>
								<div class="sub-item">
									<img src="@/assets/images/icon-discuss.png" class="uc-icon16" alt="">{{item.discussNum}}+w
								</div>
							</div>
						</div>
					</a>
				</li>
			</ul>
			<!--<div class="operate">
				<router-link class="uc-btn" to="">查看更多 <i class="uc-font uc-arrow-right"></i></router-link>
			</div>-->
			<ul class="filter pageBox">
				<li>
					<div class="item">
						<b></b>&nbsp;&nbsp;上一页
					</div>
				</li>
				<li v-for="(item,index) in pageNumFilter1" :key="index">
					<div class="item" :class="item.checked?'on':''" @click="btnChooseFilter2(index)">
						{{ item.name }}
					</div>
				</li>
				<li>
					<div class="item">
						下一页&nbsp;&nbsp;<b></b>
					</div>
				</li>
			</ul>
		</div>
	</section>
	<ucFoot></ucFoot>
</template>
<script setup>
	import { ref } from 'vue'
	const name = ref('小')
	const listFilter1 = ref([
		{ name: '全部', checked: true },
		{ name: '厚德修身', checked: false },
		{ name: '终身学习', checked: false },
		{ name: '主动健康', checked: false },
		{ name: '乐享生活', checked: false },
		{ name: '积极作为', checked: false },
	])    
	
	const pageNumFilter1 = ref([		
		{ name: '1', checked: true },
		{ name: '2', checked: false },
		{ name: '3', checked: false },
		{ name: '4', checked: false },
		{ name: '5', checked: false },
		{ name: '6', checked: false },
		{ name: '7', checked: false },
		{ name: '8', checked: false },
		{ name: '9', checked: false },
		{ name: '10', checked: false },
		
	])
	
	const btnChooseFilter1 = val => {
		listFilter1.value.forEach((item, index) => {
			item.checked = index == val ? true : false
		})
	}
	
	const btnChooseFilter2 = val => {
		pageNumFilter1.value.forEach((item, index) => {
			item.checked = index == val ? true : false
		})
	}
	const list11 = ref([
		{source:'人民出版社',name:'习近平讲故事',readNum:'369',fingerNum:'99',starNum:'235',discussNum:'89',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/79627/36/21337/14023/62e79d4bE515e792c/e91b4b76db88d8f0.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30417402',introTxt:'人民日报社组织编写的《习近平讲故事》一书，近日由人民出版社出版发行。该书从习近平总书记数百篇讲话和文章中，精选出体现他治国理政新理念新思想新战略的百余则故事，加以完整呈现和解读。'},
		{source:'学习出版社',name:'习近平总书记在文艺工作座谈会上的重要讲话学习读本',readNum:'512',fingerNum:'261',starNum:'428',discussNum:'102',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/137911/20/27983/101646/62e73f30E31e6952e/3178d5aac6300813.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30418955',introTxt:'2014年10月15日，习近平总书记主持召开文艺工作座谈会，发表了重要讲话。讲话科学分析了文艺领域面临的新形势、新情况、新问题，创造性地回答了事关文艺繁荣发展的一系列带有根本性、方向性的重大问题，体现了党对文艺工作的新思想、新判断、新要求，对在新的历史条件下开创文艺工作新局面作出全面部署。为了深入学习贯彻习近平总书记重要讲话精神，编写了本书，供广大党员、干部和文艺工作者参考。'},
		{source:'湖南科学技术出版社',name:'大脑通信员：认识你的神经递质',readNum:'212',fingerNum:'91',starNum:'58',discussNum:'182',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/198586/32/22853/151295/6268a2ffEe30d10cd/8289f4dad6e6fc1f.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30811578',introTxt:'知乎神经科学领域21w+赞同，脑科学专家赵思家力作！戒了碳水化合物就真的可以减肥吗？到底为什么会睡不着觉？真的是多巴胺让你更快乐吗？为什么你的记忆力会越来越差？吃辣和跑步为什么让人很爽？想要回答以上这些问题，我们需要更加深入了解大脑，而负责调控有关“快乐”“记忆”“上瘾”“恋爱”等重要事情的，则是大脑中的通信员（打工人）——神经递质。这是一本有关大脑神经的趣味科普通俗读物。作者在本书中将用生活化的语言为我们系统专业地解释什么是神经递质，它们在大脑中的工作机制是什么，将七种常见的神经递质——多巴胺、血清素、去甲肾上腺素、乙酰胆碱、谷氨酸、GABA、内啡肽一一讲清楚。'},
		{source:'人民邮电出版社有限公司',name:'奇妙量子世界--人人都能看懂的量子科学漫画',readNum:'172',fingerNum:'251',starNum:'28',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/73317/3/5499/362826/5d391d63E065c54f0/15bb1d276dc4a51e.jpg',discussNum:'356',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30505041',introTxt:'内容提要本书是关于量子信息的科普漫画，书中详细介绍了潘建伟院士领导的中国科学技术大学量子信息科研团队在近几年取得的科研进展，将十余篇刊发在《自然》、《科学》等国际一流学术期刊上的科研成果通过生动有趣的漫画形式介绍给读者，内容包括量子通信、量子密码、量子计算、量子模拟、量子纠缠等。本书非常适合对量子领域感兴趣的读者阅读。'},
		{source:'中信出版集团',name:'全球化的裂解与再融合_朱云汉',readNum:'198',fingerNum:'39',starNum:'54',discussNum:'62',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/206655/10/10844/286822/619f589eEa5d9c083/cba8c46872283265.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30756193',introTxt:'我们正处在一个巨变的时代。全球政治经济格局处于新旧秩序更替期，旧的观念、体制、规则正在凋零，新的思维、秩序、模式尚未破茧而出。美国主导的全球化模式已难以为继。 作者对全球战略格局变化趋势与美国对中国进行的战略围堵做出了五个基本判断，对全球走向裂解的现状进行了批判，对未来如何转型和再融合提出了新的见解。西方的制度正在瓦解，出现“政治之恶”“权力之恶”“资本之恶”“社会之恶”并举的困局。中国崛起开启了新的世界历史，创造性地探索适应新时代的新体制。无论是在理论层面还是在实践层面，中国都在进行“超越与突破”，这是西方主流理论难以预判和解释的。中国道路不仅促成了中国成功的故事，也为发展中国家争取政治独立和经济发展提供了新的选择。作者从多维度评估中国道路的影响力，以及中国复兴的全球意涵。 当前全球政治经济格局正发生根本性变化，全球化裂解的风险空前严峻，全球治理机制的改革势在必行。中国将引领新兴经济体推进全球治理机制改革，重塑全球化路径与游戏规则。'},
		{source:'上海古籍出版社',name:'中国古代纪时考',readNum:'351',fingerNum:'38',starNum:'246',discussNum:'302',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/132325/40/13999/56607/5f990a40Efc9294a6/01eb7ee9239c505c.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30674988',introTxt:'本书对中国古代的纪年、纪月、纪日、纪时的方法及其流变作了深入浅出的考述。'},
		{source:'浙江古籍出版社',name:'中国石窟简史',readNum:'362',fingerNum:'107',starNum:'203',discussNum:'832',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/86929/20/27433/212450/6299651aEb1ffb090/2faa4409434848e7.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30814513',introTxt:'本书从石窟传入中国之始切入，对整个中国石窟寺发展历程进行总体描述，详细梳理了中国石窟寺自西向东、自北向南逐渐推进的历程，细数各朝石窟开凿的由来和过程，石窟与当时政治、经济、人民日常生活的交织关系，以时间为经、以代表性石窟为纬，展现历代石窟总体风貌，并细化至各代各地具有代表性的石窟其由来、开凿时间、主持者、地质特征等各方面的信息。'},
		{source:'北京少年儿童出版社',name:'花猫三丫上房了',readNum:'438',fingerNum:'84',starNum:'59',discussNum:'24',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/109153/29/237/348271/5df35f76Edad40b4f/61423f9f9e067c02.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30557717',introTxt:'《花猫三丫上房了》是叶广芩老师继《耗子大爷起晚了》之后的又一儿童文学作品。故事主要讲述耗子丫丫跟随爸爸离开颐和园之后回到家里，开始了自己的小学生活。上了小学的耗子丫丫并没有因为入了学堂而变得乖巧起来，而是将她的古灵精怪进行到底。她在胡同的院子里，带着小妹妹唱戏，追着花猫再屋顶上乱窜，本书将带领读者，通过小女孩耗子丫丫的眼睛，领略到老北京胡同里的生活。'},
		{source:'上海人民出版社',name:'民法典与日常生活',readNum:'179',fingerNum:'98',starNum:'60',discussNum:'56',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/126349/6/8232/356825/5f214554Ee17297d1/8c8b783a0c42ff01.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30641753',introTxt:'民法典适应时代发展的需要，回应了当今社会的现实需求，与每个人的日常生活息息相关。《民法典与日常生活》旨在让民法典走到群众身边、走进群众心里，帮助大众更方便地了解民法知识。全书分为两大部分：案例编选择生活中常见、典型和有趣味性的73个案例进行分析，对日常生活中经常接触的民法知识予以解释，并通过这些知识简要说明相关的民法理论。热点编用通俗易懂的语言对民法典中45个热点、焦点问题进行解读，包含网络虚拟财产保护、个人信息保护、居住权等社会关注度较高的问题。'},
		{source:'北京中作华文数字传媒股份有限公司',name:'装台',readNum:'327',fingerNum:'45',starNum:'85',discussNum:'73',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/197388/40/14606/160799/61764ef9Eb14ee659/2bedfb31be920d3a.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30284690',introTxt:'《装台》人刁顺子踏实肯干，带着几个兄弟承接各种演出装台的活。顺子有过三次婚姻，第一个老婆抛弃了他留下女儿刁菊花，第二个老婆得癌症去世了，带过来一个女儿韩梅，第三房老婆蔡素芬漂亮温顺，却遭到自己容貌不佳沦为大龄剩女的女儿菊花的百般刁难，心理扭曲的菊花把蔡素芬和大学放假回来的韩梅视为眼中钉，家里频频爆发“女人大战”顺子在外面点头哈腰招揽生意、没日没夜的卖苦力赚钱，回家又得面对被女儿折腾的破乱不堪的家。韩梅、蔡素芬忍受不了菊花纷纷离开了这个家……小说刻画人物手法细腻，故事跌宕起伏，命运看似之无常又有常，以一个装台人为视角，描写西京城里人生百态。'},
		])
</script>