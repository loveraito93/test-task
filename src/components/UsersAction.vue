<template>
  <div class="users-action">
    <p class="actions__title">Поиск сотрудников</p>
    <div class="actions__input">
      <users-input :placeholder="'Поиск...'" v-model="usersValue" />
    </div>
    <p class="actions__title">Результаты</p>

    <div class="users__list">
      <div
        v-if="$store.state.users === null && !$store.state.loader"
        class="message"
      >
        Начните поиск...
      </div>
      <found-users-list
        v-else-if="$store.state.users !== null && $store.state.users.length > 0"
        :usersList="$store.state.users"
      />
      <div class="message" v-else>Ничего не найдено</div>
      <div class="loader" v-if="$store.state.loader" />
    </div>
  </div>
</template>

<script>
import FoundUsersList from "./FoundUsersList.vue";
import UsersInput from "./UI/input/UsersInput.vue";
export default {
  components: { UsersInput, FoundUsersList },
  name: "users-action",

  data() {
    return {
      usersValue: ""
    };
  },

  watch: {
    usersValue() {
      if (this.usersValue.length > 0) {
        const reg = this.usersValue
          .match(/\w+/g)
          .map((x) => x[0].toUpperCase() + x.slice(1));
        this.$store.dispatch("getAllUsers", reg);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.users-action {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  border-right: 2px solid rgba(0, 0, 0, 0.05);
  padding: 30px 30px 20px 30px;
}

.actions__title {
  font-weight: 600;
  color: #333333;
}

.actions__input {
  margin: 20px 0 30px 0;
}

.users__list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  flex-grow: 1;
}

.message {
  font-size: 14px;
  color: #76787d;
}
</style>