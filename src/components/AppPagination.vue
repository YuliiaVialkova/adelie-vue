<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="app-pagination">
    <button class="previous-page">&lt;</button>
    <ul>
      <li><RouterLink to="/">1</RouterLink></li>
      <li><RouterLink href="#" class="active">2</RouterLink></li>
      <li><RouterLink href="">3</RouterLink></li>
      <li>...</li>
    </ul>
    <button class="next-page">&gt;</button>
  </nav>
</template>

<style lang="scss">
.app-pagination {
  text-align: center;
  padding: 0px 0px 0px;
  font-size: toRem(20);
  line-height: 1.75;
  .previous-page,
  .next-page {
    display: inline-block;
  }
  .previous-page {
    margin: 0 toRem(48) 0 toRem(30);
  }
  .next-page {
    margin: 0 toRem(30) 0 toRem(48);
  }
  ul {
    display: inline-flex;
    gap: 48px;
    li {
      a.active {
        color: var(--additional-color-text);
        position: relative;
        &::after {
          position: absolute;
          content: '';
          background: url(../assets/images/design/blot.svg) center/contain no-repeat;
          width: 58px;
          height: 55px;
          z-index: -1;
          top: 50%;
          left: 50%;
          translate: -56% -50%;
        }
      }
    }
  }
}
</style>
