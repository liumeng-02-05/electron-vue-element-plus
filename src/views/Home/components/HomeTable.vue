<template>
  <div class="homeTable">
    <el-table :data="tableData" class="homeTable__title"
    v-show="!!tableData"
    @row-click="handleCellClick"
    :header-row-class-name="'homeTable__title'">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="name" label="文件名" width="400" />
    <el-table-column prop="size" label="大小" width="180"
    sortable :sort-by="['size']"   :sort-orders="['ascending', 'descending']"
    />
    <el-table-column prop="update" label="修改时间"
      sortable  :sort-by="['size', 'update']"
      :sort-orders="['ascending', 'descending']"
      width="400"
    />
  </el-table>
  </div>
</template>

<script setup>
import {
  watch, ref, defineProps,
} from 'vue';
import { useStore } from 'vuex';

const store = useStore();

defineProps({
  handleCellClick: {
    type: Function,
  },
});
const tableData = ref(store.getters.bucketsList);

watch(() => store.getters.bucketsList, (value) => {
  tableData.value = value;
}, {
  deep: true,
  immediate: true,
});

</script>

<style lang="scss" scoped>
.homeTable {
  height: 100%;
  border: 1px solid rgb(197, 196, 196);
  margin-top: 10px;
  overflow-y:scroll ;
}
::v-deep .homeTable__title{
  th{
    background: rgb(249,249,249) !important;
  }
}
</style>
