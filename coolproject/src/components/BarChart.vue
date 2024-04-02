<template>
  <div class="container">
    <Bar v-if="loaded" id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { ref } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors)

export default {
  name: 'BarChart',
  components: { Bar },
  props: ['API'],
  data: () => ({
    loaded: false,
    chartData: {
      labels: null, // boroughData.map((row) => row.borough),
      datasets: [
        {
          label: 'Crimes by Borough in 2023',
          data: null //boroughData.map((row) => row.count)
        }
      ]
    }
  }),
  async mounted() {
    this.loaded = false
    try {
      const dataDict = [
        { borough: 'Brooklyn', crimes: 0 },
        {
          borough: 'Staten Island',
          crimes: 0
        },
        {
          borough: 'Queens',
          crimes: 0
        },
        {
          borough: 'Bronx',
          crimes: 0
        },
        {
          borough: 'Manhattan',
          crimes: 0
        }
      ]
      this.API.forEach((entry) => {
        if (entry.arrest_boro == 'K') {
          Object.entries(dataDict)[0][1].crimes++
        } else if (entry.arrest_boro == 'Q') {
          Object.entries(dataDict)[2][1].crimes++
        } else if (entry.arrest_boro == 'M') {
          Object.entries(dataDict)[4][1].crimes++
        } else if (entry.arrest_boro == 'S') {
          Object.entries(dataDict)[1][1].crimes++
        } else if (entry.arrest_boro == 'B') {
          Object.entries(dataDict)[3][1].crimes++
        }
      })
      this.chartData.labels = dataDict.map((row) => row.borough)
      this.chartData.datasets[0].data = dataDict.map((row) => row.crimes)
      // this.chartData.labels == dict
      //this.cchartData.datasets.data = blah blah
      this.loaded = true
      /*
      let dataLocation = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.geojson')
      let dataLocationJSON = dataLocation.json()
      crimeLocationData.value = dataLocationJSON // for leaflet */
      // patternomaly // vue leaflet
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
