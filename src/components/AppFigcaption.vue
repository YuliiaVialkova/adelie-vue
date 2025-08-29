<script setup>
import IconDate from '@/components/icons/IconDate.vue'
import IconAuthor from '@/components/icons/IconAuthor.vue'
</script>

<template>
  <figcaption class="app-figcaption">
    <time class="app-figcaption__date"
      ><IconDate class="app-figcaption__icon icon app-figcaption__icon--date" /><slot
        name="date"
      ></slot
    ></time>
    <span class="app-figcaption__author">
      <IconAuthor class="app-figcaption__icon icon app-figcaption__icon--author" /><slot
        name="author"
      ></slot>
    </span>
  </figcaption>
</template>

<style lang="scss">
.app-figcaption {
  background-color: var(--main-bg);
  position: absolute;
  bottom: -1px;
  left: -1px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 50px;
  font-size: 17px;
  line-height: 1.29;
  padding: toRem(21) toRem(20) toRem(16);
  &__date,
  &__author {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  }
}
</style>
