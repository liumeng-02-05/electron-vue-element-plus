<template>
  <div class="tertiaryRouter">
    <div class="tertiaryRouter__left">
      <TreeMenu/>
    </div>
    <div class="tertiaryRouter__right">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import TreeMenu from '@views/Home/components/TreeMenu.vue';

</script>

<style lang="scss" scoped>
.tertiaryRouter{
  display: flex;
  height: 100%;
  justify-content: flex-start;
  &__right{
    flex: 1;
  }
}
</style>
