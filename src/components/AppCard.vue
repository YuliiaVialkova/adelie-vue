<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
})

const img1x = computed(
  () =>
    new URL(`../assets/images/content/portfolio/${props.card.images.jpg1x}`, import.meta.url).href,
)
const img2x = computed(
  () =>
    new URL(`../assets/images/content/portfolio/${props.card.images.jpg2x}`, import.meta.url).href,
)
</script>
<template>
  <article class="app-card">
    <RouterLink :to="`/portfolio/item/${portfolio.title}`">
      <h3>card.title</h3>
      <p>card.type</p>
      <img src="${img1x}" :srcset="`${img1x} 1x, ${img2x} 2x`" alt="card.images.alt" />
      <p>card.desc</p>
    </RouterLink>
  </article>
</template>
