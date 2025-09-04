<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <nav class="app-breadcrumbs" v-if="breadcrumbs.length">
    <ul class="app-breadcrumbs__list">
      <li class="app-breadcrumbs__item" v-for="(crumb, index) in breadcrumbs" :key="index">
        <RouterLink class="app-breadcrumbs__link" v-if="crumb.href" :to="crumb.href">{{
          crumb.label
        }}</RouterLink>
        <span class="app-breadcrumbs__text" v-else>{{ crumb.label }}</span>
        <span class="app-breadcrumbs__separator" v-if="index < breadcrumbs.length - 1">/</span>
      </li>
    </ul>
  </nav>
  <slot> </slot>
</template>

<style lang="scss">
.app-breadcrumbs {
  &__item {
    display: inline-block;
    color: var(--main-color-text);
    transition: color 0.3s;
  }
  &__item:last-child .app-breadcrumbs__link,
  &__item:last-child .app-breadcrumbs__text {
    color: #b4b4b4;
    pointer-events: none;
  }
  &__link {
    font-size: toRem(20);
    line-height: 1.15;
    &:last-child {
      color: #b4b4b4;
    }
    @media (any-hover: hover) and (any-pointer: fine) {
      &:hover:not(:last-child) {
        color: var(--main-link-hover);
      }
    }
  }
  &__separator {
    color: #b4b4b4;
    margin: 0 toRem(10);
  }
}
</style>
