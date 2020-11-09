<template>
  <div class="TabC">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="title-item"
      :class="{ active: index === currentIndex }"
      @click="buton(index)"
    >
      <span>
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    buton(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style>
.TabC {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: #fff;
}
.title-item {
  flex: 1;
}
.active {
  color: rgb(245, 110, 133);
}
.active span {
  color: rgb(245, 110, 133);
  border-bottom: solid 3px;
  padding: 3px;
}
</style>