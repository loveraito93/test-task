<template>
  <div class="list-item-card">
    <div class="item__image"></div>
    <div
      class="item__names"
      :class="$store.state.currentUser === item ? 'active' : ''"
    >
      <p class="names__username">{{ item.username }}</p>
      <p class="names__email">{{ item.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-item-card",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.list-item-card {
  display: flex;
  width: 100%;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 15px;
  cursor: pointer;
}

.item__image {
  min-width: 70px;
  background: url("../../assets/Image.png") no-repeat center;
  background-size: 30px;
  border-right: 2px solid rgba(0, 0, 0, 0.05);
}

.item__names {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  overflow-x: hidden;
  border-radius: 0 10px 10px 0;
  p {
    font-size: 14px;
  }
}

.names__username {
  font-weight: 600;
}

.names__email {
  overflow: hidden;
}

.active {
  background: #e0e0e0;
}
</style>