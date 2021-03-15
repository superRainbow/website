<template>
  <div class="work">
    <h2>WORK</h2>
    <el-collapse v-model="activeName"
                 accordion>
      <el-collapse-item title="AngularJs"
                        name="1">
        <ul>
          <li>
            <section>
              <h4>
                <span>官方帳號</span>
                <a href="http://104.199.171.71:8080/channelweb/"
                   target="_blank">
                  <font-awesome-icon icon="link" />
                </a>
                <el-tooltip content="程式不方便對外"
                            placement="top">
                  <a class="disabled">
                    <font-awesome-icon icon="code" />
                  </a>
                </el-tooltip>
              </h4>
              <p>開發類似微信、Line@ 官方帳號後台，連動顯示在綁定的 APP上。</p>
              <ol>
                <li>導入 Scrum 開發專案</li>
                <li>SPA 網站架構</li>
                <li>Restful Api (Api 文件放置 gitbook 溝通)</li>
                <li>使用 Slack channel 來溝通專案</li>
              </ol>
            </section>
            <img src="@/assets/img/channel.jpg">
          </li>
          <li>
            <section>
              <h4>
                <span>迷塔克</span>
                <a href="http://35.201.249.100/PartyPlus/www/mtk_manage/"
                   target="_blank">
                  <font-awesome-icon icon="link" />
                </a>
                <el-tooltip content="程式不方便對外"
                            placement="top">
                  <a class="disabled">
                    <font-awesome-icon icon="code" />
                  </a>
                </el-tooltip>
              </h4>
              <p>開發使用者能進行現場即時互動問答遊戲的後台，透過Web後台、APP建立與主持遊戲室。</p>
              <ol>
                <li>SPA 網站架構</li>
                <li>Restful Api (Api 文件放置 gitbook 溝通)</li>
                <li>使用 Slack channel 來溝通專案</li>
                <li>使用 Trello 來規劃需求與追蹤問題</li>
              </ol>
            </section>
            <img src="@/assets/img/mitake.jpg">
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="Angular2/4"
                        name="2">
        <ul>
          <li>
            <section>
              <h4>
                <span>野村投信</span>
                <a href="http://118.163.25.225:2133/Web/Content/"
                   target="_blank">
                  <font-awesome-icon icon="link" />
                </a>
                <el-tooltip content="程式不方便對外"
                            placement="top">
                  <a class="disabled">
                    <font-awesome-icon icon="code" />
                  </a>
                </el-tooltip>
              </h4>
              <p>協助廠商開發對外交易網站，總共有六個前後平臺。</p>
              <ol>
                <li>SPA 網站架構</li>
                <li>Restful Api (使用 Swagger 來溝通測試)</li>
                <li>使用 Slack channel 來溝通專案</li>
                <li>使用 Trello 來規劃需求與追蹤問題</li>
              </ol>
            </section>
            <img class="angular"
                 src="@/assets/img/nomura.jpg">
          </li>
          <li>
            <section>
              <h4>
                <span>輔銷系統</span>
                <a href="http://star.mitake.com.tw/"
                   target="_blank">
                  <font-awesome-icon icon="link" />
                </a>
                <a href="https://github.com/superRainbow/star-sales"
                   target="_blank">
                  <font-awesome-icon icon="code" />
                </a>
              </h4>
              <p>協助公司產品製作宣傳頁面。</p>
              <ol>
                <li>SPA 網站架構</li>
                <li>使用 Trello 來規劃需求與追蹤問題</li>
              </ol>
            </section>
            <img class="angular"
                 src="@/assets/img/star.jpg">
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="Node"
                        name="3">
        <ul>
          <li>
            <section>
              <h4>
                <span>餐廳網站</span>
                <a href="https://gentle-caverns-16793.herokuapp.com/"
                   target="_blank">
                  <font-awesome-icon icon="link" />
                </a>
                <a href="https://github.com/superRainbow/rainbow-restaurant"
                   target="_blank">
                  <font-awesome-icon icon="code" />
                </a>
              </h4>
              <p>自己練習使用 Node 並結合 Express 開發一個小型網站。</p>
              <ol>
                <li>Expree 建立網站</li>
                <li>具有購物車、登入、申請、信件通知功能</li>
                <li>結合 Firebase 來串接資料</li>
                <li>網站架在 Heroku 上</li>
              </ol>
            </section>
            <img src="@/assets/img/restaurant.jpg">
          </li>
          <li>
            <section>
              <h4>
                <span>天氣預報</span>
                <a href="https://damp-refuge-29432.herokuapp.com/"
                   target="_blank">
                  <font-awesome-icon icon="link" />
                </a>
                <a href="https://github.com/superRainbow/node-weather"
                   target="_blank">
                  <font-awesome-icon icon="code" />
                </a>
              </h4>
              <p>自己練習使用 Node 來爬別人網站並顯示到自己的頁面上。</p>
              <ol>
                <li>request & cheerio 抓取中央氣象局資料</li>
                <li>Expree 建立網站</li>
                <li>網站架在 Heroku 上</li>
              </ol>
            </section>
            <img src="@/assets/img/weater.jpg">
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="Vue"
                        name="4">
        <ul>
          <li>
            <section>
              <h4>
                <span>邦邦</span>
                <a href="https://streamtopic.pixnet.net/"
                   target="_blank">
                  <font-awesome-icon icon="link" />
                </a>
                <el-tooltip content="程式不方便對外"
                            placement="top">
                  <a class="disabled">
                    <font-awesome-icon icon="code" />
                  </a>
                </el-tooltip>
              </h4>
              <p>公司產品：類似 FB 社群功能的平台</p>
              <ol>
                <li>前端使用 Vue2＋SCSS 開發公司產品，後端使用 PHP</li>
                <li>E2E 測試使用 Cypress</li>
                <li>有使用 GA、GTM 追蹤成效</li>
                <li>使用 Sentry 監控錯誤</li>
              </ol>
            </section>
            <img class="vue"
                 src="@/assets/img/streamtopic.png">
          </li>
          <li>
            <section>
              <h4>
                <span>個人介紹網站</span>
                <a href="https://superrainbow.github.io/website"
                   target="_blank">
                  <font-awesome-icon icon="link" />
                </a>
                <a href="https://github.com/superRainbow/superRainbow.github.io"
                   target="_blank">
                  <font-awesome-icon icon="code" />
                </a>
              </h4>
              <p>自己練習使用 Vue 開發一個小型網站。</p>
              <ol>
                <li>結合 Vue-cli、Vue-router、vuex</li>
                <li>網站架在 github.io 上</li>
              </ol>
            </section>
            <img class="vue"
                 src="@/assets/img/index.png">
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="練習"
                        name="5">
        <div class="try">
          <ol>
            <li>
              <h4>Vue - 井字遊戲</h4>
              <iframe height='265'
                      scrolling='no'
                      title='Vue -  井字遊戲'
                      src='//codepen.io/g901612002/embed/Yaxewo/?height=265&theme-id=0&default-tab=result&embed-version=2'
                      frameborder='no'
                      allowtransparency='true'
                      allowfullscreen='true'
                      style='width: 100%;'>See the Pen <a href='https://codepen.io/g901612002/pen/Yaxewo/'>Vue - 井字遊戲</a> by 吳采洪 (<a href='https://codepen.io/g901612002'>@g901612002</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
            </li>
            <li>
              <h4>Firebase - 排序</h4>
              <iframe height='265'
                      scrolling='no'
                      title='Firebase- 排序'
                      src='//codepen.io/g901612002/embed/qpmjjM/?height=265&theme-id=0&default-tab=result&embed-version=2'
                      frameborder='no'
                      allowtransparency='true'
                      allowfullscreen='true'
                      style='width: 100%;'>See the Pen <a href='https://codepen.io/g901612002/pen/qpmjjM/'>Firebase- 排序</a> by 吳采洪 (<a href='https://codepen.io/g901612002'>@g901612002</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
            </li>
            <li>
              <h4>Firebase- BMI</h4>
              <iframe height='265'
                      scrolling='no'
                      title='Firebase- BMI'
                      src='//codepen.io/g901612002/embed/vpmJeK/?height=265&theme-id=0&default-tab=result&embed-version=2'
                      frameborder='no'
                      allowtransparency='true'
                      allowfullscreen='true'
                      style='width: 100%;'>See the Pen <a href='https://codepen.io/g901612002/pen/vpmJeK/'>Firebase- BMI</a> by 吳采洪 (<a href='https://codepen.io/g901612002'>@g901612002</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
            </li>
          </ol>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "work",
  data() {
    return {
      activeName: '1'
    };
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
.work {
  .el-collapse-item {
    border-left: 1px solid #ebeef5;
    border-right: 1px solid #ebeef5;
  }
  .el-collapse-item__header {
    color: $theme-middle-grey;
    font-size: 1.2em;
    font-weight: normal;
    text-indent: 20px;
    &.is-active {
      font-weight: 600;
      color: $theme-h3;
      .el-collapse-item__arrow {
        line-height: 30px;
        font-weight: 600;
      }
    }
  }
  .el-collapse-item__content {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      & > li {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
        position: relative;
        & + li:before {
          content: '';
          width: 90%;
          border-top: 1px dashed #dfe5e6;
          position: absolute;
          top: -20px;
          left: 5%;
        }
        section {
          order: 1;
          max-width: 260px;
          h4 {
            color: $theme-orange;
            font-size: 1.2em;
            margin-bottom: 10px;
            span {
              margin-right: 10px;
            }
            a {
              color: $theme-orange;
              margin-right: 5px;
            }
            .disabled {
              color: $theme-light-grey;
            }
          }
          p {
            font-size: 0.9em;
          }
          ol {
            font-size: 0.8em;
            color: $theme-light-grey;
            list-style: inside;
          }
        }
        img {
          order: 0;
          width: 300px;
          height: 200px;
          object-fit: cover;
        }
        .angular {
          width: 300px;
          height: 300px;
        }
        .vue {
          width: 380px;
          height: 270px;
        }
      }
    }
    .try {
      width: 90%;
      margin: 30px auto;
      ol {
        li {
          margin-bottom: 30px;
          h4 {
            color: $theme-orange;
            font-size: 1.2em;
            margin-bottom: 10px;
          }
        }
      }
    }
    @include phone-width {
      margin: 0;
      ul {
        & > li {
          width: 90%;
          flex-direction: column;
          & + li:before {
            width: 100%;
            left: 0;
          }
          section {
            margin-bottom: 20px;
          }
          img,
          .angular,
          .vue {
            order: 2;
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
