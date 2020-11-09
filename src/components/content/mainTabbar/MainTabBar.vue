<template>
  <TabBar>
    <tab-bar-item path="/home" activeColor="orange">
      <svg slot="item-icon-active" class="icon" aria-hidden="true">
        <use xlink:href="#icon-yemian-copy-copy"></use>
      </svg>
      <svg slot="item-icon" class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye5"></use>
      </svg>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="orange">
      <svg slot="item-icon-active" class="icon" aria-hidden="true">
        <use xlink:href="#icon-leimupinleifenleileibie1"></use>
      </svg>
      <svg slot="item-icon" class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenlei1-copy"></use>
      </svg>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" activeColor="orange">
      <svg slot="item-icon-active" class="icon" aria-hidden="true">
        <use xlink:href="#icon-gouwuche"></use>
      </svg>
      <svg slot="item-icon" class="icon" aria-hidden="true">
        <use xlink:href="#icon-gouwuche-"></use>
      </svg>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="orange">
      <svg slot="item-icon-active" class="icon" aria-hidden="true">
        <use xlink:href="#icon-main_hl"></use>
      </svg>
      <svg slot="item-icon" class="icon" aria-hidden="true">
        <use xlink:href="#icon-Icon_wode"></use>
      </svg>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </TabBar>
</template>

<script>

import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
import Home from "views/home/Home"
import Category from "views/category/Category"
import ShopCart from "views/shopcart/ShopCart"
import Profile from "views/profile/Profile"
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>

</style>