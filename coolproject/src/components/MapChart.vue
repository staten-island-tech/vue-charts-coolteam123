<template>
  <div v-if="geoLoaded" style="height: 600px; width: 800px">
    <l-map ref="map" :zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker
        v-for="item in markers"
        :key="item.id"
        :lat-lng="item.position"
        @click="alert(item)"
      />
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
      geoLoaded: false,
      markers: [
        {
          id: 'test',
          position: { lat: 51.505, lng: -0.09 },
          draggable: false,
          visible: true
        }
      ]
    }
  },
  async mounted() {
    this.geoLoaded = false
    const data = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
    const dataJSON = await data.json()
    this.GeoJSON = dataJSON
    dataJSON.forEach((element) => {
      if (element.arrest_boro == 'S') {
        this.markers.push({
          id: 'm',
          position: {
            lat: Number(element.geocoded_column.coordinates[0].toFixed(3)),
            lng: Number(element.geocoded_column.coordinates[1].toFixed(3))
          },
          draggable: false,
          visible: true
        })
      }
    })
    console.log(this.markers)
    this.geoLoaded = true
  },
  methods: {
    alert(item) {
      alert('this is ' + JSON.stringify(item))
    }
  }
}
</script>

<style></style>
