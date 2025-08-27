<script setup>
import { usePositionStyles } from '@/stores/usePositionStyles'
import { useSizeStyles } from '@/stores/useSizeStyles'

const props = defineProps({
  top: { type: String, default: null },
  left: { type: String, default: null },
  right: { type: String, default: null },
  bottom: { type: String, default: null },
  width: { type: [Number, String], default: 'auto' },
  height: { type: [Number, String], default: 'auto' },
})

const positionStyles = usePositionStyles(props)
const sizeStyles = useSizeStyles(props)
</script>

<template>
  <svg
    class="decor-three-lines"
    xmlns="http://www.w3.org/2000/svg"
    :style="{ ...positionStyles, ...sizeStyles }"
    width="208"
    height="45"
    viewBox="0 0 208 45"
    fill="none"
  >
    <path d="M207.1 21.1H61.9V27.1H207.1V21.1Z" fill="#4CF049" />
    <path d="M175.2 36.5H30V44.5H175.2V36.5Z" fill="#4CF049" />
    <path d="M145.2 0H0V8H145.2V0Z" fill="#4CF049" />
  </svg>
</template>
