<script setup>
import AppInnerWrap from './AppInnerWrap.vue'
import IconLogo from './icons/IconLogo.vue'
import IconFooterBg from './icons/IconFooterBg.vue'
import AppMenu from './AppMenu.vue'
</script>

<template>
  <footer class="app-footer">
    <div class="icon-wrap">
      <IconFooterBg class="icon--footer-bg" />
    </div>
    <AppInnerWrap class="footer-wrap">
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
  position: relative;
  .icon-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .icon--footer-bg {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }

  .body {
    padding-top: toRem(280);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: var(--additional-color-text);

    @media (min-width: toEm(1024)) {
      flex-direction: row;
      justify-content: flex-start;
      padding-bottom: toRem(90);
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
      margin-bottom: toRem(45);
      @media (min-width: toEm(1024)) {
        margin-bottom: 0;
        margin-left: toRem(145);
      }
    }
  }
}
</style>
