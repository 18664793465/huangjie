<template>
  <div class="w">
    <div class="nav-top"></div>
    <span class="iconfont iconicon-test close" close></span>
    <div class="login-new">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="user">
      <input type="text" placeholder="用户名/手机号码" />
      <br />
      <input type="password" placeholder="密码" />
    </div>
    <div class="register">登录</div>
    <div class="bottoms"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.w {
  width: 360px;
  height: 620px;
  background: #f2f2f2;
}
.nav-top {
  height: 25px;
  background: #757575;
}
.close {
  display: block;
  font-size: 28px;
  margin: 20px;
}
.login-new {
  /* margin-top: 20px; */
  text-align: center;
}
.login-new > span {
  font-size: 120px;
  font-weight: 500;
  color: #d81e06;
}
.user {
  text-align: center;
}
.user input {
  border: 0px solid;
  border-bottom: 1px solid #757575;
  background: #f2f2f2;
  height: 50px;
  width: 330px;
}
.register {
  background: #cc3300;
  width: 320px;
  height: 50px;
  margin-top: 50px;
  margin-left: 20px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  color: #f2f2f2;
  border-radius: 30px;
}
.bottoms {
  background: #000;
  height: 45px;
  margin-top: 200px;
}
</style>