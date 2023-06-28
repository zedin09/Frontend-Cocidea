<template>
  <header class="d-flex justify-content-center align-items-center">
    <NavBar></NavBar>
    <h1 class="text-center my-5 bg-primary border border-2 border-dark py-2 fw-bold w-50">CocIdea</h1>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/shared/NavBar.vue';
</script>

<style scoped>
</style>
