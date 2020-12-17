<!--  -->
<template>
  <div class="tab-control">
      <div v-for="(item, index) in titles" class="tab-control-item" :class="{active : index === currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props: {
      titles: {
          type: Array,
          default: []
      }
  },
  data () {
    return {
        currentIndex: 0,
    };
  },
  methods:{
      itemClick(index){
          this.currentIndex = index;
      }
  }
}

</script>
<style>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
}
.tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.tab-control-item span{
    padding: 5px;
}
.active{
    color: #fa9999;
}
.active span{
    border-bottom: 3px solid #fa9999;
}
</style>