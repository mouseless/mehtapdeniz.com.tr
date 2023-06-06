<template>
  <ContentLink
    v-if="link?.to"
    :to="link.to"
    :class="`btn btn--${type}`"
  >
    <i
      v-if="link.icon"
      :class="link.icon"
    />
    <span v-if="link.text">{{ link.text }}</span>
    <span v-else-if="$slots.default"><slot /></span>
  </ContentLink>
  <div
    v-else
    :class="`btn btn--${type}`"
  >
    <i
      v-if="link?.icon"
      :class="link.icon"
    />
    <span v-if="link?.text">{{ link.text }}</span>
    <span v-else-if="$slots.default"><slot /></span>
  </div>
</template>
<script setup lang="ts">
import { Link } from "~/types";

withDefaults(defineProps<{
  type?: string,
  link?: Link
}>(), {
  type: "white",
  link: undefined
});
</script>
<style lang="scss" scoped>
$button-font-size: $body-font-size - 1;
$padding: 36px;
$padding-step: 6px;
$height: 54px;
$height-step: 4px;

.btn {
  font-size: $button-font-size;
  font-weight: 500;
  border-style: solid;
  border-radius: 5px;
  border-color: transparent;
  border: 1px solid $white;
  padding: 0 $padding;
  text-align: center;
  transition: all 0.4s ease-in-out;
  height: $height;
  line-height: $height;
  letter-spacing: 0em;
  color: $white;
  background: $theme-color--default;
  transform: translateY(0px);

  @media #{$desktop-device} {
    font-size: $button-font-size - 1;
    padding: 0 $padding - $padding-step;
    height: $height - $height-step;
    line-height: $height - $height-step;
  }

  @media #{$tablet-device} {
    font-size: $button-font-size - 2;
    padding: 0 $padding - $padding-step * 2;
    height: $height - $height-step * 2;
    line-height: $height - $height-step * 2;
  }

  @media #{$large-mobile} {
    font-size: $button-font-size - 3;
    padding: 0 $padding - $padding-step * 3;
    height: $height - $height-step * 3;
    line-height: $height - $height-step * 3;
  }

  i {
    font-size: 24px;
    line-height: $height;
    vertical-align: bottom;

    @media #{$desktop-device} {
      font-size: 20px;
      line-height: $height - $height-step * 1;
    }

    @media #{$tablet-device} {
      font-size: 18px;
      line-height: $height - $height-step * 2;
    }

    @media #{$large-mobile} {
      font-size: 16px;
      line-height: $height - $height-step * 3;
    }
  }

  i+span {
    margin-left: 10px;
    @media #{$desktop-device} { margin-left: 7px; }
    @media #{$tablet-device}, #{$large-mobile} { margin-left: 5px; }
  }

  &:hover, &:active, &:focus{
    font-weight: 500;
    color: $white;
    background: $theme-color--default;
    transform: translateY(-3px);
  }
  &--secondary{
    background-color: $theme-color--two;
    &:hover{
      background: $theme-color--two;
    }
  }
  &--black{
    background-color: $black;
    &:hover{
      background: $black;
    }
  }
  &--white{
    background-color: $white;
    color: $theme-color--default;
    box-shadow: 0 0 30px 5px rgba(0,0,0,0.07);
    &:hover, &:focus{
      background: $white;
      color: $theme-color--default;
    }
  }

  &--link{
    color: $theme-color--default;
    &:hover{
      transform: translateY(-5px);
    }
  }
}
</style>
