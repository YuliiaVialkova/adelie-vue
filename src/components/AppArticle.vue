<script setup>
import AppFigcaption from '@/components/AppFigcaption.vue'
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  mode: {
    type: String,
    default: 'preview',
  },
})

const img1x = computed(
  () =>
    new URL(`../assets/images/content/blog/${props.article.images.jpg1x}`, import.meta.url).href,
)
const img2x = computed(
  () =>
    new URL(`../assets/images/content/blog/${props.article.images.jpg2x}`, import.meta.url).href,
)
</script>

<template>
  <article class="app-article">
    <figure class="app-article__image-wrapper">
      <RouterLink :to="`/blog/article/${article.id}`">
        <img
          class="app-article__image"
          :src="img1x"
          :srcset="`${img1x} 1x, ${img2x} 2x`"
          :alt="article.images.alt"
        />
      </RouterLink>
      <AppFigcaption class="app-article__figcaption" :datetime="article.dateISO">
        <template #date>{{ article.formattedDate }}</template>
        <template #author>{{ article.author }}</template>
      </AppFigcaption>
    </figure>

    <template v-if="mode === 'preview'">
      <h2 class="app-article__title">
        <RouterLink :to="`/blog/article/${article.id}`" class="app-article__link">{{
          article.title
        }}</RouterLink>
      </h2>
      <p class="app-article__excerpt">
        {{ article.intro }}
        <span class="app-article__dots">...</span>
      </p>
      <RouterLink :to="`/blog/article/${article.id}`" class="app-article__button highlight"
        >Read more</RouterLink
      >
    </template>

    <template v-if="mode === 'short'">
      <h2 class="app-article__title">
        <RouterLink :to="`/blog/article/${article.id}`" class="app-article__link">{{
          article.title
        }}</RouterLink>
      </h2>
      <RouterLink :to="`/blog/article/${article.id}`" class="app-article__button highlight"
        >Read more</RouterLink
      >
    </template>

    <template v-if="mode === 'full'">
      <p class="first-paragraph">{{ article.firstParagraph }}</p>
      <p class="second-paragraph">{{ article.secondParagraph }}</p>
      <section v-for="(section, index) in article.sections" :key="index">
        <h3>{{ section.subtittle }}</h3>
        <p v-for="(p, i) in section.paragraphs" :key="i">{{ p }}</p>
      </section>
    </template>
    <slot name="decor"></slot>
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
    aspect-ratio: 355/230;
    @media (min-width: 1024px) {
      aspect-ratio: 793/420;
    }
  }

  &__title {
    font-size: clamp(toRem(23), 4vw, toRem(30));
    line-height: 1.739;
    margin: 10px 0 10px;
    @media (min-width: 1024px) {
      line-height: 1.33;
      margin: 14px 0 3px;
    }
  }
  &__title + &__excerpt {
    font-size: toRem(16);
    line-height: 1.56;
    margin-bottom: toRem(12);
    @media (min-width: 1024px) {
      font-size: toRem(20);
      line-height: 1.75;
      margin-bottom: 3px;
    }
  }
  &__link {
    color: inherit;
    transition: color 0.3s ease;
  }

  @media (any-hover: hover) and (any-pointer: fine) {
    &__link:hover {
      color: var(--main-link-hover);
    }
  }
  &__button {
    font-size: toRem(20);
    font-weight: 500;
    line-height: 1.75;
    text-transform: uppercase;
    transition: transform 0.15s ease;
  }
  &__button:active {
    transform: scale(0.95);
  }
  &__button.highlight::after {
    bottom: 9%;
    height: 41%;
  }
}
</style>
