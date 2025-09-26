<script setup>
import AppTitle from '@/components/AppTitle.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppCard from '@/components/AppCard.vue'

import { usePortfolioStore } from '@/stores/usePortfolioStore'

const store = usePortfolioStore()
</script>

<template>
  <section class="portfolio-view">
    <AppTitle :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]">
      <template #heading>Portfolio</template>
    </AppTitle>

    <div class="portfolio-view__gallery">
      <AppCard v-for="card in store.portfolio" :key="card.id" :card="card" mode="grid"></AppCard>
    </div>
    <AppPagination></AppPagination>
  </section>
</template>

<style lang="scss">
.portfolio-view {
  &__gallery {
    @media (min-width: 1024px) {
      margin-bottom: 120px;
    }
  }
}
</style>
