<script setup>
import AppTitle from '@/components/AppTitle.vue'
import { useRoute } from 'vue-router'
import { usePortfolioStore } from '@/stores/usePortfolioStore'

const route = useRoute()
const store = usePortfolioStore()

const card = store.portfolio.find((item) => item.title === route.params.title)
</script>

<template>
  <section class="portfolio-item-view">
    <AppTitle
      class="portfolio-item-view__caption"
      :breadcrumbs="[
        { label: 'Home', href: '/' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: card?.title },
      ]"
    >
      <template #heading>{{ card?.title }}</template>
    </AppTitle>
  </section>
</template>
