<template>
  <div class="treeMenu">
    <el-menu
      default-active="1"
      class="treeMenu__menu"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <div class="treeMenu__menu__icon">
            <div class="treeMenu__menu__icon__left">
              <svgIcon :IconName="'xiasanjiaoxing'"/>
              <span class="treeMenu__menu__icon__left__message">全部文件</span>
            </div>
            <div class="treeMenu__menu__icon__right">
              <svgIcon :IconName="'more'" />
            </div>
          </div>
        </template>
        <el-menu-item-group title="Group 1">
          <el-menu-item index="1-1">
            <template #title>
              <svgIcon :IconName="'yuanjing'" />
              <span class="treeMenu__menu__icon__left__message">图片</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="1-2">
            <template #title>
              <svgIcon :IconName="'wenjian'" />
              <span class="treeMenu__menu__icon__left__message">文档</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 3">
          <el-menu-item index="1-3">
            <template #title>
              <svgIcon :IconName="'yousanjiao'" />
              <span class="treeMenu__menu__icon__left__message">视频</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 4">
          <el-menu-item index="1-4">
            <template #title>
              <svgIcon :IconName="'zhongzi'" />
              <span class="treeMenu__menu__icon__left__message">种子</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 5">
          <el-menu-item index="1-5">
            <template #title>
              <svgIcon :IconName="'18erji-2'" />
              <span class="treeMenu__menu__icon__left__message">音频</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 6">
          <el-menu-item index="1-6">
            <template #title>
              <svgIcon :IconName="'more_light'" />
              <span class="treeMenu__menu__icon__left__message">其他</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import svgIcon from '@/components/SvgIncon/index.vue';

</script>

<style lang="scss" scoped>
.treeMenu{
  border-right: none;
  border-bottom: 1px solid rgb(172, 171, 171);
  width: 200px;
}
::v-deep .el-sub-menu__title{
  padding: 0  10px !important;
  vertical-align: none;
  .treeMenu__menu__icon{
    display: flex;
    width: 100%;
    justify-content: space-between;
    &__left{
      margin-left: 10px;
      &__message{
        margin-left: 20px;
      }
    }
  }

  .el-sub-menu__icon-arrow{
    display: none;
  }
}
  .treeMenu__menu__icon__left__message{
    padding-left: 15px;
  }
</style>
