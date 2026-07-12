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
        v-for="column in columns"
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
          :aria-describedby="`${column.id}-status`"
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
                @slideChange="handleSlideChange(column.id, $event)"
              >
                <swiper-slide
                  v-for="(skill, skillIndex) in column.skills"
                  :key="skill.id"
                  role="group"
                  aria-roledescription="slide"
                  :aria-label="
                    `${skill.name}, skill ${skillIndex + 1} of ${column.skills.length}`
                  "
                >
                  <article
                    class="image-wrapper"
                    :style="{ backgroundColor: skill.color }"
                    :title="skill.name"
                    tabindex="0"
                    :aria-label="`${skill.name} skill card`"
                  >
                    <div class="logo-container">
                      <img
                        v-if="!skill.imageFailed"
                        :src="skill.src"
                        alt=""
                        width="170"
                        height="170"
                        loading="lazy"
                        decoding="async"
                        class="skill-logo"
                        :style="{
                          transform: `scale(${skill.logoScale || 1})`,
                        }"
                        @error="handleImageError(skill)"
                      />

                      <span
                        v-else
                        class="skill-fallback"
                        aria-hidden="true"
                      >
                        {{ skill.shortName || skill.name }}
                      </span>
                    </div>

                    <div class="skill-label">
                      <span class="skill-name">
                        {{ skill.name }}
                      </span>

                      <span class="skill-position">
                        Skill {{ skillIndex + 1 }} of {{ column.skills.length }}
                      </span>
                    </div>
                  </article>
                </swiper-slide>
              </swiper>
            </kinesis-element>
          </kinesis-container>
        </div>

        <div
          :id="`${column.id}-status`"
          class="current-skill"
          aria-live="polite"
          aria-atomic="true"
        >
          <span class="current-skill-label">
            Currently viewing
          </span>

          <strong class="current-skill-name">
            {{ getCurrentSkill(column).name }}
          </strong>

          <span class="current-skill-count">
            {{ getActiveIndex(column.id) + 1 }} of {{ column.skills.length }}
          </span>
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

      activeSlides: {
        'programming-languages': 0,
        'frontend-frameworks': 0,
        'backend-databases-devops': 0,
      },

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
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'javascript',
              name: 'JavaScript',
              shortName: 'JS',
              src: `${assetsBaseUrl}/Lang/JS.svg`,
              color: '#ffe66d',
              logoScale: 1.1,
              imageFailed: false,
            },
            {
              id: 'python',
              name: 'Python',
              shortName: 'PY',
              src: `${assetsBaseUrl}/Lang/Python.svg`,
              color: '#cde8f6',
              logoScale: 1.12,
              imageFailed: false,
            },
            {
              id: 'java',
              name: 'Java',
              shortName: 'JAVA',
              src: `${assetsBaseUrl}/Lang/JAVA.svg`,
              color: '#f7d6bf',
              logoScale: 1.15,
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
              logoScale: 1.18,
              imageFailed: false,
            },
            {
              id: 'hyva',
              name: 'Hyvä',
              shortName: 'HYVÄ',
              src: `${assetsBaseUrl}/Soft/Hyva.svg`,
              color: '#d7f0df',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'react',
              name: 'React',
              shortName: 'REACT',
              src: `${assetsBaseUrl}/Soft/React.svg`,
              color: '#c8ebf4',
              logoScale: 1.18,
              imageFailed: false,
            },
            {
              id: 'vue',
              name: 'Vue.js',
              shortName: 'VUE',
              src: `${assetsBaseUrl}/Soft/Vue.svg`,
              color: '#d9f0df',
              logoScale: 1.18,
              imageFailed: false,
            },
            {
              id: 'alpine',
              name: 'Alpine.js',
              shortName: 'ALPINE',
              src: `${assetsBaseUrl}/Soft/Alpine.svg`,
              color: '#d8e3f7',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'tailwind',
              name: 'Tailwind CSS',
              shortName: 'TW',
              src: `${assetsBaseUrl}/Soft/Tailwind.svg`,
              color: '#cdeff5',
              logoScale: 1.18,
              imageFailed: false,
            },
            {
              id: 'knockout',
              name: 'Knockout.js',
              shortName: 'KO',
              src: `${assetsBaseUrl}/Soft/knockoutjs.svg`,
              color: '#e3d7f4',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'html',
              name: 'HTML5',
              shortName: 'HTML',
              src: `${assetsBaseUrl}/Soft/HTML.svg`,
              color: '#ffd2bd',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'css',
              name: 'CSS3',
              shortName: 'CSS',
              src: `${assetsBaseUrl}/Soft/CSS.svg`,
              color: '#cddff7',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'bootstrap',
              name: 'Bootstrap',
              shortName: 'BS',
              src: `${assetsBaseUrl}/Soft/Bootstrap.svg`,
              color: '#ddd1f2',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'sass',
              name: 'Sass',
              shortName: 'SASS',
              src: `${assetsBaseUrl}/Soft/Sass.svg`,
              color: '#f3d7e5',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'jquery',
              name: 'jQuery',
              shortName: 'jQ',
              src: `${assetsBaseUrl}/Soft/jQuery.svg`,
              color: '#d8e9f5',
              logoScale: 1.15,
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
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'express',
              name: 'Express.js',
              shortName: 'EXPRESS',
              src: `${assetsBaseUrl}/Misc/expressjs.svg`,
              color: '#e2e5e9',
              logoScale: 1.12,
              imageFailed: false,
            },
            {
              id: 'postgresql',
              name: 'PostgreSQL',
              shortName: 'PG',
              src: `${assetsBaseUrl}/Misc/POSTGRESQL.svg`,
              color: '#cdddea',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'mongodb',
              name: 'MongoDB',
              shortName: 'MONGO',
              src: `${assetsBaseUrl}/Misc/mongodb.svg`,
              color: '#d6edcf',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'mysql',
              name: 'MySQL',
              shortName: 'MYSQL',
              src: `${assetsBaseUrl}/Misc/mysql.svg`,
              color: '#f7e0ad',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'elasticsearch',
              name: 'Elasticsearch',
              shortName: 'ELASTIC',
              src: `${assetsBaseUrl}/Misc/Elasticsearch.svg`,
              color: '#f3e8ad',
              logoScale: 1.12,
              imageFailed: false,
            },
            {
              id: 'rest-api',
              name: 'REST APIs',
              shortName: 'REST',
              src: `${assetsBaseUrl}/Misc/REST.svg`,
              color: '#d7e3f4',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'graphql',
              name: 'GraphQL',
              shortName: 'GQL',
              src: `${assetsBaseUrl}/Misc/GraphQL.svg`,
              color: '#f2d1e8',
              logoScale: 1.16,
              imageFailed: false,
            },
            {
              id: 'docker',
              name: 'Docker',
              shortName: 'DOCKER',
              src: `${assetsBaseUrl}/Misc/docker.svg`,
              color: '#cfe8f7',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'git',
              name: 'Git',
              shortName: 'GIT',
              src: `${assetsBaseUrl}/Misc/Git.svg`,
              color: '#f4d0c4',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'ci-cd',
              name: 'CI/CD',
              shortName: 'CI/CD',
              src: `${assetsBaseUrl}/Misc/CICD.svg`,
              color: '#ddd9f5',
              logoScale: 1.14,
              imageFailed: false,
            },
            {
              id: 'hypernode',
              name: 'Hypernode',
              shortName: 'HYPERNODE',
              src: `${assetsBaseUrl}/Misc/Hypernode.svg`,
              color: '#cfe8dd',
              logoScale: 1.12,
              imageFailed: false,
            },
            {
              id: 'gcp',
              name: 'Google Cloud Platform',
              shortName: 'GCP',
              src: `${assetsBaseUrl}/Misc/GCP.png`,
              color: '#f4e5bd',
              logoScale: 1.12,
              imageFailed: false,
            },
            {
              id: 'jira',
              name: 'Jira',
              shortName: 'JIRA',
              src: `${assetsBaseUrl}/Misc/Jira.svg`,
              color: '#d4e0f5',
              logoScale: 1.15,
              imageFailed: false,
            },
            {
              id: 'agile',
              name: 'Agile / Scrum',
              shortName: 'AGILE',
              src: `${assetsBaseUrl}/Misc/Agile.svg`,
              color: '#e2dcf2',
              logoScale: 1.14,
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

    handleSlideChange(columnId, swiper) {
      this.activeSlides[columnId] = swiper.realIndex;
    },

    getActiveIndex(columnId) {
      return this.activeSlides[columnId] || 0;
    },

    getCurrentSkill(column) {
      const activeIndex = this.getActiveIndex(column.id);

      return column.skills[activeIndex] || column.skills[0];
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
  margin-bottom: 24px;
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
  width: 250px;
  height: 360px;
  padding: 0 4px 34px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 3px solid #111820;
  border-radius: 54px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
}

.image-wrapper {
  position: relative;
  display: flex;
  width: 250px;
  height: 326px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  outline: none;
}

.image-wrapper:focus-visible {
  outline: 4px solid #ffffff;
  outline-offset: -8px;
}

.logo-container {
  display: flex;
  width: 100%;
  min-height: 220px;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 28px 24px 12px;
  overflow: hidden;
}

.skill-logo {
  display: block;
  width: 82%;
  max-width: 180px;
  height: 82%;
  max-height: 180px;
  object-fit: contain;
  transform-origin: center;
}

.skill-fallback {
  max-width: 200px;
  color: #17212b;
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.15;
  overflow-wrap: anywhere;
  text-align: center;
}

.skill-label {
  display: flex;
  width: calc(100% - 28px);
  min-height: 82px;
  margin: 0 14px 16px;
  padding: 11px 14px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.42);
  border-radius: 20px;
  background-color: #111820;
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.22);
  color: #ffffff;
  text-align: center;
}

.skill-name {
  display: block;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.2;
}

.skill-position {
  display: block;
  margin-top: 4px;
  color: #dbe5ed;
  font-family: 'Roboto', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.2;
}

.current-skill {
  display: grid;
  width: min(100%, 290px);
  min-height: 96px;
  margin: 24px auto 0;
  padding: 14px 20px;
  border: 1px solid rgba(255, 228, 196, 0.5);
  border-radius: 14px;
  background-color: #202d35;
  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.current-skill-label {
  color: #d9e0e5;
  font-family: 'Roboto', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.current-skill-name {
  margin: 3px 0;
  color: #ffe4c4;
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  font-size: 1.15rem;
  line-height: 1.3;
}

.current-skill-count {
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 46px;
  height: 46px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background-color: #17212b;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
}

:deep(.swiper-button-prev) {
  left: 5px;
}

:deep(.swiper-button-next) {
  right: 5px;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 1rem;
  font-weight: 800;
}

:deep(.swiper-button-prev:focus-visible),
:deep(.swiper-button-next:focus-visible),
:deep(.swiper-pagination-bullet:focus-visible) {
  outline: 3px solid #ffffff;
  outline-offset: 3px;
}

:deep(.swiper-pagination) {
  bottom: 4px;
}

:deep(.swiper-pagination-bullet) {
  width: 11px;
  height: 11px;
  background-color: #ffffff;
  opacity: 0.45;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #ffe4c4;
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

  .swiper {
    width: 225px;
    height: 340px;
  }

  .image-wrapper {
    width: 225px;
    height: 306px;
  }

  .logo-container {
    min-height: 200px;
    padding: 24px 20px 10px;
  }

  .skill-logo {
    width: 80%;
    max-width: 160px;
    height: 80%;
    max-height: 160px;
  }

  .skill-name {
    font-size: 1.15rem;
  }

  .skill-label {
    min-height: 78px;
  }

  .card {
    padding: 30px 10px;
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
