<template>
  <div class="inner-wrap">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.inner-wrap {
  max-width: toRem(1297);
  margin: 0 auto;
  padding: 0 toRem(10);
}
</style>
