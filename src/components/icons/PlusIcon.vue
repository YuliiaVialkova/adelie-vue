<script setup>
import { computed } from 'vue'

const props = defineProps({
  top: { type: String, default: null },
  left: { type: String, default: null },
  right: { type: String, default: null },
  bottom: { type: String, default: null },
})

const positionStyles = computed(() => {
  const style = {}
  if (props.top) style.top = props.top
  if (props.left) style.left = props.left
  if (props.right) style.right = props.right
  if (props.bottom) style.bottom = props.bottom
  return style
})
</script>

<template>
  <div class="plus-icon" :style="positionStyles"></div>
</template>

<style scoped>
.plus-icon {
  position: absolute;
  width: 8px;
  height: 8px;
  background: url('@/assets/images/design/plus.svg') no-repeat center;
  background-size: contain;
}
.visible-on-desktop {
  @media (max-width: 1024px) {
    display: none;
  }
}
.visible-on-mobile {
  @media (min-width: 1025px) {
    display: none;
  }
}
</style>
