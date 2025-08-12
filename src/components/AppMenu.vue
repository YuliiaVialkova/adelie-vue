<template>
  <nav class="menu">
    <ul class="list">
      <li class="item">
        <RouterLink to="/" class="link">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/blog" class="link">Blog</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact" class="link">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  &.header-menu > .list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (min-width: toEm(768)) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: clamp(toRem(30), 5vw, toRem(60));
    }
  }
  &.footer-menu > .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: toRem(50);
    .item {
      font-size: 0;
      line-height: 1;
    }
  }
  .link {
    font-weight: 400;
  }
  &.header-menu .link {
    font-size: toRem(28);
    padding: toRem(10);
    color: var(--highlight-color-text);
    transition: color 0.3s;
    @media (min-width: toEm(768)) {
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
  &.footer-menu .link {
    font-size: toRem(20);
    line-height: 1.15;
    padding: 0 toRem(14);
  }
}
</style>
