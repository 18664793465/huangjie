<template>
  <div>
    <navigateBar title="我的关注"></navigateBar>
    <div class="concern" v-for="(item,index) in userRes" :key="index">
      <div class="headlin">
        <div>
          <img :src="$axios.defaults.baseURL+item.head_img" alt />
        </div>
        <div>
          <p>{{item.nickname}}</p>
          <p>{{moment(item.create_date).format("YYYY-MM-DD hh:mm")}}</p>
        </div>
      </div>
      <div class="cancel" @click="handeclick(item.id,index)">取消关注</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

import navigateBar from "@/components/navigateBar";
export default {
  data() {
    return {
      userInfo: {},
      userRes: [],
      moment
    };
  },
  components: {
    navigateBar
  },
  methods: {
    handeclick(id, index) {
      this.$dialog
        .confirm({
          title: "提示",
          message: "确定取消关注吗？"
        })
        .then(() => {
          this.$axios({
            url: "/user_unfollow/" + id,
            headers: {
              Authorization: user.token
            }
          }).then(res => {
            this.userRes.splice(index,1)
          });
        });
    }
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("uesr"));
    this.userInfo = user;
    this.$axios({
      url: "/user_follows",
      headers: {
        Authorization: user.token
      }
    }).then(res => {
      console.log(res);
      const { data } = res.data;
      this.userRes = data;
    });
  }
};
</script>

<style scopen lang='less'>
.concern {
  display: flex;
  justify-content: space-between;
  padding: 10/360 * 100vw 20/360 * 100vw;
  border-bottom: 2px solid #e6e6e6;
  align-items: center;
  .headlin {
    display: flex;
    img {
      width: 40/360 * 100vw;
      height: 40/360 * 100vw;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 20px;
    }
    p:nth-child(2) {
      color: rgb(184, 180, 180);
    }
  }
  .cancel {
    width: 70/360 * 100vw;
    height: 30/360 * 100vw;
    line-height: 30/360 * 100vw;
    text-align: center;
    // border: 1px solid rgb(170, 166, 166);
    background: rgb(243, 241, 241);
    border-radius: 15/360 * 100vw;
    font-size: 12px;
  }
}
</style>