<template>
  <div class="RecommendView">
    <div v-for="item in recommends" :key="item.id" class="itemView">
      <a :href="item.likn">
        <img class="img" :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
};
</script>

<style>
.RecommendView {
  display: flex;
  text-align: center;
  padding: 10px 0 20px 0;
  border-bottom: 10px solid rgb(245, 239, 239);
}
.itemView {
  flex: 1;
  width: 100%;
}
.img {
  width: 70px;
  height: 70px;
  padding-bottom: 10px;
}
</style>