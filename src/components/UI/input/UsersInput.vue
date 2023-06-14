<template>
  <input
    type="text"
    class="users-input"
    :placeholder="placeholder"
    :value="modelValue"
    @input="setValue"
  />
</template>

<script>
export default {
  name: "users-input",
  props: {
    placeholder: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },

  methods: {
    setValue(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.users-input {
  outline: none;
  border: 1.5px solid #e9ecef;
  border-radius: 8px;
  width: 100%;
  height: 50px;
  padding-left: 16px;
  font-size: 14px;
  color: #76787d;
  &::placeholder {
    font-style: italic;
  }
}
</style>