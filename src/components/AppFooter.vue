<script setup>
import AppContainer from './AppContainer.vue'
import IconLogo from './icons/IconLogo.vue'
import DecorFooterBg from './decors/DecorFooterBg.vue'
import DecorFooterWave from './decors/DecorFooterWave.vue'
import DecorFooterArc from './decors/DecorFooterArc.vue'
import AppMenu from './AppMenu.vue'
import DecorPlus from './decors/DecorPlus.vue'
</script>

<template>
  <footer class="app-footer">
    <AppContainer class="app-footer__container app-container--big">
      <DecorFooterBg class="app-footer__decor app-footer__decor--footer-bg" />
      <DecorFooterWave class="app-footer__decor app-footer__decor--footer-wave" />
      <DecorFooterArc class="app-footer__decor app-footer__decor--footer-arc" />
      <div class="app-footer__content">
        <a class="app-footer__logo-link" href="/">
          <IconLogo class="app-footer__logo" />
        </a>
        <p class="app-footer__copyright">© 2023 All rights reserved</p>
        <AppMenu class="app-footer__menu" />
      </div>
      <DecorPlus class="app-footer__decor visible-on-mobile" top="-110%" left="46%" />
    </AppContainer>
  </footer>
</template>

<style lang="scss">
.app-footer {
  &__decor--footer-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: -308px;
    z-index: -1;
    overflow: visible;
    @media (min-width: 1920px) {
      overflow: hidden;
    }
  }
  &__decor--footer-wave {
    position: absolute;
    bottom: -64px;
    right: -349px;
    z-index: -3;
    overflow: visible;
    height: 817px;
    width: 931px;

    @media (min-width: 1024px) {
      width: 1021px;
      height: 919px;
      right: -305px;
    }
    @media (min-width: 1920px) {
      overflow: hidden;
    }
  }
  &__decor--footer-arc {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -2;
    overflow: visible;
    width: 292px;
    height: 590px;
    @media (min-width: toEm(1024)) {
      width: auto;
      height: auto;
      right: -279px;
    }
    @media (min-width: toEm(1920)) {
      overflow: hidden;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: var(--additional-color-text);

    @media (min-width: 1024px) {
      padding-top: toRem(262);
      flex-direction: row;

      padding-bottom: toRem(75);
    }
  }
  &__logo-link {
    margin-bottom: toRem(31);
    font-size: 0;
    line-height: 1;
    @media (min-width: 1024px) {
      margin-bottom: 0;
      margin-right: 30px;
    }
  }
  &__logo {
    width: toRem(139);
    height: toRem(34);

    color: var(--additional-color-icon);
    @media (min-width: 1024px) {
      width: 169px;
      height: 41px;
    }
  }

  &__copyright {
    flex-shrink: 0;
    font-size: toRem(16);
    font-weight: 400;
    line-height: 1.18;
    margin-bottom: toRem(24);
    @media (min-width: 1024px) {
      margin-bottom: 0;
      margin-right: toRem(30);
    }
  }
  &__menu {
    margin-bottom: toRem(10);
    @media (min-width: 600px) {
      margin-bottom: toRem(36);
    }
    @media (min-width: 1024px) {
      margin-bottom: 0;
      margin-right: toRem(335);
      margin-left: auto;
    }
  }
}
</style>
