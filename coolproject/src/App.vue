<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onBeforeMount } from 'vue' // ref allows for editability, onMounted grabs api when component added on screen(for constant updates)
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import BarChart from './components/chart.vue'
const crimeData = ref('')
const crimeLocationData = ref('')
async function getAPI() {
  let data = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
  let dataJSON = data.json()
  crimeData.value = dataJSON
  let dataLocation = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.geojson')
  let dataLocationJSON = dataLocation.json()
  crimeLocationData.value = dataLocationJSON
   // for leaflet
  // https://play.vuejs.org/#eNp9UtuK2zAQ/ZVBL+tAYkPaUhqcQLfsQwu90Pat6oNQxrE2tiSksZNg/O8d2bvpli5rMLbOBZ0z0iDee5/3HYqNKKMOxhNEpM7vpDWtd4FggIDVEpy9xcoF/Ow6SzBCFVwLN+y8kRZAWu1sJPAuUoRtsmS/fi+klfYfY6bixWrIFrDdwZCckyPvVdMh+9RJGYIKSdeZFDWRj5ui8MH0inD1br3ev32zCqhDZ6hFS4S6tkarhjBSrrxR4bJqnT7m2rWF7iK5Fs8YtIkYCykWOdVos6BOKQB/8vvobLZ4wNMiEembX31cY+S3LOYB8Wh4Qdj6hkPxqtybHvoVl9xKkfqAsXMvKWBzxMsDnJu9FKwHfsp6vRuGScUwjGNZMPI/Z1WLT9my4M3SnsU1gFgKijz+yhymNnyU02Sl4Bl402D46snw8UixmWeeONU07vRpwih0uHzEdY36+Ax+H88Jk+JbwIihRymuHKlwQJrpux9f8Mz/V7J1+65h9Qvkd4yu6VLGWXbb2T3HfqKb0n6cLqSxh5/x7kxo42OpFDQpx0kvBd/KDy9U/xv3Vf568vEBi/EP1K8G5A==
}
onBeforeMount(() => {
  getAPI()
})
</script>
<script> 

export default {
  name: 'App',
  components: { BarChart},
  /* props : ['data'], */
} 
</script>
<template>
  <header>
   <BarChart></BarChart>
      <!--       <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </header>
  <!-- <RouterView /> -->
</template>
<style scoped></style>
