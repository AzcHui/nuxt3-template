<template>
  <div class="footer">
    <n-space justify="center">
      <div class="footer_recordli f-1">
        <div>网络警察举报平台</div>
      </div>
      <div class="footer_recordli f-2">
        <div>公共信息网路安全监察</div>
      </div>
      <div class="footer_recordli f-3">
        <div>网上交易保障中心</div>
      </div>
      <div class="footer_recordli f-4">
        <div>网站信用良好 Credit Rating</div>
      </div>
      <div class="footer_recordli f-5">
        <div>可信网站身份验证</div>
      </div>
    </n-space>
    <div class="copyright">
      <div style="margin: 4px 0">Copyright© nuxt3-naive Reserved V.0.0.1</div>
      <div class="copyrightSvg">
        <div style="margin-right: 8px">建议使用浏览器为:</div>
        <n-space inline align="center">
          <img src="@/assets/edge.svg" />
          <img src="@/assets/guge.svg" />
          <img src="@/assets/uc.svg" />
          <img src="@/assets/360.svg" />
          <img src="@/assets/qq.svg" />
        </n-space>
      </div>
    </div>
  </div>
</template>
<script setup>
import { NSpace } from 'naive-ui';
</script>
<style lang="less" scoped>
// 精灵图偏移量数组
@list: 0, -47px, -94px, -141px, -188px;
.footer {
  .footer_recordli {
    width: 120px;
    height: 45px;
    text-indent: -9999px;
    background-image: url('@/assets/beian.png');
    background-position-x: left;

    each(@list, {
      &.f-@{index} {
        background-position-y: @value;
      };
    });
  }
  .copyright {
    text-align: center;
    .copyrightSvg {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
