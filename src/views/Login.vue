<template>
  <div class="w">
    <div class="nav-top"></div>
    <span class="iconfont iconicon-test close" close></span>
    <div class="login-new">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="user">
      <div>
        <input type="text" placeholder="用户名/手机号码"  v-model="from.uersname"/>
      </div>

      <div>
        <input type="password" placeholder="密码" v-model="from.password" />
      </div>
      <div class="register" @click="handclick">登录</div>
    </div>

    
  </div>
</template>

<script>
export default {
data(){
  return {
    from:{
      uersname:'',
      password:''
    }
  }
 
},

 methods:{
    handclick(){
      this.$axios({
        url:'http://127.0.0.1:3000/login',
        method:'post',
        data:this.from
      }).then(res=>{
        console.log(res);
      
        
      })
      
    }
  }
};
</script>

<style lang='less'>
.w {
  padding: 20/360 * 100vw;
  background: #f2f2f2;
}
.close{
  font-size: 28/360*100vw;
}
.login-new{
  text-align: center;
}
.login-new span{
font-size: 100/360*100vw;
color: #d04100;
}
.user input{
  width: 100%;
 height: 54/360*100vw;
 border:0px;
 border-bottom: 1px solid #757575;
 outline: none;
 font-size: 16px;
 background: #f2f2f2;

}
.register{
  width: 100%;
  height: 44/360*100vw;
  line-height: 44/360*100vw;
  background-color: #cc3300;
  border-radius: 20/360*100vw;
  text-align: center;
  color: aliceblue;
  margin-top:50/360*100vw;
}
</style>