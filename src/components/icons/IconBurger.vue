<template>
  <button class="icon-burger">
    <span></span>
  </button>
</template>

<style lang="scss" scoped>
.icon-burger {
  width: toRem(40);
  height: toRem(22);
  @media (min-width: toEm(768)) {
    display: none;
  }
  &::before,
  &::after,
  span {
    content: '';
    width: 100%;
    height: toRem(4);
    position: absolute;
    right: 0;
    background-color: var(--main-bg-icon);
    transition: rotate 0.3s;
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
  html.open-menu & {
    span {
      width: 0;
    }
    &::before {
      top: 50%;
      translate: 0 -50%;
      rotate: -45deg;
    }
    &::after {
      bottom: 50%;
      translate: 0 50%;
      rotate: 45deg;
    }
  }
}
</style>
