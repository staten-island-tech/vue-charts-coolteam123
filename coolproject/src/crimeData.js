import { ref } from 'vue'
const crimeData = ref('')
const loaded = ref(false)
export async function getAPI() {
  let data = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
  let dataJSON = await data.json()
  crimeData.value = dataJSON.results // results bypass promise
  loaded.value = true
  /*   const crimeLocationData = ref('')
  let dataLocation = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.geojson')
  let dataLocationJSON = dataLocation.json()
  crimeLocationData.value = dataLocationJSON // for leaflet */
}
getAPI()
export { crimeData, loaded }
/*   const crimeLocationData = ref('')
  let dataLocation = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.geojson')
  let dataLocationJSON = dataLocation.json()
  crimeLocationData.value = dataLocationJSON */

// https://play.vuejs.org/#eNp9UtuK2zAQ/ZVBL+tAYkPaUhqcQLfsQwu90Pat6oNQxrE2tiSksZNg/O8d2bvpli5rMLbOBZ0z0iDee5/3HYqNKKMOxhNEpM7vpDWtd4FggIDVEpy9xcoF/Ow6SzBCFVwLN+y8kRZAWu1sJPAuUoRtsmS/fi+klfYfY6bixWrIFrDdwZCckyPvVdMh+9RJGYIKSdeZFDWRj5ui8MH0inD1br3ev32zCqhDZ6hFS4S6tkarhjBSrrxR4bJqnT7m2rWF7iK5Fs8YtIkYCykWOdVos6BOKQB/8vvobLZ4wNMiEembX31cY+S3LOYB8Wh4Qdj6hkPxqtybHvoVl9xKkfqAsXMvKWBzxMsDnJu9FKwHfsp6vRuGScUwjGNZMPI/Z1WLT9my4M3SnsU1gFgKijz+yhymNnyU02Sl4Bl402D46snw8UixmWeeONU07vRpwih0uHzEdY36+Ax+H88Jk+JbwIihRymuHKlwQJrpux9f8Mz/V7J1+65h9Qvkd4yu6VLGWXbb2T3HfqKb0n6cLqSxh5/x7kxo42OpFDQpx0kvBd/KDy9U/xv3Vf568vEBi/EP1K8G5A==
