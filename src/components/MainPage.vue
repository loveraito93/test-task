<template>
  <div class="main-page">
    <div class="main__title">
      <h1 class="title__logo">ЖИЛФОНД</h1>
      <p class="title__user">Пользователь</p>
    </div>
    <users-wrapper />
  </div>
</template>

<script>
import UsersWrapper from "./UsersWrapper.vue";
export default {
  components: { UsersWrapper },
  name: "main-page"
};
</script>


    UsersWrapper<style lang="scss" scoped>
.main__title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
}

.title__user {
  font-weight: 600;
  color: #333333;
  align-self: flex-start;
}

.title__logo {
  font-weight: 700;
  color: #e31f24;
}
</style>