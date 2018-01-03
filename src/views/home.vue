<template>
	<div id="home">
    <Header :title="titleJson" @search="search"></Header>
		<div class="main">
			<div class="destination">
        <div class="searchBox">
          <i @click="search" class="icon iconfont icon-sousuo"></i>
          <input type="text" placeholder="请输入您的目的地">
        </div>
      </div>
		</div>
	</div>
</template>
<script>
	import header from '@/components/header.vue'
	export default {
		name: 'home',
		data() {
			return {
        titleJson: {
          titleMsg: '云南智慧停车',
          path: this.$route.path,
          leftIcon: 'icon-yun',
          rightIcon: 'icon-yonghurenxiang'
        }
			}
		},
		components: {
			'Header': header
		},
    methods: {
      search: function (data) {
        console.log(data);
      }
    }
	}
</script>
<style>

.main{
  position: relative;
  top: .46rem;
}
.destination{
  height: .66rem;
  border-bottom: 1px solid #f7f7f7;
  font-size: 16px;
}
.searchBox{

}

</style>
