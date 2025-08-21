<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
})

import IconRainLeft from './icons/IconRainLeft.vue'
import IconRainRight from './icons/IconRainRight.vue'
import AppContainer from './AppContainer.vue'
</script>

<template>
  <section class="app-title">
    <AppContainer class="wrap container--big">
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

<style lang="scss" scoped>
.app-title {
  .wrap {
    text-align: center;
    position: relative;

    h1 {
      font-size: clamp(toRem(40), 7vw, toRem(70));
      font-weight: 400;
      line-height: 1.15;
      margin: 0px 0 36px;

      @media (min-width: toEm(1024)) {
        margin-bottom: toRem(28);
      }
    }
    .decorative-icon-rain.left {
      display: none;
      @media (min-width: toEm(1280)) {
        display: block;
        position: absolute;
        top: -24px;
        left: -37px;
      }
    }
    .decorative-icon-rain.right {
      display: none;
      @media (min-width: toEm(1280)) {
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
          font-size: toRem(20);
          line-height: 1.15;
          &:last-child {
            color: #b4b4b4;
          }
        }
        .slash {
          color: #b4b4b4;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
