<template>
  <div>
    <!-- 导入头部组件 -->
    <navigateBar title="栏目管理" />
    <!-- 删除栏目部分 -->
    <div class="delete">
      <p>点击删除以下频道</p>
      <div class="delete_item">
        <span
          v-for="(item,index) in arrup"
          :key="index"
          @click="haneldUp(item,index)"
          :class="item.name=='关注'||item.name=='头条'?'acetve':''"
        >{{item.name}}</span>
      </div>
    </div>
    <!-- 添加栏目部分 -->
    <div class="delete">
      <p>点击添加以下频道</p>
      <div class="delete_item">
        <span
          v-for="(item,index) in arrAdd"
          :key="index"
          @click="haneldAdd(item,index)"
        >{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import navigateBar from "@/components/navigateBar";
export default {
  data() {
    return {
      userInfo: [],
      arrup: [],
      arrAdd: []
    };
  },
  destroyed() {
    this.userInfo = [
      ...this.arrup,
      ...this.arrAdd, this.userInfo[this.userInfo.length - 1]
    ];
    const str = JSON.stringify(this.userInfo);
    localStorage.setItem("userInfo", str);
  },
  methods: {
    haneldUp(item, index) {
      if (["关注", "头条"].includes(item.name)) return;
      this.arrup.splice(index, 1);
      item.is_top = 0;
      this.arrAdd.push(item);
    },
    haneldAdd(item, index) {
      console.log(item, index);
      this.arrAdd.splice(index, 1);
      item.is_top = 1;
      this.arrup.push(item);
    }
  },
  components: {
    navigateBar
  },
  mounted() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.userInfo = userInfo;
    this.arrup = userInfo.filter(v => {
      return v.is_top === 1;
    });
    this.arrAdd = userInfo.filter(v => {
      return v.is_top === 0;
    });
  }
};
</script>

<style scoped lang='less'>
.delete {
  padding: 0 20/360 * 100vw;
  p {
    color: #999;
    font-size: 16px;
    line-height: 45/360 * 100vw;
  }
  .delete_item {
    display: flex;
    flex-wrap: wrap;
    span {
      width: 50/360 * 100vw;
      height: 30/360 * 100vw;
      border: solid 1px #999;
      margin: 10/360 * 100vw;
      text-align: center;
      line-height: 30/360 * 100vw;
    }
  }
}
.acetve {
  color: #999;
}
</style>