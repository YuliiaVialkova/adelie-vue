<script setup>
import { useArticlesStore } from '@/stores/useArticlesStores'
import { useRoute } from 'vue-router'
import AppArticle from '@/components/AppArticle.vue'
import AppTitle from '@/components/AppTitle.vue'
import AppContainer from '@/components/AppContainer.vue'

const store = useArticlesStore()
const route = useRoute()

const articleID = Number(route.params.id)

const article = store.articles.find((a) => a.id === articleID)

const otherArticles = store.articles.filter((a) => a.id !== articleID)

function getRandomArticle(arr, count) {
  return arr
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
}

const recommended = getRandomArticle(otherArticles, 2)
</script>

<template>
  <div class="article-view">
    <AppTitle
      class="article-view__caption"
      :breadcrumbs="[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: article?.title },
      ]"
    >
      <template #heading>{{ article?.title }}</template>
    </AppTitle>
    <AppContainer class="article-view__container app-container--small">
      <AppArticle class="article-view__full" v-if="article" :article="article" mode="full">
      </AppArticle>

      <p v-else>Page not found</p>
    </AppContainer>

    <div class="article-view__footer">
      <AppContainer class="article-view__footer-container app-container--middle">
        <div class="article-view__recommend">
          <AppArticle
            class="article-view__preview"
            v-for="rec in recommended"
            :key="rec.id"
            :article="rec"
            mode="short"
          ></AppArticle>
        </div>
      </AppContainer>
    </div>
  </div>
</template>

<style lang="scss">
.article-view {
  &__recommend {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>
