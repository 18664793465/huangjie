<template>
  <div>
    <!-- 没做，没有数据 -->
    <!-- 顶部导航 -->
    <navigateBar title="我的跟帖"></navigateBar>
    <!-- 跟帖部分 -->
    <div>
      <!-- 第二层跟帖 -->
      <div class="topsTwo">
        <div class="date">2019-10-10 10：25</div>
        <div class="reply">
          <div>回复:火星彩票研究员</div>
          <div>阿信是张信哲吗？张信哲是不是张学友的弟弟</div>
        </div>
        <div class="myreply">不是</div>
        <p>
          <router-link to="#" class="links">原文: 阿信分享《说好不哭》幕后故事:只听手机发布ibfiv</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import navigateBar from "@/components/navigateBar";
export default {
  data(){
    return{
      userInfo:{},
      comments:[]
    }
  },
  components: {
    navigateBar
  },
  mounted() {
    const userInfo=JSON.parse(localStorage.getItem("uesr"))
    this.userInfo=userInfo
    this.$axios({
      url: "/user_comments",
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

<style scoped lang='less'>
.topsTwo {
  padding: 20/360 * 100vw;
  border-bottom: 1px solid #999;
  .date {
    color: #999;
    padding: 10/360 * 100vw 0;
  }
  .reply {
    padding: 20/360 * 100vw;
    background: rgb(223, 220, 220);
  }
  .myreply {
    margin: 20/360 * 100vw 0;
  }
  .links {
    color: #999;
  }
}
</style>