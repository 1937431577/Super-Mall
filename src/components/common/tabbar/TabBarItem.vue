<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="styleActive"><slot name="item-text"></slot></div>
  </div>
</template>

<script>

import iconfont from "../../../tabbar/iconfont"


export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    styleActive() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>



.tab-bar-item {
  height: 49px;
  /* line-height: 49px; */
  bottom: 2px;
  flex: 1;
  flex-direction: column;
  text-align: center;
  font-size: 16px;
}
.icon {
  margin-top: 8px;
  width: 16px;
  height: 16px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>