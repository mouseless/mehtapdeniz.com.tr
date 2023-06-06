<template>
  <div class="container">
    <ol class="automatic-numbered-list">
      <slot />
    </ol>
  </div>
</template>
<style lang="scss" scoped>
ol {
    min-width: 45px;
    margin: 0;
    padding-left: 14px;
}
</style>
