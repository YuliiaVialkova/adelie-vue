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
    class="decor-wavy-line6"
    :style="positionStyles"
    width="810"
    height="467"
    viewBox="0 0 810 467"
    fill="none"
  >
    <path
      d="M809.197 316.663C809.197 316.663 734.375 421.846 633.18 454.107C531.566 486.501 373.749 262.64 256.459 289.652C139.169 316.663 65.4004 263.652 65.4002 151.652C65.4 39.652 185.518 -62.3479 256.459 49.6521C327.4 161.652 -77.6382 451.652 15.4001 465.652"
      stroke="black"
    />
  </svg>
</template>
