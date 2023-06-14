<template>
  <div class="info-message">
    <p class="title">{{ title }}:</p>
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "info-message",
  props: {
    title: String,
    message: String
  }
};
</script>

<style lang="scss" scoped>
.info-message {
  display: flex;
}

.title,
.message {
  font-size: 14px;
  font-weight: 600;
}

.message {
  color: #76787d;
  margin-left: 10px;
}
</style>