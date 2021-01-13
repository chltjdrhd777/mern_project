<template>
  <div id="app">
    <!-- Layout -->
    <Header />

    <b-jumbotron
      v-bind:style="{ margin: '5rem', background: 'white' }"
      class="text-center"
    >
      <router-view />
    </b-jumbotron>

    <!-- views -->
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
