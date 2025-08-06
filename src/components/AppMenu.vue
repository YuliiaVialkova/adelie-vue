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
  position: fixed;
  top: 0;
  background-color: var(--main-bg);
  width: 100vw;
  height: 100vh;
  right: -100%;
  overflow: auto;
  margin-top: toRem(87);
  transition: right 0.3s;
  padding: 0 toRem(10) toRem(10);
  @media (min-width: toEm(768)) {
    position: static;
    margin-top: 0;
    width: auto;
    height: auto;
    padding: 0;
  }
  html.open-menu & {
    right: 0;
  }
  & .list {
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
  .link {
    font-size: toRem(28);
    font-weight: 400;
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
}
</style>
