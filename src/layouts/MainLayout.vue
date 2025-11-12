<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <Header />
  <main class="px-3">
    <div class="container-fluid">
      <router-view />
    </div>
  </main>
  <Footer />
</template>
<style lang="scss" scoped>
main {
  margin: 150px 0px;
}
</style>
