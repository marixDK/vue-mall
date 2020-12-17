<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">Home</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend-view :recommends="recommends.list"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommendView from './childComps/HomeRecommondView';

import {getHomeMultiData} from 'network/home';

export default {
  name: "home",
  data () {
    return {
      result: null,
      banner: [],
      recommends: []
    };
  },
  created() {
    getHomeMultiData().then(res => {
      // 结果数据持久化
      this.result = res.data;
      this.banner = this.result.data.banner;
      this.recommends = this.result.data.recommend;
    })
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
};
</script>
<style>
.home-nav {
  background-color: var(--light-pink-gbc);
}
.home-nav .center{
  color: var(--color-tint);
}
</style>