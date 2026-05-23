<template>
  <v-app class="app-container">
    <AppHeaderIndex />
    <v-container fluid class="main-content">
      <v-row>
        <v-col align="center" class="pb-0 mt-12">
          <v-card
            max-width="90vw"
            min-width="90vw"
            class="py-10 my-15 px-md-10 px-4"
            :elevation="0"
          >
            <v-card-item>
              <div class="page-content">
                <h1 class="text-h4 title justify-center mb-10">
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="30" class="mr-2 d-none d-md-flex" /></span>
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="20" class="mr-2 d-flex d-md-none" /></span>
                  SPEAKERS
                </h1>

                <section
                  v-for="section in speakerSections"
                  :key="section.title"
                >
                  <h2
                    class="text-h5 section-title"
                    :class="section.headingClass"
                  >
                    {{ section.title }}
                  </h2>
                  <v-row :class="section.rowClass">
                    <v-col
                      v-for="speaker in section.speakers"
                      :key="speaker.id ?? speaker.name"
                      cols="12"
                      :sm="section.sm"
                      :md="section.md"
                    >
                      <v-card
                        class="speaker-card px-md-3 py-md-3 px-0 py-0"
                        :class="section.cardClass"
                        align="center"
                        :elevation="0"
                      >
                        <div class="speaker-card__inner py-2 px-2">
                          <v-img
                            :src="speaker.image"
                            :alt="speaker.name"
                            max-height="10rem"
                            max-width="10rem"
                            cover
                            class="speaker-avatar"
                          />
                          <v-card-title class="speaker-name px-0">
                            {{ speaker.name }}
                          </v-card-title>
                          <div class="d-flex justify-center mb-4">
                            <a
                              v-for="social in speaker.socials"
                              :key="social.label"
                              :href="social.href"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <v-btn
                                class="mx-2"
                                :icon="social.icon"
                                flat
                                :aria-label="social.label"
                                :title="social.label"
                              />
                            </a>
                          </div>
                          <div align="left">
                            <p class="text-body-2 speaker-description mt-2 mb-0">
                              {{ speaker.description }}
                            </p>
                          </div>
                        </div>
                      </v-card>
                      <v-divider class="speaker-divider mx-2 d-md-none" color="#0A1C4C" />
                    </v-col>
                  </v-row>
                </section>
              </div>
            </v-card-item>
          </v-card>
          <Footer />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { keynoteSpeakers, speakers } from '~/data/speakers'

useSeoMeta({
  title: 'Speakers - 関西Ruby会議09',
  ogTitle: 'Speakers - 関西Ruby会議09',
  description: '関西Ruby会議09のスピーカー情報を掲載しています。',
  ogDescription: '関西Ruby会議09のスピーカー情報を掲載しています。',
})

const { app: { baseURL } } = useRuntimeConfig()
const withBaseURL = (path) => `${baseURL}${path.replace(/^\/+/, '')}`

const speakerSections = [
  {
    title: 'KEYNOTE SPEAKERS',
    speakers: keynoteSpeakers,
    md: 6,
    rowClass: 'justify-space-between mb-12',
    cardClass: 'speaker-card--keynote',
    headingClass: 'mb-10',
  },
  {
    title: 'SPEAKERS',
    speakers,
    sm: 6,
    md: 4,
    rowClass: 'justify-center',
    headingClass: 'mb-10',
  },
]

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

* {
  font-family: 'Noto Sans JP', sans-serif;
  box-sizing: border-box;
}

.app-container {
  background-color: #ffffff !important;
  border: 10px solid #0A1C4C;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
}

.v-application {
  color: #041D4F;
  position: relative;
}

.page-content {
  width: 100%;
}

.title {
  display: flex;
  font-family: 'Questrial', sans-serif;
  color: #041D4F;
  font-weight: 400;
}

.text-h4,
.text-h5 {
  font-family: 'Questrial', sans-serif;
  color: #041D4F;
  font-weight: 500;
}

.section-title {
  text-align: center;
}

.speaker-description {
  line-height: 1.9;
  color: #22365F;
}

.speaker-card {
  background: #ffffff;
  height: 100%;
}

.speaker-card__inner {
  height: 100%;
}

.speaker-card--keynote {
  min-height: 400px;
}

.speaker-avatar {
  max-width: 10rem;
  width: 10rem;
  height: 10rem;
  margin: 0 auto 1.25rem;
  border-radius: 50%;
}

.speaker-avatar {
  border: 1px solid #0A1C4C;
}

.speaker-name {
  font-family: 'Questrial', sans-serif;
  color: #041D4F;
  font-weight: 500;
  white-space: normal;
  justify-content: center;
  text-align: center;
}

.speaker-description {
  min-height: 6rem;
  white-space: pre-line;
}

.speaker-divider {
  opacity: 1;
}

a {
  text-decoration: none;
}

button {
  color: #041D4F;
}

@media (min-width: 960px) {
  .speaker-card {
    border: 1px solid #0A1C4C;
    border-radius: 10px !important;
  }
}

@media (max-width: 959px) {
  .speaker-card {
    border: none;
    border-radius: 0 !important;
  }

  .speaker-card--keynote {
    min-height: 0;
  }
}

@media (max-width: 600px) {
  .speaker-description {
    min-height: 0;
  }

  .speaker-avatar {
    max-width: 8.5rem;
    width: 8.5rem;
    height: 8.5rem;
  }
}
</style>
