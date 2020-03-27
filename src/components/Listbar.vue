<template>
  <div class="skip">
    <router-link to="#">
      <div>{{label}}</div>
      <div class="attention">
        {{tips}}
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props:['label','tips','hideclick'],
  methods:{
   
  }
};
</script>

<style scoped lang='less'>
.skip {
  padding: 20/360 * 100vw;
  height: 48/360 * 100vw;
  line-height: 48/360 * 100vw;
  a {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    .attention {
      color: #757575;
      span {
        margin-left: 5px;
      }
    }
  }
}
</style>