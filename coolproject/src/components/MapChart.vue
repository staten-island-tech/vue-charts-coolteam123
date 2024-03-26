<template>
  <div v-if="geoLoaded" style="height: 600px; width: 800px">
    <l-map ref="map" :zoom="12" :center="[40.571944, -74.146944]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-for="item in markers" :key="item.id" :lat-lng="item.position">
        <l-popup> {{ item.id }}, {{ item.date }}, {{ item.boro }}</l-popup>
      </l-marker>
      <!-- vfor here -->
      <l-geo-json :geojson="GeoJSON" :options-style="geoStyler"></l-geo-json>
    </l-map>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
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
    dataJSON.forEach((element) => {
      if (element.arrest_boro == 'S') {
        this.markers.push({
          id: `DESCRIPTION: ${element.pd_desc}`,
          date: `DATE: ${element.arrest_date.slice(0, 10)}`,
          boro: `BORO:${element.arrest_boro}`,
          position: {
            lat: Number(element.geocoded_column.coordinates[1].toFixed(3)),
            lng: Number(element.geocoded_column.coordinates[0].toFixed(3))
          },
          draggable: false,
          visible: true
        })
      }
    })
    console.log(dataJSON)
    this.geoLoaded = true
  },
  methods: {
    alert(item) {
      alert(`${item.id} \n${item.date}`)
    }
  }
}
</script>

<style></style>
