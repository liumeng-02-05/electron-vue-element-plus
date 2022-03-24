<template>
  <div class="homeRightTitle">
    <div class="homeRightTitle__left">
      <el-button type="primary" class="homeRightTitle__left__button">
            <svgIcon :IconName="'shangchuan'" class="homeRightTitle__icon" />
        上传
      </el-button>
      <el-button color="#fff" class="homeRightTitle__left__button">
            <svgIcon :IconName="'xinjianwenjianjia'"  class="homeRightTitle__icon"/>
        新建文件夹
      </el-button>
      <el-button class="homeRightTitle__left__button" plain>新建在线文档</el-button>
    </div>
    <div class="homeRightTitle__right">
      <div class="homeRightTitle__right__serach">
        <el-input v-model="input" placeholder="搜索全部文件"
          class="homeRightTitle__right__serach__input" >
          <template #prefix>
            <el-icon class="el-input__icon" :size="10"><Search /></el-icon>
          </template>
        </el-input>
      </div>
      <div class="homeRightTitle__right__show">
        <el-icon :class="[
          bgFlag == 1 ? 'homeRightTitle__right__show__bg' : '' ,
          'homeRightTitle__right__show__left']" :size="20"><Expand /></el-icon>
        <SvgIcon :IconName="'caidan1'"  class="homeRightTitle__right__show__right"/>
      </div>
      <div class="homeRightTitle__right__refresh" @click="handleGetBuckets">
        <SvgIcon :IconName="'shuaxin'"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

import { Search, Expand } from '@element-plus/icons';
import SvgIcon from '@/components/SvgIncon/index.vue';

defineProps({
  handleGetBuckets: {
    type: Function,
  },
});

const bgFlag = ref(1);
</script>

<style lang="scss" scoped>
.homeRightTitle{
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F5F5F5;
  &__left{
    padding-left: 20px;
    &__button{
      height: 30px;
      font-family: "PingFangSC-Regular";
      font-size: 14px;
      letter-spacing: 0;
    }
  }
  &__right{
    padding-right: 20px;
    display: flex;
    justify-content: flex-start;
    align-self: center;
    &__serach{
      width: 150px;
    }
    &__show{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      &__right{
        border: 1px solid rgb(184, 183, 183);
        padding: 0 10px;
        border-radius: 2px;
        border-bottom-right-radius: 2px;
        border-top-right-radius: 2px;
        color: rgb(180, 179, 179);
      }
      &__left{
        border: 1px solid rgb(184, 183, 183);
        border-right: none;
        padding: 0 10px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        color: rgb(180, 179, 179);
      }
      &__bg{
        background: rgb(59, 59, 59);
        color: #fff;
      }
    }
    &__refresh{
      margin-left: 20px;
      align-self: center;
      border: 1px solid rgb(184, 183, 183);
      padding: 0 5px;
    }
  }
  &__icon{
    margin-right: 10px;
  }
}
::v-deep .el-button--default{
  --el-button-hover-text-color: rgb(54, 52, 52);
  border: 1px solid rgb(212, 212, 212);
}
::v-deep .el-input__inner{
  width: 100%;
  height: 25px;
  font-size: 10px;
  padding-left: 30px;
  line-height: 25px;
}

</style>
