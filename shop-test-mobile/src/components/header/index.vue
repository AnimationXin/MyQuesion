<template>
    <div class="header">
        {{ value.name }}
    </div>
</template>

<script>
export default {
  props: {
    value: [Object, String]
  },
  data () {
    return {
      name: '顶部导航'
    }
  },
  methods: {
    addDossier () {
      let smsEmable = 'flase'
      this.$emit('input', smsEmable)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
