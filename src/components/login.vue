<template>
    <div id="login" v-show="isShow">
      <div class="loginBox">
        <div class="loginCon align_center">
          <div class="title">用户登录</div>
          <div class="inputWrap flex">
            <i class="icon iconfont icon-shouji"></i>
            <input type="text" placeholder="请输入手机号">
          </div>
          <div class="inputWrap flex">
            <i class="icon iconfont icon-yuechi"></i>
            <input class="code" type="text" placeholder="请输入验证码">
            <span class="getCode">获取验证码</span>
          </div>
          <button class="loginBtn">确认登录</button>
          <div class="boundary flex">
            <span class="line"></span>
            <span class="text">其它登录</span>
            <span class="line"></span>
          </div>
          <i class="icon iconfont icon-WeChat"></i>
        </div>

        <i class="icon iconfont icon-quxiao1 close" @click="close"></i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                isShow:this.show
            }
        },
        props:['show'],
        methods: {
          close: function () {
            return this.isShow = false
          }
        }
    }
</script>

<style scoped>
#login{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 11111;
  background: rgba(0,0,0,.4);
}
.loginBox{
  position: absolute;
  top: 18%;
  left: 50%;
  margin-left: -1.53rem;
}
.loginCon{
  width: 3.06rem;
  height: 3.82rem;
  padding: .26rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 5px;
}
.close{
  width: .36rem;
  font-size: .36rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -.55rem;
  color: #fff;
}
.title{
  line-height: .16rem;
  font-size: .16rem;
  text-align: center;
  padding: .16rem;
  color: #333;
}
.inputWrap{
  height: .6rem;
  line-height: .6rem;
  border-bottom: 1px solid #f0f0f0;
}
.inputWrap .iconfont{
  display: inline-block;
  margin: 0 .06rem;
  font-size: .25rem;
}
.code{
  width: 50%;
}
.getCode{
  display: inline-block;
  width: 1.04rem;
  height: .36rem;
  margin-top: .11rem;
  text-align: center;
  line-height: .36rem;
  font-size: .14rem;
  color: #d62f10;
  border: 1px solid #d62f10;
  border-radius: 5px;
}
.loginBtn{
  width: 100%;
  height: .4rem;
  margin: .3rem 0;
  border-radius: 5px;
  background: #d62f10;
  color: #fff;
  font-size: .16rem;
  text-align: center;
}
.boundary{
  line-height: .16rem;
  font-size: .12rem;
  color: #b4b4b4;
}
.line{
  display: inline-block;
  width: .7rem;
  height: 1px;
  margin: .06rem .1rem;
  background: #b4b4b4;
}
.icon-WeChat{
  display: inline-block;
  font-size: .32rem;
  margin-top: .16rem;
  color: #6db828;
}


</style>
