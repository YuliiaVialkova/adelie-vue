<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import AppContainer from '@/components/AppContainer.vue'
import AppArticle from '@/components/AppArticle.vue'

const props = defineProps({
  articles: {
    type: Array,
    required: true,
  },
  currentId: {
    type: Number,
    required: true,
  },
})

const otherArticles = computed(() => {
  const filtered = props.articles.filter((a) => a.id !== props.currentId)
  console.log('articles', props.articles)
  console.log('currentId', props.currentId)
  console.log('otherArticles', filtered)

  return filtered
})

const currentIndex = ref(0)

const slidesToShow = 2

function prevSlide() {
  if (currentIndex.value === 0) {
    currentIndex.value = otherArticles.value.length - 1
  } else {
    currentIndex.value -= 1
  }
}

function nextSlide() {
  if (currentIndex.value === otherArticles.value.length - 1) {
    currentIndex.value = 0
  } else {
    currentIndex.value += 1
  }
}

const visibleArticles = computed(() => {
  const start = currentIndex.value
  const end = currentIndex.value + slidesToShow

  if (end <= otherArticles.value.length) {
    return otherArticles.value.slice(start, end)
  } else {
    const firstPart = otherArticles.value.slice(start)
    const secondPart = otherArticles.value.slice(0, end - otherArticles.value.length)
    return [...firstPart, ...secondPart]
  }
})
</script>

<template>
  <div class="app-slider">
    <AppContainer class="app-slider__container app-container--middle">
      <div class="app-slider__header">
        <button class="app-slider__previous" @click="prevSlide">
          <span class="highlight">
            <span class="mobile">previous</span>&nbsp;<span class="desktop">article</span>
          </span>
        </button>
        <button class="app-slider__next" @click="nextSlide">
          <span class="highlight">
            <span class="mobile">next</span>&nbsp;<span class="desktop">article</span>
          </span>
        </button>
      </div>
      <div class="app-slider__caption">
        <h2 class="app-slider__title"><span class="highlight">Recommended</span> materials</h2>
        <div class="app-slider__arrows">
          <button class="app-slider__arrow app-slider__arrow--prev" @click="prevSlide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="16"
              viewBox="0 0 51 16"
              fill="none"
            >
              <path
                d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0V9Z"
                fill="black"
                :stroke-width="2"
              />
            </svg>
          </button>
          <button class="app-slider__arrow app-slider__arrow--next" @click="nextSlide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="16"
              viewBox="0 0 51 16"
              fill="none"
            >
              <path
                d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0V9Z"
                fill="black"
                :stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="app-slider__content">
        <AppArticle
          class="app-slider__preview"
          v-for="rec in visibleArticles"
          :key="rec.id"
          :article="rec"
          mode="slider"
        ></AppArticle>
      </div>
      <slot name="decorForSlider"></slot>
    </AppContainer>
  </div>
</template>

<style lang="scss">
.app-slider {
  &__container {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    margin: toRem(39) 0 toRem(37);
    @media (min-width: 1024px) {
      margin: toRem(69) 0 toRem(81);
    }
  }
  &__previous,
  &__next {
    white-space: nowrap;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    gap: 19px;
    font-size: toRem(20);
    font-weight: 500;
    line-height: 1.75;
  }
  &__previous span.desktop {
    display: none;
    @media (min-width: 1024px) {
      display: inline;
    }
  }
  &__next span.desktop {
    display: none;
    @media (min-width: 1024px) {
      display: inline;
    }
  }
  &__previous::before,
  &__next::after {
    display: inline-block;
    content: '';
    background-image: url(/src/assets/images/design/arrow.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 30px;
    height: 8px;
  }
  &__previous::before {
    transform: scaleX(-1);
  }
  &__caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: toRem(16);
    @media (min-width: 1024px) {
      margin-bottom: toRem(40);
    }
  }
  &__title {
    font-size: clamp(toRem(35), 7vw, toRem(50));
    line-height: 1.42;
    @media (min-width: 1024px) {
      line-height: 1.4;
    }
  }
  &__arrows {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
      gap: 60px;
      flex-shrink: 0;
    }
  }
  &__arrow--prev {
    transform: scaleX(-1);
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1024px) {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: stretch;
      gap: 20px;
    }
  }
  &__preview {
    flex: 1 1 0;
  }
}
</style>
