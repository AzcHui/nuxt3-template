<template>
  <div class="footer">
    <div class="footer_record">
      <div class="footer_recordArea">
        <div class="footer_recordUl">
          <div class="footer_recordli">
            <div>网路警察举报平台</div>
          </div>
          <div class="footer_recordli">
            <div>公共信息网路安全监察</div>
          </div>
          <div class="footer_recordli">
            <div>网上交易保障中心</div>
          </div>
          <div class="footer_recordli">
            <div>网站信用良好 Credit Rating</div>
          </div>
          <div class="footer_recordli">
            <div>可信网站身份验证</div>
          </div>
        </div>
        <div class="copyright">
          <div class="copyrightOne">Copyright© nuxt3-naive Reserved V.0.0.1</div>
          <div class="copyrightThree">
            建议使用浏览器为:
            <div>
              <img src="@/assets/edge.svg" alt="" />
            </div>
            <div>
              <img src="@/assets/guge.svg" alt="" />
            </div>
            <div>
              <img src="@/assets/uc.svg" alt="" />
            </div>
            <div>
              <img src="@/assets/360.svg" alt="" />
            </div>
            <div>
              <img src="@/assets/qq.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.footer {
  background: #abcff6;

  // 备案
  .footer_record {
    box-sizing: border-box;
    margin-top: 0 !important;
    overflow: hidden;
    padding: 16px 0 27px;
    background: #d4d4d4;
    font-size: 12px;
    color: #64656a;
    .footer_recordArea {
      width: 880px;
      margin: 0 auto;
      .footer_recordUl {
        display: flex;
        width: 710px;
        margin: 46px auto 30px;
        text-align: center;
        .footer_recordli {
          box-sizing: border-box;
          display: inline-block;
          margin: 0 12px;
          width: 120px;
          height: 45px;
          text-indent: -9999px;
          background-image: url("@/assets/beian.png");
          background-position-x: left;
          &:nth-child(1) {
            background-position-y: 0;
          }
          &:nth-child(2) {
            background-position-y: -47px;
          }
          &:nth-child(3) {
            background-position-y: -94px;
          }
          &:nth-child(4) {
            background-position-y: -141px;
          }
          &:nth-child(5) {
            background-position-y: -188px;
          }
        }
      }
      .copyright {
        text-align: center;
        box-sizing: border-box;
        .copyrightOne {
          margin-bottom: 3px;
        }
        .copyrightTwo {
          margin-bottom: 3px;
        }
        .copyrightThree {
          box-sizing: border-box;
          margin-bottom: 3px;
          div {
            display: inline-block;
            box-sizing: border-box;
            width: 30px;
            height: 30px;
            margin-left: 3px;
            vertical-align: middle;
            img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
