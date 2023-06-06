<template>
  <div>
    <ContentDoc v-if="!trailingSlash" :head="false">
      <template #not-found>
        <ContentDoc path="/not-found" :head="false" />
      </template>
    </ContentDoc>
  </div>
</template>
<script setup>
import { withoutTrailingSlash, joinURL } from "ufo";
import { useRuntimeConfig } from "#app";
import { useRoute, onMounted, useHead } from "#imports";

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
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

let content = null;
try {
  content = await queryContent(withoutTrailingSlash(route.path)).only(["og", "description", "title"]).findOne();
} catch {
  // content not found, no og for non-content urls
}

if(content) {
  const title = content.og?.title ?? content.title;
  const image = fullUrl(content.og?.image ?? "logo-primary-og.png");
  const description = limit(firstSentenceOf(content.og?.description ?? content.description), 150);
  const url = fullUrl(route.path);

  useHead({
    title,
    meta: [
      { hid: "og:url", property: "og:url", content: url },
      { hid: "og:title", property: "og:title", content: title },
      { hid: "description", property: "description", content: description },
      { hid: "og:description", property: "og:description", content: description },
      { hid: "og:image", property: "og:image", content: image }
    ]
  });
}

function fullUrl(path) {
  const { protocol, authority, baseUrl } = runtimeConfig.public;

  return `${protocol}://${joinURL(authority, baseUrl, path)}`;
}

function firstSentenceOf(text = " ") {
  return text
    .replaceAll("\n", " ")
    .replaceAll("\t", " ")
    .replaceAll("\r", " ")
    .replaceAll("!", ".")
    .replaceAll("?", ".")
    .replaceAll("...", ".")
    .split(".")
    .shift()
  ;
}

function limit(text, length) {
  return text.length >= length
    ? `${text.substring(0, length - 3)}...`
    : `${text}.`;
}
</script>
