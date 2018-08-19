<template>
  <div class="app">
    <merchants-head></merchants-head>
    <merchants-nav></merchants-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import _ from 'lodash'
import MerchantsHead from './header'
import MerchantsNav from './nav'
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
  mounted () {
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
