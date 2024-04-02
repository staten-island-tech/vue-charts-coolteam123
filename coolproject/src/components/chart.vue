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
        labels : [null],
        datasets : [
          { 
            data : [],
          }
        ]
      }}), 
    async mounted(){
      this.loaded = false
    try {   
    const sortgender = [
      { Gender : 'F', crimes : 0},
      {Gender : 'M', crimes : 0},
    ]
   stuffjson.forEach((thing) =>  {
 let gender = thing.perp_sex
    /* const {userlist} = apistuff */ //stuffjson
  /*   console.log(gender) */
      this.chartData = sortgender// chartData gives bug, chartdata gives empty chart
      this.loaded = true
        if (gender === 'F') {
     
          Object.entries(sortgender)[0][1].crimes++
        }
        if (gender === 'M'){
      
          Object.entries(sortgender)[1][1].crimes++
        }
    
      /* console.log(userlist)  */// says map's properties r undefined
   })   
   this.chartData.labels = sortgender.map((sort) => sort.Gender)
   this.chartData.datasets= sortgender.map((sort)=> sort.crimes)
   console.log(sortgender)
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
