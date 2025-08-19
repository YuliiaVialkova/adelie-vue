<script setup>
import IconWavyLine1 from './icons/IconWavyLine1.vue'
import IconRainLeft from './icons/IconRainLeft.vue'
import IconRainRight from './icons/IconRainRight.vue'
import PlusIcon from './icons/PlusIcon.vue'
import AppContainer from './AppContainer.vue'
</script>

<template>
  <section class="app-home-page-title">
    <AppContainer class="wrap container--big">
      <h1><span>Adelie</span> E-commerce Solutions</h1>
      <IconRainLeft class="decorative-icon-rain left" />
      <IconRainRight class="decorative-icon-rain right" />
      <p class="subtitle">Empower Your Online Business with Expert E-commerce Solutions</p>
      <div class="icon-wrap">
        <IconWavyLine1 class="decorative-icon" />
      </div>
      <PlusIcon class="visible-on-desktop" bottom="44%" left="-19%" />
      <PlusIcon class="visible-on-desktop" bottom="34%" left="7%" />
      <PlusIcon class="visible-on-desktop" bottom="38%" right="3%" />
      <PlusIcon class="visible-on-desktop" bottom="21%" right="48%" />
      <PlusIcon class="visible-on-mobile" bottom="9%" left="25%" />
      <PlusIcon class="visible-on-mobile" bottom="33%" right="3%" />
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.app-home-page-title {
  .wrap {
    text-align: center;
    position: relative;
    @media (min-width: toEm(1024)) {
      padding-right: toRem(35);
    }

    h1 {
      font-size: clamp(toRem(38), 7vw, toRem(70));
      font-weight: 400;
      line-height: 1.15;
      margin-top: 1px;
      margin-bottom: toRem(24);
      @media (min-width: toEm(1024)) {
        margin-bottom: toRem(16);
      }

      span {
        color: var(--highlight-color-text);
      }
    }
    .decorative-icon-rain.left {
      display: none;
      @media (min-width: toEm(1280)) {
        display: block;
        position: absolute;
        top: -10px;
        left: -38px;
      }
    }
    .decorative-icon-rain.right {
      display: none;
      @media (min-width: toEm(1280)) {
        display: block;
        position: absolute;
        top: 0;
        right: 6px;
      }
    }
    .subtitle {
      margin-bottom: toRem(17);
      padding: 0 toRem(5);
      font-size: toRem(20);
      @media (min-width: toEm(768)) {
        font-size: toRem(25);
        line-height: 1.4;
        padding: 0;
        margin-bottom: toRem(25);
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
}
</style>
