<template>
  <div>
    <CoreHeader />
    <main>
      <h2>{{title}}</h2>
      <router-view />
    </main>
  </div>
</template>

<script>
import CoreHeader from '@/components/core/CoreHeader.vue';

export default {
  components: {
    CoreHeader
  },
  data() {
    return {
      title: '',
    }
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(to) {
        this.title = to.meta.title || 'Some Default Title';
      }
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/index';

main {
  padding: 30px 10% 30px 25%;
  @include pad-width {
    padding: 30px 30px 30px 255px;
  }
  @include phone-width {
    padding: 130px 30px 20px;
  }
}
</style>
