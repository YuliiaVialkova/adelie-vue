<script setup>
import AppTitle from '@/components/AppTitle.vue'
</script>

<template>
  <AppTitle :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]">
    <template #heading>Portfolio</template>
  </AppTitle>
</template>
