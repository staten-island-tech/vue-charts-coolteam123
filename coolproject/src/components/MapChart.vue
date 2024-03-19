<template>
  <div style="height: 600px; width: 800px">
    <l-map ref="map" :zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
      <!-- vfor here -->
      <l-geo-json :geojson="GeoJSON" :options-style="geoStyler"></l-geo-json>
    </l-map>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { LMap, LTileLayer, LGeoJson, LMarker } from '@vue-leaflet/vue-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker
  },
  data() {
    return {
      zoom: 2,
      GeoJSON: undefined,
      geoLoaded: undefined,
      markerLatLng: [47.41322, -1.219482]
    }
  },
  async mounted() {
    this.geoLoaded = false
    const data = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
    const dataJSON = await data.json()
    this.GeoJSON = dataJSON
  }
}
</script>

<style></style>
