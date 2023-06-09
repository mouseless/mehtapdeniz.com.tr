<template>
  <div class="container">
    <slot />
  </div>
</template>
<script lang="js">
import { defineComponent } from "#imports";
export default defineComponent({
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  }
});
</script>
<style lang="scss" scoped>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
