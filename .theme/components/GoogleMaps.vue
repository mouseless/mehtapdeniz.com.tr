<template>
  <div class="container">
    <iframe
      width="600"
      height="450"
      style="border:0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      :src="`https://www.google.com/maps/embed/v1/place?key=${apiKey}
        &q=${location}`"
    />
  </div>
</template>
<script setup lang="ts">
import { useRuntimeConfig } from "#imports";

defineProps<{
  location: { type: String, default: "" }
}>();

const apiKey = useRuntimeConfig().public.googleApiKey;
</script>
