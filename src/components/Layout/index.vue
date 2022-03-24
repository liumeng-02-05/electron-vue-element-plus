<template>
  <div class="layout" :style="style">
    <div class="layout__loading" v-if="loading">
      <van-loading
        color="#FC5717"
        size="24px"
        text-color="#333"
        text-size="18px"
      >
        加载中...
      </van-loading>
    </div>
    <div class="layout__error" v-else-if="error">
      <van-image
        src="https://fast-learn-oss.youbaobao.xyz/tb/error.png"
        width="110"
        height="107.5"
      />
      <div class="layout__error__title">网络竟然崩溃了</div>
      <div class="layout__error__message">{{ errorMessage }}</div>
      <van-button
        class="layout__error__btn"
        color="#7E7E7E"
        size="normal"
        plain
        round
        @click="refresh"
      >刷新
      </van-button>
    </div>
    <div class="layout__normal" v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '别紧张，试试看刷新页面~',
  },
  style: {
    type: Object,
    default() {
      return {};
    },
  },
});

const refresh = () => window.location.reload();
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;

  &__loading {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__error {
    height: 100%;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__title {
      font-size: 32px;
      color: #6C6C6C;
      margin-top: 47px;
    }

    &__message {
      font-size: 24px;
      color: #A5A5A5;
      margin-top: 9px;
    }

    &__btn {
      width: 132px;
      height: 48px;
      margin-top: 35px;
      border: 2px solid #979797;
      border-radius: 32px;
      font-size: 26px;
      color: #7E7E7E;
      background: transparent;
    }
  }
  &__normal{
    height: 100%;
  }
}
</style>
