<template>
  <div id="app">
    <div class="d-flex justify-content-center">
      <TheSideBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheSideBar from "./layout/TheSideBar";
export default {
  name: "app",
  components: {
    TheSideBar,
  },
};
</script>

<style></style>
