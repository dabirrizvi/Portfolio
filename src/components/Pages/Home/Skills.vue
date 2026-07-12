<template>
  <section
    class="background container-fluid"
    aria-labelledby="technical-skills-heading"
  >
    <div class="row">
      <div class="col-12">
        <h2
          id="technical-skills-heading"
          class="heading"
        >
          Technical Skills
        </h2>
      </div>
    </div>

    <div class="row container-fluid skills-container">
      <div
        v-for="(column, columnIndex) in columns"
        :key="column.id"
        class="col-xxl-4 col-lg-4 col-sm-12 card"
      >
        <h3
          :id="`${column.id}-heading`"
          class="heading skill-category-heading"
        >
          {{ column.heading }}
        </h3>

        <div
          class="swiper-container"
          role="region"
          :aria-labelledby="`${column.id}-heading`"
          :aria-roledescription="`${column.heading} skills carousel`"
        >
          <kinesis-container>
            <kinesis-element
              :strength="0.5"
              type="rotate"
              transform-origin="50% 300%"
              axis="x"
            >
              <swiper
                :effect="'cards'"
                :grab-cursor="true"
                :modules="modules"
                :pagination="{ clickable: true }"
                :navigation="true"
                :keyboard="{
                  enabled: true,
                  onlyInViewport: true,
                }"
                :a11y="{
                  enabled: true,
                  prevSlideMessage: `Previous ${column.heading} skill`,
                  nextSlideMessage: `Next ${column.heading} skill`,
                  firstSlideMessage: 'This is the first skill',
                  lastSlideMessage: 'This is the last skill',
                  paginationBulletMessage: 'Go to skill {{index}}',
                  slideLabelMessage: '{{index}} of {{slidesLength}}',
                }"
                :observer="true"
                :observe-parents="true"
                class="mySwiper"
              >
                <swiper-slide
                  v-for="(skill, skillIndex) in column.skills"
                  :key="skill.id"
                  role="group"
                  :aria-roledescription="'slide'"
                  :aria-label="`${skill.name}, skill ${skillIndex + 1} of ${column.skills.length}`"
                >
                  <article
                    class="image-wrapper"
                    :style="{ backgroundColor: skill.color }"
                    :title="skill.name"
                    tabindex="0"
                    :aria-label="skill.name"
                  >
                    <img
                      v-if="!skill.imageFailed"
                      :src="skill.src"
                      alt=""
                      width="150"
                      height="150"
                      loading="lazy"
                      decoding="async"
                      class="skill-logo"
                      @error="handleImageError(skill)"
                    />

                    <span
                      v-else
                      class="skill-fallback"
                      aria-hidden="true"
                    >
                      {{ skill.shortName || skill.name }}
                    </span>

                    <span class="skill-name">
                      {{ skill.name }}
                    </span>
                  </article>
                </swiper-slide>
              </swiper>
            </kinesis-element>
          </kinesis-container>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  A11y,
  EffectCards,
  Keyboard,
  Navigation,
  Pagination,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const assetsBaseUrl =
  'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      modules: [
        A11y,
        EffectCards,
        Keyboard,
        Navigation,
        Pagination,
      ],

      columns: [
        {
          id: 'programming-languages',
          heading: 'Programming Languages',
          skills: [
            {
              id: 'php',
              name: 'PHP',
              shortName: 'PHP',
              src: `${assetsBaseUrl}/Lang/PHP.svg`,
              color: '#d9e2f2',
              imageFailed: false,
            },
            {
              id: 'javascript',
              name: 'JavaScript',
              shortName: 'JS',
              src: `${assetsBaseUrl}/Lang/JS.svg`,
              color: '#ffe66d',
              imageFailed: false,
            },
            {
              id: 'python',
              name: 'Python',
              shortName: 'PY',
              src: `${assetsBaseUrl}/Lang/Python.svg`,
              color: '#cde8f6',
              imageFailed: false,
            },
            {
              id: 'java',
              name: 'Java',
              shortName: 'JAVA',
              src: `${assetsBaseUrl}/Lang/JAVA.svg`,
              color: '#f7d6bf',
              imageFailed: false,
            },
          ],
        },

        {
          id: 'frontend-frameworks',
          heading: 'Frontend & Frameworks',
          skills: [
            {
              id: 'magento',
              name: 'Magento 2',
              shortName: 'M2',
              src: `${assetsBaseUrl}/Soft/Magento.svg`,
              color: '#f7c8b4',
              imageFailed: false,
            },
            {
              id: 'hyva',
              name: 'Hyvä',
              shortName: 'HYVÄ',
              src: `${assetsBaseUrl}/Soft/Hyva.svg`,
              color: '#d7f0df',
              imageFailed: false,
            },
            {
              id: 'react',
              name: 'React',
              shortName: 'REACT',
              src: `${assetsBaseUrl}/Soft/React.svg`,
              color: '#c8ebf4',
              imageFailed: false,
            },
            {
              id: 'vue',
              name: 'Vue.js',
              shortName: 'VUE',
              src: `${assetsBaseUrl}/Soft/Vue.svg`,
              color: '#d9f0df',
              imageFailed: false,
            },
            {
              id: 'alpine',
              name: 'Alpine.js',
              shortName: 'ALPINE',
              src: `${assetsBaseUrl}/Soft/Alpine.svg`,
              color: '#d8e3f7',
              imageFailed: false,
            },
            {
              id: 'tailwind',
              name: 'Tailwind CSS',
              shortName: 'TW',
              src: `${assetsBaseUrl}/Soft/Tailwind.svg`,
              color: '#cdeff5',
              imageFailed: false,
            },
            {
              id: 'knockout',
              name: 'Knockout.js',
              shortName: 'KO',
              src: `${assetsBaseUrl}/Soft/knockoutjs.svg`,
              color: '#e3d7f4',
              imageFailed: false,
            },
            {
              id: 'html',
              name: 'HTML5',
              shortName: 'HTML',
              src: `${assetsBaseUrl}/Soft/HTML.svg`,
              color: '#ffd2bd',
              imageFailed: false,
            },
            {
              id: 'css',
              name: 'CSS3',
              shortName: 'CSS',
              src: `${assetsBaseUrl}/Soft/CSS.svg`,
              color: '#cddff7',
              imageFailed: false,
            },
            {
              id: 'bootstrap',
              name: 'Bootstrap',
              shortName: 'BS',
              src: `${assetsBaseUrl}/Soft/Bootstrap.svg`,
              color: '#ddd1f2',
              imageFailed: false,
            },
            {
              id: 'sass',
              name: 'Sass',
              shortName: 'SASS',
              src: `${assetsBaseUrl}/Soft/Sass.svg`,
              color: '#f3d7e5',
              imageFailed: false,
            },
            {
              id: 'jquery',
              name: 'jQuery',
              shortName: 'jQ',
              src: `${assetsBaseUrl}/Soft/jQuery.svg`,
              color: '#d8e9f5',
              imageFailed: false,
            },
          ],
        },

        {
          id: 'backend-databases-devops',
          heading: 'Backend, Databases & DevOps',
          skills: [
            {
              id: 'node',
              name: 'Node.js',
              shortName: 'NODE',
              src: `${assetsBaseUrl}/Misc/nodejs-alt.svg`,
              color: '#d8efd8',
              imageFailed: false,
            },
            {
              id: 'express',
              name: 'Express.js',
              shortName: 'EXPRESS',
              src: `${assetsBaseUrl}/Misc/expressjs.svg`,
              color: '#e2e5e9',
              imageFailed: false,
            },
            {
              id: 'postgresql',
              name: 'PostgreSQL',
              shortName: 'PG',
              src: `${assetsBaseUrl}/Misc/POSTGRESQL.svg`,
              color: '#cdddea',
              imageFailed: false,
            },
            {
              id: 'mongodb',
              name: 'MongoDB',
              shortName: 'MONGO',
              src: `${assetsBaseUrl}/Misc/mongodb.svg`,
              color: '#d6edcf',
              imageFailed: false,
            },
            {
              id: 'mysql',
              name: 'MySQL',
              shortName: 'MYSQL',
              src: `${assetsBaseUrl}/Misc/mysql.svg`,
              color: '#f7e0ad',
              imageFailed: false,
            },
            {
              id: 'elasticsearch',
              name: 'Elasticsearch',
              shortName: 'ELASTIC',
              src: `${assetsBaseUrl}/Misc/Elasticsearch.svg`,
              color: '#f3e8ad',
              imageFailed: false,
            },
            {
              id: 'rest-api',
              name: 'REST APIs',
              shortName: 'REST',
              src: `${assetsBaseUrl}/Misc/REST.svg`,
              color: '#d7e3f4',
              imageFailed: false,
            },
            {
              id: 'graphql',
              name: 'GraphQL',
              shortName: 'GQL',
              src: `${assetsBaseUrl}/Misc/GraphQL.svg`,
              color: '#f2d1e8',
              imageFailed: false,
            },
            {
              id: 'docker',
              name: 'Docker',
              shortName: 'DOCKER',
              src: `${assetsBaseUrl}/Misc/docker.svg`,
              color: '#cfe8f7',
              imageFailed: false,
            },
            {
              id: 'git',
              name: 'Git',
              shortName: 'GIT',
              src: `${assetsBaseUrl}/Misc/Git.svg`,
              color: '#f4d0c4',
              imageFailed: false,
            },
            {
              id: 'ci-cd',
              name: 'CI/CD',
              shortName: 'CI/CD',
              src: `${assetsBaseUrl}/Misc/CICD.svg`,
              color: '#ddd9f5',
              imageFailed: false,
            },
            {
              id: 'hypernode',
              name: 'Hypernode',
              shortName: 'HYPERNODE',
              src: `${assetsBaseUrl}/Misc/Hypernode.svg`,
              color: '#cfe8dd',
              imageFailed: false,
            },
            {
              id: 'gcp',
              name: 'Google Cloud Platform',
              shortName: 'GCP',
              src: `${assetsBaseUrl}/Misc/GCP.png`,
              color: '#f4e5bd',
              imageFailed: false,
            },
            {
              id: 'jira',
              name: 'Jira',
              shortName: 'JIRA',
              src: `${assetsBaseUrl}/Misc/Jira.svg`,
              color: '#d4e0f5',
              imageFailed: false,
            },
            {
              id: 'agile',
              name: 'Agile / Scrum',
              shortName: 'AGILE',
              src: `${assetsBaseUrl}/Misc/Agile.svg`,
              color: '#e2dcf2',
              imageFailed: false,
            },
          ],
        },
      ],
    };
  },

  methods: {
    handleImageError(skill) {
      skill.imageFailed = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  margin: 0;
  padding: 50px 0;
}

.background {
  overflow: hidden;
  background-color: #36454f;
}

.skills-container {
  padding-right: 20px;
  padding-left: 20px;
}

.card {
  padding: 30px;
  border: 0;
  background-color: #36454f;
}

h2 {
  color: #ffe4c4;
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  font-size: 2rem;
}

.skill-category-heading {
  min-height: 58px;
  color: #f8f9fa;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
}

h2,
.skill-category-heading {
  text-align: center;
}

.swiper-container {
  display: flex;
  justify-content: center;
}

.swiper {
  width: 220px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 2px solid #111820;
  border-radius: 80px;
}

.image-wrapper {
  position: relative;
  display: flex;
  width: 220px;
  height: 320px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  outline: none;
}

.image-wrapper:focus-visible {
  outline: 4px solid #ffffff;
  outline-offset: -8px;
}

.skill-logo {
  display: block;
  width: auto;
  max-width: 78%;
  height: auto;
  max-height: 68%;
  margin-bottom: 35px;
  object-fit: contain;
}

.skill-fallback {
  max-width: 185px;
  margin-bottom: 35px;
  padding: 20px;
  color: #17212b;
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 1.2;
  overflow-wrap: anywhere;
  text-align: center;
}

.skill-name {
  position: absolute;
  right: 15px;
  bottom: 22px;
  left: 15px;
  padding: 9px 12px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 20px;
  background-color: rgba(16, 24, 32, 0.92);
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 42px;
  height: 42px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background-color: #17212b;
  color: #ffffff;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 1rem;
  font-weight: 700;
}

:deep(.swiper-button-prev:focus-visible),
:deep(.swiper-button-next:focus-visible),
:deep(.swiper-pagination-bullet:focus-visible) {
  outline: 3px solid #ffffff;
  outline-offset: 3px;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: #17212b;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #050b36;
  opacity: 1;
}

@media (max-width: 1200px) {
  .card {
    padding: 30px 15px;
  }
}

@media (max-width: 576px) {
  .skills-container {
    padding-right: 10px;
    padding-left: 10px;
  }

  .swiper,
  .image-wrapper {
    width: 200px;
    height: 290px;
  }

  .card {
    padding: 30px 10px;
  }

  .skill-logo {
    max-width: 74%;
    max-height: 64%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .image-wrapper,
  :deep(.swiper-wrapper),
  :deep(.swiper-slide) {
    scroll-behavior: auto;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>
