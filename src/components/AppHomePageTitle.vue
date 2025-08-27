<script setup>
import DecorWavyLine1 from './decors/DecorWavyLine1.vue'
import DecorRainLeft from './decors/DecorRainLeft.vue'
import DecorRainRight from './decors/DecorRainRight.vue'
import DecorPlus from './decors/DecorPlus.vue'
import AppContainer from './AppContainer.vue'
</script>

<template>
  <section class="app-home-page-title">
    <AppContainer class="app-home-page-title__container app-container--big">
      <div class="app-home-page-title__content">
        <h1 class="app-home-page-title__title"><span>Adelie</span> E-commerce Solutions</h1>
        <DecorRainLeft
          class="app-home-page-title__decor app-home-page-title__decor--rain-left decor"
        />
        <DecorRainRight
          class="app-home-page-title__decor app-home-page-title__decor--rain-right decor"
        />
        <p class="app-home-page-title__subtitle">
          Empower Your Online Business with Expert E-commerce Solutions
        </p>
        <DecorWavyLine1 class="app-home-page-title__decor app-home-page-title__decor--wavy-line1" />
      </div>

      <DecorPlus class="app-home-page-title__decor visible-on-desktop" bottom="44%" left="-19%" />
      <DecorPlus class="app-home-page-title__decor visible-on-desktop" bottom="34%" left="7%" />
      <DecorPlus class="app-home-page-title__decor visible-on-desktop" bottom="38%" right="3%" />
      <DecorPlus class="app-home-page-title__decor visible-on-desktop" bottom="21%" right="48%" />
      <DecorPlus class="app-home-page-title__decor visible-on-mobile" bottom="12%" left="25%" />
      <DecorPlus class="app-home-page-title__decor visible-on-mobile" bottom="35%" right="3%" />
    </AppContainer>
  </section>
</template>

<style lang="scss">
.app-home-page-title {
  &__container {
    text-align: center;
  }
  &__content {
    @media (min-width: 1024px) {
      padding-right: 30px;
    }
  }
  h1 {
    font-size: clamp(toRem(38), 7vw, toRem(70));
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: toRem(24);
    @media (min-width: 1024px) {
      margin-bottom: 18px;
    }

    span {
      color: var(--highlight-color-text);
    }
  }
  &__decor--rain-left {
    display: none;
    @media (min-width: 1280px) {
      display: block;
      top: -10px;
      left: -38px;
    }
  }
  &__decor--rain-right {
    display: none;
    @media (min-width: 1280px) {
      display: block;
      top: 0;
      right: 6px;
    }
  }
  p {
    margin-bottom: toRem(17);
    padding: 0 toRem(5);
    font-size: 20px;
    @media (min-width: 768px) {
      font-size: 25px;
      line-height: 1.4;
      padding: 0;
      margin-bottom: toRem(25);
    }
  }
  &__decor--wavy-line1 {
    width: 76%;
    height: 50%;

    @media (min-width: 768px) {
      width: 62%;
    }
    @media (min-width: 1024px) {
      width: 52%;
    }
  }
}
</style>
