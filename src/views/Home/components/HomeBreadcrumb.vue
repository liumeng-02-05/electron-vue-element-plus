<template>
  <div class="breadcrumb">
  <div class="breadcrumb__left">
    <el-breadcrumb :separator-icon="ArrowRight" >
    <el-breadcrumb-item v-for="(item, index) in crumbsList" :key="item"
    @click="handleJump(item)"
    :class="[
      index === crumbsList.length -1 ?  'breadcrumb__left__active' : ''
    ]"
    >
    {{item === '/' ? '首页' : item.replace('/', '')}}
    </el-breadcrumb-item >
  </el-breadcrumb>
  </div>
  <div class="breadcrumb__right">
    已选中1个文件/文件夹
  </div>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons';
import { useStore } from 'vuex';
import { watch, ref, defineProps } from 'vue';

defineProps({
  handleJump: {
    type: Function,
  },
});
const store = useStore();
const crumbsList = ref(store.getters.crumbsList.split(','));
watch(() => store.getters.crumbsList, (value) => {
  crumbsList.value = value.split(',');
}, {
  deep: true,
  immediate: true,
});
</script>

<style lang="scss" scoped>
.breadcrumb{
  height: 30px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  .el-breadcrumb{
    line-height: 30px;
  }
  &__left{
    &__active{
      ::v-deep .el-breadcrumb__inner{
        color: rgb(12, 12, 12);
      }
    }
  }
  &__right{
    line-height: 30px;
    font-size: 12px;
    margin-right: 10px;
    color: rgb(142, 143, 142);
  }
}
::v-deep .el-icon{
  margin: 0;
}
</style>
