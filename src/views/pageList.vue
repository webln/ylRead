<template>
    <div class="uc-pageList">
    	<div><router-link class="item" to="/home">01-银龄读书社区-1级页面</router-link></div>
    	<div><router-link class="item" to="/bookList">02-银龄读书社区-2级图书资源</router-link></div>
    	<div><router-link class="item" to="/mediaList">03-银龄读书社区-2级音视频资源</router-link></div>
    	<div><router-link class="item" to="/detail">04-银龄读书社区-2级银龄读书分享</router-link></div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const name = ref('小')
</script>
<style scoped>
.uc-pageList{padding: 1em;}
.uc-pageList .item{font-weight: bold;font-size: 1.25em;line-height: 2em;}
</style>