<template>
  <div v-if="geoLoaded" style="height: 600px; width: 800px">
    <l-map ref="map" :zoom="12" :center="[40.571944, -74.146944]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-for="item in markers" :key="item.name" :lat-lng="item.position">
        <l-popup>
          {{ item.name }} <br />
          {{ item.date }}<br />{{ item.boro }}</l-popup
        >
      </l-marker>
      <!-- vfor here -->
      <l-geo-json :geojson="GeoJSON" :options-style="geoStyler"></l-geo-json>
    </l-map>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { ref } from 'vue'
import { LMap, LTileLayer, LGeoJson, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
    LPopup
  },
  data() {
    return {
      GeoJSON: undefined,
      geoLoaded: false,
      geoStyler: (feature) => ({
        opacity: feature.properties.code / 100000
      }),
      markers: ref([
        {
          name: 'test',
          date: 'test',
          boro: 'test',
          position: { lat: 51.505, lng: -0.09 },
          draggable: false,
          visible: Boolean(false)
        }
      ])
    }
  },
  async mounted() {
    this.geoLoaded = false
    const data = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
    const dataJSON = await data.json()
    dataJSON.slice(0, 100).forEach((element) => {
      this.markers.push({
        name: `DESCRIPTION: ${element.pd_desc}`,
        date: `DATE: ${element.arrest_date.slice(0, 10)}`,
        boro: `BORO:${element.arrest_boro}`,
        position: {
          lat: Number(element.geocoded_column.coordinates[1].toFixed(3)),
          lng: Number(element.geocoded_column.coordinates[0].toFixed(3))
        },
        draggable: false,
        visible: true,
        opacity: 0.5
      })
    })
    this.markers.forEach((marker) => {
      console.log(marker.boro)
      if (marker.boro === 'BORO:K') {
        marker.visible === true
        console.log(marker.visible)
      }
    })
    this.geoLoaded = true
  },
  methods: {
    alert(item) {
      alert(`${item.id} \n${item.date}`)
    }
    /*     boroughChange() {
      this.markers.forEach((marker) => {
        if (marker.boro == 'K') {
          marker.visible == true
        } 
      }) 
    }*/
  }
}
</script>

<style></style>
<!-- consider switching to vue3-google-map w/ marker cluster-->
