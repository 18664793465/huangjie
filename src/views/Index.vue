<template>
  <div>
    <!-- 头部导航栏 -->
    <div class="top-nav">
      <div class="login">
        <span class="iconfont iconnew"></span>
      </div>
      <router-link to="/search" class="search">
        <span class="iconfont iconsearch"></span>
        <i>搜索新闻</i>
      </router-link>
      <router-link to="/personal">
        <span class="iconfont iconwode"></span>
      </router-link>
    </div>
    <!-- tab栏 -->
    <div>
      <van-tabs v-model="active" sticky swipeable @scroll="handelScroll">
        <van-tab v-for="(item,index) in categiorys" :key="index" :title="item.name ">
          <van-list
            v-model="item.loading"
            immediate-check
            :finished="item.finished"
            finished-text="我也是有底线的"
            @load="onLoad"
          >
            <div v-for="(subitem,subindex) in item.list" :key="subindex">
              <positem1 :data="subitem" v-if="subitem.type==1 && subitem.cover.length <3" />
              <positem2 :data="subitem" v-if="subitem.type==1 && subitem.cover.length >=3" />
              <positem3 :data="subitem" v-if="subitem.type==2 " />
            </div>
          </van-list>
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
      categiorys: [],
      active: 0,
      token: ""
    };
  },
  components: {
    positem1,
    positem2,
    positem3
  },
  watch: {
    active() {
      if (this.active === this.categiorys.length - 1) {
        this.$router.push("/management");
      }
      this.getList();
      setTimeout(() => {
        window.scrollTo(0, this.categiorys[this.active].scroolY);
      }, 10);
    }
  },
  mounted() {
    //在请求前判断下本地是否有栏目数据
    const categiorys = JSON.parse(localStorage.getItem("userInfo"));
    const { token } = JSON.parse(localStorage.getItem("uesr")) || {};
    this.token = token;
    //如果有就把本地的返回给categorys
    if (categiorys) {
      if (
        (categiorys[0].name == "关注" && !token) ||
        (categiorys[0].name !== "关注" && token)
      ) {
        this.getCpgeios();
      }
      this.categiorys = categiorys;
      this.handleCategories();
    } else {
      this.getCpgeios();
    }
    this.getList();
  },
  methods: {
    handleCategories() {
      this.categiorys = this.categiorys.map(v => {
        v.pageIndex = 1;
        v.list = [];
        v.loading = false;
        v.finished = false;
        v.scroolY = 0;
        v.isload = false;
        return v;
      });
    },
    //栏目列表的异步请求数据
    getCpgeios() {
      const congif = {
        url: "/category"
      };
      if (this.token) {
        congif.headers = {
          Authorization: this.token
        };
      }
      this.$axios(congif).then(res => {
        const { data } = res.data;
        data.push({
          name: "v"
        });
        this.categiorys = data;
        this.handleCategories();
        localStorage.setItem("userInfo", JSON.stringify(data));
      });
      //新闻列表的的数据请求方法的封装
    },
    getList() {
      const { id, pageIndex, finished, name, isload } = this.categiorys[
        this.active
      ];
      if (isload) return;
      this.categiorys[this.active].isload = true;
      this.categiorys[this.active].pageIndex += 1;
      if (finished) return;
      const config = {
        url: "/post",
        params: {
          pageIndex,
          pageSize: 5,
          category: id
        }
      };
      if (name === "关注") {
        config.headers = {
          Authorization: this.token
        };
      }
      this.$axios(config).then(res => {
        const { data, total } = res.data;
        this.categiorys[this.active].list = [
          ...this.categiorys[this.active].list,
          ...data
        ];
        this.categiorys = [...this.categiorys];
        this.categiorys[this.active].loading = false;
        if (this.categiorys[this.active].list.length === total) {
          this.categiorys[this.active].finished = true;
        }
        this.categiorys[this.active].isload = false;
      });
    },
    onLoad() {
      // 异步更新数据

      this.getList();
    },
    handelScroll({ scrollTop }) {
      if (this.categiorys.length == 0) return;
      this.categiorys[this.active].scroolY = scrollTop;
    },
    onRefresh() {
      if (this.categiorys[this.active].finished) return;
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      thisloading = true;
      this.onLoad();
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
  position: static;
  background: #eee;
}
/deep/ .van-tab {
}
/deep/ .van-tab:nth-last-child(2) {
  // background:red ;
  background: #eee;
  position: absolute;
  width: 20px;
  right: 0;
  top: 0;
  box-sizing: unset;
}
/deep/ .van-tabs__line {
  display: none;
}
/deep/ .van-tabs__wrap {
  padding-right: 20px;
}
/deep/ .van-tab--active {
  border-bottom: 3px solid red;
}
</style>