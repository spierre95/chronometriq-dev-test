<template>
  <div class="hello">
    <h1>Staff</h1>
    <div class="container">
      <TableComponent :tableList="staff" />
    </div>
  </div>
</template>
<script>
import TableComponent from "./TableComponent";
export default {
  name: "Staff",
  components: {
    TableComponent,
  },
  created() {
    fetch("/api/staff")
      .then((res) => res.json())
      .then((json) => {
        this.staff = this.filterStaffList(json);
      });
  },
  methods: {
    filterStaffList: function(staffList){
      //remove id for display purposes 
      return staffList.map(({id, ...list} ) => list)
    }
  },
  data: function() {
    return {
      staff: [],
    };
  },
};
</script>
