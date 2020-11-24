<!--  -->
<template>
  <div>
    <nav-bar class="profile-nav">
      <div slot="center"> me </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  name:'profile',
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
.profile-nav {
  background-color: var(--light-pink-gbc);
}
.profile-nav .center{
  color: var(--color-tint);
}
</style>