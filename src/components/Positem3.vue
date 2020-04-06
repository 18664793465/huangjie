<template>
<router-link :to="`/news_detail/{{data.id}}`">
  <div>
    <div class="ps">
      <div class="p1">
        {{data.title}}
      </div>
      <div class="p2">
        <img
          :src="$axios.defaults.baseURL + data.cover[0].url"
          alt
        />
         <div class="p21">
            <span >></span>
          </div>
      </div>
      <div class="p3">{{data.user.nickname}} {{data.comment_length}}跟帖</div>
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
.ps {
  padding: 15/360 * 100vw;
  border-bottom: 1px solid #eee;
  .p1 {
  }
  .p2 {
    margin: 15/360 * 100vw 0;
    position: relative;
   
    
    img {
      
      width: 100%;
      height: 150/360 * 100vw;
      object-fit: cover;
    }
    .p21{
    width: 60/360*100vw;
    background: rgb(158, 157, 157);
    opacity: 0.3;
    height: 60/360*100vw;
    position: absolute;
    top: 50%;
    left: 50%;
     text-align: center;
     line-height: 60/360*100vw;
     border-radius: 50%;
    transform: translateX(-30/360*100vw) translateY(-30/360*100vw);
    span {
      font-size: 30px;
      font-weight: 700;
      color: red
    }
    }
  }
  .p3 {
    color: #999;
  }
}
</style>