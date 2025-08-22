<script setup>
import AppTitle from '@/components/AppTitle.vue'
import AppArticle from '@/components/AppArticle.vue'
import AppPagination from '@/components/AppPagination.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import IconCircle from '@/components/icons/IconCircle.vue'

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
  <AppTitle
    class="caption"
    :breadcrumbs="[
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
    ]"
  >
    <template #heading>Blog</template>
  </AppTitle>
  <div class="articles">
    <AppArticle
      class="article"
      v-for="(article, index) in articles"
      :key="index"
      :images="article.images"
      :formattedDate="article.formattedDate"
      :dateISO="article.dateISO"
      :link="article.link"
      :title="article.title"
      :excerpt="article.excerpt"
    >
      <template v-if="index % 5 === 1">
        <!--every 5 starting from the second one -->
        <PlusIcon class="visible-on-mobile" top="-3%" left="13%" />
        <PlusIcon class="visible-on-mobile" top="57%" right="11%" />
        <IconCircle
          class="decorative-icon decorative-icon--circle visible-on-mobile"
          :stroke-width="5"
          :size="30"
        />
      </template>
      <template v-if="index % 5 === 2">
        <!--every 5 starting from the third one -->
        <PlusIcon class="visible-on-mobile" bottom="5%" right="14%" />
      </template>
      <template v-if="index % 5 === 3">
        <!--every 5 starting from the fourth one -->
        <PlusIcon class="visible-on-mobile" top="38%" left="4%" />
      </template>
      <template v-if="index % 5 === 4">
        <!--every 5 starting from the fifth one -->
        <PlusIcon class="visible-on-mobile" bottom="13%" right="12%" />
        <PlusIcon class="visible-on-mobile" bottom="38%" left="2%" />
      </template>
    </AppArticle>
    <AppPagination class="pagination"></AppPagination>
  </div>
</template>

<style lang="scss">
.caption {
  margin-bottom: toRem(45);
}
.articles {
  margin-bottom: toRem(338);
  .article {
    margin-bottom: toRem(47);
    position: relative;
    .decorative-icon--circle {
      top: 52%;
      left: 15%;
    }
  }
  .pagination {
    margin: toRem(79) 0;
  }
}
</style>
