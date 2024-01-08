<script setup lang="ts">
// eslint-disable-next-line no-restricted-imports
import VueApexCharts from 'vue3-apexcharts'

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <VueApexCharts v-bind="$attrs" />
</template>