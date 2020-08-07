<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="firstName"
        label="First Name:"
        label-for="firstNameInput"
      >
        <b-form-input
          id="firstNameInput"
          v-model="form.firstName"
          type="text"
          required
          placeholder="Enter first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="lastName" label="Last Name:" label-for="lastNameInput">
        <b-form-input
          id="lastNameInput"
          v-model="form.lastName"
          required
          placeholder="Enter last name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="group" label="Position:" label-for="groupInput">
        <b-form-select
          id="groupInput"
          v-model="form.group"
          :options="groups"
          required
        ></b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mutations, state } from './../store';
export default {
    name: "StaffFormModal",
    props: {
      modalId: {
        type: String,
        default: ""
      }
    },
    data: function(){
     return {
       form: {
          firstName: '',
          LastName: '',
          group: null,
        },
        groups: [{ text: 'Select One', value: null }, 'Admin', 'Doctor', 'Nurse'],
      }
    },
    computed : {
      staffCount(){
        return state.staffCount
      }
    },
    methods : {
      onSubmit: function(e){
        e.preventDefault();
        const vm = this
        e.preventDefault();
        this.updateStaffCount()
        this.$bvModal.hide(this.modalId)
      },
      updateStaffCount: function(){
        const updatedStaffCount = this.staffCount + 1 
        mutations.setCount(updatedStaffCount)
      }
    }
}
</script>
