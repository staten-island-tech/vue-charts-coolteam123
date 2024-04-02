<template>
  <div>
    <MapChart :API="dataJSON" />
  </div>
</template>

<script setup>
import MapChart from '@/components/MapChart.vue'
import { dataJSON } from '@/App.vue'
</script>

<style lang="scss" scoped></style>
