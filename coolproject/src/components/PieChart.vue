<script>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)
export default {
  name: 'PieChart',
  props: ['API'],
  components: { Pie }, // use of component
  data: () => ({
    loaded: false,
    chartData: {
      labels: [],
      datasets: [{ label: 'test', data: [] }]
    }
  }),
  async mounted() {
    this.loaded = false
    try {
      const sortgender = [0, 0]
      /* { Gender : 'F', crimes : 0},
      {Gender : 'M', crimes : 0}, */
      this.chartData = {
        labels: ['Male', 'Female'],
        datasets: [
          {
            backgroundColor: ['limegreen', 'skyblue'],
            label: 'Crimes Based on Gender',
            data: sortgender
          }
        ]
      }
      this.API.forEach((thing) => {
        let gender = thing.perp_sex /*   console.log(gender) */ //stuffjson // chartData gives bug, chartdata gives empty chart
        /* const {userlist} = apistuff */ /*   sortgender/ */ this.loaded = true
        if (gender === 'F') {
          sortgender[1]++
        }
        if (gender === 'M') {
          sortgender[0]++
        }

        /* console.log(userlist)  */ // says map's properties r undefined
      })
      /*    this.chartData.labels = sortgender.map((sort) => sort.Gender)this.chartData.datasets = sortgender.map((sort)=> sort.crimes)
   console.log(sortgender.map((sort)=> sort.crimes)) */
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
<template>
  <div class="container">
    <h1>Evan's pie chart of male and female crime.</h1>
    <h1 v-if="!loaded">Chart not Loaded</h1>
    <link rel="stylesheet" href="/src/assets/index.css" />
    <Pie v-if="loaded" :data="chartData" />
  </div>
</template>
