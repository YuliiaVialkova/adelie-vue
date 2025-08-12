<script setup>
import IconWavyLine1 from './icons/IconWavyLine1.vue'
</script>

<template>
  <section class="app-home-page-title">
    <h1><span>Adelie</span> E-commerce Solutions</h1>
    <p class="subtitle">Empower Your Online Business with Expert E-commerce Solutions</p>
    <div class="icon-wrap">
      <IconWavyLine1 class="decorative-icon" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.app-home-page-title {
  text-align: center;
  @media (min-width: toEm(1024)) {
    padding-right: toRem(35);
  }
  h1 {
    font-size: clamp(toRem(38), 7vw, toRem(70));
    font-weight: 400;
    margin-bottom: toRem(22);
    line-height: 1.15;

    span {
      color: var(--highlight-color-text);
    }
  }
  .subtitle {
    margin-bottom: toRem(20);
    padding: 0 toRem(5);
    font-size: toRem(20);
    @media (min-width: toEm(768)) {
      font-size: toRem(25);
      line-height: 1.4;
      padding: 0;
    }
  }
  .icon-wrap {
    line-height: 1;
    font-size: 0;
    width: 76%;
    margin: 0 auto;

    @media (min-width: toEm(768)) {
      width: 62%;
    }
    @media (min-width: toEm(1024)) {
      width: 52%;
    }
    .decorative-icon {
      object-fit: contain;
      height: auto;
      max-width: 100%;
    }
  }
}
</style>
