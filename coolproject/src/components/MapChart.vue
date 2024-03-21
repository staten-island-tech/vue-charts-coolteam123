<template>
  <div v-if="geoLoaded" style="height: 600px; width: 800px">
    <l-map ref="map" :zoom="12" :center="[40.571944, -74.146944]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-geo-json :geojson="GeoJSON" :options-style="geoStyler"></l-geo-json>
    </l-map>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import { ref } from 'Vue'
import L from 'leaflet'
import { LMap, LTileLayer, LGeoJson } from '@vue-leaflet/vue-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },
  data() {
    return {
      GeoJSON: undefined,
      geoLoaded: false,
      geoStyler: (feature) => ({
        opacity: feature.properties.code / 100000
      })
    }
  },
  async mounted() {
    this.geoLoaded = false
    const data = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.geojson')
    const dataJSON = await data.json()
    this.GeoJSON = dataJSON
    const newDataJSON = ref({})
    dataJSON.features.forEach((element) => (newDataJSON.value.geometry = element.geometry))
    console.log(newDataJSON)
    // map newDataJSON using https://leafletjs.com/examples/geojson/ format
    this.geoLoaded = true
  },
  methods: {
    alert(item) {
      alert(`${item.desc} \n${item.date}`)
    }
  }
}
</script>

<style></style>
