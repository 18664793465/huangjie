<template>
  <div class="w">
    <div class="nav-top"></div>
    <span class="iconfont iconicon-test close" close></span>
    <div class="login-new">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="user">
      <van-form @submit="onSubmit">
        <van-field
          v-model="from.username"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="from.password"
          type="password"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 0px;">
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      
    </div>
    <!-- <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            注册
          </van-button>
        </div> -->
        <div class="zuce">暂无账号,点击<a href="/register">去注册</a></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: {
        uersname: "",
        password: ""
      }
    };
  },

  methods: {
    onSubmit(values) {
      console.log('submit', values);
        this.$axios({
        url: "/login",
        method: "post",
        data: this.from
      }).then(res => {
        console.log(res);
        const { message,data } = res.data;
        this.$toast(message);
        localStorage.setItem('uesr',JSON.stringify(data))
        const { return_url} = this.$route.query
        this.$router.push(return_url||'/personal')
      });
    
  },
  hansclick(){
    this.$router.push('/register')
  }
  }
};
</script>

<style  scoped lang="less">
.w {
  padding: 20/360 * 100vw;
  background: #f2f2f2;
}
.close {
  font-size: 28/360 * 100vw;
}
.login-new {
  text-align: center;
}
.login-new span {
  font-size: 100/360 * 100vw;
  color: #d04100;
}
.user .van-cell{
  padding:10px 0 ;
  border-bottom: 1px solid #333;
  background: #f2f2f2;
}
.register {
  width: 100%;
  height: 44/360 * 100vw;
  line-height: 44/360 * 100vw;
  background-color: #cc3300;
  border-radius: 20/360 * 100vw;
  text-align: center;
  color: aliceblue;
  margin-top: 50/360 * 100vw;
}
.user .van-button--info{
  background: #d04100;
  border: 1px solid #d04100;
  font-size: 16px;
  margin-top:30px
}
.zuce{
  font-size: 12px;
  text-align: right;
  margin-top: 10px;
}
.zuce a{
color: #2295c6;
text-decoration: underline;
}
</style>
