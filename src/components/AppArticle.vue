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
  <article class="app-article" :class="`app-article--${mode}`">
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
      <p class="app-article__first-paragraph">{{ article.firstParagraph }}</p>
      <p class="app-article__second-paragraph">{{ article.secondParagraph }}</p>
      <section v-for="(section, index) in article.sections" :key="index">
        <h3 class="app-article__subtitle">{{ section.subtittle }}</h3>
        <p
          class="app-article__paragraph"
          v-for="(p, i) in section.paragraphs"
          :key="i"
          :class="{
            'app-article__paragraph--boldAndFrame': index === 0 && i === 2,
            'app-article__paragraph--bold':
              index === article.sections.length - 1 && i === section.paragraphs.length - 1,
          }"
        >
          <span class="app-article__paragraph--frame" v-if="index === 0 && i === 2"></span>
          {{ p }}
        </p>
      </section>
    </template>
    <slot name="decorForBlog"></slot>
    <slot name="decorForFullArticle"></slot>
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
  &__paragraph {
    &--boldAndFrame {
      font-weight: 700;
      position: relative;

      &::before {
        position: absolute;
        background-color: transparent;
        content: '';
        border: 1px solid #000;
        top: -11px;
        left: -81px;
        right: -81px;
        bottom: -29px;
        pointer-events: none;
      }
      &::after {
        position: absolute;
        background-color: transparent;
        content: '';
        border: 1px solid #000;
        top: -31px;
        left: -121px;
        right: -41px;
        bottom: -9px;
        pointer-events: none;
      }
      span {
        position: absolute;
        background-color: transparent;
        border: 1px solid #000;
        top: -21px;
        left: -41px;
        right: -121px;
        bottom: -19px;
        pointer-events: none;
      }
    }
    &--bold {
      font-weight: 700;
    }
  }
  &--full {
    .app-article__image-wrapper {
      min-height: 250px;
      aspect-ratio: 355/250;
    }
    .app-article__image {
      aspect-ratio: 355/250;
    }
    @media (min-width: 1024px) {
      .app-article__image-wrapper {
        margin-bottom: 40px;
      }
      p {
        font-size: toRem(20);
        line-height: 1.75;
        margin: 23px 0;
        &.app-article__paragraph--boldAndFrame {
          margin: 50px 0;
        }
      }
      h3 {
        font-size: toRem(30);
        line-height: 1.33;
        margin-top: 30px;
      }
      h3 + p {
        margin-top: 10px;
      }
    }
  }
}
</style>
