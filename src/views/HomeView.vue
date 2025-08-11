<script setup>
import AppHomePageTitle from '../components/AppHomePageTitle.vue'
import AppPromo from '../components/AppPromo.vue'
import AppInnerHomePage from '../components/AppInnerHomePage.vue'
import AppStrategy from '../components/AppStrategy.vue'
import AppStructure from '../components/AppStructure.vue'
</script>

<template>
  <AppInnerHomePage>
    <AppHomePageTitle />
  </AppInnerHomePage>
  <AppInnerHomePage>
    <AppPromo />
  </AppInnerHomePage>
  <AppInnerHomePage>
    <AppStructure />
  </AppInnerHomePage>
  <AppInnerHomePage>
    <AppStrategy />
  </AppInnerHomePage>
</template>

<style lang="scss" scoped></style>
