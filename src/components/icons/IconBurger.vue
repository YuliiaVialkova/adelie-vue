<template>
  <button class="icon-burger">
    <span></span>
  </button>
</template>

<style lang="scss">
.icon-burger {
  width: 40px;
  height: 22px;
  @media (min-width: 768px) {
    display: none;
  }
  &::before,
  &::after,
  span {
    content: '';
    width: 100%;
    height: 4px;
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
