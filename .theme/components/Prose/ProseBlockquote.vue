<template>
  <div class="container">
    <blockquote>
      <slot />
    </blockquote>
  </div>
</template>
<style lang="scss" scoped>
$bq-font-size: $body-font-size + 1;

blockquote {
  margin: 20px 20px 20px 5px !important;
  padding: 0 0 0 20px;
  line-height: 1.78;
  font-weight: 600;
  border-left: 4px solid #eee;
  border-left-color: $theme-color--two;
  position: relative;
  color: #333;

  font-size: $bq-font-size;
  @media #{$desktop-device} { font-size: $bq-font-size - 1; }
  @media #{$tablet-device} { font-size: $bq-font-size - 2; }
  @media #{$large-mobile} { font-size: $bq-font-size - 3; }
}
</style>
