<template>
  <div class="container">
    <h5 :id="id">
      <slot />
    </h5>
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
$font-size: $body-font-size + 2;
h5 {
  font-size: $font-size;
  @media #{$desktop-device} { font-size: $font-size - 1; }
  @media #{$tablet-device} { font-size: $font-size - 2; }
  @media #{$large-mobile} { font-size: $font-size - 3; }
}
</style>
