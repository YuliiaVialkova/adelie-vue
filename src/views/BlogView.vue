<script setup>
import AppTitle from '@/components/AppTitle.vue'
import AppArticle from '@/components/AppArticle.vue'
import AppPagination from '@/components/AppPagination.vue'
import DecorPlus from '@/components/decors/DecorPlus.vue'
import DecorCircle from '@/components/decors/DecorCircle.vue'
import DecorWavyLine5 from '@/components/decors/DecorWavyLine5.vue'
import DecorWavyLine6 from '@/components/decors/DecorWavyLine6.vue'
import DecorThreeLines from '@/components/decors/DecorThreeLines.vue'

import article01_1x from '@/assets/images/content/blog/article01-1x.jpg'
import article01_2x from '@/assets/images/content/blog/article01-2x.jpg'
import article02_1x from '@/assets/images/content/blog/article02-1x.jpg'
import article02_2x from '@/assets/images/content/blog/article02-2x.jpg'
import article03_1x from '@/assets/images/content/blog/article03-1x.jpg'
import article03_2x from '@/assets/images/content/blog/article03-2x.jpg'
import article04_1x from '@/assets/images/content/blog/article04-1x.jpg'
import article04_2x from '@/assets/images/content/blog/article04-2x.jpg'
import article05_1x from '@/assets/images/content/blog/article05-1x.jpg'
import article05_2x from '@/assets/images/content/blog/article05-2x.jpg'

const articles = [
  {
    images: {
      jpg1x: article01_1x,
      jpg2x: article01_2x,
      alt: 'A computer desk featuring three monitors and a keyboard, arranged for an efficient workspace setup.',
    },
    formattedDate: '07.03.2020',
    dateISO: '2020-03-07',
    link: '/',
    title: 'Changing image resizing with the ImageMagick console utility',
    excerpt: `For some reason, as the site's image directory started to take a lot of time, and it's impossible to change the file size of the site's scripts, you can locally run this task for ImageMagick's help. To change the size of one image input.jpg to 100 px width,`,
  },
  {
    images: {
      jpg1x: article02_1x,
      jpg2x: article02_2x,
      alt: 'A computer desk featuring three monitors and a keyboard, arranged for an efficient workspace setup.',
    },
    formattedDate: '07.03.2020',
    dateISO: '2020-03-07',
    link: '/',
    title: 'How to learn new beginners easily',
    excerpt: `The world is changing rapidly, and now we can get new skills and change the profession so quickly, as if it were fun. To be competitive in today's world, as much as possible, to get better and learn new skills. Now close the initial mortgage,`,
  },
  {
    images: {
      jpg1x: article03_1x,
      jpg2x: article03_2x,
      alt: 'A computer desk featuring three monitors and a keyboard, arranged for an efficient workspace setup.',
    },
    formattedDate: '07.03.2020',
    dateISO: '2020-03-07',
    link: '/',
    title: 'Creating Great Gutenberg WordPress Blocks',
    excerpt: `To work, you need to install npm and Node.js and WordPress on a local npx server, you will need npm 5.2+ You may need to check the version of npm and Node.js: npm -v node -v Global install create-guten-block npm install -g create-guten- block`,
  },
  {
    images: {
      jpg1x: article04_1x,
      jpg2x: article04_2x,
      alt: 'A computer desk featuring three monitors and a keyboard, arranged for an efficient workspace setup.',
    },
    formattedDate: '07.03.2020',
    dateISO: '2020-03-07',
    link: '/',
    title: 'Is it procrastination?',
    excerpt: `The world is changing rapidly, and now we can get new skills and change the profession so quickly, as if it were fun. To be competitive in today's world, as much as possible, to get better and learn new skills. Now close the initial mortgage,`,
  },
  {
    images: {
      jpg1x: article05_1x,
      jpg2x: article05_2x,
      alt: 'A computer desk featuring three monitors and a keyboard, arranged for an efficient workspace setup.',
    },
    formattedDate: '07.03.2020',
    dateISO: '2020-03-07',
    link: '/',
    title: 'Creation of an online store OpenCart 3x independently',
    excerpt: `To work, you need to install npm and Node.js and WordPress on a local npx server, you will need npm 5.2+ You may need to check the version of npm and Node.js: npm -v node -v Global install create-guten-block npm install -g create-guten- block`,
  },
]
</script>

<template>
  <div class="blog-view">
    <AppTitle
      class="blog-view__caption"
      :breadcrumbs="[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
      ]"
    >
      <template #heading>Blog</template>
    </AppTitle>
    <div class="blog-view__articles">
      <AppArticle
        class="blog-view__article"
        v-for="(article, index) in articles"
        :key="index"
        :images="article.images"
        :formattedDate="article.formattedDate"
        :dateISO="article.dateISO"
        :link="article.link"
        :title="article.title"
        :excerpt="article.excerpt"
      >
        <template v-if="index % 5 === 0">
          <!--every 5 starting from the first one -->
          <DecorPlus class="visible-on-desktop" top="-1%" left="-62%" />
          <DecorPlus class="visible-on-desktop" top="5%" left="-19%" />
          <DecorPlus class="visible-on-desktop" top="39%" left="-47%" />
          <DecorPlus class="visible-on-desktop" bottom="0%" left="-12%" />
          <DecorPlus class="visible-on-desktop" bottom="12%" left="-43%" />

          <DecorPlus class="visible-on-desktop" top="2%" right="-30%" />
          <DecorPlus class="visible-on-desktop" top="18%" right="-58%" />
          <DecorPlus class="visible-on-desktop" bottom="0%" right="7%" />
          <DecorPlus class="visible-on-desktop" bottom="30%" right="-34%" />
          <DecorPlus class="visible-on-desktop" bottom="35%" right="-55%" />
        </template>
        <template v-if="index % 5 === 1">
          <!--every 5 starting from the second one -->
          <DecorPlus class="visible-on-mobile" top="-3%" left="13%" />
          <DecorPlus class="visible-on-mobile" top="57%" right="11%" />

          <DecorPlus class="visible-on-desktop" top="35%" left="-62%" />
          <DecorPlus class="visible-on-desktop" bottom="5%" left="-36%" />
          <DecorPlus class="visible-on-desktop" bottom="-3%" right="-23%" />
          <DecorPlus class="visible-on-desktop" bottom="46%" right="-56%" />

          <DecorCircle
            class="blog-view__decor blog-view__decor--circle decor visible-on-mobile"
            :stroke-width="5"
            width="30"
            height="30"
            top="52%"
            left="13%"
          />
          <DecorCircle
            class="blog-view__decor blog-view__decor--circle decor visible-on-desktop"
            :stroke-width="5"
            width="50"
            height="50"
            bottom="-3%"
            right="-19%"
          />
          <DecorThreeLines
            class="blog-view__decor blog-view__decor--three-lines decor visible-on-desktop"
            top="-2%"
            right="-44%"
          />
        </template>
        <template v-if="index % 5 === 2">
          <!--every 5 starting from the third one -->
          <DecorPlus class="visible-on-desktop" bottom="-5%" right="-12%" />

          <DecorPlus class="visible-on-desktop" top="56%" left="-58%" />
          <DecorPlus class="visible-on-desktop" bottom="12%" left="-18%" />

          <DecorPlus class="visible-on-desktop" bottom="-5%" right="-12%" />
          <DecorPlus class="visible-on-desktop" top="3%" right="-63%" />
          <DecorPlus class="visible-on-desktop" top="59%" right="-54%" />

          <DecorWavyLine5
            class="blog-view__decor decor blog-view__decor--wavy-line5 visible-on-desktop"
            top="-2%"
            right="-69%"
          />
          <DecorCircle
            class="blog-view__decor blog-view__decor--circle decor visible-on-desktop"
            :stroke-width="10"
            width="73"
            height="73"
            bottom="3%"
            left="-51%"
          />
        </template>
        <template v-if="index % 5 === 3">
          <!--every 5 starting from the fourth one -->
          <DecorPlus class="visible-on-mobile" top="38%" left="4%" />

          <DecorPlus class="visible-on-desktop" top="44%" left="-55%" />
          <DecorPlus class="visible-on-desktop" bottom="30%" left="-12%" />

          <DecorPlus class="visible-on-desktop" top="38%" right="-57%" />
          <DecorPlus class="visible-on-desktop" bottom="19%" right="-25%" />
        </template>
        <template v-if="index % 5 === 4">
          <!--every 5 starting from the fifth one -->
          <DecorPlus class="visible-on-mobile" bottom="13%" right="12%" />
          <DecorPlus class="visible-on-mobile" bottom="38%" left="2%" />

          <DecorPlus class="visible-on-desktop" top="40%" left="-47%" />
          <DecorPlus class="visible-on-desktop" top="50%" right="-11%" />
          <DecorPlus class="visible-on-desktop" top="36%" right="-56%" />

          <DecorWavyLine6
            class="blog-view__decor decor blog-view__decor--wavy-line5 visible-on-desktop"
            bottom="-38%"
            left="-61%"
          />
        </template>
      </AppArticle>
      <AppPagination class="blog-view__pagination"> </AppPagination>
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
    margin: 84px 0;
  }
}
</style>
