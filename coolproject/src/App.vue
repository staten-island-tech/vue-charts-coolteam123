<script>
// import { RouterLink, RouterView } from 'vue-router'
// ref allows for editability, onMounted grabs api when component added on screen(for constant updates)
const data = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
export const dataJSON = await data.json()
</script>

<template>
  <header>
    <div class="buttonContainer justify-center text-center">
      <RouterView />
      <RouterLink to="/">
        <button class="justify-center m-2 border-green-700 rounded-lg border-4">Chart</button>
      </RouterLink>
      <RouterLink to="/maps">
        <button class="justify-center m-2 border-green-700 rounded-lg border-4">
          Map
        </button></RouterLink
      >
    </div>
  </header>
  <!-- <RouterView /> -->
</template>

<style scoped></style>
