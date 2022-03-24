<template>
  <div class="MyTitle">
    <div class="MyTitle__left">
      <TitleButton/>
    </div>
    <div class="MyTitle__content">
      自定义标题栏
    </div>
    <div class="MyTitle__right"></div>
  </div>
</template>

<script setup>
import TitleButton from './components/TitleButton.vue';

const { remote } = window.require('electron');
const { BrowserWindow, ipcMain } = remote;
const mainWindow = BrowserWindow.getFocusedWindow();
// console.log(ipcMain, BrowserWindow);
ipcMain.on('min', () => mainWindow.minimize());
ipcMain.on('max', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
});
ipcMain.on('close', () => mainWindow.close());
</script>

<style lang="scss" scoped>
.MyTitle{
  height: 50px;
  display: flex;
  width: 100%;
  border: 1px solid rgb(196, 194, 194);
  &__left{
    width: 80px;
    position: relative;
  }
  &__content{
    flex: 1;
    line-height: 50px;
    text-align: center;
  }
  &__right{
    width: 10%;
  }
}
</style>
