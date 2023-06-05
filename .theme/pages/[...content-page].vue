<template>
  <div>
    <ContentDoc
      v-if="!trailingSlash"
      :head="false"
    />
  </div>
</template>
<script setup>
import { useRoute, onMounted } from "#imports";

const route = useRoute();
const trailingSlash = route.path !== "/" && route.path.endsWith("/");

onMounted(async () => {
  if(trailingSlash) {
    const { path, query, hash } = route;
    const nextPath = path.replace(/\/+$/, "");
    const nextRoute = { path: nextPath, query, hash };

    // works only if `router.options.strict` is enabled in `nuxt.config.ts`
    // replace prevents browser to record this navigation in its history
    await navigateTo(nextRoute, { replace: true });
  }
});
</script>
