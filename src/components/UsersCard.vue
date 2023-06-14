<template>
  <div class="users-card">
    <div class="card__image" />
    <div class="card__info">
      <div class="info__contacts">
        <p class="title__name">{{ user.name }}</p>
        <info-message :title="'email'" :message="user.email" />
        <info-message :title="'phone'" :message="user.phone" />
      </div>
      <div class="card__about">
        <p class="title__name">О себе:</p>
        <p class="title__message">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          officiis commodi amet culpa dolore eum qui earum ducimus et eaque
          veritatis, vel maiores quaerat magni aliquid animi, fugit, quis cum?
          Consequatur eius ipsa earum dolore vitae corporis dolorum sint, ea
          pariatur! Vel laudantium ipsam voluptas illum fugit suscipit quaerat
          optio! Quidem laborum odio dolor illo aliquid consequuntur suscipit
          sit inventore earum dolore vitae corporis!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import InfoMessage from "./UI/InfoMessage.vue";
export default {
  components: { InfoMessage },
  name: "users-card",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.users-card {
  display: flex;
  gap: 60px;
  width: 100%;
  height: 100%;
  padding: 30px 30px 30px 20px;
}

.card__image {
  min-width: 425px;
  height: 290px;
  background: url("../assets/Image.png") no-repeat center;
  background-size: 150px;
  border: 1px solid #e0e0e0;
}

.info__contacts {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card__about {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 20px;
}

.title__name {
  font-weight: 600;
}

.title__message {
  font-size: 14px;
  line-height: 17px;
  color: #76787d;
}
</style>