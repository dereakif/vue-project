<template>
  <div id="app">
    <Test text="testing stuff" />
    <Home />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Test,
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
