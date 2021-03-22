<template>
  <div class="work">
    <el-collapse v-model="activeName"
                 accordion>
      <el-collapse-item v-for="(item, index) in data"
                        :key="`collapse-${index}`"
                        :title="item.title"
                        :name="index">
        <ul>
          <li v-for="project in item.projects"
              :key="project.name">
            <section>
              <h4>
                <span>{{project.name}}</span>
                <a v-if="project.url"
                   :href="project.url"
                   target="_blank">
                  <font-awesome-icon icon="link" />
                </a>
                <el-tooltip v-else
                            content="無 Demo 連結"
                            placement="top">
                  <a class="disabled">
                    <font-awesome-icon icon="link" />
                  </a>
                </el-tooltip>
                <a v-if="project.code"
                   :href="project.code"
                   target="_blank">
                  <font-awesome-icon icon="code" />
                </a>
                <el-tooltip v-else
                            content="程式不方便對外"
                            placement="top">
                  <a class="disabled">
                    <font-awesome-icon icon="code" />
                  </a>
                </el-tooltip>
              </h4>
              <p>{{project.des}}</p>
              <ol>
                <li v-for="skill in project.skills"
                    :key="skill">{{skill}}</li>
              </ol>
            </section>
            <el-image v-if="project.img"
                      :src="isLocalUrl(project.img)? imgPath(project.img) : project.img"
                      fit="cover"
                      :lazy="true">
              <div slot="placeholder"
                   class="image-slot">Loading...</div>
            </el-image>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import data from '@/assets/data/work.json';
import { isLocalUrl } from '@/utils/validate.js';

export default {
  data() {
    return {
      activeName: 0,
      data,
    };
  },
  methods: {
    isLocalUrl,
    imgPath(img) {
      return require(`@/assets/img/${img}`);
    }
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
        padding: 0 5%;
        margin: 20px 0;
        position: relative;
        & + li {
          &:before {
            content: '';
            width: 90%;
            border-top: 1px dashed #dfe5e6;
            position: absolute;
            top: -20px;
            left: 5%;
          }
        }
        section {
          order: 1;
          max-width: 350px;
          padding-left: 20px;
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
        .el-image {
          order: 0;
          display: block;
          overflow: inherit;
        }
        img,
        .image-slot {
          width: 400px;
          height: 300px;
        }
        .image-slot {
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: center;
          font-size: 0.8em;
          color: #7c7c7c;
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
            padding-left: 0;
          }
          img,
          .image-slot {
            order: 2;
            width: 100%;
            height: 200px;
          }
        }
      }
    }
  }
}
</style>
