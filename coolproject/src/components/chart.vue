<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const apistuff = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json');
    const stuffjson = await apistuff.json();


export default{
    name : 'BarChart',
    components : {Bar},

    data: () => ({
  
      loaded : false,
      chartData : { 
        labels : ['test'],
        datasets : [
          { label : ['test2'],
            data : null
          }
        ]
      }}), 
    async mounted(){
      this.loaded = false
    
    try {   
   stuffjson.forEach((thing) =>  {
    const gender = thing.perp_sex
  /*   console.log(gender) */
      this.chartdata= gender // chartData gives bug, chartdata gives empty chart
      this.loaded = true
      console.log(gender) // says map's properties r undefined
   })   
    } catch (error) {
      console.error(error)
  }
    }}
</script>
  <template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>
