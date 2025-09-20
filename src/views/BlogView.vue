<script setup>
import AppTitle from '@/components/AppTitle.vue'
import AppArticle from '@/components/AppArticle.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppContainer from '@/components/AppContainer.vue'
import { useArticlesStore } from '@/stores/useArticlesStores'
import DecorThreeLines from '@/components/decors/DecorThreeLines.vue'
import DecorCircle from '@/components/decors/DecorCircle.vue'
import DecorWavyLine5 from '@/components/decors/DecorWavyLine5.vue'
import DecorWavyLine6 from '@/components/decors/DecorWavyLine6.vue'
import DecorPlus from '@/components/decors/DecorPlus.vue'

const store = useArticlesStore()
</script>

<template>
  <div class="blog-view">
    <AppTitle
      class="blog-view__caption"
      :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Blog' }]"
    >
      <template #heading>Blog</template>
    </AppTitle>
    <div class="blog-view__articles">
      <AppContainer class="blog-view__container app-container--small">
        <AppArticle
          class="blog-view__article"
          v-for="(article, index) in store.articles"
          :key="article.id"
          :article="article"
          mode="preview"
        >
          <template #decor>
            <!-- first article on a page -->
            <DecorPlus
              v-if="index % 5 === 0"
              class="blog-view__decor visible-on-desktop"
              top="-1%"
              left="-64%"
            />
            <DecorPlus
              v-if="index % 5 === 0"
              class="blog-view__decor visible-on-desktop"
              top="5%"
              left="-20%"
            />
            <DecorPlus
              v-if="index % 5 === 0"
              class="blog-view__decor visible-on-desktop"
              top="39%"
              left="-49%"
            />
            <DecorPlus
              v-if="index % 5 === 0"
              class="blog-view__decor visible-on-desktop"
              bottom="12%"
              left="-45%"
            />
            <DecorPlus
              v-if="index % 5 === 0"
              class="blog-view__decor visible-on-desktop"
              top="2%"
              right="-32%"
            />
            <DecorPlus
              v-if="index % 5 === 0"
              class="blog-view__decor visible-on-desktop"
              top="18%"
              right="-62%"
            />
            <DecorPlus
              v-if="index % 5 === 0"
              class="blog-view__decor visible-on-desktop"
              bottom="30%"
              right="-37%"
            />
            <DecorPlus
              v-if="index % 5 === 0"
              class="blog-view__decor visible-on-desktop"
              bottom="35%"
              right="-58%"
            />
            <!-- second article on a page -->
            <DecorPlus
              v-if="index % 5 === 1"
              class="blog-view__decor visible-on-mobile"
              top="-3%"
              left="11%"
            />
            <DecorPlus
              v-if="index % 5 === 1"
              class="blog-view__decor visible-on-mobile"
              top="56%"
              right="8%"
            />
            <DecorThreeLines
              v-if="index % 5 === 1"
              class="blog-view__decor blog-view__decor--three-lines decor visible-on-desktop"
              top="-2%"
              right="-47%"
              width="207"
              height="45"
            />
            <DecorCircle
              v-if="index % 5 === 1"
              class="blog-view__decor blog-view__decor--circle-small decor visible-on-mobile"
              :stroke-width="5"
              width="30"
              height="30"
              bottom="42%"
              left="11%"
            />
            <DecorPlus
              v-if="index % 5 === 1"
              class="blog-view__decor visible-on-desktop"
              top="-6%"
              right="5%"
            />
            <DecorPlus
              v-if="index % 5 === 1"
              class="blog-view__decor visible-on-desktop"
              top="53%"
              right="-59%"
            />
            <DecorPlus
              v-if="index % 5 === 1"
              class="blog-view__decor visible-on-desktop"
              top="-6%"
              left="-13%"
            />
            <DecorPlus
              v-if="index % 5 === 1"
              class="blog-view__decor visible-on-desktop"
              top="35%"
              left="-65%"
            />
            <DecorPlus
              v-if="index % 5 === 1"
              class="blog-view__decor visible-on-desktop"
              bottom="0%"
              left="0%"
            />
            <!-- third article on a page -->
            <DecorPlus
              v-if="index % 5 === 2"
              class="blog-view__decor visible-on-mobile"
              bottom="7%"
              right="27%"
            />
            <DecorCircle
              v-if="index % 5 === 2"
              class="blog-view__decor blog-view__decor--circle-small decor visible-on-desktop"
              :stroke-width="10"
              width="75"
              height="75"
              bottom="3%"
              left="-54%"
            />
            <DecorCircle
              v-if="index % 5 === 2"
              class="blog-view__decor blog-view__decor--circle-small decor visible-on-desktop"
              :stroke-width="5"
              width="50"
              height="50"
              top="-15%"
              right="-21%"
            />
            <DecorWavyLine5
              v-if="index % 5 === 2"
              class="blog-view__decor decor blog-view__decor--wavy-line5 visible-on-desktop"
              top="-3%"
              right="-72%"
            />
            <DecorPlus
              v-if="index % 5 === 2"
              class="blog-view__decor visible-on-desktop"
              top="-17%"
              left="-37%"
            />
            <DecorPlus
              v-if="index % 5 === 2"
              class="blog-view__decor visible-on-desktop"
              bottom="43%"
              left="-61%"
            />
            <DecorPlus
              v-if="index % 5 === 2"
              class="blog-view__decor visible-on-desktop"
              bottom="12%"
              left="-20%"
            />
            <DecorPlus
              v-if="index % 5 === 2"
              class="blog-view__decor visible-on-desktop"
              top="-8%"
              right="-26%"
            />
            <DecorPlus
              v-if="index % 5 === 2"
              class="blog-view__decor visible-on-desktop"
              top="3%"
              right="-66%"
            />
            <DecorPlus
              v-if="index % 5 === 2"
              class="blog-view__decor visible-on-desktop"
              bottom="40%"
              right="-57%"
            />
            <!-- fouth article on a page -->
            <DecorPlus
              v-if="index % 5 === 3"
              class="blog-view__decor visible-on-mobile"
              top="38%"
              left="2%"
            />
            <DecorPlus
              v-if="index % 5 === 3"
              class="blog-view__decor visible-on-desktop"
              bottom="14%"
              right="-27%"
            />
            <DecorPlus
              v-if="index % 5 === 3"
              class="blog-view__decor visible-on-desktop"
              top="-2%"
              right="-13%"
            />
            <DecorPlus
              v-if="index % 5 === 3"
              class="blog-view__decor visible-on-desktop"
              top="42%"
              right="-60%"
            />
            <DecorPlus
              v-if="index % 5 === 3"
              class="blog-view__decor visible-on-desktop"
              top="49%"
              left="-58%"
            />
            <DecorPlus
              v-if="index % 5 === 3"
              class="blog-view__decor visible-on-desktop"
              bottom="25%"
              left="-14%"
            />
            <!-- fifth article on a page -->
            <DecorPlus
              v-if="index % 5 === 4"
              class="blog-view__decor visible-on-desktop"
              top="38%"
              left="-49%"
            />
            <DecorPlus
              v-if="index % 5 === 4"
              class="blog-view__decor visible-on-desktop"
              top="33%"
              right="-60%"
            />
            <DecorPlus
              v-if="index % 5 === 4"
              class="blog-view__decor visible-on-desktop"
              top="48%"
              right="-13%"
            />
          </template>
        </AppArticle>
        <AppPagination class="blog-view__pagination">
          <DecorWavyLine6
            class="blog-view__decor decor blog-view__decor--wavy-line6 visible-on-desktop"
            bottom="-312%"
            right="60%"
          />
          <DecorPlus class="blog-view__decor visible-on-desktop" top="54%" right="-1%" />
          <DecorPlus class="blog-view__decor visible-on-desktop" top="78%" left="2%" />
          <DecorPlus class="blog-view__decor visible-on-desktop" top="56%" left="-41%" />
          <DecorPlus class="blog-view__decor visible-on-desktop" bottom="-454%" left="54%" />
        </AppPagination>
      </AppContainer>
    </div>
  </div>
</template>

<style lang="scss">
.blog-view {
  &__caption {
    margin-bottom: toRem(41);
    @media (min-width: 1024px) {
      margin-bottom: toRem(61);
    }
  }
  &__articles {
    margin-bottom: toRem(82);
  }
  &__article {
    margin-bottom: 47px;
    position: relative;
    @media (min-width: 1024px) {
      margin-bottom: 29px;
    }
  }
  &__pagination {
    margin: 70px 0 340px;
    @media (min-width: 1024px) {
      margin: 84px 0;
    }
  }
}
</style>
