<template>
  <div class="container">
    <h3 :id="id">
      <slot />
    </h3>
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
$font-size: $body-font-size + 6;
h3 {
  font-size: $font-size;
  @media #{$desktop-device} { font-size: $font-size - 1; }
  @media #{$tablet-device} { font-size: $font-size - 2; }
  @media #{$large-mobile} { font-size: $font-size - 3; }
}
</style>
