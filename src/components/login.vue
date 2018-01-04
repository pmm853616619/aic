<template>
    <div id="login">
      <div class="loginBox">
        <div class="loginCon">

        </div>
        <i class="icon iconfont icon-quxiao1 close"></i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login"
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
</style>
