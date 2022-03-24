<template>
  <div
    class="titlebtn"
    v-bind:style="style"
    v-on:click="click">
    <slot></slot>
    </div>
</template>

<script>

const { ipcRenderer: ipc } = window.require('electron');
const style = {
  min: {
    backgroundColor: 'rgb(235,180,36)',
  },
  max: {
    backgroundColor: 'rgb(39,190,48)',
  },
  close: {
    backgroundColor: 'rgb(252,72,71)',
  },
};
export default {
  name: 'Titlebtn',
  props: ['type'],
  computed: {
    // eslint-disable-next-line
    style: function () {
      return style[this.type];
    },
  },
  methods: {
    // eslint-disable-next-line
    click: function () {
      ipc.send(this.type);
    },
  },
};
</script>
<style>
.titlebtn {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-top: 10px;
  -webkit-app-region: no-drag;
}
</style>
