<style type="text/css">
	.uc-home-1 .list li a{
		margin-bottom: 30px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		position: relative;
		top: 0;
		transition: all 0.3s linear;
	}
	.uc-home-1 .list .con{
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2; /* 超出几行省略 */
		overflow: hidden;
	}
	.uc-home-2 .intro {
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4; 
		overflow: hidden;
	}
	
</style>

<template>
	<ucHead :menuIndex="1"></ucHead>
	<section class="uc-content uc-mt20">
		<div class="g-bannerBox">
			<!-- <a href=""> -->
				<img src="@/assets/images/home-banner-1.png" alt="">
			<!-- </a> -->
		</div>
	</section>
	<section class="uc-home-1">
		<div class="uc-content">
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
					<!--<a class=""  :href="item.urlSrc" target="_blank">-->
					<a class=""  :href='"https://resource.lndx.edu.cn/test/readpdf/"+(index+1)+".html"' target="_blank">
						<!--https://resource.lndx.edu.cn/test/readpdf/mfd.html-->
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
			<div class="operate">
				<router-link class="uc-btn" to="/bookList">查看更多 <i class="uc-font uc-arrow-right"></i></router-link>
			</div>
		</div>
	</section>
	<section class="uc-content">
		<div class="g-bannerBox">
			<a href="https://lndx.edu.cn/elderlyUniversity">
				<img src="@/assets/images/home-banner-2.png" alt="">
			</a>
		</div>
	</section>
	<section class="uc-home-2">
		<div class="uc-content">
			<div class="g-title">
				<h2>银龄阅读分享</h2>
			</div>
			<ul class="list">
				<!--<li v-for="(item,index) in 2" :key="index">-->
				<li>
					<div>
						<router-link class="" to="/detail1">
						<div class="part">
							<div class="img">
									<img :src="require(`@/assets/images/home-img-2-1.png`)" alt="">
							</div>
							<div class="right">
								<h3><b>连素华</b></h3>
								<div class="txt">银龄教师老少共读代表</div>
							</div>
						</div>
						<div class="intro">
							<p>
								连素华，八十一岁，国家老年大学学员。曾任解放军6901厂幼儿园老师，一生热爱读书。听说国家老年大学成立了，连素华和女儿周小玲一起第一时间报名了。热爱学习的她，经常和学友们一起读书交流。不仅如此，她还经常和女儿在家附近的书店读书，号召邻居伙伴一起阅读，邻里间形成了温馨和谐的阅读氛围。邻居经常带着小女儿一起参加，小朋友稚嫩的声音勾起连奶奶的回忆。连奶奶跟着小朋友一起朗读经典名著，朗诵红色经典诗歌，孜孜不倦的求学精神和热爱阅读积极向上的态度也感染着小朋友。朗读让连奶奶找到很多乐趣，既锻炼了表达能力，又动手动脑，朋友也常夸连奶奶带上老花镜阅读的时候精神矍铄、声音优美、吐字清晰。现在，连奶奶经常与小朋友一起朗读，专注的阅读让她觉得自己仿佛年轻了许多，与小朋友共同成长，也让生活变得很充实，晚年生活其乐融融。
							</p>
						</div>
						<div class="operate">
							<router-link class="uc-btn" to="/detail1">查看更多 <i class="uc-font uc-arrow-right"></i></router-link>
						</div>
						</router-link>
					</div>
				</li>
				<li>
					<div>
						<router-link class="" to="/detail2">
						<div class="part">
							<div class="img">
								<!-- <router-link class="" to=""> -->
									<img :src="require(`@/assets/images/home-img-2-2.png`)" alt="">
								<!-- </router-link> -->
							</div>
							<div class="right">
								<h3><b>黄开明</b></h3>
								<div class="txt">银龄人物代表</div>
							</div>
						</div>
						<div class="intro">
							<p>
								“活到老，学到老。”重庆市城口县东安镇德安村的黄开明老人正在以实际行动践行着这句名言。今年75岁的他依旧坚持每天阅读书籍，好多村民经常看到他在乡间、田头，捧着本书，一看就是一整天。
							</p>
							<p>
								德安村农家书屋是2016年成立的，黄开明基本每天都会到农家书屋来借阅书籍，每次一有新书，他总是第一个借，几乎把书屋的书看了个遍。由于时代与家庭的原因，黄开明只有小学文化，但他后来自学认字，现在基本上书屋里书籍的汉字都能认识。
							</p>
						</div>
						<div class="operate">
							<router-link class="uc-btn" to="/detail2">查看更多 <i class="uc-font uc-arrow-right"></i></router-link>
						</div>
						</router-link>
					</div>
				</li>
			</ul>
		</div>
	</section>
	<section class="uc-home-3">
		<div class="uc-content">
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
			<div class="operate">
				<router-link class="uc-btn" to="/mediaList">查看更多 <i class="uc-font uc-arrow-right"></i></router-link>
			</div>
		</div>
	</section>
	<section class="uc-home-4">
		<div class="uc-content">
			<div class="g-title">
				<h2>排行榜</h2>
			</div>
			<div class="box">
				<div class="card style-coffee">
					<div class="title"><img src="@/assets/images/home-title-4-coffee-1.png" alt=""> <b>热书榜</b> <img src="@/assets/images/home-title-4-coffee-2.png" alt=""></div>
					<ul class="list">
						<li v-for="(item,index) in list41" :key="index">
							<div class="number">{{index+1}}</div>
							{{item.name}}
						</li>
					</ul>
				</div>
				<div class="card style-blue">
					<div class="title"><img src="@/assets/images/home-title-4-blue-1.png" alt=""> <b>爱读书城市</b> <img src="@/assets/images/home-title-4-blue-2.png" alt=""></div>
					<ul class="list">
						<li v-for="(item,index) in list42" :key="index">
							<div class="number">{{index+1}}</div>
							{{item.name}}
						</li>
					</ul>
				</div>
				<div class="card style-green">
					<div class="title"><img src="@/assets/images/home-title-4-green-1.png" alt=""> <b>书香校园</b> <img src="@/assets/images/home-title-4-green-2.png" alt=""></div>
					<ul class="list">
						<li v-for="(item,index) in list43" :key="index">
							<div class="number">{{index+1}}</div>
							{{item.name}}
						</li>
					</ul>
				</div>
				<div class="card style-orange">
					<div class="title"><img src="@/assets/images/home-title-4-orange-1.png" alt=""> <b>读书之星</b> <img src="@/assets/images/home-title-4-orange-2.png" alt=""></div>
					<ul class="list">
						<li v-for="(item,index) in list44" :key="index">
							<div class="number">{{index+1}}</div>
							{{item.name}}
						</li>
					</ul>
				</div>
			</div>
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
  
const btnChooseFilter1 = val => {
	listFilter1.value.forEach((item, index) => {
		item.checked = index == val ? true : false
	})
}
const list11 = ref([
	{source:'人民出版社',name:'习近平讲故事',readNum:'369',fingerNum:'99',starNum:'235',discussNum:'89',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/79627/36/21337/14023/62e79d4bE515e792c/e91b4b76db88d8f0.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30417402',introTxt:'人民日报社组织编写的《习近平讲故事》一书，近日由人民出版社出版发行。该书从习近平总书记数百篇讲话和文章中，精选出体现他治国理政新理念新思想新战略的百余则故事，加以完整呈现和解读。'},
	{source:'学习出版社',name:'习近平总书记在文艺工作座谈会上的重要讲话学习读本',readNum:'512',fingerNum:'261',starNum:'428',discussNum:'102',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/137911/20/27983/101646/62e73f30E31e6952e/3178d5aac6300813.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30418955',introTxt:'2014年10月15日，习近平总书记主持召开文艺工作座谈会，发表了重要讲话。讲话科学分析了文艺领域面临的新形势、新情况、新问题，创造性地回答了事关文艺繁荣发展的一系列带有根本性、方向性的重大问题，体现了党对文艺工作的新思想、新判断、新要求，对在新的历史条件下开创文艺工作新局面作出全面部署。为了深入学习贯彻习近平总书记重要讲话精神，编写了本书，供广大党员、干部和文艺工作者参考。'},
	{source:'湖南科学技术出版社',name:'大脑通信员：认识你的神经递质',readNum:'212',fingerNum:'91',starNum:'58',discussNum:'182',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/198586/32/22853/151295/6268a2ffEe30d10cd/8289f4dad6e6fc1f.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30811578',introTxt:'知乎神经科学领域21w+赞同，脑科学专家赵思家力作！戒了碳水化合物就真的可以减肥吗？到底为什么会睡不着觉？真的是多巴胺让你更快乐吗？为什么你的记忆力会越来越差？吃辣和跑步为什么让人很爽？想要回答以上这些问题，我们需要更加深入了解大脑，而负责调控有关“快乐”“记忆”“上瘾”“恋爱”等重要事情的，则是大脑中的通信员（打工人）——神经递质。这是一本有关大脑神经的趣味科普通俗读物。作者在本书中将用生活化的语言为我们系统专业地解释什么是神经递质，它们在大脑中的工作机制是什么，将七种常见的神经递质——多巴胺、血清素、去甲肾上腺素、乙酰胆碱、谷氨酸、GABA、内啡肽一一讲清楚。'},
	{source:'人民邮电出版社有限公司',name:'奇妙量子世界--人人都能看懂的量子科学漫画',readNum:'172',fingerNum:'251',starNum:'28',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/73317/3/5499/362826/5d391d63E065c54f0/15bb1d276dc4a51e.jpg',discussNum:'356',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30505041',introTxt:'内容提要本书是关于量子信息的科普漫画，书中详细介绍了潘建伟院士领导的中国科学技术大学量子信息科研团队在近几年取得的科研进展，将十余篇刊发在《自然》、《科学》等国际一流学术期刊上的科研成果通过生动有趣的漫画形式介绍给读者，内容包括量子通信、量子密码、量子计算、量子模拟、量子纠缠等。本书非常适合对量子领域感兴趣的读者阅读。'},
	{source:'中信出版集团',name:'全球化的裂解与再融合_朱云汉',readNum:'198',fingerNum:'39',starNum:'54',discussNum:'62',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/206655/10/10844/286822/619f589eEa5d9c083/cba8c46872283265.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30756193',introTxt:'我们正处在一个巨变的时代。全球政治经济格局处于新旧秩序更替期，旧的观念、体制、规则正在凋零，新的思维、秩序、模式尚未破茧而出。美国主导的全球化模式已难以为继。 作者对全球战略格局变化趋势与美国对中国进行的战略围堵做出了五个基本判断，对全球走向裂解的现状进行了批判，对未来如何转型和再融合提出了新的见解。西方的制度正在瓦解，出现“政治之恶”“权力之恶”“资本之恶”“社会之恶”并举的困局。中国崛起开启了新的世界历史，创造性地探索适应新时代的新体制。无论是在理论层面还是在实践层面，中国都在进行“超越与突破”，这是西方主流理论难以预判和解释的。中国道路不仅促成了中国成功的故事，也为发展中国家争取政治独立和经济发展提供了新的选择。作者从多维度评估中国道路的影响力，以及中国复兴的全球意涵。 当前全球政治经济格局正发生根本性变化，全球化裂解的风险空前严峻，全球治理机制的改革势在必行。中国将引领新兴经济体推进全球治理机制改革，重塑全球化路径与游戏规则。'},
//	{source:'上海古籍出版社',name:'中国古代纪时考',readNum:'351',fingerNum:'38',starNum:'246',discussNum:'302',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/132325/40/13999/56607/5f990a40Efc9294a6/01eb7ee9239c505c.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30674988',introTxt:'本书对中国古代的纪年、纪月、纪日、纪时的方法及其流变作了深入浅出的考述。'},
//	{source:'浙江古籍出版社',name:'中国石窟简史',readNum:'362',fingerNum:'107',starNum:'203',discussNum:'832',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/86929/20/27433/212450/6299651aEb1ffb090/2faa4409434848e7.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30814513',introTxt:'本书从石窟传入中国之始切入，对整个中国石窟寺发展历程进行总体描述，详细梳理了中国石窟寺自西向东、自北向南逐渐推进的历程，细数各朝石窟开凿的由来和过程，石窟与当时政治、经济、人民日常生活的交织关系，以时间为经、以代表性石窟为纬，展现历代石窟总体风貌，并细化至各代各地具有代表性的石窟其由来、开凿时间、主持者、地质特征等各方面的信息。'},
//	{source:'北京少年儿童出版社',name:'花猫三丫上房了',readNum:'438',fingerNum:'84',starNum:'59',discussNum:'24',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/109153/29/237/348271/5df35f76Edad40b4f/61423f9f9e067c02.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30557717',introTxt:'《花猫三丫上房了》是叶广芩老师继《耗子大爷起晚了》之后的又一儿童文学作品。故事主要讲述耗子丫丫跟随爸爸离开颐和园之后回到家里，开始了自己的小学生活。上了小学的耗子丫丫并没有因为入了学堂而变得乖巧起来，而是将她的古灵精怪进行到底。她在胡同的院子里，带着小妹妹唱戏，追着花猫再屋顶上乱窜，本书将带领读者，通过小女孩耗子丫丫的眼睛，领略到老北京胡同里的生活。'},
//	{source:'上海人民出版社',name:'民法典与日常生活',readNum:'179',fingerNum:'98',starNum:'60',discussNum:'56',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/126349/6/8232/356825/5f214554Ee17297d1/8c8b783a0c42ff01.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30641753',introTxt:'民法典适应时代发展的需要，回应了当今社会的现实需求，与每个人的日常生活息息相关。《民法典与日常生活》旨在让民法典走到群众身边、走进群众心里，帮助大众更方便地了解民法知识。全书分为两大部分：案例编选择生活中常见、典型和有趣味性的73个案例进行分析，对日常生活中经常接触的民法知识予以解释，并通过这些知识简要说明相关的民法理论。热点编用通俗易懂的语言对民法典中45个热点、焦点问题进行解读，包含网络虚拟财产保护、个人信息保护、居住权等社会关注度较高的问题。'},
//	{source:'北京中作华文数字传媒股份有限公司',name:'装台',readNum:'327',fingerNum:'45',starNum:'85',discussNum:'73',imgSrc:'https://img10.360buyimg.com/n12/s280x280_jfs/t1/197388/40/14606/160799/61764ef9Eb14ee659/2bedfb31be920d3a.jpg',urlSrc:'http://51zhaoshu.net:8100/ebook/combookDetail?bookid=30284690',introTxt:'《装台》人刁顺子踏实肯干，带着几个兄弟承接各种演出装台的活。顺子有过三次婚姻，第一个老婆抛弃了他留下女儿刁菊花，第二个老婆得癌症去世了，带过来一个女儿韩梅，第三房老婆蔡素芬漂亮温顺，却遭到自己容貌不佳沦为大龄剩女的女儿菊花的百般刁难，心理扭曲的菊花把蔡素芬和大学放假回来的韩梅视为眼中钉，家里频频爆发“女人大战”顺子在外面点头哈腰招揽生意、没日没夜的卖苦力赚钱，回家又得面对被女儿折腾的破乱不堪的家。韩梅、蔡素芬忍受不了菊花纷纷离开了这个家……小说刻画人物手法细腻，故事跌宕起伏，命运看似之无常又有常，以一个装台人为视角，描写西京城里人生百态。'},
	])

const list31 = ref([
	{id:'1',name:'正确认识食品安全问题',introTxt:'本课程讲述正确认识食品安全问题系列相关课程。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2023/0131/73cbdb78b3841e560aa0eb74ccf3cedfbf9b9bf0abf3494bbc4de7202b0f17d7.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=43377&wareInfoId=43378&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'2',name:'养生就是生活——养生勿离三原则',introTxt:'本课程主要讲述养生的原则，包括中医养生、心脏保健等。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/0906/0dda3a9c12cfa39a677f199818f1cd379bbc4088e191ae1865143ff58a95261a.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=28455&wareInfoId=28456&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'3',name:'做自己的营养师——肠胃不好如何调整',introTxt:'本课程主要讲述通过营养食疗改善疲劳、腰酸背痛、肠胃不好、失眠等病症。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/0906/99643d20cdd141bc57e31642ddc083ef92e6aa8fc8a3503292925e5091a4045b.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=28482&wareInfoId=28483&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'4',name:'健身气功八段锦',introTxt:'根据国家体育总局办公厅和科学技术部办公厅关于全国体育科普作品征集大赛相关通知的要求，2021-2070年，体育总局科教司会同群体司组织开展了“首届全国体育科普作品征集大赛”，面向全国公开征集体育科普作品，经过网络展播、公众评选和专家组评议等阶段，首批全国优秀体育科普作品和展播作品名单出炉。',imgSrc:'https://resource.lndx.edu.cn/beihero/orgspace/lndx_ggfwpt/org_2/a/png/2022/0711/21934e2feb82456f6af2126d81cd42f39b989314442be2eb3a0657371baa7ee9.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=11083&wareInfoId=11084&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	{id:'5',name:'炖肉耗时长，炖不烂，怎么办',introTxt:'',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2023/0308/0999ad1ff7e73cedea75e5403a24434daa00ef83ebb6d8889e3f46ea21bb381c.png',hrefSrc:'https://w.yangshipin.cn/video?type=0&vid=z000015cqma'},
	
	{id:'6',name:'保持良好坐姿，要从正确的入座姿势开始！',introTxt:'',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/jpg/2023/0308/122c7a1b75ca211df994a37c249f3d82baa6b11152602f1104ebae6181aee6b4.jpg',hrefSrc:'https://w.yangshipin.cn/video?type=0&vid=y000019t21l'},
//	{id:'7',name:'平衡力和骨质疏松有关，专家教您自测骨质疏松风险!',introTxt:'',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/jpg/2022/1026/30fc03885f11095eda6bd4af160bdc1230ad73ef1418ff526e7298c497eade8a.jpg',hrefSrc:'https://w.yangshipin.cn/video?type=0&vid=i000030l8jq'},
//	{id:'8',name:'肿瘤防治之胖熊讲科普-血栓',introTxt:'本课程讲述肿瘤防治之胖熊讲科普-血栓系列相关课程。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/1128/735652ad73c2101930c049d1f7dea0f99f7a500a21cd5cd379d741e49b64ce0b.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=43252&wareInfoId=43253&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
//	{id:'9',name:'肿瘤防治之胖熊讲科普-肠息肉',introTxt:'本课程讲述肿瘤防治之胖熊讲科普-肠息肉系列相关课程。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/1128/2eeb1b005761f2f8da4e0ed6d78edae7d70a9219058b48a27e79acb1b930be48.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=43212&wareInfoId=43213&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
//	{id:'10',name:'老年病',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://laoniandaxue-guoguanjv.obs.cn-north-1.myhuaweicloud.com/beihero/orgspace/lndx_ggfwpt/org-2/a/040a3300eea1ae08eae99c0a8bc6d791.jpg',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=491&wareInfoId=492&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
//	
//	{id:'11',name:'湖南株洲阿乐 健身舞蹈队表演舞蹈《就爱广场舞》踩着熟悉的节奏',introTxt:'',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/jpg/2023/0308/2319df6167daba570a1337944e302278e7a0bef84958998dd2c74f4748c6449c.jpg',hrefSrc:'https://w.yangshipin.cn/video?type=0&vid=y000011wchc'},
//	{id:'12',name:'回宫格习字法-常规外延的特点及表现方法',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://resource.lndx.edu.cn/beihero/orgspace/lndx_ggfwpt/org_2/a/jpg/2022/0707/8111415dfac47a0a3b32ba2d87ebecfe1b4eb4160d6694b8390aae89f7f9f492.jpg',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=4744&wareInfoId=4745&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
//	{id:'13',name:'回宫格习字法-行书笔画的变化形式',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://resource.lndx.edu.cn/beihero/orgspace/lndx_ggfwpt/org_2/a/jpg/2022/0707/9c0b1492b67d14c8e460e300067fb0d3732262b08bd939a08a7ce095575ca10e.jpg',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=4706&wareInfoId=4707&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
//	{id:'14',name:'中国古代建筑文化——乡土艺术',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2023/0201/06007809cb112f011a054d2b577ca3cb6f372f59dfa841c933e1507b3b80ae78.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=2046&wareInfoId=2047&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
//	{id:'15',name:'揭秘《黄帝内经》',introTxt:'《黄帝内经》分《灵枢》、《素问》两部分，是中国最早的医学典籍，传统医学四大经典著作之一，奠定了人体生理、病理、诊断以及治疗的认识基础，是中国影响极大的一部医学著作，被称为医之始祖。',imgSrc:'https://laoniandaxue-guoguanjv.obs.cn-north-1.myhuaweicloud.com/beihero/orgspace/lndx_ggfwpt/org-2/a/025d11e44a9b289ad0a4388d2513e585.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=11&wareInfoId=12&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
//	
//																																																																											
//	{id:'16',name:'开学第一课：张伯礼《中医药助力老年健康》',introTxt:'2023年3月17日，由中国工程院院士、国医大师、天津中医药大学名誉校长张伯礼先生讲授国家老年大学开学第一课《中医药助力老年健康》，从我们日常的起居作息、饮食、运动等方面介绍了中医养生的原则和方法，并以冠心病、高血压、脑卒中等老年常见病为例，讲解了老年人心脑血管疾病的防治方法。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/jpg/2023/0317/c3f1fa380b990bfd727f63003a754d652a37fdcdd2efe6c85364a9c163e2610b.jpg',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=60117&wareInfoId=60116&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
//	{id:'17',name:'二十四节气与养生',introTxt:'本课程讲述二十四节气与养生相关内容。',imgSrc:'https://laoniandaxue-guoguanjv.obs.cn-north-1.myhuaweicloud.com/beihero/orgspace/lndx_ggfwpt/org-2/a/454b2983956684f0d2125d480b065134.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=294&wareInfoId=295&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
//	{id:'18',name:'老年心理专题',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/1124/6c44d9033583632aa502bb48a89c40333269f8f41a2a97a173c9cf96ae90eded.png',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=458&wareInfoId=459&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
//	{id:'19',name:'中国书法大讲堂：行书四大家-王铎',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/1124/d158b172452a2f4ecfd1c3ea56f2c36d812c11fb2007b6983f4c73e3de794fc1.png',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=5191&wareInfoId=5192&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
//	{id:'20',name:'中国书法大讲堂：楷书四大家-柳公权',introTxt:'国家开放大学汇聚大量老年教育与为老服务教育数字化学习资源，满足老年人日益增长的多样化、个性化精神文化需求，促进老年人老有所学、老有所乐、老有所养、老有所为。',imgSrc:'https://resource.lndx.edu.cn/beihero/orgspace/lndx_ggfwpt/org_2/a/jpg/2022/0707/0e187c89e89b8b0c39588f5259f02ca4dd4efbdd7d49f762dc847a80855c09be.jpg',hrefSrc:'https://lndx.edu.cn/courseDetailPlay?courseId=5251&wareInfoId=5252&special=&breadKey=%E8%AF%BE%E7%A8%8B%E6%92%AD%E6%94%BE&classroomId=&isElder='},
	])


const list41 = ref([
	{name:'习近平的七年知青岁月'},
	{name:'银发中国'},
	{name:'不生病的生活方式'},
	{name:'改革开放口述史'},
	{name:'望江南'},
	{name:'晚年优雅'}, 
	])
const list42 = ref([
	{name:'北京'},
	{name:'上海'},
	{name:'青岛'},
	{name:'沈阳'},
	{name:'深圳'},
	{name:'南京'}, 
	])
const list43 = ref([
	{name:'北京开放大学'},
	{name:'广东开放大学'},
	{name:'天津开放大学'},
	{name:'浙江开放大学'},
	{name:'河北开放大学'},
	{name:'新疆开放大学'}, 
	])
const list44 = ref([
	{name:'王建国'},
	{name:'付凯'},
	{name:'吴泽明'},
	{name:'傅智华'},
	{name:'张丽'},
	{name:'胡广军'}, 
	])

</script>