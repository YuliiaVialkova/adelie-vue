<script setup>
import AppTitle from '@/components/AppTitle.vue'
</script>

<template>
  <AppTitle
    :breadcrumbs="[
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
    ]"
  >
    <template #heading>Blog</template>
  </AppTitle>
</template>
