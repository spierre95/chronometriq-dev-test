<template>
  <div id="app">
    <div class="wrapper">
      <TheSideBar />
      <div class="row">
        <div class="col-12">
          <div class="container">
            <router-view></router-view>
          </div>
        </div>
      </div>
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

<style lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
