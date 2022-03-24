<template>
  <div class="Home">
    <div class="Home__bottom">
      <div class="Home__bottom__left">
        <el-tabs :tab-position="tabPosition" >
        <el-tab-pane label="首页" index="1">
          <template #label>
            <div class="custom-tabs-label">
              <svgIcon :IconName="'a-tupianyihuifu-53'" />
              <span class="custom-tabs-label__message">首页</span>
            </div>
          </template>
        <router-view />
        </el-tab-pane>
        <el-tab-pane label="传输" index="2" name="second">
          <template #label>
            <div class="custom-tabs-label">
              <svgIcon :IconName="'chuanshuliebiao'" />
              <span class="custom-tabs-label__message">传输</span>
            </div>
          </template>
          <router-view name="transmission"></router-view>
        </el-tab-pane >
      </el-tabs>
      </div>
      <div class="Home__bottom_content"></div>
      <div class="Home__bottom_right"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import svgIcon from '@/components/SvgIncon/index.vue';

const tabPosition = ref('left');
</script>

<style lang="scss" scoped>
.Home{
  width: 100%;
  height: 100%;
  &__bottom{
    height: 100%;
    &__left{
      width: 100%;
      height: 100%;
      .el-tabs{
        height: 100%;
      }
    }
  }
}
::v-deep .el-tabs__item{
  margin-top: 20px;
  height: 50px;
}
::v-deep .el-tabs__active-bar{
  display: none;
}
::v-deep .el-tabs__nav-scroll{
  width: 70px;
  overflow: hidden;
}
.custom-tabs-label{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__message{
    font-size: 14px;
    line-height: 30px;
  }
}
::v-deep .el-tabs__content{
  margin-top: 10px;
  height: 100%;
  .el-tab-pane{
    height: 100%;
  }
}

</style>
