<template>
  <div class="icon-burger">
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
.icon-burger {
  position: relative;
  width: toRem(40);
  height: toRem(22);

  &::before,
  &::after,
  span {
    content: '';
    width: 100%;
    height: toRem(4);
    position: absolute;
    right: 0;
    background-color: var(--main-bg-icon);
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
  span {
    top: 50%;
    translate: 0 -50%;
    width: 70%;
  }
}
</style>
