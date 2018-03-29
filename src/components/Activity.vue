<template>
  <div class="activity">
    <gmap-map
      :center="{lat:40.7563436, lng:-73.9833284}"
      :zoom="13"
      map-type-id="terrain"
      style="width: calc(100vw - 48px); height: calc(100vh - 48px); position:absolute; top: 48px; left: 48px;"
    >
    </gmap-map>

    <div id="activity-card"></div>

  </div>
</template>

<script>
export default {
  name: 'Activity',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #activity-card {
    position: absolute;
    z-index: 2;
    margin: 48px 0 0 10px;
    width: 400px;
    min-height: 200px;
    height: calc(100vh - 106px);
    box-shadow: 0 1px 3px #ACACAC;
    border-radius: 2px;
    background: #FFF;
  }
</style>
