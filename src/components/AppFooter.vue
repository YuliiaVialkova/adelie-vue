<script setup>
import AppInnerWrap from './AppInnerHomePage.vue'
import IconLogo from './icons/IconLogo.vue'
import IconFooterBg from './icons/IconFooterBg.vue'
import AppMenu from './AppMenu.vue'
</script>

<template>
  <footer class="app-footer">
    <AppInnerWrap class="footer-wrap">
      <!-- <div class="icon-wrap">
        <IconFooterBg class="icon--footer-bg" />
      </div> -->

      <div class="body">
        <a href="/">
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
    .icon-wrap {
      position: absolute;
      width: 100%;
      overflow: visible;

      .icon--footer-bg {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: -322px;
        z-index: -1;
      }
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-top: toRem(113);
    padding-bottom: toRem(45);
    color: var(--additional-color-text);

    @media (min-width: toEm(1024)) {
      padding-top: toRem(230);
      flex-direction: row;
      justify-content: flex-start;
      padding-bottom: toRem(70);
    }

    .logo {
      width: toRem(139);
      height: toRem(34);
      margin-bottom: toRem(31);
      color: var(--additional-color-icon);
      @media (min-width: toEm(1024)) {
        margin-bottom: 0;
        margin-right: toRem(30);
      }
    }
    p {
      font-size: toRem(16);
      font-weight: 400;
      line-height: 1.18;
      margin-bottom: toRem(27);
      @media (min-width: toEm(1024)) {
        margin-bottom: 0;
      }
    }
    .footer-menu {
      @media (min-width: toEm(1024)) {
        margin-left: toRem(145);
      }
    }
  }
}
</style>
