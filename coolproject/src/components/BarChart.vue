<template>
  <Bar v-if="loaded" id="my-chart-id" :options="chartOptions" :data="chartData" />
  <p>barchart test</p>
</template>

<script>
import { Bar } from 'vue-chartjs'
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
const testData = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 }
]
export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: {
      labels: testData.map((row) => row.year),
      datasets: [
        {
          label: 'test',
          data: testData.map((row) => row.count)
        }
      ]
    }
  }),
  async mounted() {
    this.loaded = false

    try {
      const APIdata = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json') // app is rendering  before this.. must fix.
      const dataJSON = APIdata.json()
      const crimeData = dataJSON
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
