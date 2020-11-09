<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {};  
</script>

<style>
.nav-bar {
  display: flex;
  line-height:44px;
  height: 44px;
  text-align: center;
  box-shadow:0 1px 1px rgba(151, 150, 150, 0.3);
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index:10
}
.left .right{
  width: 60px;
}
.center{
  flex: 1;
}
</style>