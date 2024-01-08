<script setup>
import UpgradeToPro from '@/components/UpgradeToPro.vue'

const { isMobile } = useDevice()
if (isMobile)
  configStore.appContentLayoutNav = 'vertical'
</script>

<template>
  <VApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UpgradeToPro />
  </VApp>
</template>
