<script setup>
import { RouterLink, RouterView } from 'vue-router'
// ref allows for editability, onMounted grabs api when component added on screen(for constant updates)
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo bg-black w-24 h-24" src="@/assets/logo.svg" />

    <div class="wrapper">
      <!--       <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>
  <RouterView />
  <RouterLink to="/"> First Page </RouterLink>
  <RouterLink to="/about"> next page </RouterLink>

  <!-- <RouterView /> -->
</template>

<style scoped></style>
