<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  <p>barchart test</p>
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
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  loaded: false,
  data: () => ({
    chartData: {
      labels: null, // boroughData.map((row) => row.borough),
      datasets: [
        {
          label: 'test',
          data: null //boroughData.map((row) => row.count)
        }
      ]
    }
  }),
  async mounted() {
    this.loaded = false
    try {
      const data = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
      const dataJSON = await data.json() // results would bypass promise if i were using a ref
      console.log(dataJSON)
      //create dict here
      // this.chartData.labels == dict
      //this.cchartData.datasets.data = blah blah
      this.loaded = true
      /*
      let dataLocation = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.geojson')
      let dataLocationJSON = dataLocation.json()
      crimeLocationData.value = dataLocationJSON // for leaflet */
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
