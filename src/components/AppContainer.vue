<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 0 toRem(10);
}

.container--middle {
  max-width: toRem(1296);
}
.container--small {
  max-width: toRem(810);
}
.container--big {
  max-width: toRem(1332);
}
</style>
