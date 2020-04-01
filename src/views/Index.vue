<template>
  <div>
    <!-- 头部导航栏 -->
    <div class="top-nav">
      <div class="login">
        <span class="iconfont iconnew"></span>
      </div>
      <router-link to="#" class="search">
        <span class="iconfont iconsearch"></span>
        <i>搜索新闻</i>
      </router-link>
      <router-link to="/personal">
        <span class="iconfont iconwode"></span>
      </router-link>
    </div>
    <!-- tab栏 -->
    <div>
      <van-tabs v-model="active" sticky swipeable>
        <van-tab v-for="(item,index) in list" :key="index" :title="item ">
          <positem1 />
           <positem2 />
            <positem3 />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import positem1 from "@/components/Positem1";
import positem2 from "@/components/Positem2";
import positem3 from "@/components/Positem3";
export default {
  data() {
    return {
      list: [
        "新闻",
        "体育",
        "娱乐",
        "汽车",
        "科技",
        "美食",
        "旅游",
        "健康",
        "养生",
        "v"
      ],
      active: 0
    };
  },
  components: {
    positem1,
    positem2,
    positem3
  },
  watch: {
    active() {
      if (this.active === this.list.length - 1) {
        this.$router.push("/xinqingye");
      }
      // console.log(this.active);
      // console.log(this.list.length);
    }
  }
};
</script>

<style scoped lang='less'>
.top-nav {
  padding: 0 15/360 * 100vw;
  display: flex;
  height: 50/360 * 100vw;
  background: red;
  color: aliceblue;
  justify-content: space-between;
  align-items: center;

  .iconnew {
    font-size: 60px;
  }

  .search {
    display: flex;
    width: 220/360 * 100vw;
    height: 40/360 * 100vw;
    justify-content: center;
    align-items: center;
    background: #f97979;
    border-radius: 30/360 * 100vw;
    font-size: 16px;
    span {
      font-size: 20px;
      margin-right: 10/360 * 100vw;
    }
  }
  .iconwode {
    font-size: 40px;
  }
}
/deep/ .van-tabs__nav {
  background: #eee;
}
/deep/ .van-tab {
  flex-basis: 20% !important;
}
/deep/ .van-tabs__nav .van-tab:nth-last-child(2) {
  // background:red ;
  position: fixed;
  right: 0;
  background: #eee;
  font-size: 20px;
}
/deep/ .van-tabs__nav .van-tab:nth-last-child(3) {
  flex-basis: 22% !important;
}
</style>