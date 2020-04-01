<template>
   <div class="myfavoite">
      <div>
        <div class="fontszi">
          林志玲穿透视黑纱裙米兰看秀
          腹部微隆显孕味
        </div>
        <div class="mycolor">火星时报 52跟帖</div>
      </div>

      <div class="myfavoite-img">
        <img src="//www.baidu.com/img/bd_logo1.png?where=super" alt />
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
.myfavoite {
  display: flex;
  padding: 15/360 * 100vw;
  border-bottom: 1px solid #eee;
  // justify-content: space-between;
  .fontszi {
    margin-bottom: 15/360 * 100vw;
  }
  .mycolor {
    color: #999;
    font-size: 14px;
  }
  .myfavoite-img {
    img {
      width: 140/360 * 100vw;
      height: 75/360 * 100vw;
      object-fit: cover;
    }
  }
}
</style>