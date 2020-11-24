<!--  -->
<template>
  <div>
    <nav-bar class="shoppingcar-nav">
      <div slot="center">shoppingcar</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  name: "cart",
  data() {
    return {};
  },
  components: {
    NavBar
  }
};
</script>
<style>
.shoppingcar-nav {
  background-color: var(--light-pink-gbc);
}
.shoppingcar-nav .center{
  color: var(--color-tint);
}
</style>