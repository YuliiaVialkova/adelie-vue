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
  font-size: toRem(23);
  font-weight: 400;
  padding: 0 toRem(10) toRem(10);
  color: var(--highlight-color-text);
  @media (min-width: toEm(768)) {
    position: static;
    margin-top: 0;
    font-size: toRem(20);
    line-height: 1.15;
    width: auto;
    height: auto;
    padding: 0;

    color: var(--main-color-text);
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
    padding: toRem(10);
  }
}
</style>
