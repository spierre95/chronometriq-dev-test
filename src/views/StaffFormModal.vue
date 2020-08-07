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

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mutations, state } from '../../store';
export default {
    name: "StaffFormModal",
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
      onSubmit: function(){
        const vm = this
        setTimeout( () => {
          vm.updateStaffCount()
        }, 4000)
      },
      updateStaffCount: function(){
        const updatedStaffCount = this.staffCount + 1 
        mutations.setCount(updatedStaffCount)
      }
    }


    
}
</script>
