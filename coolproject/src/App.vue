<script setup>
import { RouterLink, RouterView } from 'vue-router'
// ref allows for editability, onMounted grabs api when component added on screen(for constant updates)
</script>

<template>
  <header>
    <div class="buttonContainer justify-center text-center">
      <RouterView />
      <RouterLink to="/">
        <button class="justify-center m-2 border-green-700 rounded-lg border-4">Chart</button>
      </RouterLink>
      <RouterLink to="/about">
        <button class="justify-center m-2 border-green-700 rounded-lg border-4">
          Map
        </button></RouterLink
      >
    </div>
  </header>
  <!-- <RouterView /> -->
</template>

<style scoped></style>
