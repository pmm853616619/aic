<template>
	<div class="header">
    <div><i class="icon iconfont white" :class="leftIcon"></i></div>
    <div class="title">
      <div v-if="this.title.path == '/myOwner'">{{titleMsg}}</div>
      <div class="inputBox" v-else><i @click="search" class="icon iconfont icon-sousuo"></i><input v-model="searchData" type="text" placeholder="华西医院停车场"></div>
    </div>
    <div><i class="icon iconfont white" :class="rightIcon"></i></div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
        titleMsg: this.title.titleMsg || '',
        leftIcon: this.title.leftIcon || '',
        rightIcon: this.title.rightIcon || '',
        searchData: ''
			}
		},
    props: ['title'],
    methods: {
      search: function () {
        this.$emit("search", this.searchData);
      }
    }
	}
</script>
<style>
.header{
  width: 100%;
  height: .46rem;
  line-height: .46rem;
  position: fixed;
  top: 0;
  background-color: red;
  color: #fff;
  font-size: .16rem;
  display: flex;
  z-index: 9999;
}
.header .iconfont{
  font-size: .22rem;
  padding: 0 .08rem;
}
.title{
  flex: 1;
}
.inputBox{
  margin: .06rem;
  line-height: .32rem;
  border-radius: 5px;
  background: #fff;
  display: flex;
}
.inputBox .icon-sousuo{
  color: #999;
}
.inputBox input{
  border-radius: 5px;
}

</style>
