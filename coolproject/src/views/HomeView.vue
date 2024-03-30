<template>
  <main>
    <div>
      <BarChart :JSONdata="dataDict" />
    </div>
  </main>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'
const data = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
const dataJSON = await data.json() // results would bypass promise if i were using a ref
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
dataJSON.forEach((entry) => {
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
</script>
<style lang="scss" scoped></style>
