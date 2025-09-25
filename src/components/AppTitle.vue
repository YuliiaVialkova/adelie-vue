<script setup>
import DecorRainLeft from './decors/DecorRainLeft.vue'
import DecorRainRight from './decors/DecorRainRight.vue'

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
        top="-23px"
        left="-22px"
      />
      <DecorRainRight
        class="app-title__decor decor app-title__decor--rain-right visible-on-desktop"
        top="-12px"
        right="-10px"
      />

      <AppBreadcrumbs class="app-title__breadcrumbs" :breadcrumbs="props.breadcrumbs" />
      <slot></slot>
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
      margin: toRem(13) auto toRem(28);
      max-width: 790px;
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
