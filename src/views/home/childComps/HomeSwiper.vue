<!--  -->
<template>
  <swiper>
    <swiper-item v-for="item in banner">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  data() {
    return {};
  },
  props: {
      banner: {
          type: Array,
          default() {
              return []
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