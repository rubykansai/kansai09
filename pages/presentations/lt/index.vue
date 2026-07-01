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
                <h1 id="lt-title" class="text-h4 title align-center mb-10">
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="30" class="mr-2 d-none d-md-flex" /></span>
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="20" class="mr-2 d-flex d-md-none" /></span>
                  関西LT保安協会
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
                      関西LT保安協会
                    </li>
                  </ol>
                </nav>

                <div class="lt-description mb-10">
                  <p>
                    私たちはLT保安を通じて、大切なLTエネルギーを安全かつ安定的にお届けし、参加者のみなさまが安心してLTをお楽しみいただける環境づくりに取り組んでいます。
                  </p>
                  <p>
                    本セッションでは、関西各地のコミュニティから推薦されたライトニングトーカーが登壇し、各地で育まれた知見や情熱をLTとしてお届けします。
                  </p>
                  <p>
                    関西というこの地域に根ざした多様かつ高濃度なLTエネルギーを、会場でぜひご体感ください。
                  </p>
                </div>

                <div class="lt-presentations" aria-labelledby="lt-title">
                  <article
                    v-for="(presentation, index) in ltPresentations"
                    :key="presentation.id"
                    class="lt-presentation"
                  >
                    <v-row align="start" class="presentation-layout">
                      <v-col cols="12" md="8" class="presentation-body">
                        <v-chip
                          size="large"
                          :color="typeColor"
                          variant="flat"
                          density="compact"
                          class="presentation-chip px-3 mb-4"
                        >
                          LT {{ presentationNumber(index) }}
                        </v-chip>
                        <h2 class="presentation-title mb-5">
                          {{ presentation.title }}
                        </h2>
                        <v-divider />
                      </v-col>

                      <v-col cols="12" md="4">
                        <aside class="speaker-panel">
                          <v-img
                            :src="speakerImage(presentation.speaker)"
                            :alt="presentation.speaker.name"
                            max-height="10rem"
                            max-width="10rem"
                            cover
                            class="speaker-avatar"
                          />
                          <h2 class="speaker-name mt-5 mb-4">
                            {{ presentation.speaker.name }}
                          </h2>
                          <div class="d-flex justify-center mb-0">
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
                        </aside>
                      </v-col>
                    </v-row>
                  </article>
                </div>
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
import { ltPresentations } from '~/data/lt'

usePageSeo({
  title: '関西LT保安協会 - 関西Ruby会議09',
  description: '関西LT保安協会のLT情報を掲載しています。',
})

const { app: { baseURL } } = useRuntimeConfig()
const withBaseURL = (path) => `${baseURL}${path.replace(/^\/+/, '')}`
const speakerImage = (speaker) => (
  speaker.image.startsWith('/') ? withBaseURL(speaker.image) : speaker.image
)
const presentationNumber = (index) => String(index + 1).padStart(2, '0')
const typeColor = '#E3EDF7'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hina+Mincho&family=Questrial&display=swap');

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
  font-family: 'Hina Mincho', 'Noto Sans JP', serif;
  color: #041D4F;
  font-weight: 400;
  justify-content: center;
}

.text-h4 {
  color: #041D4F;
  font-weight: 500;
}

.title.text-h4 {
  font-weight: 700;
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
}

.lt-description {
  color: #041D4F;
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 2;
  margin-inline: auto;
  max-width: 56rem;
  text-align: left;
}

.lt-description p {
  margin: 0;
}

.lt-description p + p {
  margin-top: 1rem;
}

.lt-presentations {
  width: 100%;
  text-align: left;
}

.lt-presentation {
  padding: 2rem 0;
  border-top: 1px solid rgba(10, 28, 76, 0.32);
}

.lt-presentation:first-child {
  padding-top: 0;
  border-top: 0;
}

.lt-presentation:last-child {
  padding-bottom: 0;
}

.presentation-layout {
  text-align: left;
}

.speaker-panel {
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
  font-family: 'Questrial', 'Noto Sans JP', sans-serif;
  font-weight: 500;
  line-height: 1.55;
}

.speaker-name {
  font-size: 1.35rem;
  text-align: center;
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
