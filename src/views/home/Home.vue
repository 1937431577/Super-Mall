<template>
  <div id="home">
    <NavBar>
      <div class="center" slot="center">购物一条街</div>
    </NavBar>
    <ChildSwiper :banners="banners" />
    <RecommendView :recommends="recommends" />
    <FeatureView />
    <TabControl class="tab-control" :titles="['流行', '新款', '精选']" />

    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
import { gerHomeMultidata, getHomeGoods } from "network/home.js";

import NavBar from "components/common/navbar/NavBar";
import ChildSwiper from "./homeChild/ChildSwiper";
import RecommendView from "./homeChild/RecommendView";
import FeatureView from "./homeChild/FeatureView";
import TabControl from "components/content/TabControl/TabControl";

export default {
  name: "Home",
  components: {
    NavBar,
    ChildSwiper,
    RecommendView,
    FeatureView,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  props: {},
  created() {
    this.gerHomeMultidata(), 
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    gerHomeMultidata() {
      gerHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res.data);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page + 1;
      });
    },
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}
.center {
  background-color: rgb(245, 117, 78);
  color: rgb(228, 215, 215);
}

.tab-control {
  position: sticky;
  top: 43px;
}
</style>