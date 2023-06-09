<template>
  <NuxtLink
    :to="fixedTo"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>
<script setup>
import { computed } from "#imports";

const props = defineProps({
  to: { type: String, default: "" },
  target: { type: String, default: undefined }
});

const fixedTo = computed(() => {
  let result = props.to;

  result = removeSuffix(result, ".md");
  result = removeSuffix(result, "index");
  result = removeSuffix(result, "/");

  return result === "" ? "/" : result;
});

function removeSuffix(text, suffix) {
  if(text.endsWith(suffix)) {
    return text.slice(0, -suffix.length);
  }

  return text;
}
</script>
