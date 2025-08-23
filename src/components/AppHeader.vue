<script setup>
import IconLogo from './icons/IconLogo.vue'
import IconSearch from './icons/IconSearch.vue'
import AppMenu from './AppMenu.vue'
import IconBurger from './icons/IconBurger.vue'
import AppContainer from './AppContainer.vue'
import DecorSmallWave from './decors/DecorSmallWave.vue'
import DecorCircle from './decors/DecorCircle.vue'
import DecorPlus from './decors/DecorPlus.vue'
</script>

<template>
  <header class="app-header">
    <AppContainer class="app-header__container app-container--big">
      <DecorSmallWave
        class="app-header__decor app-header__decor--small-wave decor visible-on-mobile"
        top="-26px"
        left="-71px"
        width="189"
        height="120"
      />
      <DecorSmallWave
        class="app-header__decor app-header__decor--small-wave decor visible-on-desktop"
        top="0"
        left="-324px"
      />
      <RouterLink to="/" class="app-header__link">
        <IconLogo class="app-header__logo" />
      </RouterLink>
      <AppMenu class="app-header__menu" />
      <div class="app-header__actions">
        <button type="button" class="app-header__button">
          <IconSearch class="app-header__icon app-header__icon--search icon icon-search" />
        </button>
      </div>
      <IconBurger class="app-header__burger" />
      <DecorCircle
        class="app-header__decor app-header__decor--circle decor decor-circle--small visible-on-desktop"
        :stroke-width="20"
        :size="260"
      />
      <DecorPlus class="app-header__decor visible-on-desktop" top="38%" left="23%" />
      <DecorPlus class="app-header__decor visible-on-desktop" top="81%" right="45%" />
      <DecorPlus class="app-header__decor visible-on-desktop" top="37%" right="-14%" />
      <DecorPlus class="app-header__decor visible-on-mobile" bottom="11%" left="53%" />
    </AppContainer>
  </header>
</template>

<style lang="scss">
.app-header {
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: toRem(22);
    padding: toRem(20) 0 toRem(35) toRem(20);
    @media (min-width: 600px) {
      padding-bottom: toRem(50);
    }
    @media (min-width: 1024px) {
      padding: toRem(20) toRem(35) toRem(88) 0;
    }
  }
  &__decor--small-wave {
    @media (min-width: 1024px) {
      visibility: visible;
    }
  }
  &__decor--circle {
    @media (min-width: 1024px) {
      display: block;
      position: absolute;
      top: -84px;
      right: -332px;
      visibility: visible;
    }
  }
  &__link {
    margin-right: auto;
    font-size: 0;
    line-height: 1;
  }

  &__logo {
    width: 133px;
    height: 32px;
    @media (min-width: 1024px) {
      width: 169px;
      height: 41px;
    }
  }

  .header-menu {
    position: fixed;
    z-index: 2;
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
</style>
