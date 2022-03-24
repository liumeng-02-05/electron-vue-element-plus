<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="svgClass" ></use>
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  IconName: {
    type: String,
  },
});
const svgClass = computed(() => `#icon-${props.IconName}`);

</script>

<style lang="scss" scoped>
.icon {
  width: 20px;
  height: 20px;
  vertical-align: -0.15em !important;
  fill: currentColor;
  overflow: hidden;
}
</style>
