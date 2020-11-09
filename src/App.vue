<template>
  <div id="app">
    <MainTabBar></MainTabBar>
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar"
export default {
  name: "APP",
  components:{
    MainTabBar,
  }

}
</script>

<style>
@import url('assets/css/base.css');
@import url('assets/css/normalize.css');
</style>
