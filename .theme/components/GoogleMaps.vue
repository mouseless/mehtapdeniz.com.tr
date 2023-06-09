<template>
  <div class="container">
    <iframe
      width="100%"
      height="450"
      style="border:0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyB7lTJemOq0YQVgKAPnFtDE4ZMTUChQT6A
        &q=${location}`"
    />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  location: { type: String, default: "" }
}>();
</script>
