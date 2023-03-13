<template>
  <n-space justify="space-between">
    <div id="logo" title="logo">
      <NuxtLink to="/">
        <img src="../assets/logo.png" alt="logo" />
      </NuxtLink>
    </div>
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
  </n-space>
</template>

<script lang="ts" setup>
import { NIcon, NMenu, NSpace } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
// 引入图标
import { Icon } from '@iconify/vue';

function renderIcon(icon: String) {
  // return () => h(Icon, { icon });
  return () => h(NIcon, { size: 24, component: h(Icon, { icon }) });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        '且听风吟'
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon('mdi:home')
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon('mdi:animation'),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon('mdi:apple'),
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon('mdi:auto-fix'),
    children: [
      {
        label: '叙事者',
        key: 'narrator'
      },
      {
        label: '羊男',
        key: 'sheep-man'
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
];

const activeKey = ref<string | null>(null);
</script>
<style lang="less">
#logo {
  height: 42px;

  img {
    height: 100%;
  }
}
</style>
