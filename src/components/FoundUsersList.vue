<template>
  <div class="found-users-list">
    <list-item-card
      v-for="item in usersList"
      :key="item.id"
      :item="item"
      @click="changeCurrentUser(item)"
      :currentItem="currentUser"
    />
  </div>
</template>

<script>
import ListItemCard from "./UI/ListItemCard.vue";
export default {
  components: { ListItemCard },
  name: "found-users-list",

  props: {
    usersList: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      currentUser: null
    };
  },

  methods: {
    changeCurrentUser(item) {
      this.$store.commit("changeCurrentUser", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.found-users-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>