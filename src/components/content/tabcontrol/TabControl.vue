<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles" :key="item"
      :class="{active: index === currentIndex}"
      @click="selectItem(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    selectItem (index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
    }
  }
}

</script>
<style>
.tab-control {
  display: flex;
  background-color: #fff;
}
.tab-control div {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.tab-control span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>