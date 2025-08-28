<script setup>
import AppContainer from './AppContainer.vue'
import AppAccordion from './AppAccordion.vue'
import DecorWavyLine3 from './decors/DecorWavyLine3.vue'
import DecorCircle from './decors/DecorCircle.vue'
import DecorThreeLines from './decors/DecorThreeLines.vue'
import DecorPlus from './decors/DecorPlus.vue'
</script>

<template>
  <section class="app-structure">
    <AppContainer class="app-structure__container app-container--big">
      <div class="app-structure__content">
        <AppAccordion class="app-structure__accordion" />

        <DecorWavyLine3 class="app-structure__decor app-structure__decor--wavy-line3" />

        <DecorCircle
          class="app-structure__decor app-structure__decor--circle decor visible-on-desktop"
          :stroke-width="5"
          width="30"
          height="30"
          bottom="4%"
          right="24%"
        />
        <DecorThreeLines
          class="app-structure__decor app-structure__decor--three-lines decor visible-on-desktop"
          top="8%"
          right="-6%"
        />
        <DecorPlus class="visible-on-desktop" top="39%" left="-20%" />
        <DecorPlus class="visible-on-desktop" bottom="11%" left="-3%" />
        <DecorPlus class="visible-on-desktop" bottom="15%" left="47%" />
        <DecorPlus class="visible-on-desktop" bottom="4%" right="7%" />
        <DecorPlus class="visible-on-desktop" bottom="45%" right="-13%" />

        <DecorPlus class="visible-on-mobile" top="12%" left="14%" />
        <DecorPlus class="visible-on-mobile" bottom="40%" right="29%" />
        <DecorPlus class="visible-on-mobile" bottom="5%" left="5%" />
        <DecorPlus class="visible-on-mobile" bottom="2%" right="7%" />
        <DecorPlus class="visible-on-mobile" bottom="17%" right="43%" />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.app-structure {
  &__container {
    position: relative;
    border: 1px solid transparent;
  }
  &__content {
    @media (min-width: 1024px) {
      padding: 139px 0 138px;
    }
  }
  &__decor--wavy-line3 {
    width: 92%;
    height: auto;
    @media (min-width: 600px) {
      width: 70%;
      display: block;
      margin: 0 auto;
    }
    @media (min-width: 768px) {
      width: 60%;
    }
    @media (min-width: 1024px) {
      position: absolute;
      margin: 0;
      bottom: -162px;
      width: 44%;
      left: -213px;
    }
    @media (min-width: 1280px) {
      bottom: -163px;
      left: -276px;
      width: 44%;
    }
    @media (min-width: 1536px) {
      bottom: -231px;
      left: -276px;
    }
  }
}
</style>
