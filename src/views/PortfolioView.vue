<script setup>
import AppTitle from '@/components/AppTitle.vue'
import AppPagination from '@/components/AppPagination.vue'
</script>

<template>
  <AppTitle :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]">
    <template #heading>Portfolio</template>
  </AppTitle>
  <AppPagination></AppPagination>
</template>
