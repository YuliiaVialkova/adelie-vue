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
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;

      @media (max-width: toEm(1300)) {
        background: url(../assests/images/design/wave.svg) 0 0 / contain no-repeat;
        width: toRem(108);
        height: toRem(96);
        left: toRem(-10);
      }
      @media (min-width: toEm(1301)) and (max-width: toEm(1920)) {
        width: toRem(421);
        height: toRem(332);
        background: url(../assests/images/design/wave-big.svg) 0 0 / contain no-repeat;
        left: -26%;
      }
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: toRem(215);
      height: toRem(215);
      @media (min-width: toEm(1301)) and (max-width: toEm(1920)) {
        background: url(../assests/images/design/circle.svg) 0 0 / contain no-repeat;
        right: -26%;
      }
    }
    & > .link {
      margin-right: auto;
      font-size: 0;
      line-height: 1;
      position: relative;
      @media (min-width: toEm(768)) {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: -75%;
          background: url(../assests/images/design/plus.svg) 0 0 / contain no-repeat;
          width: toRem(8);
          height: toRem(8);
          pointer-events: none;
        }
      }
      .logo {
        width: toRem(133);
        height: toRem(32);
        @media (min-width: toEm(1024)) {
          width: toRem(169);
          height: toRem(41);
        }
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
