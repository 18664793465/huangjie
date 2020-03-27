<template>
  <div>
    <div class="top-nav">
      <span class="iconfont iconjiantou" @click="$router.back()"></span
      ><span>个人中心</span
      ><span class="iconfont iconshouye" @click="$router.push('/')"></span>
    </div>
    <div class="headtop">
      <!-- 头像部分 -->
      <div class="head">
        <img :src="$axios.defaults.baseURL + uersInfo.head_img" />
      </div>
      <!-- 昵称日期部分 -->
      <div class="datum">
        <p>
          <span
            class="iconfont iconxingbienv bgcnv"
            v-if="uersInfo.gender == 0"
          ></span>
          <span
            v-if="uersInfo.gender == 1"
            class="iconfont iconxingbienan bgcnan"
          >
          </span
          >{{ uersInfo.nickname }}
        </p>
        <p>{{ moment(uersInfo.create_date).format("YYYY-MM-DD") }}</p>
      </div>
      <!-- 箭头 -->
      <div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <!-- 按钮组件部分 -->
    <listbar
      v-for="(item, index) in rows"
      :label="item.label"
      :tips="item.tips"
      :key="index"
    ></listbar>
    <listbar label="退出" @click.native="hideclick"></listbar>
  </div>
</template>

<script>
import Listbar from "@/components/Listbar";
import moment from "moment";
export default {
  data() {
    return {
      rows: [
        { label: "我的关注", tips: "关注的用户" },
        { label: "我的跟帖", tips: "跟帖的回复" },
        { label: "我的收藏", tips: "文章视频" }
      ],
      uersInfo: {},
      moment
    };
  },
  methods: {
    hideclick() {
      this.$dialog
        .confirm({
          title: "标题",
          message: "是否退出吗？"
        })
        .then(() => {
          //点击确定时触发的函数
          localStorage.removeItem("uesr");
          this.$router.replace("/login");
        })
        .catch(() => {
          //点击取消触发的函数
        });
    }
  },
  components: {
    Listbar
  },
  mounted() {
    const uers = JSON.parse(localStorage.getItem("uesr"));
    console.log(uers);
    this.$axios({
      url: "/user/" + uers.user.id,
      headers: {
        Authorization: uers.token
      }
    }).then(res => {
      console.log(res);
      const { data } = res.data;
      this.uersInfo = data;
    });
  }
};
</script>

<style scoped lang="less">
.top-nav {
  display: flex;
  height: 40/360 * 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 0 20/360 * 100vw;
  span:nth-child(3) {
    font-size: 22px;
  }
  span:nth-child(1) {
    font-size: 20px;
  }
  span:nth-child(2) {
    font-weight: 700;
  }
}
.headtop {
  height: 140/360 * 100vw;
  border-bottom: 3px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px/360 * 100vw 0 60px/360 * 100vw;
  .head {
    img {
      display: block;
      width: 70/360 * 100vw;
      height: 70/360 * 100vw;
      border-radius: 50%;
      object-fit: contain;
    }
  }
  .datum {
    flex: 4;
    margin-left: 30/360 * 100vw;
    p:nth-child(2) {
      color: #757575;
      font-size: 14px;
      margin-top: 10/360 * 100vw;
    }
  }
}
.bgcnan {
  color: #007acc;
}
.bgcnv {
  color: palevioletred;
}
</style>
