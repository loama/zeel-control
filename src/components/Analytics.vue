<template>
  <div class="analytics">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Analytics',
  data () {
    return {
      msg: 'cde'
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .analytics {
    position: relative;
    z-index: 2;
    min-height: calc(100vh - 48px);
    min-width: calc(100vw - 48px);
    background: #FFF;
    padding: 8px;
  }
</style>
