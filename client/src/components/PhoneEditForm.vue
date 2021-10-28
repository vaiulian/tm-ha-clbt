<template>
  <form class="stack-small" @submit.prevent="onSubmit">
    <div>
      <label class="edit-label">Id: </label>
      <input type="text" autocomplete="off" readonly v-model.lazy.trim="idNew" />
      <label class="edit-label">Type: </label>
      <input type="text" autocomplete="off" v-model.lazy.trim="typeNew" />
       <label class="edit-label">Serial: </label>
      <input type="text" autocomplete="off" v-model.lazy.trim="serialNew" />
      <label class="edit-label">Type: </label>
      <input type="text" autocomplete="off" v-model.lazy.trim="colorNew" />
       <label class="edit-label">Data: </label>
      <input type="text" autocomplete="off" v-model.lazy.trim="dataNew" />
    </div>
    <div class="btn-group">
      <button type="button" class="btn" @click="onCancel">
        Cancel
        <span class="visually-hidden">editing phone {{id}}</span>
      </button>
      <button type="submit" class="btn btn__primary">
        Save
        <span class="visually-hidden">edit for phone {{id}}</span>
      </button>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    serial: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    data: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
        idNew: this.id,
        typeNew: this.type,
        serialNew: this.serial,
        colorNew: this.color,
        dataNew: this.data,
    };
  },
  methods: {
    onSubmit() {
        let phone = {};
        phone.id = this.id;
        phone.type = this.typeNew;
        phone.serial = this.serialNew;
        phone.color = this.colorNew;
        phone.data = this.dataNew;
        this.$emit("phone-edited", phone);
    },
    onCancel() {
      this.$emit("edit-cancelled");
    }
  }
};
</script>
<style scoped>
.edit-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;
}
input {
  display: inline-block;
  margin-top: 0.4rem;
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #565656;
}
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
form > * {
  flex: 0 0 100%;
}
</style>