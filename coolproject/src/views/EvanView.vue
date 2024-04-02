<template>
  <main>
    <div>
      <PieChart :API="dataJSON" />
    </div>
  </main>
</template>

<script setup>
import { dataJSON } from '@/App.vue'
import PieChart from '@/components/PieChart.vue'
</script>

<style lang="scss" scoped></style>
