<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">Home</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="titles"></tab-control>
    <goods-list :goods="goods"></goods-list>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommondView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from 'components/content/goods/GoodsList';

import { getHomeMultiData,
         getHomeGoods } from "network/home";

export default {
  name: "home",
  data() {
    return {
      result: null,
      banner: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        pop : {page: 0, list: []},
        new : {page: 0, list: []},
        sell : {page: 0, list: []},
      }
    };
  },
  created() {
    this.getHomeMultiDataAction();
    this.getHomeGoodsAction('pop');
    this.getHomeGoodsAction('new');
    this.getHomeGoodsAction('sell');
  },
  methods: {
    getHomeMultiDataAction(){
      getHomeMultiData().then((res) => {
        // 结果数据持久化
        this.result = res.data;
        this.banner = this.result.data.banner.list;
        this.recommends = this.result.data.recommend.list;
      });
    },

    getHomeGoodsAction(type,page){
      getHomeGoods(type,page || 1).then(res => {
        // console.log(res);
      this.goods[type].list.push(...res.data.data.list);
      this.goods[type].page = page || (this.goods[type].page += 1);
    });
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
};
</script>
<style>
.home-nav {
  background-color: var(--light-pink-gbc);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.home-nav .center {
  color: var(--color-tint);
}
#home {
  margin-top: 44px;
}
.tab-control{
  top: 44px;
  position: sticky;
}
</style>