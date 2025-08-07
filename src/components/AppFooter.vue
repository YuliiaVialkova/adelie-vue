<script setup>
import AppInnerWrap from './AppInnerWrap.vue'
import IconLogo from './icons/IconLogo.vue'
import AppMenu from './AppMenu.vue'
</script>

<template>
  <footer class="app-footer">
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
  height: toRem(351);
  background: url(../assests/images/design/footer-bg.svg) center / cover no-repeat;
  .footer-wrap {
    height: 100%;
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    color: var(--additional-color-text);
    text-align: center;

    .logo {
      width: toRem(139);
      height: toRem(34);
      margin: toRem(31);
      color: var(--additional-color-icon);
    }
    p {
      font-size: toRem(16);
      font-weight: 400;
      line-height: 1.18;
      margin-bottom: toRem(27);
    }
    .footer-menu {
      margin-bottom: toRem(37);
    }
  }
}
</style>
