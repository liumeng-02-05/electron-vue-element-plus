<template>
  <div class="layout">
    <MyTitle />
    <router-view/>
  </div>
</template>

<script setup>
import MyTitle from '@/components/MyTitle/index.vue';
</script>

<style lang="scss" scoped>
.layout{
  width: 100%;
  height: 100%;
}
</style>
