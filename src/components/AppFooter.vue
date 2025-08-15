<script setup>
import AppInnerWrap from './AppInnerHomePage.vue'
import IconLogo from './icons/IconLogo.vue'
import IconFooterBg from './icons/IconFooterBg.vue'
import IconFooterWave from './icons/IconFooterWave.vue'
import IconFooterArc from './icons/IconFooterArc.vue'
import AppMenu from './AppMenu.vue'
</script>

<template>
  <footer class="app-footer">
    <AppInnerWrap class="footer-wrap">
      <IconFooterBg class="icon-footer-bg" />
      <IconFooterWave class="icon-footer-wave" />
      <IconFooterArc class="icon-footer-arc" />
      <div class="body">
        <a class="logo-link" href="/">
          <IconLogo class="logo" />
        </a>
        <p>© 2023 All rights reserved</p>
        <AppMenu class="footer-menu" />
      </div>
    </AppInnerWrap>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  .footer-wrap {
    position: relative;

    .icon-footer-bg {
      position: absolute;
      bottom: 0;
      left: 0;
      margin-left: -308px;
      z-index: -1;
      overflow: visible;
      @media (min-width: toEm(1920)) {
        overflow: hidden;
      }
    }
    .icon-footer-wave {
      position: absolute;
      bottom: -64px;
      right: -349px;
      z-index: -3;
      overflow: visible;
      height: 817px;
      width: 931px;

      @media (min-width: toEm(1024)) {
        width: 1021px;
        height: 919px;
        right: -305px;
      }
      @media (min-width: toEm(1920)) {
        overflow: hidden;
      }
    }
    .icon-footer-arc {
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
    .body {
      display: flex;
      flex-direction: column;
      align-items: center;

      color: var(--additional-color-text);

      @media (min-width: toEm(1024)) {
        padding-top: 269px;
        flex-direction: row;
        justify-content: flex-start;
        padding-bottom: 75px;
      }
      .logo-link {
        margin-bottom: 31px;
        font-size: 0;
        line-height: 1;
        @media (min-width: toEm(1024)) {
          margin-bottom: 0;
        }
        .logo {
          width: toRem(139);
          height: toRem(34);

          color: var(--additional-color-icon);
          @media (min-width: toEm(1024)) {
            width: 169px;
            height: 41px;

            margin-right: toRem(30);
          }
        }
      }

      p {
        font-size: toRem(16);
        font-weight: 400;
        line-height: 1.18;
        margin-bottom: toRem(24);
        @media (min-width: toEm(1024)) {
          margin-bottom: 0;
        }
      }
      .footer-menu {
        margin-bottom: toRem(36);
        @media (min-width: toEm(1024)) {
          margin-bottom: 0;
        }
        @media (min-width: toEm(1024)) {
          margin-left: toRem(145);
        }
      }
    }
  }
}
</style>
