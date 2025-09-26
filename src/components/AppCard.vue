<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  card: {
    type: Object,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <article class="app-card" :class="`app-card--${mode}`">
    <RouterLink :to="`/portfolio/item/${card.title}`">
      <h3>{{ card.title }}</h3>
      <p>{{ card.type }}</p>
      <img
        :src="card.images.jpg1x"
        :srcset="`${card.images.jpg1x} 1x, ${card.images.jpg2x} 2x`"
        :alt="card.images.alt"
      />
      <p>{{ card.desc }}</p>
    </RouterLink>
  </article>
</template>
