<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
})

import IconRainLeft from './decors/DecorRainLeft.vue'
import IconRainRight from './decors/DecorRainRight.vue'
import AppContainer from './AppContainer.vue'
</script>

<template>
  <section class="app-title">
    <AppContainer class="app-title__container container--big">
      <h1><slot name="heading"></slot></h1>
      <IconRainLeft class="decorative-icon-rain left" />
      <IconRainRight class="decorative-icon-rain right" />
      <nav class="breadcrumbs" v-if="breadcrumbs.length">
        <ul>
          <li v-for="(crumb, index) in breadcrumbs" :key="index">
            <a class="link" v-if="crumb.href" :href="crumb.href">{{ crumb.label }}</a>
            <span v-else>{{ crumb.label }}</span>
            <span class="slash" v-if="index < breadcrumbs.length - 1">/</span>
          </li>
        </ul>
      </nav>
      <slot> </slot>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.app-title {
  &__container {
    text-align: center;
    position: relative;

    h1 {
      font-size: clamp(40px, 7vw, 70px);
      font-weight: 400;
      line-height: 1.15;
      margin-bottom: toRem(36);

      @media (min-width: 1024px) {
        margin-bottom: toRem(28);
      }
    }
    .decorative-icon-rain.left {
      display: none;
      @media (min-width: 1280px) {
        display: block;
        position: absolute;
        top: -24px;
        left: -37px;
      }
    }
    .decorative-icon-rain.right {
      display: none;
      @media (min-width: 1280px) {
        display: block;
        position: absolute;
        top: -9px;
        right: 14px;
      }
    }
    .breadcrumbs {
      li {
        display: inline-block;
        .link {
          font-size: 20px;
          line-height: 1.15;
          &:last-child {
            color: #b4b4b4;
          }
        }
        .slash {
          color: #b4b4b4;
          margin: 0 toRem(10);
        }
      }
    }
  }
}
</style>
