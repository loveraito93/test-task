<template>
  <div class="app">
    <main-page />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
export default {
  components: { MainPage },

  mounted() {
    // this.$store.dispatch("getAllUsers");
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,400&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 400;
}

h1 {
  font-size: 32px;
}

.app {
  padding: 50px;
  min-height: 100vh;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid gray;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin: 20px auto;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>