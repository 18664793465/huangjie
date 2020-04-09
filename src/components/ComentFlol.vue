<template>
  <div>
    <div>
      <div class="user-coentenm-Ifon">
        <div class="uesr-name">
          <!-- <span>1</span> -->
          <p>{{item.user.nickname}}</p>
          <span>{{moment(item.create_date).fromNow()}}</span>
        </div>
        <div class="reply">回复</div>
      </div>
      <div class="content-flol">{{item.content}}</div>
    </div>
    <comentflol v-if="data.parent" :data="data.parent"></comentflol>
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
  name: "comentflol",
  props: ["data"]
};
</script>

<style scoped lang='less'>
.user-coentenm-Ifon {
  display: flex;
  justify-content: space-between;
}
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
.content-flol {
  padding: 10/360 * 100vw 0;
}
</style>