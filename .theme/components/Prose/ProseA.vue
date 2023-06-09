<template>
  <NuxtLink
    :to="href"
    :target="href.startsWith('http') ? '_blank' : target"
  >
    <slot /> <i
      v-if="href.startsWith('http')"
      class="fa-solid fa-arrow-up-right-from-square"
    />
  </NuxtLink>
</template>
<script setup>
defineProps({
  href: {
    type: String,
    default: ""
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
});
</script>
<style lang="scss" scoped>
a {
  color: $theme-color--default;
  &:hover {
    text-decoration: underline;
  }
}
</style>
