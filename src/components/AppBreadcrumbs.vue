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
  }
  &__link {
    font-size: 20px;
    line-height: 1.15;
    &:last-child {
      color: #b4b4b4;
    }
  }
  &__separator {
    color: #b4b4b4;
    margin: 0 toRem(10);
  }
}
</style>
