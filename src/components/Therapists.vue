<template>
  <div class="therapists">
    therapists
  </div>
</template>

<script>
export default {
  name: 'Therapists',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .therapists {
    position: relative;
    z-index: 2;
    padding: 8px;
    min-height: calc(100vh - 48px);
    min-width: calc(100vw - 48px);
    background: #FFF;
  }
</style>
