<template>
  <header :class="isShow">
    <a class="bar"
       @click="toggleMenu">
      <font-awesome-icon icon="bars" />
    </a>
    <div class="rainbow">
      <div class="photo"><img src="@/assets/img/rainbow.jpg" /></div>
      <div class="info">
        <h4>Rainbow</h4>
        <small>Front End Web Developer</small>
      </div>
    </div>
    <nav :class="isShow">
      <el-menu :default-active="activeItem"
               :router="true">
        <el-menu-item v-for="(item, i) in routeArray"
                      :key="i"
                      :index="item.name"
                      :route="item.path"
                      @click="toggleMenu">
          {{item.name}}
        </el-menu-item>
      </el-menu>
      <div class="other">
        <h4>CONTACT/FOLLOW</h4>
        <ul>
          <li v-for="(item, index) in data"
              :key="`contact-${index}`">
            <a :href="item.link"
               target="_blank">
              <font-awesome-icon :icon="item.icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import data from '@/assets/data/contact.json';

export default {
  data() {
    return {
      isShow: "",
      activeItem: "",
      data,
      routeArray: this.$store.state.route,
    };
  },
  mounted() {
    const activeIndex = this.$store.state.route.findIndex(
      item => item.path === this.$route.path
    );
    this.activeItem = this.$store.state.route[activeIndex].name;
  },
  methods: {
    toggleMenu() {
      this.isShow = this.isShow === "" ? "show" : "";
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/index';

header {
  width: 225px;
  height: 100%;
  position: fixed;
  z-index: 100;
  padding: 30px 15px;
  background: #f5f5f5;
  .bar {
    display: none;
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 5;
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    &:active,
    &:focus,
    &:hover {
      color: #fff;
    }
  }
  .rainbow {
    background: $theme-bule;
    padding: 50px 15px 5px 15px;
    margin: -30px 0 45px 0;
    position: relative;
    z-index: 2;
    &:after {
      content: '';
      position: absolute;
      background: $theme-bule;
      width: 100%;
      height: 30px;
      bottom: -15px;
      left: 0;
      transform: skewY(-5deg);
      z-index: -1;
    }
    .photo {
      img {
        width: 95%;
        border-radius: 50%;
        border: 5px solid #fff;
      }
    }
    .info {
      color: #ffffff9c;
      text-align: center;
      h4 {
        color: #fff;
        font-size: 1.6em;
        margin: 10px 0;
      }
    }
  }
  .el-menu {
    border: none;
    background: none;
    .el-menu-item {
      text-align: center;
      padding: 0 40px;
      font-size: 1.1em;
      color: #737879;
      & + .el-menu-item {
        border-top: 1px dashed #dfe5e6;
      }
      &.is-active {
        color: $theme-orange;
      }
      &:hover,
      &:focus {
        background: none;
        color: $theme-orange;
      }
    }
  }
  .other {
    margin-top: 30px;
    h4 {
      text-align: center;
      color: $theme-light-grey;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      li {
        width: 50%;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          text-align: center;
          border-radius: 50%;
          background: $theme-bule;
          color: #fff;
          font-size: 26px;
          transition-duration: 0.3s;
          svg {
            transition-duration: 0.3s;
          }
          &:hover {
            color: #2c798a;
            background: #4ec6e1;
            border-radius: 10px;
            transform: rotate(45deg) scale(0.8);
            svg {
              transform: rotate(-45deg) scale(1.5);
            }
          }
        }
      }
    }
  }
  @include phone-width {
    width: 100%;
    height: initial;
    padding: 0;
    background: transparent;
    &.show {
      height: 100%;
    }
    .bar {
      display: block;
    }
    .rainbow {
      padding: 15px 20px;
      margin: 0;
      display: flex;
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
      &:after {
        display: none;
      }
      .photo {
        width: 60px;
        img {
          width: 100%;
          border-radius: 50%;
          border: 2px solid #fff;
        }
      }
      .info {
        margin-left: 20px;
        h4 {
          font-size: 2.6em;
          margin: 0;
        }
        small {
          font-size: 0.4em;
        }
      }
    }
    nav {
      padding: 0;
      height: 0;
      background: #f5f5f5;
      transition: height 300ms ease-in-out;
      .el-menu {
        opacity: 0;
        height: 0;
        overflow: hidden;
        transition: opacity 500ms ease-in-out;
      }
      .other {
        height: 0;
        opacity: 0;
        margin-top: 0;
        overflow: hidden;
        transition: opacity 1500ms ease-in-out, height 1500ms ease-in-out;
      }
      &.show {
        position: relative;
        display: block;
        padding-top: 50px;
        height: 100%;
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 30px;
          top: -30px;
          left: 0;
          background: #f5f5f5;
        }
        .el-menu {
          opacity: 1;
          height: auto;
        }
        .other {
          opacity: 1;
          height: auto;
          margin-top: 50px;
        }
      }
    }
  }
}
</style>
