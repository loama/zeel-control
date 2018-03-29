<template>
  <div id="app">

    <div id="nav">
      <img class="logo" src="./assets/logo_inverted.svg">

      <input id="search" type="text" placeholder="search ...">

      <div id="profile-img" style="background-image: url(static/Jaime.jpg)"></div>
    </div>

    <div id="nav-links">
      <ul>
        <li v-on:click="go('activity')">
          <img class="gold" src="./assets/icons/ic_location_on_gold.svg">
          <img class="black" src="./assets/icons/ic_location_on_black.svg">
        </li>

        <li v-on:click="go('therapists')">
          <img class="gold massage" src="./assets/icons/massage-session-gold.svg">
          <img class="black" src="./assets/icons/massage-session.svg">
        </li>

        <li v-on:click="go('users')">
          <img class="gold" src="./assets/icons/ic_people_gold.svg">
          <img class="black" src="./assets/icons/ic_people_black.svg">
        </li>

        <li v-on:click="go('analytics')">
          <img class="gold" src="./assets/icons/ic_timeline_gold.svg">
          <img class="black" src="./assets/icons/ic_timeline_black.svg">
        </li>
      </ul>
    </div>

    <div id="nav-indicator" v-bind:style="{ marginTop: navigation.position }">
      <img class="white" v-bind:style="{ opacity: navigation.indicator.activity.opacity }" src="./assets/icons/ic_location_on_white.svg">
      <img class="white therapists" v-bind:style="{ opacity: navigation.indicator.therapists.opacity }" src="./assets/icons/massage-session_white.svg">
      <img class="white" v-bind:style="{ opacity: navigation.indicator.users.opacity }" src="./assets/icons/ic_people_white.svg">
      <img class="white" v-bind:style="{ opacity: navigation.indicator.analytics.opacity }" src="./assets/icons/ic_timeline_white.svg">
    </div>

    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import router from './router'
export default {
  data () {
    return {
      navigation: {
        position: '48px',
        indicator: {
          activity: {
            opacity: 1
          },
          therapists: {
            opacity: 0
          },
          users: {
            opacity: 0
          },
          analytics: {
            opacity: 0
          }
        }
      }
    }
  },
  methods: {
    go (route) {
      router.push(route)
      var position = 0
      switch (route) {
        case 'activity':
          position = '0'
          break
        case 'therapists':
          position = '48px'
          break
        case 'users':
          position = '96px'
          break
        case 'analytics':
          position = '144px'
          break
      }
      this.navigation.position = position

      this.navigation.indicator.activity.opacity = 0
      this.navigation.indicator.therapists.opacity = 0
      this.navigation.indicator.users.opacity = 0
      this.navigation.indicator.analytics.opacity = 0

      this.navigation.indicator[route].opacity = 1
    }
  },
  name: 'App'
}
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  #nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 48px;
    width: 100vw;
    background: #292929;
    z-index: 1001;
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
    font-size: 14px;
  }

  #profile-img {
    position: absolute;
    top: 4px;
    right: 8px;
    height: 38px;
    width: 38px;
    border-radius: 8px;
    border: 1px solid #222222;
    background-size: cover;
  }

  #nav-links {
    position: fixed;
    top: 48px;
    left: 0;
    height: calc(100vh - 48px);
    width: 48px;
    background: white;
    border-right: 1px solid #E5E5E5;
    z-index: 1000;
  }

  #nav-links ul {
    list-style: none;
    padding: 0;
  }

  #nav-links ul li {
    height: 48px;
    position: relative;
    cursor: pointer;
  }

  #nav-links ul li img {
    position: absolute;
    top: 12px;
    left: 12px;
    height: 24px;
  }

  #nav-links ul li .black {
    opacity: 0.2;
  }

  #nav-links ul li .gold {
    opacity: 0;
  }

  #nav-links ul li:hover .black {
    opacity: 0;
  }

  #nav-links ul li:hover .gold {
    opacity: 1;
  }

  #nav-links ul li img.gold.massage {
    top: 15px;
    height: 18px;
  }

  #nav-indicator {
    position: absolute;
    top: 64px;
    left: 0;
    height: 48px;
    width: 48px;
    background: #c6a66a;
    z-index: 1001;
    transition: all 0.3s;
  }

  #nav-indicator img {
    position: absolute;
    top: 12px;
    left: 12px;
    height: 24px;
    opacity: 0;
  }

  #nav-indicator img.white.therapists {
    top: 15px;
    height: 16px;
  }

  #content {
    padding: 48px 0 0 48px;
  }
</style>
