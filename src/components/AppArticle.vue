<script setup>
import AppContainer from '@/components/AppContainer.vue'
import AppFigcaption from '@/components/AppFigcaption.vue'
import { RouterLink } from 'vue-router'

defineProps({
  images: {
    type: Object,
    required: true,
  },
  dateISO: {
    type: String,
    required: true,
  },
  formattedDate: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'admin',
  },
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <article class="app-article">
    <AppContainer class="app-article__container app-container--small">
      <figure class="app-article__image-wrapper">
        <img
          class="app-article__image"
          :src="images.jpg1x"
          :srcset="`
             ${images.jpg1x} 1x,
            ${images.jpg2x} 2x`"
          :alt="images.alt"
        />
        <AppFigcaption class="app-article__figcaption" :datetime="dateISO">
          <template #date>{{ formattedDate }}</template>
          <template #author>{{ author }}</template>
        </AppFigcaption>
      </figure>
      <h2 class="app-article__title">
        <RouterLink :to="link" class="app-article__link">{{ title }}</RouterLink>
      </h2>
      <p class="app-article__excerpt">
        {{ excerpt }}
        <span class="app-article__dots">...</span>
      </p>
      <RouterLink :to="link" class="app-article__button highlight">Read more</RouterLink>
      <slot></slot>
    </AppContainer>
  </article>
</template>

<style lang="scss">
.app-article {
  &__image-wrapper {
    position: relative;
    margin: 0 auto;
    min-height: 230px;
    min-width: 355px;
    aspect-ratio: 355/230;
    @media (min-width: 1024px) {
      aspect-ratio: 793/420;
    }
  }
  &__image {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__title {
    font-size: clamp(toRem(23), 4vw, toRem(30));
    line-height: 1.739;
    margin: 10px 0 10px;
  }
  &__title + &__excerpt {
    font-size: toRem(16);
    line-height: 1.56;
    margin-bottom: toRem(12);
  }
  &__button {
    font-size: toRem(20);
    font-weight: 500;
    line-height: 1.75;
    text-transform: uppercase;
  }
  &__button.highlight::after {
    bottom: 9%;
    height: 41%;
  }
}
</style>
