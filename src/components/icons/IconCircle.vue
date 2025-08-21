<script setup>
defineProps({
  strokeWidth: {
    type: [Number, String],
    default: 5,
  },
  strokeColor: {
    type: String,
    default: '#4CF049',
  },
  size: {
    type: [Number, String],
    default: 24,
  },
})
</script>
<template>
  <svg
    class="circle-icon"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27Z"
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      vector-effect="non-scaling-stroke"
    />
  </svg>
</template>

<style scoped>
.circle-icon {
  display: block;
  position: absolute;
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
