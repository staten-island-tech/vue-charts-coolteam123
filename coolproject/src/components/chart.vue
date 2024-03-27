<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default{
    name : 'BarChart',
    components : {Bar},
    data: () => ({
      loaded : false,
      chartData : null,
    }), 
    async mounted(){
      this.loaded = false
    
    try {
      const { userlist } = await fetch('/api/userlist')
      this.chartdata = userlist
      chartData !== null
      this.loaded = true
    } catch (error) {
      console.error(error)
  }
    }}
</script>
<template>
  <template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

</template>