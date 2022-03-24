<template>
  <div>
    <button @click="handleChange">vuex 使用测试</button>
    <button @click="henleMessage">点击通知</button>
    <router-view name="transmission"/>
  </div>
</template>

<script setup>

import { useStore } from 'vuex';
// eslint-disable-next-line

const fs = window.require('fs');
const os = window.require('os');
const process = window.require('process');
const { remote } = window.require('electron');
const { app, BrowserWindow, Notification } = remote;
const store = useStore();
const demo = fs.readFileSync('/Users/liumeng/Desktop/tx-classroom-resource/开课吧/electron/vue3_electron/package.json', 'utf8');
const handleChange = () => {
  console.info('fs 使用测试', demo);
  store.dispatch('setDemo', '修改后的值');
  console.log(store.state.demo, '获取vuex的值');
  console.log(os.type(), '返回操作系统名');
  console.log(process.getuid());
  console.log(app, BrowserWindow, Notification);
};

const henleMessage = () => {
  const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
    });
    win.loadFile('index.html');
  };
  const NOTIFICATION_TITLE = 'Basic Notification';
  const NOTIFICATION_BODY = 'Notification from the Main process';

  const showNotification = () => {
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show();
  };
  app.whenReady().then(createWindow).then(showNotification);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
};

</script>

<style lang="scss" scoped>

</style>
