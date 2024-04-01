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
        labels : ['test']
              
      }}), 
    async mounted(){
      this.loaded = false
    
    try {   
   stuffjson.forEach((thing) =>  {
    const gender = thing.perp_sex
  /*   console.log(gender) */
    const userlist  =  gender 
      this.chartdata = userlist
      this.loaded = true
      console.log(userlist)
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
