<template>
  <div :class="`cta cta-bg-${type} section-space--ptb_60`">
    <div class="container">
      <div class="row align-items-center">
        <div :class="`col-xl-${12-xl} col-lg-${12-lg}`">
          <div :class="`cta-content ${links?.length > 0 ? 'md-text-center': 'text-center'}`">
            <h3 :class="`heading text-${inverseType}`">
              <slot />
            </h3>
          </div>
        </div>
        <div :class="`col-xl-${xl} col-lg-${lg}`">
          <div class="text-lg-end text-center">
            <Button
              v-for="link in links"
              :key="link.to"
              :link="link"
              :type="buttonType"
              class="ms-3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Link } from "~/types";
import { computed } from "#imports";

const props = withDefaults(defineProps<{
  type?: string,
  links?: Link[]
}>(), {
  type: "default",
  links: () => []
});

const inverseType = computed(() => props.type === "default" ? "white" : "default");
const buttonType = computed(() => props.type === "default" ? "white" : "primary");

const xl = computed(() => Math.round(props.links.length * 1.5));
const lg = computed(() => props.links.length * 2);
</script>
<style lang="scss" scoped>
.cta {
  &-bg {
    &-default { background-color: $theme-color--default; }
    &-white { background-color: $white; }
  }
  &-content {
    @media #{$tablet-device , $large-mobile}{
      text-align: center;
      margin-bottom: 10px;
    }

    h3 { margin: 0px; }
  }
}
</style>
<style lang="scss">
.cta-content {
  p {
    margin: 0px;
  }
}
</style>
