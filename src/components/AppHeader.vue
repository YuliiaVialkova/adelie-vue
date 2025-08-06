<script setup>
import IconLogo from './icons/IconLogo.vue'
</script>

<template>
  <header class="app-header">
    <a href="/">
      <IconLogo class="logo" />
    </a>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  .logo {
    width: toRem(133);
    height: toRem(32);
  }
}
</style>
