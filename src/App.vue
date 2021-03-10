<template>
  <div>
    <core-header></core-header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import CoreHeader from '@/components/core/CoreHeader.vue';

export default {
  name: 'app',
  components: {
    CoreHeader
  },
  data() {
    return {

    }
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
