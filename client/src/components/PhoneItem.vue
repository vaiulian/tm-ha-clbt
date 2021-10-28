<template>
     <div class="stack-small" v-if="!isEditing">
    <label> Id: {{id}}</label>
    <label> | Type: {{type}}</label>
    <label> | Serial: {{serial}}</label>
    <label> | Color: {{color}}</label>
    <label> | Data: {{data}}</label>
    <div class="btn-group">
        <button type="button" class="btn"  @click="toggleToItemEditForm">
            Edit <span class="visually-hidden">{{type}}</span>
        </button>
        <button type="button" class="btn btn__danger" @click="deletePhone">
            Delete <span class="visually-hidden">{{type}}</span>
        </button>
    </div>
  </div>
  <phone-edit-form v-else :id="id" :type="type" :serial="serial" :color="color" :data="data"
    @phone-edited="phoneEdited"
    @edit-cancelled="editCancelled">
  </phone-edit-form>
</template>


<script>
import PhoneEditForm from "./PhoneEditForm";
  export default {
    components: {
        PhoneEditForm
    },
    props: {
      id: { required: true, type: String },
      type: { required: true, type: String },
      serial: { required: true, type: String },
      color: { required: true, type: String },
      data: { required: true, type: String }
    },
    data() {
        return {
        isEditing: false
        };
    },
    methods: {
        deletePhone() {
        this.$emit('phone-deleted');
        },
        toggleToItemEditForm() {
        this.isEditing = true;
        },
        phoneEdited(phone) {
        this.$emit('phone-edited', phone);
        this.isEditing = false;
        },
        editCancelled() {
        this.isEditing = false;
        }
    }
  };
</script>


<style scoped>

</style>