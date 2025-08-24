<script setup>
import { usePositionStyles } from '@/stores/usePositionStyles'
import { useSizeStyles } from '@/stores/useSizeStyles'
import { useSvgStrokeAttrs } from '@/stores/useSvgStrokeAttrs'

const props = defineProps({
  top: { type: String, default: null },
  left: { type: String, default: null },
  right: { type: String, default: null },
  bottom: { type: String, default: null },
  width: { type: [Number, String], default: 'auto' },
  height: { type: [Number, String], default: 'auto' },
  strokeWidth: {
    type: [Number, String],
    default: 5,
  },
  strokeColor: { type: String, default: '#4CF049' },
})

const positionStyles = usePositionStyles(props)
const sizeStyles = useSizeStyles(props)
const strokeAttrs = useSvgStrokeAttrs(props)
</script>
<template>
  <svg
    class="decor-circle"
    xmlns="http://www.w3.org/2000/svg"
    :style="{ ...positionStyles, ...sizeStyles }"
    width="199"
    height="159"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27Z"
      v-bind="strokeAttrs"
      stroke-miterlimit="10"
      vector-effect="non-scaling-stroke"
    />
  </svg>
</template>
