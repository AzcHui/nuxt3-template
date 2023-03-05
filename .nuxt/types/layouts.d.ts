import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "E:/项目/DEMO/nuxt3-demo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}