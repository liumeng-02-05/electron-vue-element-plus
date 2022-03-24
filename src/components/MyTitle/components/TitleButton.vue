<template>
    <div class="mytitle">
        <Titlebtn type="close" ><el-icon><Close /></el-icon></Titlebtn>
        <Titlebtn type="min" ><el-icon><Minus /></el-icon></Titlebtn>
        <Titlebtn type="max" ><el-icon><Scissor /></el-icon></Titlebtn>
    </div>
</template>

<script setup>
import { Close, Minus, Scissor } from '@element-plus/icons';
import Titlebtn from './TitleButtonItem.vue';

</script>
<style>
.mytitle {
  position: absolute;
  width: 100%;
  height: 20px;
  -webkit-app-region: drag;
  display: flex;
  justify-content: space-around;
  align-self: center;
}
</style>
