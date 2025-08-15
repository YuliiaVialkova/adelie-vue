<script setup>
import IconLogo from './icons/IconLogo.vue'
import IconSearch from './icons/IconSearch.vue'
import AppMenu from './AppMenu.vue'
import IconBurger from './icons/IconBurger.vue'
import AppInnerHomePage from './AppInnerHomePage.vue'
import IconHeaderWave from './icons/IconHeaderWave.vue'
import IconCircle from './icons/IconCircle.vue'
</script>

<template>
  <header class="app-header">
    <AppInnerHomePage>
      <div class="body">
        <IconHeaderWave class="icon-header-wave" />
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
        <IconCircle class="decorative-icon circle" :stroke-width="20" :size="199" />
      </div>
    </AppInnerHomePage>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  .body {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: toRem(22);
    padding: toRem(20) 0 toRem(35) toRem(20);
    @media (min-width: toEm(600)) {
      padding-bottom: toRem(50);
    }
    @media (min-width: toEm(1024)) {
      padding: toRem(20) toRem(35) toRem(88) 0;
    }
    .icon-header-wave {
      position: absolute;
      width: 189px;
      height: 120px;
      top: -26px;
      left: -71px;
      @media (min-width: toEm(1024)) {
        width: auto;
        height: auto;
        top: 0;
        left: -324px;
        visibility: visible;
      }
    }
    .decorative-icon.circle {
      display: none;
      @media (min-width: toEm(1024)) {
        display: block;
        position: absolute;
        top: -75px;
        right: -338px;
        visibility: visible;
      }
    }
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
        margin-left: clamp(toRem(22), 7vw, toRem(70));
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
