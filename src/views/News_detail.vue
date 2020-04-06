<template>
  <div class="w">
    <!-- 关注部分 -->
    <div class="nav_logo">
      <div>
        <span class="iconfont iconjiantou"></span>
        <span class="iconfont iconnew"></span>
      </div>
      <div class="attention">关注</div>
    </div>
    <!-- 新闻标题部分 -->
    <div class="title">
      <h2>
        车主注意啦！9月下旬部分临时泊位进行
        清洁保养
      </h2>
      <div class="txt_time">火星时报 2019-10-10</div>
    </div>
    <!-- 新闻内容部分 -->
    <div class="conent">
      <p>
        为营造临时泊位“干静、整洁、平安、有序”面貌迎国庆，
        市交通部门拟在9月下旬对部分城市道路临时泊位进行清洁保养，
        请市民群众配合在清洁保养期间将车辆驶离泊位。
        第一阶段临时泊位清洁保养计划（涉及17条路段）：
      </p>
    </div>
    <!-- 点赞和微信分享 -->
    <div class="share">
      <span class="iconfont icondianzan">
        <i>112</i>
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
        <span class="iconfont iconshoucang"></span>
        <span class="iconfont iconfenxiang"></span>
        <div class="gtwo">99+</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
      width: 80/360 * 100vw;
      height: 28/360 * 100vw;
      background: red;
      text-align: center;
      line-height: 30/360 * 100vw;
      color: aliceblue;
      border-radius: 30/360 * 100vw;
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
    p {
      font-size: 17px;
    }
  }
  .share {
    display: flex;
    border-bottom: 3px solid #eee;
    margin: 33/360 * 100vw 0;
    justify-content: space-between;
    padding: 0 40/360 * 100vw;
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
      span {
        font-size: 27px;
      }
      span:nth-child(4) {
        margin-right: 15/360 * 100vw;
      }
      .gtwo{
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