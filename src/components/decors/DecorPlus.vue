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
  <div class="decor-plus" :style="positionStyles"></div>
</template>

<style>
.decor-plus {
  position: absolute;
  width: 8px;
  height: 8px;
  background: url('@/assets/images/design/plus.svg') no-repeat center;
  background-size: contain;
}
</style>
