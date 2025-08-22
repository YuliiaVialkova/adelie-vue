<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <app-header></app-header>
  <main class="page">
    <router-view />
  </main>
  <app-footer></app-footer>
</template>

<style lang="scss">
.page {
  flex-grow: 1;
}
</style>
