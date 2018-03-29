<template>
  <div id="app">

    <div id="nav">
      <img class="logo" src="./assets/logo_inverted.svg">

      <input id="search" type="text" placeholder="search ...">

      <div id="profile-img"></div>
    </div>

    <div id="nav-links">
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 16px;
  }

  #nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 48px;
    width: 100vw;
    background: #292929;
  }

  #nav .logo {
    position: absolute;
    top: 8px;
    left: 12px;
    height: 32px;
  }

  #search {
    position: absolute;
    top: 4px;
    right: 64px;
    height: 38px;
    width: 216px;
    border-radius: 8px;
    border: 1px solid #222222;
    background: rgba(255, 255, 255, 0.1);
    padding: 0 8px;
    color: white;
    font-size: 16px;
  }

  #profile-img {
    position: absolute;
    top: 4px;
    right: 8px;
    height: 38px;
    width: 38px;
    border-radius: 8px;
    background: #D8D8D8;
    border: 1px solid #222222;
  }

  #nav-links {
    position: fixed;
    top: 48px;
    left: 0;
    height: calc(100vh - 48px);
    width: 48px;
    background: white;
    border-right: 1px solid #E5E5E5;
  }
</style>
