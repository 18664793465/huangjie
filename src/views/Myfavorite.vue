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
        <div>
          林志玲穿透视黑纱裙米兰看秀
          腹部微隆显孕味
        </div>
        <div class="t2">
          <img src="//www.baidu.com/img/bd_logo1.png?where=super" alt />
          <img src="//www.baidu.com/img/bd_logo1.png?where=super" alt />
          <img src="//www.baidu.com/img/bd_logo1.png?where=super" alt />
        </div>
        <div class="t3">火星时报 52跟帖</div>
      </div>
    </div>

    <div>
      <div class="ps">
        <div class="p1">
          林志玲穿透视黑纱裙米兰看秀
          腹部微隆显孕味
        </div>
        <div class="p2">
          <img
            src="//img30.360buyimg.com/da/s590x470_jfs/t1/90286/21/16835/77679/5e814af6E114ef007/4fab69f75bec9121.jpg"
            alt
          />
          <div class="p21">
            <span >></span>
          </div>
        </div>
        <div class="p3">火星时报 52跟帖</div>
      </div>
    </div>
  </div>
</template>

<script>
import navigateBar from "@/components/navigateBar";
export default {
  data() {
    return {
      userInfo: []
    };
  },
  components: {
    navigateBar
  },
  mounted() {
    const userInfo = JSON.parse(localStorage.getItem("uesr"));
    this.userInfo = userInfo;
    this.$axios({
      url: "/user_star",
      headers: {
        Authorization: userInfo.token
      }
    }).then(res => {
      console.log(res);
      const { data } = res.data;
      console.log(data);
    });
  }
};
</script>

<style  scopen lang='less'>
.myfavoite {
  display: flex;
  padding: 15/360 * 100vw;
  border-bottom: 1px solid #eee;
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
.t1 {
  padding: 15/360 * 100vw;
  border-bottom: 1px solid #eee;
  .t2 {
    display: flex;
    // align-items: center;
    justify-content: space-between;
    img {
      width: 33%;
      height: 75/360 * 100vw;
      object-fit: cover;
    }
  }
  .t3 {
    color: #999;
  }
}
.ps {
  padding: 15/360 * 100vw;
  border-bottom: 1px solid #eee;
  .p1 {
    
  }
  .p2 {
    margin: 15/360 * 100vw 0;
    position: relative;
   
    
    img {
      
      width: 100%;
      height: 150/360 * 100vw;
      object-fit: cover;
    }
    .p21{
    width: 60/360*100vw;
    background: rgb(158, 157, 157);
    opacity: 0.3;
    height: 60/360*100vw;
    position: absolute;
    top: 50%;
    left: 50%;
     text-align: center;
     line-height: 60/360*100vw;
     border-radius: 50%;
    transform: translateX(-30/360*100vw) translateY(-30/360*100vw);
    span {
      font-size: 30px;
      font-weight: 700;
      color: red
    }
    }
  }
  .p3{
      color: #999;
    }
}
</style>