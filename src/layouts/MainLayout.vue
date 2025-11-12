<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <Header />
  <main class="container-fluid">
    <router-view />
  </main>
  <Footer />
</template>
<style lang="scss" scoped>
main {
  margin: 150px 0px;
}
</style>
