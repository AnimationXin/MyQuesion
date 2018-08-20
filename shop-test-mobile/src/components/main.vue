<template>
  <div class="app">
    <merchants-head></merchants-head>
    <merchants-nav></merchants-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MerchantsHead from './header'
import MerchantsNav from './nav'
import restful from './server/restful.js'
export default {
  name: 'HelloWorld',
  components: {
    MerchantsHead,
    MerchantsNav
  },
  data () {
    return {
    }
  },
  methods: {
  },
  async mounted () {
    let resp = await restful.goods()
    console.log(resp)
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
