<script setup>
import AppTitle from '@/components/AppTitle.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppCard from '@/components/AppCard.vue'
import { usePortfolioStore } from '@/stores/usePortfolioStore'

const store = usePortfolioStore()
</script>

<template>
  <section class="poftfolio-view">
    <AppTitle :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]">
      <template #heading>Portfolio</template>
    </AppTitle>
    <div class="poftfolio-view__gallary">
      <AppCard
        v-for="(card, index) in store.portfolio"
        :key="portfolio.id"
        :portfolio="card"
      ></AppCard>
    </div>
    <AppPagination></AppPagination>
  </section>
</template>
