<script setup>
import IconLogo from './icons/IconLogo.vue'
import IconSearch from './icons/IconSearch.vue'
import AppMenu from './AppMenu.vue'
import IconBurger from './icons/IconBurger.vue'
import AppInnerWrap from './AppInnerWrap.vue'
</script>

<template>
  <header class="app-header">
    <AppInnerWrap>
      <div class="body">
        <a href="/" class="link">
          <IconLogo class="logo" />
        </a>
        <AppMenu class="header-menu" />
        <div class="actions">
          <IconSearch class="icon-search" />
        </div>
        <IconBurger class="burger-menu" />
      </div>
    </AppInnerWrap>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  .body {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: toRem(22);
    padding: toRem(20) 0 toRem(35) toRem(20);
    position: relative;
  }
  .link {
    margin-right: auto;
    .logo {
      width: toRem(133);
      height: toRem(32);
    }
  }

  .actions {
    display: flex;
    gap: toRem(20);
    .icon-search {
      width: toRem(28);
      height: toRem(28);
    }
  }
  .burger-menu {
    position: relative;
  }
}
</style>
