<template>
  <div>
    <div v-if="data">
      <div class="user-coentenm-Ifon">
        <div class="uesr-name">
          <!-- <span>1</span> -->
          <p>{{data.user.nickname}}</p>
          <span>{{moment(data.create_date).fromNow()}}</span>
        </div>
        <div class="reply" @click="handleReply(data)">回复</div>
      </div>
      <div class="content-flol">{{data.content}}</div>
    </div>
    <comentflol v-if="data.parent" :data="data.parent" @reply="handleReply"></comentflol>
  </div>
</template>

<script>
import moment from "moment";
moment.locale("zh-CN");
export default {
  data() {
    return {
      moment
    };
  },
  methods: {
    handleReply(data) {
      this.$emit("reply", data);
      // console.log(data.id);
      
    }
  },
  name: "comentflol",
  props: ["data"]
};
</script>

<style scoped lang='less'>
.user-coentenm-Ifon {
  display: flex;
  justify-content: space-between;
  .uesr-name {
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      color: #999;
    }
    p {
      margin: 0 5px;
    }
  }
  .reply {
    color: #999;
    font-size: 14px;
  }
}
.content-flol {
  padding: 10/360 * 100vw 0;
  text-indent: 1em;
}
</style>