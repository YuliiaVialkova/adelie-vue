<template>
  <nav class="app-menu">
    <ul class="app-menu__list">
      <li class="app-menu__item">
        <RouterLink to="/" class="app-menu__link">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/blog" class="app-menu__link">Blog</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact" class="app-menu__link">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.app-menu {
  &.app-header__menu > .app-menu__list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: clamp(toRem(30), 5vw, toRem(60));
    }
  }
  &.app-footer__menu > .app-menu__list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: toRem(50);
    .app-menu__item {
      font-size: 0;
      line-height: 1;
    }
  }
  &__link {
    font-weight: 400;
  }
  &.app-header__menu .app-menu__link {
    font-size: toRem(28);
    padding: toRem(10);
    color: var(--highlight-color-text);
    transition: color 0.3s;
    @media (min-width: 768px) {
      font-size: toRem(20);
      line-height: 1.15;
      color: var(--main-color-text);
    }
    @media (any-hover: hover) and (any-pointer: fine) {
      &:hover {
        color: var(--main-link-hover);
      }
    }
  }
  &.app-footer__menu .app-menu__link {
    font-size: toRem(20);
    line-height: 1.15;
    padding: 0 toRem(14);
  }
}
</style>
