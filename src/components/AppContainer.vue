<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.app-container {
  margin: 0 auto;
  padding: 0 toRem(10);
  position: relative;
  &--small {
    max-width: 810px;
  }
  &--middle {
    max-width: 1296px;
  }
  &--big {
    max-width: 1332px;
  }
}
</style>
