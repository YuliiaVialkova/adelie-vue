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
    class="decor-rain-left"
    :style="positionStyles"
    xmlns="http://www.w3.org/2000/svg"
    width="192"
    height="184"
    viewBox="0 0 192 184"
    fill="none"
  >
    <path
      d="M8.9 182.9L133.2 58.6M30.8 126.5L117.9 39.4M138.3 118.1L188.7 67.7M77.7 43.4L114.9 6.1M105.3 112.9L182 36.2M1 135.3L77.7 58.6M143.6 48.6L191.3 1"
      stroke="black"
      stroke-miterlimit="10"
    />
  </svg>
</template>
