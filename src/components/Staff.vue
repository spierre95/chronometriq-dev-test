<template>
  <div v-if="fetching">
    <b-spinner label="Loading..."></b-spinner>
  </div>
  <div v-else >
    <h1>Staff</h1>
    <div class="container">
      <b-button v-b-modal.addStaffModal>Launch demo modal</b-button>
      <VModal id="addStaffModal" title="create new Staff Member" :showFooter="false">
        <StaffFormModal modalId="addStaffModal"/>
      </VModal>
      <TableComponent :tableList="staff" />
    </div>
  </div>
</template>
<script>
import TableComponent from "./TableComponent";
import VModal from "./VModal"
import StaffFormModal from '../views/StaffFormModal';
export default {
  name: "Staff",
  components: {
    TableComponent,
    VModal,
    StaffFormModal
  },
  created() {
    this.fetching = true;
    fetch("/api/staff")
      .then((res) => res.json())
      .then((json) => {
        this.staff = this.filterStaffList(json);
        this.fetching = false;
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
      fetching: false,
      staff: []
    };
  },
};
</script>
