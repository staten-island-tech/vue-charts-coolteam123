<template>
  <main>
    <div>
      <BarChart :API="dataJSON" />
    </div>
  </main>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'
import { dataJSON } from '@/App.vue'
</script>
<style lang="scss" scoped></style>
