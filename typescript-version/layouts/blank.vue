<template>
  <div
    class="layout-wrapper layout-blank"
    data-allow-mismatch
  >
    <slot />
  </div>
</template>

<style>
.layout-wrapper.layout-blank {
  flex-direction: column;
}
</style>
