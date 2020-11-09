<template>
  <div class="childswiper">
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  name: "ChildSwiper",
  props: {
    banners:{
      type: Array,
      default(){
        return[]
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
</style>