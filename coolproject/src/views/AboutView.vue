<template>
  <main>
    <div>
      <MapChart :API="dataJSON" />
    </div>
  </main>
</template>

<script setup>
import MapChart from '@/components/MapChart.vue'
import { dataJSON } from '@/App.vue'
</script>

<style lang="scss" scoped></style>
