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
      <div class="user" v-for="(item,index) in list " :key="index">
        <div class="userIfon">
          <div class="uesr-img">
            <img :src="item.user.has_img" alt />
            <div>
              <p>{{item.user.nickname}}</p>
              <span>{{moment(item.create_date).fromNow()}}</span>
            </div>
          </div>
          <div class="reply">回复</div>
        </div>
        <!-- 回复评论 -->
        <div class="user-coentenm">
          <comentflol v-if="item.parent" :data="item.parent" />
        </div>

        <!-- 评论的内容 -->
        <div class="content">{{item.content}}！</div>
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
        placeholder="请输入留言"
      />
      <div class=" sending">发送</div>
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
      pageSize: 5,
      message: ""
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
        url: "/post_comment/" + this.id,
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

      getList();
    }
  }
};
</script>
  
  <style scoped lang='less'>
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
  display:flex;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: space-between;
  
  .textarea{
    background: #eee;

  }
   .sending{
width: 70/360*100vw;
height: 40/360*100vw;
text-align: center;

   }
}
</style>