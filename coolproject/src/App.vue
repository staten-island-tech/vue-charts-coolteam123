<script setup>
import { RouterLink, RouterView } from 'vue-router'
// ref allows for editability, onMounted grabs api when component added on screen(for constant updates)l
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo bg-black w-24 h-24" src="@/assets/logo.svg" />

    <div class="wrapper">
      <p>hello vro..</p>
      <!--       <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>
  <RouterView />

  <!-- <RouterView /> -->
</template>

<style scoped></style>
