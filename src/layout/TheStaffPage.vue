<template>
  <div class="loading-container d-flex justify-content-center align-items-center" v-if="fetching">
    <b-spinner class="loading-spinner" variant="primary" label="Spinning" style="width: 50px; height: 50px;" ></b-spinner>
  </div>
  <div v-else >
    <h1 class="header-title">Staff</h1>
    <div class="container">
      <b-button class="launch-modal-btn" variant="outline-primary" v-b-modal.addStaffModal>Create</b-button>
      <VModal id="addStaffModal" title="Add New Staff Member">
        <StaffFormModal modalId="addStaffModal"/>
      </VModal>
      <VTable :tableList="staff" />
    </div>
  </div>
</template>
<script>
import VTable from "./../components/VTable";
import VModal from "./../components/VModal"
import StaffFormModal from './../components/StaffFormModal';
export default {
  name: "TheStaffPage",
  components: {
    VTable,
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
<style> 

.loading-container {
  margin-top: 150px;
}

.launch-modal-btn {
  margin: 30px 0;
}

</style>
