<template>
	<div id="home">
    <Header :title="titleJson" @search="search"></Header>
		<div class="main">
			<div class="destination">
        <div class="searchBox">
          <i @click="search" class="icon iconfont icon-sousuo"></i>
          <input class="searchInput" type="text" placeholder="请输入您的目的地">
        </div>
      </div>
      <div class="tags flex">
        <div class="tag tagBorder">
          <span class="iconBox"><i class="icon iconfont icon-youhuiquan"></i></span>
          <span class="text">优惠券</span>
        </div>
        <div class="tag">
          <span class="iconBox iconBox2"><i class="icon iconfont icon-xinxi"></i></span>
          <span class="text">我的消息</span>
        </div>
      </div>
      <div class="border_8px"></div>
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
  height: .44rem;
  line-height: .44rem;
  padding: .11rem;
  border-bottom: 1px solid #f7f7f7;
  font-size: 16px;
}
.searchBox{
  display: flex;
  background: #ebebeb;
  border-radius: 5px;
}
.searchBox .icon-sousuo{
  font-size: .18rem;
  padding: 0 .1rem;
}
.searchBox .searchInput{
  width: 100%;
  background: #ebebeb;
  border-radius: 5px;
}
.tags{
  height: .74rem;
}
.border_8px{
  border-bottom:8px solid #ebebeb;
}
.tag{
  padding: .1rem;
  line-height: .54rem;
  flex: 1;
}
.tagBorder{
  border-right: 1px solid #ebebeb;
}
.tag .iconBox{
  display: inline-block;
  width: .46rem;
  height: .46rem;
  text-align: center;
  line-height: .46rem;
  border-radius: 50%;
  background: #ec696e;
  color: #fff;
}
.tag .iconBox2{
  background: #f8a759;
}
.iconBox .iconfont{
  font-size: .2rem;
}
.text{
  color: #333;
  padding-left: .1rem;
}

</style>
