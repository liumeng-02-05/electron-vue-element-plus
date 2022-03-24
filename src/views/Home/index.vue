<template>
  <layout :loading="loading" :error="error" :style="layoutStyle">
    11
  </layout>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Layout from '@/components/Layout/index.vue';

const loading = ref(false);
const error = ref(false);

const layoutStyle = reactive({
  backgroundColor: '#FFF',
});
</script>

<style lang="scss" scoped>
</style>
