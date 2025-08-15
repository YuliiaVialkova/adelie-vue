<script setup>
defineProps({
  beforeX: {
    type: String,
    default: '0px',
  },
  beforeY: {
    type: String,
    default: '0px',
  },
  afterX: {
    type: String,
    default: '0px',
  },
  afterY: {
    type: String,
    default: '0px',
  },
})
</script>

<template>
  <div
    class="decorated-block"
    :style="{
      '--before-x': beforeX,
      '--before-y': beforeY,
      '--after-x': afterX,
      '--after-y': afterY,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.decorated-block {
  position: relative;
}
.decorated-block::before,
.decorated-block::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: url(../../assests/images/design/plus.svg) no-repeat center;
}
.decorated-block::before {
  top: var(--before-x);
  left: var(--before-y);
}
.decorated-block::after {
  top: var(--after-x);
  right: var(--after-y);
}
</style>
