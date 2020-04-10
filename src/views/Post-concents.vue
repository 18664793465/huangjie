  <template>
  <div>
    <!-- 导入头部组件 -->
    <navigateBar title="精彩跟帖" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="onLoad"
    >
      <!-- 评论部分 -->
      <div class="t1">
        <div class="user" v-for="(item,index) in list " :key="index">
          <div class="userIfon">
            <div class="uesr-img">
              <img :src="$axios.defaults.baseURL+item.user.head_img" alt />
              <div>
                <p>{{item.user.nickname}}</p>
                <span>{{moment(item.create_date).fromNow()}}</span>
              </div>
            </div>
            <div class="reply" @click="handleReply(item)">回复</div>
          </div>
          <!-- 回复评论 -->
          <div class="user-coentenm" v-if="item.parent">
            <comentflol v-if="item.parent" :data="item.parent" @reply='handleReply'/>
          </div>

          <!-- 评论的内容 -->
          <div class="content">{{item.content}}！</div>
        </div>
      </div>
    </van-list>
    <!-- 评论输入框 -->
    <div class="publish">
      <van-field
        class="textarea"
        v-model="message"
        rows="1"
        autosize
        type="textarea"
        :placeholder="reply.user?`回复:@`+reply.user.nickname:'请输入留言...'"
        @focus="handleFocus"
        @blur="handleBlur"
        @keyup.enter="handleSubmit"
      />
      <div class="sending" v-if="isload" @click="handleSubmit">发送</div>
    </div>
  </div>
</template>
  
  <script>
import comentflol from "@/components/ComentFlol";
import navigateBar from "@/components/navigateBar";
import moment from "moment";
moment.locale("zh-CN");
export default {
  data() {
    return {
      pid: "",
      list: [],
      moment,
      loading: false,
      finished: false,
      pageIndex: 1,
      pageSize: 10,
      message: "",
      isload: false,
      reply: {}
    };
  },
  components: {
    navigateBar,
    comentflol
  },
  mounted() {
    const { id } = this.$route.params;
    this.pid = id;
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: "/post_comment/" + this.pid,
        params: {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }
      }).then(res => {
        console.log(res);
        const { data } = res.data;
        this.list = [...this.list, ...data];
        this.pageIndex += 1;
        this.loading = false;
        if (data.length < this.pageSize) {
          this.finished = true;
        }
      });
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求

      this.getList();
    },
    handleFocus() {
      this.isload = true;
    },
    handleBlur() {
      setTimeout(() => {
        this.isload = false;
        if (this.message.trim() === "") {
          this.reply = {};
        }
      }, 300);
    },
    handleSubmit() {
      if (this.message == "") return;
      const { token } = JSON.parse(localStorage.getItem("uesr")) || {};
      const data = {
        content: this.message
      };
      if (this.reply.id) {
        data.parent_id = this.reply.id;
      }
      this.$axios({
        url: "/post_comment/" + this.pid,
        method: "post",
        headers: {
          Authorization: token
        },
        data: data
      }).then(res => {
        console.log(res);

        this.message = "";
        this.$toast.success("发布成功");
        this.list = [];
        this.pageIndex = 1;
        this.getList();
      });
    },
    handleReply(item) {
      this.reply = item;

      this.isload = true;
    }
  }
};
</script>
  
  <style scoped lang='less'>
.ti {
  padding-bottom: 100px;
}
.user {
  padding: 0 10/360 * 100vw;
}
.userIfon {
  display: flex;
  justify-content: space-between;
  .uesr-img {
    display: flex;
    img {
      width: 35/360 * 100vw;
      height: 35/360 * 100vw;
      border-radius: 50%;
    }
    span {
      color: #999;
    }
  }
}
.reply {
  color: #999;
  font-size: 14px;
}
.content {
  border-bottom: 1px solid #ddd;
  padding: 15/360 * 100vw 0;
}
.user-coentenm {
  border: 1px solid #ddd;
  padding: 5/360 * 100vw 10/360 * 100vw;
}
.publish {
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: space-between;

  .textarea {
    background: #eee;
    border-radius: 5/360 * 100vw;
  }
  .sending {
    width: 70/360 * 100vw;
    height: 25/360 * 100vw;
    text-align: center;
    background: red;
    color: aliceblue;
    border-radius: 30/360 * 100vw;
  }
}
</style>