<template>
  <div class="activity">

    <div id="activity-card">
      <div class="filter"></div>
      <ul>
        <li></li>
      </ul>
    </div>

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

  #activity-card .filter {
    height: 48px;
    width: 400px;
    border-bottom: 1px solid #E5E5E5;
    background: #292929;
    border-radius: 2px 2px 0 0;
    position: fixed;
  }

  #activity-card ul {
    list-style: none;
    padding: 0;
  }

  #activity-card ul li {
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #E5E5E5;
    padding-top: 40px;
  }
</style>
