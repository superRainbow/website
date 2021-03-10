<template>
  <div class="about">
    <h2>ABOUT ME</h2>
    <div class="me">
      <div class="photo">
        <img src="@/assets/img/aboutme.jpg"
             alt="">
      </div>
      <div>
        <h1>吳采洪 / Rainbow</h1>
        <p>在前端已有 4 - 5 年經驗， <br />從一開始的設計畫面、切版到現在開發大型的 SPA 專案，<br />一路上真的學習到很多前端相關知識與技能，還有跨部門、與不同性質職務的人溝通合作，<br />讓我能多角度思考事情、考慮專案。</p>
        <p>目前還正努力學習各種前端技術，希望自己的進步及成長能夠被看見，請大家多指教。</p>
      </div>
    </div>
    <div class="main-skills">
      <h3>
        <i>
          <font-awesome-icon icon="code" />
        </i>
        <span>Programming Skills</span>
      </h3>
      <ul>
        <li>
          <span class="title">HTML5</span>
          <el-progress :percentage="95"
                       :stroke-width="10"
                       :show-text="false"></el-progress>
        </li>
        <li>
          <span class="title">CSS3 & SCSS</span>
          <el-progress :percentage="90"
                       :stroke-width="10"
                       :show-text="false"></el-progress>
        </li>
        <li>
          <span class="title">JavaScript</span>
          <el-progress :percentage="60"
                       :stroke-width="10"
                       :show-text="false"></el-progress>
        </li>
        <li>
          <span class="title">jQuery</span>
          <el-progress :percentage="70"
                       :stroke-width="10"
                       :show-text="false"></el-progress>
        </li>
        <li>
          <span class="title">AngularJS</span>
          <el-progress :percentage="80"
                       :stroke-width="10"
                       :show-text="false"></el-progress>
        </li>
        <li>
          <span class="title">Angular2/4</span>
          <el-progress :percentage="70"
                       :stroke-width="10"
                       :show-text="false"></el-progress>
        </li>
        <li>
          <span class="title">NodeJS</span>
          <el-progress :percentage="55"
                       :stroke-width="10"
                       :show-text="false"></el-progress>
        </li>
        <li>
          <span class="title">VueJS</span>
          <el-progress :percentage="50"
                       :stroke-width="10"
                       :show-text="false"></el-progress>
        </li>
      </ul>
    </div>
    <div class="other-skills">
      <h3>
        <i>
          <font-awesome-icon icon="code" />
        </i>
        <span>Other Skills</span>
      </h3>
      <ul>
        <li>
          <span>Design</span>
          <el-progress type="circle"
                       :show-text="false"
                       :percentage="90"></el-progress>
          <p>
            <em>使用：PS、Sketch</em>
            <em>簡單的設計與切版</em>
            <em>基本的 UI、UX 觀念</em>
            <em>與設計師合作的經驗</em>
          </p>
        </li>
        <li>
          <span>Wireframe</span>
          <el-progress type="circle"
                       :show-text="false"
                       :percentage="70"></el-progress>
          <p>
            <em>Wireframe實作</em>
          </p>
        </li>
        <li>
          <span>版控</span>
          <el-progress type="circle"
                       :show-text="false"
                       :percentage="87"></el-progress>
          <p>
            <em>GIT</em>
            <em>(GUI：Source Tree)</em>
          </p>
        </li>
        <li>
          <span>SEO</span>
          <el-progress type="circle"
                       :show-text="false"
                       :percentage="63"></el-progress>
          <p>
            <em>HTML語義化</em>
            <em>Google Analytics</em>
          </p>
        </li>
        <li>
          <span>自動化</span>
          <el-progress type="circle"
                       :show-text="false"
                       :percentage="70"></el-progress>
          <p>
            <em>gulp、webpack</em>
          </p>
        </li>
        <li>
          <span>第三方串接</span>
          <el-progress type="circle"
                       :show-text="false"
                       :percentage="60"></el-progress>
          <p>
            <em>Facebook API</em>
            <em>Google Map</em>
          </p>
        </li>
      </ul>
    </div>
    <div class="experience">
      <h3>
        <i>
          <font-awesome-icon icon="briefcase" />
        </i>
        <span>Experience</span>
      </h3>
      <ul>
        <li>
          <p>Front End Web Developer | 三竹資訊</p>
          <small>2015 / 02 - Now</small>
        </li>
        <li>
          <p>ALPHA Hackathon</p>
          <small>2015 / 01</small>
        </li>
        <li>
          <p>Front End Web Developer | 春樹科技</p>
          <small>2014 / 07 - 2015 / 01</small>
        </li>
        <li>
          <p>Front End Web Developer | Uni-Net 聯網國際</p>
          <small>2013 / 09 - 2014 / 07</small>
        </li>
        <li>
          <p>Web Designer | TutorABC</p>
          <small>2012 / 06 - 2013 / 06</small>
        </li>
      </ul>
    </div>
    <div class="interests">
      <h3>
        <i>
          <font-awesome-icon icon="star" />
        </i>
        <span>INTERESTS</span>
      </h3>
      <ul>
        <li>
          <i>
            <font-awesome-icon icon="user" />
          </i>
          <span>Yoga</span>
        </li>
        <li>
          <i>
            <font-awesome-icon icon="paint-brush" />
          </i>
          <span>Paint</span>
        </li>
        <li>
          <i>
            <font-awesome-icon icon="music" />
          </i>
          <span>Music</span>
        </li>
        <li>
          <i>
            <font-awesome-icon icon="film" />
          </i>
          <span>Movie</span>
        </li>
        <li>
          <i>
            <font-awesome-icon icon="plane" />
          </i>
          <span>Trival</span>
        </li>
        <li>
          <i>
            <font-awesome-icon icon="camera" />
          </i>
          <span>Photo</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index';
h3 {
  margin-bottom: 30px;
  i {
    color: #fff;
    background: $theme-bule;
    display: inline-block;
    width: 40px;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    margin-right: 8px;
    transition-duration: 0.3s;
  }
  span {
    display: inline-block;
    vertical-align: middle;
    color: $theme-h3;
    font-size: 1.2em;
    line-height: 40px;
  }
  @include phone-width {
    span {
      font-size: 25px;
    }
  }
}
.about {
  display: flex;
  flex-wrap: wrap;
  .me,
  .main-skills,
  .other-skills,
  h2 {
    width: 100%;
  }
  .experience,
  .interests {
    width: 50%;
  }
  @include phone-width {
    .experience,
    .interests {
      width: 100%;
      margin: 30px 0 60px;
    }
  }
}
.me {
  margin: 30px 0 60px;
  display: flex;
  align-items: center;
  .photo {
    width: 250px;
    margin-right: 50px;
    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }
  }
  h1 {
    color: $theme-h3;
    font-weight: 600;
    font-size: 2em;
    margin-bottom: 20px;
  }
  @include phone-width {
    flex-direction: column;
    .photo {
      width: 60%;
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
}
.main-skills {
  margin: 30px 0 60px;
  ul {
    margin-left: 60px;
    li {
      margin-bottom: 15px;
      transition: color 350ms ease-in-out;
      &:hover {
        color: $theme-dark-grey;
      }
      .title {
        font-size: 1.3em;
        display: inline-block;
        width: 140px;
      }
      .el-progress {
        display: inline-block;
        width: calc(100% - 150px);
      }
    }
  }
  @include phone-width {
    ul {
      margin-left: 0px;
    }
  }
}
.other-skills {
  margin: 30px 0 60px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      position: relative;
      span {
        font-size: 1.1em;
        text-align: center;
        display: block;
        width: 90px;
        position: absolute;
        top: 55px;
        left: 50%;
        margin-left: -45px;
        color: $theme-bule;
        transition: color 350ms ease-in-out;
      }
      p {
        margin-top: 20px;
        font-size: 0.5em;
        text-align: center;
        em {
          display: block;
        }
      }
      &:hover {
        span {
          color: $theme-dark-grey;
        }
      }
    }
  }
  @include phone-width {
    ul {
      flex-direction: column;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        span {
          margin: 0;
          left: 20px;
        }
        p {
          font-size: 0.9em;
          margin-left: 30px;
          text-align: left;
        }
      }
    }
  }
}
.experience {
  ul {
    li {
      position: relative;
      margin-left: 15px;
      padding-left: 25px;
      padding-bottom: 25px;
      p {
        color: $theme-bule;
        font-weight: 600;
        margin: 0 0 5px;
        font-size: 1.1em;
      }
      span {
        transition-duration: 0.3s;
      }
      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
      }
      &:before {
        width: 7px;
        height: 7px;
        border: 3px solid $theme-middle-grey;
        background: #fcfcfc;
        border-radius: 50%;
        left: 0;
        z-index: 1;
      }
      &:after {
        width: 3px;
        height: 100%;
        background: $theme-middle-grey;
        left: 5px;
        top: 0;
      }
      &:hover {
        &:before {
          animation: circle 1.2s infinite;
        }
        p {
          color: $theme-orange;
        }
      }
    }
  }
  @include phone-width {
    ul {
      li {
        p {
          font-size: 1em;
        }
      }
    }
  }
}
.interests {
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      text-align: center;
      width: 50%;
      margin: 25px 0;
      i,
      span {
        display: block;
      }
      i {
        font-size: 35px;
        margin-bottom: 10px;
        transition-duration: 0.3s;
      }
      &:hover {
        i {
          color: $theme-orange;
          transform: scale(1.2);
        }
        span {
          color: $theme-orange;
          transition-duration: 0.3s;
        }
      }
    }
  }
  @include phone-width {
    ul {
      li {
        width: 33%;
        margin: 10px 0;
      }
    }
  }
}

@keyframes circle {
  from {
    box-shadow: 0 0 0 0px $theme-dark-grey;
  }
  to {
    box-shadow: 0 0 0 6px rgba(61, 64, 91, 0);
  }
}
</style>
