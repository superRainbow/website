<template>
  <div class="blog">
    <div class="content">
      <i>
        <font-awesome-icon icon="exclamation-triangle" />
      </i>
      <p>正在施工中....</p>
      <p>
        <a href="https://g901612002.github.io/"
           target="_blank">可先去舊網站此觀看</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
.blog {
  .content {
    text-align: center;
    font-size: 1.6em;
    padding: 40px 0;
  }
  i {
    font-size: 2.5em;
    display: block;
    margin-bottom: 20px;
  }
  a {
    color: $theme-bule;
  }
}
</style>
