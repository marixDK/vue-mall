<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">home</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  name: "home",
  // data () {
  //   return {
  //   };
  // },
  components: {
    NavBar,
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