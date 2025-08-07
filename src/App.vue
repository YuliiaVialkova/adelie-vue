<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="body">
    <app-header></app-header>
    <main class="page">
      <router-view />
    </main>
    <app-footer></app-footer>
  </div>
</template>

<style scoped lang="scss">
.body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .page {
    flex-grow: 1;
  }
}
</style>
