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
                <h1 class="text-h4 title align-center justify-center mb-10">
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="30" class="mr-2 d-none d-md-flex" /></span>
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="20" class="mr-2 d-flex d-md-none" /></span>
                  PRESENTATION
                </h1>

                <nav class="presentation-breadcrumb mb-8" aria-label="パンくずリスト">
                  <ol class="presentation-breadcrumb__list">
                    <li>
                      <NuxtLink to="/schedule" class="presentation-breadcrumb__link">
                        Schedule
                      </NuxtLink>
                    </li>
                    <li aria-hidden="true" class="presentation-breadcrumb__separator">
                      <v-icon icon="mdi-chevron-right" size="small" />
                    </li>
                    <li class="presentation-breadcrumb__current" aria-current="page">
                      {{ presentation.title }}
                    </li>
                  </ol>
                </nav>

                <v-row align="start" class="presentation-layout">
                  <v-col cols="12" md="4">
                    <aside class="speaker-panel">
                      <v-img
                        :src="presentation.speaker.image"
                        :alt="presentation.speaker.name"
                        max-height="10rem"
                        max-width="10rem"
                        cover
                        class="speaker-avatar"
                      />
                      <h2 class="speaker-name mt-5 mb-4">
                        {{ presentation.speaker.name }}
                      </h2>
                      <div class="d-flex justify-center mb-5">
                        <a
                          v-for="social in presentation.speaker.socials"
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
                      <p class="speaker-description mb-0">
                        {{ presentation.speaker.description }}
                      </p>
                    </aside>
                  </v-col>

                  <v-col cols="12" md="8" class="presentation-body">
                    <v-chip
                      size="large"
                      :color="typeColor(presentation.type)"
                      variant="flat"
                      density="compact"
                      class="presentation-chip px-3 mb-4"
                    >
                      {{ typeLabel(presentation.type) }}
                    </v-chip>
                    <h2 class="presentation-title mb-5">
                      {{ presentation.title }}
                    </h2>
                    <v-divider class="mb-6" />
                    <p class="presentation-abstract mb-8">
                      {{ presentation.abstract }}
                    </p>
                  </v-col>
                </v-row>
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
import { presentationById } from '~/data/schedule'

const route = useRoute()
const presentation = presentationById[route.params.id]

if (!presentation) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Presentation not found',
  })
}

useSeoMeta({
  title: `${presentation.title} - 関西Ruby会議09`,
  ogTitle: `${presentation.title} - 関西Ruby会議09`,
  description: `${presentation.speaker.name}による「${presentation.title}」の発表概要です。`,
  ogDescription: `${presentation.speaker.name}による「${presentation.title}」の発表概要です。`,
})

const { app: { baseURL } } = useRuntimeConfig()
const withBaseURL = (path) => `${baseURL}${path.replace(/^\/+/, '')}`

const labels = {
  keynote: 'KEYNOTE',
  session: 'SESSION',
}

const colors = {
  keynote: '#F0C8A8',
  session: '#DCE8BF',
}

const typeLabel = (type) => labels[type] ?? type.toUpperCase()
const typeColor = (type) => colors[type] ?? '#E3EDF7'
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

.text-h4 {
  font-family: 'Questrial', sans-serif;
  color: #041D4F;
  font-weight: 500;
}

.presentation-breadcrumb {
  color: #041D4F;
  text-align: left;
}

.presentation-breadcrumb__list {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.presentation-breadcrumb__link {
  font-family: 'Questrial', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #041D4F;
  letter-spacing: 0.02em;
  text-decoration: underline;
  text-underline-offset: 0.22em;
}

.presentation-breadcrumb__link:hover {
  color: #B02B4C;
}

.presentation-breadcrumb__separator {
  align-items: center;
  color: rgba(4, 29, 79, 0.64);
  display: inline-flex;
}

.presentation-breadcrumb__current {
  color: rgba(4, 29, 79, 0.76);
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.presentation-layout {
  text-align: left;
}

.speaker-panel {
  border: 1px solid #0A1C4C;
  padding: 1.5rem;
  text-align: center;
}

.speaker-avatar {
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  border: 1px solid #0A1C4C;
  border-radius: 50%;
}

.speaker-name,
.presentation-title {
  color: #041D4F;
  font-family: 'Questrial', sans-serif;
  font-weight: 500;
  line-height: 1.55;
}

.speaker-name {
  font-size: 1.35rem;
  text-align: center;
}

.speaker-description {
  color: #22365F;
  line-height: 1.9;
  text-align: left;
  white-space: pre-line;
}

.presentation-body {
  color: #222222;
}

.presentation-title {
  font-size: 1.7rem;
  overflow-wrap: anywhere;
}

.presentation-chip {
  color: #041D4F !important;
  font-family: 'Questrial', sans-serif;
  font-weight: 600;
}

.presentation-abstract {
  color: #222222;
  font-size: 1rem;
  line-height: 1.9;
  white-space: pre-line;
}

a {
  text-decoration: none;
}

button {
  color: #041D4F;
}

@media (max-width: 959px) {
  .speaker-panel {
    border: none;
    border-bottom: 1px solid rgba(10, 28, 76, 0.32);
    padding: 0 0 2rem;
  }
}

@media (max-width: 600px) {
  .v-col {
    flex-basis: inherit !important;
  }

  .speaker-avatar {
    width: 8.5rem;
    height: 8.5rem;
  }

  .presentation-title {
    font-size: 1.35rem;
  }

}
</style>
