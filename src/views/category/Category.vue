<!--  -->
<template>
  <div>
    <nav-bar class="category-nav">
      <div slot="center"> category </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  name: 'category',
  data () {
    return {
    };
  },
  components: {
    NavBar
  }
}

</script>
<style>
.category-nav {
  background-color: var(--light-pink-gbc);
}
.category-nav .center{
  color: var(--color-tint);
}
</style>