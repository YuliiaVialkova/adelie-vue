<script setup>
import { usePositionStyles } from '@/stores/usePositionStyles'

const props = defineProps({
  top: { type: String, default: null },
  left: { type: String, default: null },
  right: { type: String, default: null },
  bottom: { type: String, default: null },
})

const positionStyles = usePositionStyles(props)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="decor-wavy-line5"
    :style="positionStyles"
    width="505"
    height="894"
    viewBox="0 0 505 894"
    fill="none"
  >
    <path
      d="M621 1C621 1 374 173 269 331C164 489 243.628 904.527 129.628 893.127C15.6284 881.726 -49.3716 720.126 49.6284 677.127C148.628 634.127 683 829 683 829"
      stroke="black"
    />
  </svg>
</template>
