<script setup>
import AppHomePageTitle from '../components/AppHomePageTitle.vue'
import AppPromo from '../components/AppPromo.vue'
import AppInnerWrap from '@/components/AppInnerWrap.vue'
</script>

<template>
  <AppInnerWrap>
    <AppHomePageTitle />
  </AppInnerWrap>
  <AppInnerWrap>
    <AppPromo />
  </AppInnerWrap>
</template>
