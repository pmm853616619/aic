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
      <div class="tags flex align_center">
        <div class="tag red fontSize_14 ">未登录，无法使用该功能</div>
        <div class="tag">
          <span class="login">立即登录</span>
        </div>
      </div>
      <div class="border_4px"></div>
      <div class="titleWrap">
        <div class="discribe">附近<span class="red">15</span>个停车场</div>
      </div>
      <div class="mapWrap">
        <v-map></v-map>
      </div>
      <div class="titleWrap">
        <div class="discribe">列表</div>
      </div>
      <div class="listWrap">
        <div class="list clear" v-for="item in parkDetails">
          <div class="left parkName">
            <h4>{{item.parkName}}</h4>
            <div>
              <span class="red price">￥{{item.price}}/h</span>
              <span class="parking">{{item.state}}</span>
            </div>
          </div>
          <div class="right navigation red">
            <i class="icon iconfont icon-daohang1 block red"></i>
            <span class="block" style="font-size: .14rem">导航</span>
          </div>
        </div>
      </div>
		</div>
    <v-login></v-login>
	</div>
</template>
<script>
	import header from '@/components/header.vue'
	import map from '@/components/map.vue'
	import login from '@/components/login.vue'
	export default {
		name: 'home',
		data() {
			return {
        titleJson: {
          titleMsg: '云南智慧停车',
          path: this.$route.path,
          leftIcon: 'icon-yun',
          rightIcon: 'icon-yonghurenxiang'
        },
        parkDetails: [
          {
            parkName:'成都市武侯区四川大学华西医院地面停车场',
            price:'5',
            state:'有空闲车位'
          },
          {
            parkName:'成都市武侯区四川大学华西医院地面停车场',
            price:'5',
            state:'有空闲车位'
          },
          {
            parkName:'成都市武侯区四川大学华西医院地面停车场',
            price:'5',
            state:'有空闲车位'
          },
          {
            parkName:'成都市武侯区四川大学华西医院地面停车场',
            price:'5',
            state:'有空闲车位'
          }
        ]
			}
		},
		components: {
			'Header': header,
      'v-map': map,
      'v-login': login
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
  border-top: 1px solid #f7f7f7;
}
.border_4px{
  border-bottom:4px solid #ebebeb;
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
  margin-left: .2rem;
}
.tag .iconBox2{
  background: #f8a759;
}
.login{
  display: inline-block;
  width: 1.04rem;
  height: .36rem;
  text-align: center;
  line-height: .36rem;
  font-size: .14rem;
  color: #d62f10;
  border: 1px solid #d62f10;
  border-radius: 5px;
}
.iconBox .iconfont{
  font-size: .2rem;
}
.text{
  color: #333;
  padding-left: .1rem;
}
.titleWrap{
  padding: 0 .11rem;
  font-size: .16rem;
  margin: .2rem 0;
}
.discribe{
  padding: 0 .11rem;
  border-left: 4px solid #d62f10;
}
.mapWrap{
  padding: 0 .11rem;
  height: 1.9rem;
}
.listWrap{
  margin: 0 .11rem;
}
.list{
  height: .5rem;
  padding: .2rem 0;
  border-top:2px solid #ebebeb;
  display: flex;
}
.parkName{
  width: 85%;
}
.parkName h4{
  font-size: .16rem;
  font-weight: normal;
  width: 100%;
  height: .32rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price{
  display: inline-block;
  width: .6rem;
}
.parking{
  font-size: .14rem;
  color: #999;
}
.navigation{
  padding: 0 .1rem;
}
.navigation .iconfont{
  font-size: .26rem;
  padding-bottom: .05rem;
}

</style>
