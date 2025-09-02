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
    class="decor-wavy-line4"
    :style="positionStyles"
    width="853"
    height="1617"
    viewBox="0 0 853 1617"
    fill="none"
  >
    <path
      d="M852 -24C842.4 -1.6 618 598 388 620M388 620C158 642 60 520 134 454C208 388 376 376 388 620ZM388 620C400 864 -140 1616 -140 1616"
      stroke="black"
    />
  </svg>
</template>
