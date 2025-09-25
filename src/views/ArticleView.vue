<script setup>
import { useArticlesStore } from '@/stores/useArticlesStores'
import { useRoute } from 'vue-router'
import AppArticle from '@/components/AppArticle.vue'
import AppTitle from '@/components/AppTitle.vue'
import AppContainer from '@/components/AppContainer.vue'
import DecorWavyLine7 from '@/components/decors/DecorWavyLine7.vue'
import DecorPlus from '@/components/decors/DecorPlus.vue'
import DecorThreeLines from '@/components/decors/DecorThreeLines.vue'
import DecorWavyLine5 from '@/components/decors/DecorWavyLine5.vue'
import DecorCircle from '@/components/decors/DecorCircle.vue'
import AppSlider from '@/components/AppSlider.vue'

const store = useArticlesStore()
const route = useRoute()

const articleID = Number(route.params.id)

const article = store.articles.find((a) => a.id === articleID)
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
      <DecorWavyLine7
        class="article-view__decor decor article-view__decor--wavy-line7 visible-on-desktop"
        top="-76%"
        left="-22%"
      />
    </AppTitle>
    <AppContainer class="article-view__container app-container--small">
      <AppArticle class="article-view__full" v-if="article" :article="article" mode="full">
        <template #decorForFullArticle>
          <DecorThreeLines
            class="article-view__decor article-view__decor--three-lines decor visible-on-desktop"
            top="23%"
            right="-44%"
            width="207"
            height="45"
          />
          <DecorPlus class="article-view__decor visible-on-mobile" top="18%" left="13%" />
          <DecorPlus class="article-view__decor visible-on-mobile" top="45%" left="14%" />
          <DecorPlus class="article-view__decor visible-on-mobile" top="67.5%" left="7%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="-1%" left="-18%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="-3%" left="-61%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="7%" left="-47%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="19%" left="-43%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="22%" left="-12%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="31%" left="-62%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="45%" left="-36%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="62%" left="-59%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="69%" left="-18%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="84%" left="-55%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="90%" left="-12%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="109%" left="-46%" />

          <DecorPlus class="article-view__decor visible-on-mobile" top="-2%" right="3%" />
          <DecorPlus class="article-view__decor visible-on-mobile" top="30%" right="3%" />
          <DecorPlus class="article-view__decor visible-on-mobile" top="55%" right="29%" />
          <DecorPlus class="article-view__decor visible-on-mobile" top="64.5%" right="43%" />
          <DecorPlus class="article-view__decor visible-on-mobile" top="69%" right="8%" />
          <DecorPlus class="article-view__decor visible-on-mobile" top="85%" right="30%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="-2%" right="-30%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="2%" right="-58%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="13%" right="-55%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="14%" right="-34%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="22%" right="6%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="35%" right="-56%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="47%" right="-23%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="49%" right="-62%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="62%" right="-54%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="73%" right="-12%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="83%" right="-58%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="93%" right="-25%" />

          <DecorCircle
            class="article-view__decor article-view__decor--circle-small decor visible-on-desktop"
            :stroke-width="10"
            width="75"
            height="75"
            top="68%"
            left="-51%"
          />
          <DecorWavyLine5
            class="article-view__decor decor article-view__decor--wavy-line5 visible-on-desktop"
            top="48%"
            right="-69%"
          />
          <DecorCircle
            class="article-view__decor article-view__decor--circle-small decor visible-on-desktop"
            :stroke-width="5"
            width="55"
            height="55"
            top="90%"
            right="-55%"
          />
        </template>
      </AppArticle>

      <p v-else>Page not found</p>
    </AppContainer>

    <div class="article-view__footer">
      <AppSlider class="article-view__recommend" :articles="store.articles" :current-id="articleID">
        <template #decorForSlider>
          <DecorPlus class="article-view__decor visible-on-desktop" top="81%" left="-6%" />
          <DecorPlus class="article-view__decor visible-on-desktop" bottom="-15%" left="19%" />
          <DecorPlus class="article-view__decor visible-on-desktop" bottom="-2%" left="52%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="15%" right="43%" />
          <DecorPlus class="article-view__decor visible-on-desktop" top="18%" right="-17%" />
        </template>
      </AppSlider>
    </div>
  </div>
</template>

<style lang="scss">
.article-view {
  margin-bottom: 244px;
  @media (min-width: 1024px) {
    margin-bottom: 55px;
  }
  &__caption {
    margin-bottom: 46px;
    @media (min-width: 1024px) {
      margin-bottom: toRem(55);
    }
  }
  &__full {
    margin-bottom: 44px;
    @media (min-width: 1024px) {
      margin-bottom: 70px;
    }
  }
  &__recommend {
    margin-bottom: 20px;
  }
}
</style>
