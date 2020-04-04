<template>
   <div class="myfavoite">
      <div>
        <div class="fontszi">
          {{data.title}}
        </div>
        <div class="mycolor">{{data.user.nickname}} {{data.comment_length}}跟帖</div>
      </div>

      <div class="myfavoite-img">
        <img :src="$axios.defaults.baseURL + data.cover[0].url" alt />
      </div>
    </div>
</template>

<script>
export default {
  props:['data']

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