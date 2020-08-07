<template>
  <div class="sidebar">
    <div class="side-bar-container">
      <ul>
        <li><i class="fa fa-calendar" aria-hidden="true"></i></li>
        <li><router-link class='nav-link' :to="{ name: 'Schedule' }">Schedule</router-link></li>
      </ul>
      <ul>
        <li>
          <i class="fa fa-users" aria-hidden="true"></i>
          <b-badge class="staff-count" variant="primary">{{
          staffCount
        }}</b-badge>
        </li>
        <li><router-link class='nav-link' :to="{ name: 'Staff' }">Staff</router-link></li>
      </ul>
    </div>
    <div class="side-bar-container">
      <ul>
        <li><i class="fa fa-power-off fa-2x"></i></li>
        <li>Logout</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { state } from "./../store";
export default {
  name: "TheSideBar",
  computed: {
    staffCount() {
      return state.staffCount;
    },
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  width: 66px;
  height: 100vh;
  background: #ffa500;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.side-bar-container {
  border-collapse: collapse;
}
li {
  list-style-type: none;
  padding: 12px;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  position: relative;
}
ul:hover {
  background: #2f4f4f;
  border-color: blue;
}
.sidebar:hover {
  width: 225px;
}
.sidebar {
  transition: all 0.6s ease-in-out;
}
li:nth-child(2) {
  font-size: 26px;
  text-align: left;
  color: #5f9ea0;
  opacity: 0;
  margin-left: 5px;
  transition: all 0.4s ease;
}

.sidebar:hover {
  li:nth-child(2) {
    opacity: 100;
  }
}

ul {
  display: flex;
  padding: 0;
  align-items: center;
}

.bottom {
  border: none;
  background: none;
  padding: 12px;
}
i {
  color: #5f9ea0;
  font-size: 26px;
}

.staff-count {
  position: absolute;
  right: 0;
}

.nav-link {
  color: #5f9ea0;
  text-decoration: none;
}


</style>
