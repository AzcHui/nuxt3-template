<template>
  <n-menu :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" :render-label="renderMenuLabel" />
</template>

<script lang="ts">
import { h, ref, defineComponent } from 'vue';
import { NMenu } from 'naive-ui';
import type { MenuOption } from 'naive-ui';

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199'
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
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
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
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
            key: 'whisky',
            href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin'
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

export default defineComponent({
  components: {
    NMenu
  },
  setup() {
    return {
      collapsed: ref(false),
      menuOptions,
      renderMenuLabel(option: MenuOption) {
        if ('href' in option) {
          return h('a', { href: option.href, target: '_blank' }, option.label as string);
        }
        return option.label as string;
      }
    };
  }
});
</script>
