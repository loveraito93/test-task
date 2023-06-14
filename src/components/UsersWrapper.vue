<template>
  <div class="users-wrapper">
    <users-action />
    <div class="wrapper__info">
      <p class="empty-user" v-if="$store.state.currentUser === null">
        выберите сотрудника чтобы посмотреть его профиль
      </p>
      <users-card v-else :user="$store.state.currentUser" />
    </div>
  </div>
</template>

<script>
import UsersAction from "./UsersAction.vue";
import UsersCard from "./UsersCard.vue";
export default {
  components: { UsersAction, UsersCard },
  name: "users-wrapper"
};
</script>

<style lang="scss" scoped>
.users-wrapper {
  display: flex;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  height: 575px;
  position: relative;
}

.wrapper__info {
  display: flex;
  width: 100%;
  flex-grow: 1;
}

.empty-user {
  color: #76787d;
  font-size: 14px;
  margin: auto;
}
</style>