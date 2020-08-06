<template>
  <div>
    <b-sidebar
      id="sidebar-footer"
      aria-label="Sidebar with custom footer"
      no-header
      shadow
      :visible="true"
      :no-header-close="true"
      :no-close-on-esc="true"
      :no-close-on-route-change="true"
    >
      <b-nav vertical fill class="w-25">
        <b-nav-item active>
          <router-link :to="{ name: 'Schedule' }">Schedule</router-link>
        </b-nav-item>
        <b-nav-item active>
          <router-link :to="{ name: 'Staff' }">Staff</router-link>
        </b-nav-item>
      </b-nav>
      <template v-slot:footer>
        <div
          class="d-flex bg-dark text-light align-items-center px-3 py-2"
        ></div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import { BSidebar } from "bootstrap-vue";
export default {
  name: "TheSideBar",
  components: {
    "b-sidebar": BSidebar,
  },
};
</script>
<style lang="scss">
// #sidebar-footer {
//   background-color: #000;
// }
</style>
