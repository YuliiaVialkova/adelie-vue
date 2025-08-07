<script setup>
import IconWavyLine1 from './icons/IconWavyLine1.vue'
</script>

<template>
  <section class="app-home-page-title">
    <h1><span>Adelie</span> E-commerce Solutions</h1>
    <p class="subtitle">Empower Your Online Business with Expert E-commerce Solutions</p>
    <IconWavyLine1 />
  </section>
</template>

<style lang="scss" scoped>
.app-home-page-title {
  text-align: center;
  padding-bottom: toRem(7);

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
      font-size: toRem(20);
      line-height: 1.4;
    }
  }
}
</style>
