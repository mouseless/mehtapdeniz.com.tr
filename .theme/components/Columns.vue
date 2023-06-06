<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="row row--35">
          <div
            v-for="i in Array(count).fill(0).map((_, i) => i)"
            :key="i"
            :class="`col-lg-${lg} col-md-${md} mt-30`"
          >
            <slot :name="`column ${i+1}`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, useSlots } from "#imports";

const slots = useSlots();

const count = computed(() => Object.keys(slots).length);
const lg = computed(() => 12 / count.value);
const md = computed(() => count.value >= 4 ? lg.value * 2 : lg.value);
</script>
