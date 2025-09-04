<script setup>
import DecorRainLeft from './decors/DecorRainLeft.vue'
import DecorRainRight from './decors/DecorRainRight.vue'
import DecorWavyLine4 from './decors/DecorWavyLine4.vue'

import AppContainer from './AppContainer.vue'
import AppBreadcrumbs from './AppBreadcrumbs.vue'

const props = defineProps({
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="app-title">
    <AppContainer class="app-title__container app-container--big">
      <h1 class="app-title__heading"><slot name="heading"></slot></h1>
      <DecorRainLeft
        class="app-title__decor decor app-title__decor--rain-left visible-on-desktop"
        top="-13px"
        left="-40px"
      />
      <DecorRainRight
        class="app-title__decor decor app-title__decor--rain-right visible-on-desktop"
        top="-5px"
        right="14px"
      />
      <DecorWavyLine4
        class="app-title__decor decor app-title__decor--wavy-line4 visible-on-desktop"
        top="-124%"
        left="-22%"
      />
      <AppBreadcrumbs class="app-title__breadcrumbs" :breadcrumbs="props.breadcrumbs" />
    </AppContainer>
  </section>
</template>

<style lang="scss">
.app-title {
  &__container {
    text-align: center;
    position: relative;
  }
  h1 {
    font-size: clamp(toRem(40), 7vw, toRem(70));
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: toRem(36);

    @media (min-width: 1024px) {
      margin-bottom: toRem(28);
      margin-top: toRem(13);
    }
  }
  &__breadcrumbs {
    margin-bottom: toRem(10);
  }
  &__decor {
    pointer-events: none;
  }
}
</style>
