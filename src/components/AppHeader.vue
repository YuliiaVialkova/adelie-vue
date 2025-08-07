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
          <a href="#" class="link">
            <IconSearch class="icon-search" />
          </a>
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
    & > .link {
      margin-right: auto;
      font-size: 0;
      line-height: 1;

      .logo {
        width: toRem(133);
        height: toRem(32);
        @media (min-width: toEm(1024)) {
          width: toRem(169);
          height: toRem(41);
        }
      }
    }
    .header-menu {
      position: fixed;
      top: 0;
      background-color: var(--main-bg);
      width: 100vw;
      height: 100vh;
      right: -100%;
      overflow: auto;
      margin-top: toRem(87);
      transition: right 0.3s;
      padding: 0 toRem(10) toRem(10);
      @media (min-width: toEm(768)) {
        position: static;
        margin-top: 0;
        width: auto;
        height: auto;
        padding: 0;
      }
      html.open-menu & {
        right: 0;
      }
    }
    .actions {
      display: flex;
      gap: toRem(20);
      @media (min-width: toEm(768)) {
        margin-left: clamp(toRem(22), 7vw, toRem(92));
      }
      & > .link {
        font-size: 0;
        line-height: 1;
        .icon-search {
          width: toRem(28);
          height: toRem(28);
          @media (min-width: toEm(1024)) {
            width: toRem(32);
            height: toRem(32);
          }
        }
      }
    }
    .burger-menu {
      position: relative;
    }
  }
}
</style>
