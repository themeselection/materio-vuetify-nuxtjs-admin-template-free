<script lang="ts" setup>
throw createError({
  statusCode: 404,
  statusMessage: 'Error Page! Just for demo!',
  fatal: true,
})
</script>

<template>
  <p>This is just demo page to avoid console error and show you error.</p>
</template>