<template>
  <div class="w">
    <!-- 关注部分 -->
    <div class="nav_logo">
      <div>
        <span class="iconfont iconjiantou" @click="$router.back()"></span>
        <span class="iconfont iconnew"></span>
      </div>
      <div
        class="attention"
        @click="handleFollow"
        :class="post.has_follow?'':'actver'"
      >{{post.has_follow?'已关注':'关注'}}</div>
    </div>
    <!-- 新闻标题部分 -->
    <div class="title">
      <h2>{{post.title}}</h2>
      <div
        class="txt_time"
      >{{post.user.nickname}} {{moment(post.create_date).format('YYYY-MM-DD hh:mm:ss')}}</div>
    </div>
    <!-- 新闻内容部分 -->
    <div class="conent">
      <p v-html="post.content"></p>
    </div>
    <!-- 点赞和微信分享 -->
    <div class="share">
      <span class="iconfont icondianzan" @click="handleHas_like">
        <i>{{post.like_length}}</i>
      </span>
      <span class="iconfont iconweixin">
        <i>微信</i>
      </span>
    </div>
    <!-- 底部跟帖部分 -->
    <div class="sktone">
      <div class="follow-up">
        <div class="txts-input">
          <input type="text" class="shk" placeholder="写跟帖" />
        </div>
        <span class="iconfont iconpinglun-"></span>
        <span class="iconfont iconshoucang" @click="handleStar" :class="post.has_star?'actver':''"></span>
        <span class="iconfont iconfenxiang"></span>
        <div class="gtwo">{{post.comment_length>99?'99+':post.comment_length}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      post: {
        user: {}
      },
      moment,
      token: ""
    };
  },
   mounted() {
    const { token } = JSON.parse(localStorage.getItem("uesr")) || {};
    this.token = token;
    const congif = {
      url: "/post/" + this.$route.params.id
    };
    if (this.token) {
      congif.headers = {
        Authorization: this.token
      };
    }
    this.$axios(congif).then(res => {
      console.log(res);
      const { data } = res.data;
      this.post = data;
    });
  },
  methods: {
    handleFollow() {
      let url = "";
      if (this.post.has_follow) {
        url = "/user_unfollow/" + this.post.user.id;
      } else {
        url = "/user_follows/" + this.post.user.id;
      }
      this.$axios({
        url,
        headers: {
          Authorization: this.token
        }
      }).then(res => {
        this.post.has_follow = !this.post.has_follow;
      });
    },
    handleHas_like() {
      this.$axios({
        url: "/post_like/" + this.post.user.id,
        headers: {
          Authorization: this.token
        }
      }).then(res => {
        this.post.has_like = !this.post.has_like;
        if (this.post.has_like) {
          this.post.like_length += 1;
        } else {
          this.post.like_length -= 1;
        }
      });
    },
    handleStar() {
      this.$axios({
        url: "/post_star/" + this.post.user.id,
        headers: {
          Authorization: this.token
        }
      }).then(res => {
        
        this.post.has_star = !this.post.has_star;
        this.$toast.success(res.data.message)
        console.log(this.post);
        
      });
    }
  },
 
};
</script>

<style scoped lang='less'>
.w {
  padding: 0 15/360 * 100vw;

  .nav_logo {
    padding-top: 10/360 * 100vw;
    display: flex;
    justify-content: space-between;
    .iconjiantou {
      font-size: 18px;
      font-weight: 700;
    }
    .iconnew {
      margin-left: 30/360 * 100vw;
      display: inline-block;
      transform: scale(4.3);
    }
    .attention {
      width: 70/360 * 100vw;
      height: 25/360 * 100vw;
      border: 1px solid #888;
      text-align: center;
      line-height: 25/360 * 100vw;
      color: #000;
      border-radius: 30/360 * 100vw;
    }
    .actver {
      background: red;
      border-color: red;
    }
  }
  .title {
    margin: 25/360 * 100vw 0;

    .txt_time {
      line-height: 33/360 * 100vw;
      color: #999;
    }
  }
  .conent {
    /deep/ img {
      max-width: 100%;
    }
  }
  .share {
    display: flex;
    border-bottom: 3px solid #eee;
    margin: 33/360 * 100vw 0;
    justify-content: space-between;
    padding: 0 40/360 * 100vw;
    padding-bottom: 100/360 * 100vw;
    .icondianzan,
    .iconweixin {
      width: 85/360 * 100vw;
      height: 28/360 * 100vw;
      border: 1px solid #c5c5c5;
      line-height: 33/360 * 100vw;
      text-align: center;
      border-radius: 33/360 * 100vw;
      i {
        margin-left: 5px;
      }
    }
    .iconweixin {
      color: #40d340;
      i {
        margin-left: 5px;
        color: #000;
      }
    }
  }
  .sktone {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    .follow-up {
      display: flex;
      position: relative;
      border-top: 1px solid #eee;
      height: 60/360 * 100vw;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .txts-input {
        input {
          flex-basis: 40%;
          height: 33/360 * 100vw;
          border: 0;
          background: #d7d7d7;
          border-radius: 33/360 * 100vw;
          padding-left: 15/360 * 100vw;
          margin-left: 15/360 * 100vw;
        }
      }
      .actver {
        color: red;
      }
      span {
        font-size: 27px;
      }
      span:nth-child(4) {
        margin-right: 15/360 * 100vw;
      }
      .gtwo {
        position: absolute;
        top: 12/360 * 100vw;
        left: 225/360 * 100vw;
        width: 22/360 * 100vw;
        height: 15/360 * 100vw;
        background: red;
        border-radius: 7px;
        text-align: center;
        line-height: 15/360 * 100vw;
        font-size: 12px;
      }
    }
  }
}
</style>