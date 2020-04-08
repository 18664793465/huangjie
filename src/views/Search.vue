<template>
  <div class="w">
    <!-- 搜索条 -->
    <div class="search">
      <div>
        <span class="iconfont iconjiantou" @click="$router.back()"></span>
      </div>
      <div class="search_input">
        <span class="iconfont iconsearch"></span>
        <input type="text" v-model="value" autofocus placeholder="请输入搜索关键字" @keyup.enter="haneldScarch" />
      </div>
      <div @click="haneldScarch">搜索</div>
    </div>
    <!-- 搜索词条容器 -->
    <div class="entry_list" v-if="a">
      <div  v-for="(item,index) in list " :key="index">
        <positem1 :data="item" v-if="item.type==1 && item.cover.length <3" />
        <positem2 :data="item" v-if="item.type==1 && item.cover.length >=3" />
        <positem3 :data="item" v-if="item.type==2 " />
      </div>
      <div class="enemty" v-if="list.length===0"> 没有找到你想要的内容</div>
    </div>
    <!-- 历史记录 -->
    <div class="historic_records">
      <div class="jilv">
        <h3>历史记录</h3>
        <span class="iconfont iconicon-test" @click="disappear"></span>
      </div>
      <div class="take_notes">
        <span v-for="(item,index) in historic" @click="haneldList(item)" :key="index">{{item}}</span>
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="demand">
      <h3>热门搜索</h3>
      <div class="popular_searches">
        <span>小荷才露尖尖角</span>
        <span>武汉开始解封</span>
        <span>小荷才露尖尖角</span>
        <span>武汉开始解封</span>
        <span>小荷才露尖尖角</span>
        <span>武汉开始解封</span>
      </div>
    </div>
  </div>
</template>

<script>
import positem1 from "@/components/Positem1";
import positem2 from "@/components/Positem2";
import positem3 from "@/components/Positem3";
export default {
  name:'search',
  data() {
    return {
      value: [],
      historic: JSON.parse(localStorage.getItem("historic")) || [],
      a: false,
      list: []
    };
  },
  watch: {
    value() {
      if (this.value == "") {
        this.list = [];
        this.a = false;
      }
    }
  },
  components: {
    positem1,
    positem2,
    positem3
  },
  methods: {
    haneldScarch() {
      if (this.value == "") return;
      this.historic.unshift(this.value);
      this.historic = [...new Set(this.historic)];
      localStorage.setItem("historic", JSON.stringify(this.historic));
      this.getSearch();
    },
    disappear() {
      this.historic = [];
      localStorage.removeItem("historic");
    },
    haneldList(item) {
      this.value = item;
    },
    getSearch() {
      //搜索接口的封装
      this.$axios({
        url: "post_search",
        params: {
          keyword: this.value
        }
      }).then(res => {
        const { data } = res.data;
        this.list = data;
        this.a = true;
      });
    }
  }
};
</script>

<style scoped lang='less'>
.w {
  height: 100%;

  .search {
    display: flex;
    margin: 10/360 * 100vw;
    align-items: center;
    justify-content: space-between;
    .iconjiantou {
      font-weight: 700;
      font-size: 18px;
    }
    .search_input {
      padding-left: 20/360 * 100vw;
      margin: 0 15/360 * 100vw;
      flex: 1;
      display: flex;
      height: 45/360 * 100vw;
      border: 1px solid #dfdfdf;
      border-radius: 30/360 * 100vw;
      align-items: center;
      input {
        height: 100%;
        width: 80%;
        border: 0;
      }
      .iconsearch {
        margin-right: 10/360 * 100vw;
      }
    }
  }
  .historic_records {
    margin: 20/360 * 100vw 10/360 * 100vw;
    border-bottom: 1px solid #999;
    .jilv {
      display: flex;
      justify-content: space-between;
    }
    .take_notes {
      display: flex;
      flex-wrap: wrap;
      line-height: 45/360 * 100vw;
      span {
        margin-right: 30/360 * 100vw;
        width: 40%;
        text-decoration: underline;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .demand {
    margin: 20/360 * 100vw 10/360 * 100vw;
    .popular_searches {
      display: flex;
      flex-wrap: wrap;
      line-height: 45/360 * 100vw;
      span {
        margin-right: 30/360 * 100vw;
        width: 40%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .entry_list {
    position: absolute;
    background: #fff;
    top: 60/360 * 100vw;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 10/360 * 100vw;
    .enemty{
      text-align: center;
      color:#999;
    }
  }
}
</style>