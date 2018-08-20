<template>
    <div class="nav">
       <router-link class="nav-item" to="/goods">点餐<i class="line"></i></router-link>
       <router-link class="nav-item" to="/rattings">评论<i class="line"></i></router-link>
       <router-link class="nav-item" to="/seller">商家<i class="line"></i></router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: '我是导航'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e4e4e4;

  .nav-item {
    flex: 1;
    text-align: center;
    font-size: 13px;
    text-decoration: none;
    color: #666666;
  }

  .active {
    color: #FFBB22;
    position: relative;

    .line {
      width: 20px;
      height: 2px;
      display: inline-block;
      background: #FFBB22;
      position: absolute;
      left: 50%;
      margin-left: -10px;
      bottom: 0;
    }
  }
}
</style>
