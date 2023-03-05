import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "E:/项目/DEMO/nuxt3-demo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}