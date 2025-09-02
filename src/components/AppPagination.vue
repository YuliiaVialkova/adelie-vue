<script setup>
import AppContainer from '@/components/AppContainer.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="app-pagination">
    <AppContainer class="app-container--small">
      <button class="app-pagination__previous-page">&lt;</button>
      <ul class="app-pagination__list">
        <li><RouterLink to="#" class="app-pagination__page">1</RouterLink></li>
        <li>
          <RouterLink href="#" class="app-pagination__page app-pagination__page--active"
            >2</RouterLink
          >
        </li>
        <li><RouterLink href="#" class="app-pagination__page">3</RouterLink></li>
        <li><RouterLink href="#" class="app-pagination__page">4</RouterLink></li>
        <li><RouterLink href="#" class="app-pagination__page">5</RouterLink></li>
        <li>...</li>
      </ul>
      <button class="app-pagination__next-page">&gt;</button>
      <slot></slot>
    </AppContainer>
  </nav>
</template>

<style lang="scss">
.app-pagination {
  text-align: center;
  padding: 0px 0px 0px;
  font-size: toRem(20);
  line-height: 1.75;
  &__previous-page,
  &__next-page {
    display: inline-block;
  }
  &__previous-page {
    margin: 0 toRem(48) 0 toRem(30);
  }
  &__next-page {
    margin: 0 toRem(30) 0 toRem(48);
  }
  &__list {
    display: inline-flex;
    gap: 48px;
  }
  &__page--active {
    color: var(--additional-color-text);
    position: relative;
    &::after {
      position: absolute;
      content: '';
      background: url(../assets/images/design/blot.svg) center/contain no-repeat;
      width: 58px;
      height: 55px;
      z-index: -1;
      top: 50%;
      left: 50%;
      translate: -56% -50%;
    }
  }
}
</style>
