<template>
  <div class="homeIndex__right">
    <HomeRightTitle :handleGetBuckets="handleGetBuckets"/>
    <HomeBreadcrumb :handleJump="handleJump"/>
    <HomeTable  :handleCellClick="handleCellClick" />
  </div>
</template>

<script setup>
import { BuckList, infoClient } from '@utils/aliOss';
import { formatList, formatCatalogue, isFIle } from '@utils/utils';
import { useStore } from 'vuex';

import HomeRightTitle from './components/HomeRightTitle.vue';
import HomeBreadcrumb from './components/HomeBreadcrumb.vue';
import HomeTable from './components/HomeTable.vue';

const store = useStore();
// 获取 buckets 列表
const handleGetBuckets = () => {
  BuckList.listBuckets().then((bucketsList) => {
    store.dispatch('Home/setcrumbs', '/');
    store.dispatch('Home/setBuctetsList', formatList(bucketsList.buckets));
  });
};
// 获取buckets 信息
handleGetBuckets();

// 跳转到指定文件夹
const jumpToFile = async () => {
  // 取出进入的buckets名，在进入二三层目录时需呀指定buckets，面包屑字段中记录了内容可以直接处理使用
  const buckets = store.getters.crumbsList.split(',')[1];
  const config = {
    delimiter: '/',
    'max-key': 10000,
  };
  // 从面包屑中取出要进入的文件名
  const fileNames = store.getters.crumbsList.replace(`/,${buckets}`, '').replace(/,/g, '');
  if (fileNames) {
    config.prefix = fileNames;
  }
  const params = await infoClient(buckets).list(config);
  let folder = []; // 文件夹集合
  let file = []; // 文件集合
  if (params.prefixes) {
    folder = formatCatalogue(params.prefixes, config.prefix);
  }
  if (params.objects) {
    file = formatList(params.objects, config.prefix);
  }
  store.dispatch('Home/setBuctetsList', folder.concat(file));
};
// 表格点击事件
const handleCellClick = async (row, column) => {
  const cellDetail = row;
  // 如果点击的单元格不属于文件名则没有任何效果，如果点击的单元格是文件名则重新渲染数据
  // 判断点击的内容是否是文件（暂缺）
  if (column.label === '文件名' && !isFIle(cellDetail.name)) {
    store.dispatch('Home/setcrumbs', `${store.state.Home.crumbsList},${cellDetail.name}`);
    await jumpToFile();
  }
};
// 面包屑导航
const handleJump = (crumbName) => {
  if (crumbName === '/') {
    handleGetBuckets();
  } else {
    // 判断点击的是不是之前的面包屑内容
    if (store.getters.crumbsList.indexOf(`,${crumbName}`)) {
      // 查找点击面包屑出现的位置，将后面的内容删除
      const newCrumbsList = store.getters.crumbsList.split(`${crumbName}`)[0];
      // 截取字符串有问题
      store.dispatch('Home/setcrumbs', newCrumbsList + crumbName);
    } else {
      store.dispatch('Home/setcrumbs', `${store.state.Home.crumbsList},${crumbName}`);
    }
    jumpToFile();
  }
};
</script>

<style lang="scss" scoped>
.homeIndex__right{
  height: 100%;
}
</style>
