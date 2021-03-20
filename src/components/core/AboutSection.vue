<template>
  <div :class="ABOUT_SECTION_CONFIG[type].class">
    <h3>
      <i>
        <font-awesome-icon :icon="ABOUT_SECTION_CONFIG[type].icon" />
      </i>
      <span>{{ ABOUT_SECTION_CONFIG[type].title }}</span>
    </h3>
    <ul>
      <li v-for="(item, index) in data"
          :key="`${ABOUT_SECTION_CONFIG[type].class}-${index}`">
        <p class="title">{{ item.title }}</p>
        <font-awesome-icon v-if="item.icon"
                           :icon="item.icon" />
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
import { isArray } from '@/utils/validate.js';
export default {
  props: ['type', 'data'],
  data() {
    return {
      ABOUT_SECTION_CONFIG,
    };
  },
  methods: {
    isArray,
  }
}
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

.main-skills {
  margin: 30px 0 60px;

  @include phone-width {
  }
}
.other-skills {
  margin: 30px 0 60px;
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
</style>