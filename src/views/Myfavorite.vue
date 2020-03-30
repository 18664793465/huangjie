<template>
  <div>
    <!-- 无数据以后再做 -->
    <navigateBar title="我的收藏" />
    <div class="myfavoite">
      <div>
        <div class="fontszi">
          林志玲穿透视黑纱裙米兰看秀
          腹部微隆显孕味
        </div>
        <div class="mycolor">火星时报 52跟帖</div>
      </div>

      <div class="myfavoite-img">
        <img src="//www.baidu.com/img/bd_logo1.png?where=super" alt />
      </div>
    </div>
    <div>
      <div class="t1">
        <div >
          林志玲穿透视黑纱裙米兰看秀
          腹部微隆显孕味
        </div>
          <div class="t2">
        <img src="//www.baidu.com/img/bd_logo1.png?where=super" alt='' />
        <img src="//www.baidu.com/img/bd_logo1.png?where=super" alt />
        <img src="//www.baidu.com/img/bd_logo1.png?where=super" alt />
      </div>
        <div class="t3">火星时报 52跟帖</div>
      </div>
    
    </div>
  </div>
</template>

<script>
import navigateBar from "@/components/navigateBar";
export default {
  data(){
    return{
      userInfo:[]
    }
  },
  components: {
    navigateBar
  },
  mounted(){
     const userInfo=JSON.parse(localStorage.getItem("uesr"))
    this.userInfo=userInfo
    this.$axios({
      url: "/user_star",
      headers: {
        Authorization: userInfo.token
      }
    }).then(res=>{
      console.log(res);
      const { data} = res.data
      console.log(data);
      
      
    });
  }
};
</script>

<style  scopen lang='less'>
.myfavoite {
  display: flex;
  padding: 15/360 * 100vw;
  border-bottom: 1px solid #888;
  // justify-content: space-between;
  .fontszi {
    margin-bottom: 15/360 * 100vw;
  }
  .mycolor {
    color: #999;
    font-size: 14px;
  }
  .myfavoite-img {
    img {
      width: 140/360 * 100vw;
      height: 75/360 * 100vw;
      object-fit: cover;
    }
  }
}
.t1{
  padding: 15/360 * 100vw;
  border-bottom: 1px solid #888;
.t2{
  display: flex;
  // align-items: center;
  justify-content: space-between;
  img{
   width: 33%;
      height: 75/360 * 100vw;
      object-fit: cover;
  }
}
.t3{
  color: #999;
}
}

</style>