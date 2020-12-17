<!--  -->
<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

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
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 1px solid grey;
}

.recommend .recommend-item {
  flex: 1;
}

.recommend .recommend-item a {
  text-decoration: none;
  color: black;
}

.recommend .recommend-item img {
  width: 68px;
  height: 68px;
  margin-bottom: 10px;
}
</style>