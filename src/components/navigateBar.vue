<template>
   <div class="top-nav">
      <span class="iconfont iconjiantou"  @click="$router.back()"></span>
      <span>{{title}}</span>
      <span class="iconfont iconshouye" v-if="show" @click="$router.push('/')"></span>
      <span v-else="" class="iconfont iconshouye" style="opacity: 0"></span>
    </div>
</template>

<script>
export default {
props:['title','show']
}
</script>

<style scoped lang='less'>
.top-nav {
  display: flex;
  height: 40/360 * 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 0 20/360 * 100vw;
  span:nth-child(3) {
    font-size: 22px;
  }
  span:nth-child(1) {
    font-size: 20px;
  }
  span:nth-child(2) {
    font-weight: 700;
  }
}
</style>