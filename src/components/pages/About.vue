<template>
  <div class="about">
    <div class="me">
      <div class="photo">
        <el-image :src="require('@/assets/img/aboutme.jpg')"
                  :lazy="true">
          <div slot="placeholder"
               class="image-slot">Loading...</div>
        </el-image>
      </div>
      <div>
        <h1>吳采洪 / Rainbow 🌈</h1>
        <p>在前端已有 4 - 5 年經驗， <br />從一開始的設計畫面、切版到現在開發大型的 SPA 專案，<br />一路上真的學習到很多前端相關知識與技能，<br />還有跨部門、與不同性質職務的人溝通合作，<br />讓我能多角度思考事情、考慮專案。</p>
        <p>目前還正努力學習各種前端技術，<br />希望自己的進步及成長能夠被看見，請大家多指教。</p>
      </div>
    </div>
    <section>
      <AboutSection v-for="(item, index) in data"
                    :key="`about-section-${index}`"
                    :type="item.type"
                    :data="item.data" />
    </section>
  </div>
</template>

<script>
import AboutSection from '@/components/core/AboutSection';
import skillData from '@/assets/data/skills.json';
import experienceData from '@/assets/data/experience.json';
import interestData from '@/assets/data/interests.json';

export default {
  components: {
    AboutSection
  },
  data() {
    return {
      data: [
        { type: 'mainSkills', data: skillData.main },
        { type: 'otherSkills', data: skillData.other },
        { type: 'experience', data: experienceData },
        { type: 'interests', data: interestData }
      ]
    };
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/index';
.about {
  display: flex;
  flex-direction: column;
}
.me {
  margin: 30px 0 60px;
  display: flex;
  align-items: center;
  .photo {
    width: 250px;
    margin-right: 50px;
    img,
    .image-slot {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: #f5f5f5;
    }
    .image-slot {
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      text-align: center;
      font-size: 0.8em;
      color: #7c7c7c;
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
      img,
      .image-slot {
        width: 210px;
        height: 210px;
      }
    }
  }
}
</style>
