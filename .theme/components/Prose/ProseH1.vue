<template>
  <div class="container">
    <h1 :id="id">
      <slot />
    </h1>
  </div>
</template>
<script setup>
defineProps({
  id: {
    type: String,
    default: null
  }
});
</script>
<style lang="scss" scoped>
$font-size: $body-font-size * 2;
h1 {
  font-size: $font-size;
  @media #{$desktop-device} { font-size: $font-size - 3*1; }
  @media #{$tablet-device} { font-size: $font-size - 3*2; }
  @media #{$large-mobile} { font-size: $font-size - 3*3; }
}
</style>
