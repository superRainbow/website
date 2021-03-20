<template>
  <div :class="[ 'section', ABOUT_SECTION_CONFIG[type].class ]">
    <h3>
      <i>
        <font-awesome-icon :icon="ABOUT_SECTION_CONFIG[type].icon" />
      </i>
      <span>{{ ABOUT_SECTION_CONFIG[type].title }}</span>
    </h3>
    <ul class="content">
      <li v-for="(item, index) in data"
          :key="`${ABOUT_SECTION_CONFIG[type].class}-${index}`">
        <p class="title">{{ item.title }}</p>
        <font-awesome-icon v-if="item.icon"
                           :icon="item.icon" />
        <img v-if="item.img"
             :src="isLocalUrl(item.img)? imgPath(item.img) : item.img">
        <template v-if="item.des">
          <ul v-if="isArray(item.des)">
            <li v-for="i in item.des"
                :key="i">{{i}}</li>
          </ul>
          <small v-if="!isArray(item.des)">{{item.des}}</small>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { ABOUT_SECTION_CONFIG } from '@/utils/const.js';
import { isArray, isLocalUrl } from '@/utils/validate.js';
export default {
  props: ['type', 'data'],
  data() {
    return {
      ABOUT_SECTION_CONFIG,
    };
  },
  methods: {
    isArray,
    isLocalUrl,
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index';

.section {
  margin-bottom: 60px;

  h3 {
    margin-bottom: 10px;
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
  }

  .content {
    padding: 15px;
    border-radius: 10px;
    background: #f5f5f5;
    .title {
      color: #4fa4b7;
      font-weight: 600;
      margin: 0 0 5px;
      font-size: 1.1em;
    }
  }

  @include phone-width {
    h3 {
      span {
        font-size: 25px;
      }
    }
  }
}

.main-skills {
  .content {
    display: flex;
    flex-flow: wrap;
    & > li {
      display: flex;
      flex-direction: column-reverse;
      width: 33.3%;
      margin: 20px 0;
      text-align: center;
      .title {
        color: #7c7c7c;
      }
      svg {
        margin: 5px auto;
        font-size: 40px;
        color: #4fa4b7;
      }
    }
  }
  @include phone-width {
    .content {
      flex-direction: column;
      & > li {
        width: 100%;
        align-items: center;
        flex-direction: row-reverse;
        text-align: left;
        .title {
          width: 200px;
          margin-bottom: 0;
          font-size: 1.3em;
        }
      }
    }
  }
}
.other-skills {
  .content {
    display: flex;
    flex-flow: wrap;
    & > li {
      width: 33.3%;
      margin-bottom: 20px;
      ul {
        margin-left: 25px;
        list-style-type: disc;
        li {
          margin-bottom: 5px;
          font-size: 0.9em;
        }
      }
    }
  }

  @include phone-width {
    .content {
      flex-direction: column;
      .title {
        font-size: 1.3em;
        margin-bottom: 10px;
      }
      & > li {
        width: 100%;
        ul {
          li {
            font-size: 1.1em;
          }
        }
      }
    }
  }
}

.experience {
  .content {
    & > li {
      position: relative;
      margin-left: 15px;
      padding-left: 25px;
      padding-bottom: 25px;
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
    .content {
      & > li {
        p {
          font-size: 1em;
        }
      }
    }
  }
}

.interests {
  .content {
    display: flex;
    flex-flow: wrap;
    & > li {
      display: flex;
      flex-direction: column-reverse;
      width: 33.3%;
      margin: 20px 0;
      text-align: center;
      .title {
        color: #7c7c7c;
      }
      svg {
        margin: 5px auto;
        font-size: 40px;
        color: #4fa4b7;
        transition: transform 200ms ease-in-out;
      }
      &:hover {
        cursor: pointer;
        svg {
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
    .content {
      flex-direction: column;
      & > li {
        width: 100%;
        align-items: center;
        flex-direction: row-reverse;
        text-align: left;
        .title {
          width: 150px;
          margin-bottom: 0;
          font-size: 1.3em;
        }
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