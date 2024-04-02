<template>
  <div v-if="geoLoaded" style="height: 600px; width: 800px">
    <l-map ref="map" :zoom="12" :center="[40.571944, -74.146944]" :use-global-leaflet="false">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker
        v-for="item in markers"
        :key="item.name"
        :visible="item.visible"
        :lat-lng="item.position"
      >
        <l-popup>
          {{ item.name }} <br />
          {{ item.date }}<br />{{ item.boro }}</l-popup
        >
      </l-marker>
      <!--       <l-geo-json :geojson="GeoJSON" :options-style="geoStyler"></l-geo-json> -->
    </l-map>
    <div class="buttonContainer space-x-3 bottom-5 text-left">
      <button class="m-3" @click="boroughSelect('Q')">Queens</button>
      <button @click="boroughSelect('B')">Bronx</button>
      <button @click="boroughSelect('M')">Manhattan</button>
      <button @click="boroughSelect('S')">Staten Island</button>
      <button @click="boroughSelect('K')">Brooklyn</button>
      <button
        @click="
          this.markers.forEach((marker) => {
            marker.visible = true
          })
        "
      >
        Show All
      </button>
    </div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import { ref } from 'vue'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  props: [`API`],
  data() {
    return {
      geoLoaded: false,
      geoStyler: (feature) => ({
        opacity: feature.properties.code / 100000
      }),
      markers: ref([
        {
          name: 'test',
          date: 'test',
          boro: 'test',
          position: { lat: 51.505, lng: -0.09 }
        }
      ])
    }
  },
  async mounted() {
    this.geoLoaded = false
    try {
      this.API.forEach((element) => {
        this.markers.push({
          name: `Crime: ${element.pd_desc}`,
          date: `Date: ${element.arrest_date.slice(0, 10)}`,
          boro: `Boro: ${element.arrest_boro}`,
          position: {
            lat: Number(element.geocoded_column.coordinates[1].toFixed(3)),
            lng: Number(element.geocoded_column.coordinates[0].toFixed(3))
          },
          visible: true
        })
      })
      this.geoLoaded = true
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    boroughSelect(borough) {
      this.markers.forEach((marker) => {
        if (marker.boro.slice(6, 7) === borough) {
          marker.visible = true
        } else if (marker.boro.slice(6, 7) != borough) {
          marker.visible = false
        }
      })
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
