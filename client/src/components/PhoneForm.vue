<template>
  <form @submit.prevent="onSubmit" >
    <fieldset>
        <legend> <h2 class="label-wrapper">Add New Phone: </h2></legend>
            <label for="type" class="label-form"> Type: </label>
            <input type="text" id="type" name="type" required=true autocomplete="off" v-model.lazy.trim="type"/><br>
            <label for="serial" class="label-form">Serial: </label>
            <input type="text" id="serial" name="serial" required=true autocomplete="off" v-model.lazy.trim="serial"/><br>
            <label for="color" class="label-form">Color: </label>
            <input type="text" id="color" name="color" required=true autocomplete="off" v-model.lazy.trim="color"/><br>
            <label for="data" class="label-form">Data:  </label>
            <input type="text" id="data" name="data" required=true autocomplete="off" v-model.lazy.trim="data"/><br>
            <button type="submit" class="btn btn__primary btn__lg">
            Add
            </button>
    </fieldset>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
        let phone = {};
        phone.id ="temp";
        phone.type = this.type;
        phone.serial = this.serial;
        phone.color = this.color;
        phone.data = this.data;
        if(this.type === "" || this.serial ==="" || this.color === "" || this.data === "") {
            return;
        }

     this.$emit("phone-added", phone);
       
      console.log("form submitted" + 'type: ', this.type +'serial: ' + this.serial);
      this.type ="" ; this.serial ="" ; this.color = "" ; this.data = "";
    }
  },
  data() {
    return {
      type:"",
      serial:"",
      color:"",
      data:""
    };
  }
};
</script>


<style scoped>

</style>