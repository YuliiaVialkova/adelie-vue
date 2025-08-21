<script setup>
import IconDate from '@/components/icons/IconDate.vue'
import IconAuthor from '@/components/icons/IconAuthor.vue'
import AppContainer from '@/components/AppContainer.vue'
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
    <AppContainer class="app-article__container container--small">
      <figure class="app-article__image-wrapper">
        <img
          class="app-article__image"
          :src="images.jpg1x"
          :srcset="`
             ${images.jpg1x} 1x,
            ${images.jpg2x} 2x`"
          :alt="images.alt"
        />

        <figcaption class="app-article__meta meta">
          <time :datetime="dateISO" class="meta__date"
            ><IconDate class="meta__icon icon icon--date" />{{ formattedDate }}</time
          >
          <span class="meta__author">
            <IconAuthor class="meta__icon icon icon--author" />{{ author }}</span
          >
        </figcaption>
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
  &__container {
    .app-article__image-wrapper {
      position: relative;
      margin: 0 auto;
      min-height: 230px;
      min-width: 355px;
      aspect-ratio: 355/230;
      img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      .app-article__meta {
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
        padding: 21px 20px 16px 20px;
        time,
        span {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 10px;
        }
      }
    }

    h2 {
      font-size: 23px;
      line-height: 1.739;
      margin: 10px 0 10px;
    }
    h2 + p {
      font-size: 16px;
      line-height: 1.56;
      margin-bottom: 12px;
    }
    .app-article__button {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.75;
      text-transform: uppercase;
    }
    .app-article__button.highlight::after {
      bottom: 9%;
      height: 41%;
    }
  }
}
</style>
