<template>
  <div>
    <!-- 搜索条 -->
    <div class="search">
      <div>
        <span class="iconfont iconjiantou"></span>
      </div>
      <div class="search_input">
        <span class="iconfont iconsearch"></span>
        <input type="text" />
      </div>
      <div>搜索</div>
    </div>
    <!-- 搜索词条容器 -->
    <div class="entry_list">
      <div class="hot_news">
        <p>瑞幸咖啡发布道歉声明</p>
        <span class="iconfont iconjiantou1"></span>
      </div>
      <div class="hot_news">
        <p>瑞幸咖啡发布道歉声明</p>
        <span class="iconfont iconjiantou1"></span>
      </div>
      <div class="hot_news">
        <p>瑞幸咖啡发布道歉声明</p>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <!-- 历史记录 -->
    <div class="historic_records">
      <h3>历史记录</h3>
      <div class="take_notes">
        <span>美女</span>
        <span>美女</span>
        <span>美女美美美美美美女美美美美女美美美美美美女美美美</span>
        <span>美女</span>
        <span>美女美</span>
        <span>美女美美美</span>
        <span>美女</span>
        <span>美女</span>
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
export default {
  components: {}
};
</script>

<style scoped lang='less'>
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
      margin-right: 15/360 * 100vw;
    }
  }
}
.historic_records {
  margin: 20/360 * 100vw 10/360 * 100vw;
  border-bottom: 1px solid #999;
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
  position: fixed;
  background: #fff;
  top: 60/360 * 100vw;
  left: 0;
  bottom: 0;
  right: 0;
  padding:  10/360 * 100vw;
  .hot_news{
    display: flex;
    line-height: 48/360 * 100vw;
    border-bottom: 1px solid  #dfdfdf;
    p{
      flex: 1;
    }
  }
}
</style>