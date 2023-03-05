<template>
  <n-space style="margin-bottom: 12px">
    <n-switch v-model:value="showRail" />
    展示轨道
    <n-switch v-model:value="showBackground" />
    展示背景
  </n-space>
  <n-anchor :show-rail="showRail" :show-background="showBackground">
    <n-anchor-link title="演示">
      <n-anchor-link title="基础用法" />
      <n-anchor-link title="忽略间隔" />
      <n-anchor-link title="固定" />
      <n-anchor-link title="滚动到" />
    </n-anchor-link>
    <n-anchor-link title="API" />
  </n-anchor>
</template>

<script lang="ts" setup>
import { NSpace, NSwitch, NAnchor, NAnchorLink } from 'naive-ui';

const showRail = ref<boolean>(true);
const showBackground = ref<boolean>(true);
</script>
