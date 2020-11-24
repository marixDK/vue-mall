<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>

    <!-- <img src="../../assets/img/tabbar/home.svg" width="inherit" alt="" />
    <div>home</div> -->
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#f37474'
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? {color : this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      console.log("itemclick");
      this.$router.replace(this.path);
    },
  },
};
</script>
<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>