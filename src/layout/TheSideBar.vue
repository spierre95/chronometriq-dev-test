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
          <div class="d-flex">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <router-link :to="{ name: 'Schedule' }">Schedule</router-link>
          </div>
        </b-nav-item>
        <b-nav-item active>
          <div class="flex">
            <i class="fa fa-users" aria-hidden="true"></i>
            <router-link :to="{ name: 'Staff' }">Staff</router-link>
            <b-badge variant="primary">{{staffCount}}</b-badge>
          </div>
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
import { state } from "./../store";
export default {
  name: "TheSideBar",
  components: {
    "b-sidebar": BSidebar,
  },
  computed: {
    staffCount() {
      return state.staffCount;
    }
  }
};
</script>
<style lang="scss">
</style>
