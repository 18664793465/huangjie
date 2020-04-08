<template>
<router-link :to="`/news_detail/${data.id}`">
  <div>
    <div class="t1">
      <div>
        {{data.title}}
      </div>
      <div class="t2" >
        <img v-for="(item,index) in data.cover" :key='index' :src="$axios.defaults.baseURL + item.url" alt />
        
      </div>
      <div class="t3">{{data.user.nickname}} {{data.comment_length}}跟帖</div>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  props:['data']
};
</script>

<style scoped lang='less'>
.t1 {
  padding: 15/360 * 100vw;
  border-bottom: 1px solid #eee;
  .t2 {
    display: flex;
    // align-items: center;
    
    justify-content: space-between;
    img {
      
      width: 33%;
      height: 75/360 * 100vw;
      object-fit: cover;
    }
  }
  .t3 {
    color: #999;
  }
}
</style>