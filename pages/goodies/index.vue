<template>
  <v-app class="app-container">
    <AppHeaderIndex />
    <v-container fluid class="main-content">
      <v-row>
        <v-col align="center" class="pb-0 mt-12">
          <v-card
            max-width="90vw"
            min-width="90vw"
            class="py-10 my-15 px-md-15 px-4"
            :elevation="0"
          >
            <v-card-item>
              <div align="left">
                <h1 class="text-h4 title align-center mb-6">
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="30" class="mr-2 d-none d-md-flex" /></span>
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="20" class="mr-2 d-flex d-md-none" /></span>
                  GOODIES
                </h1>

                <section
                  v-for="goodie in goodies"
                  :key="goodie.name"
                  class="mb-8"
                >
                  <v-card class="goodie-card" :elevation="0">
                    <v-row class="ma-0" align="stretch">
                      <v-col cols="12" md="7" class="goodie-copy-column">
                        <p class="goodie-label mb-3">{{ goodie.label }}</p>
                        <p class="mb-4">
                          <a
                            v-if="goodie.url && !goodie.disabled"
                            :href="goodie.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="goodie-title-link"
                          >
                            {{ goodie.name }}
                          </a>
                          <span v-else class="goodie-title">{{ goodie.name }}</span>
                        </p>

                        <v-divider class="mb-4"></v-divider>

                        <p class="goodie-description mb-4">{{ goodie.description }}</p>

                        <a
                          v-if="goodie.url && !goodie.disabled"
                          :href="goodie.url"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="page-link"
                        >
                          <v-btn size="large" rounded class="goodie-btn">
                            {{ goodie.buttonLabel }}
                          </v-btn>
                        </a>
                        <v-btn
                          v-else
                          size="large"
                          rounded
                          class="goodie-btn"
                          disabled
                        >
                          {{ goodie.buttonLabel }}
                        </v-btn>
                      </v-col>

                      <v-col cols="12" md="5" class="goodie-visual-column">
                        <a
                          v-if="goodie.url && !goodie.disabled"
                          :href="goodie.url"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="page-link"
                        >
                          <div class="goodie-visual" :class="`goodie-visual--${goodie.variant}`">
                            <p class="goodie-visual__eyebrow mb-3">{{ goodie.visualEyebrow }}</p>
                            <h2 class="goodie-visual__title mb-2">{{ goodie.visualTitle }}</h2>
                            <p class="goodie-visual__subtitle mb-0">{{ goodie.visualSubtitle }}</p>
                          </div>
                        </a>
                        <div
                          v-else
                          class="goodie-visual"
                          :class="`goodie-visual--${goodie.variant}`"
                        >
                          <p class="goodie-visual__eyebrow mb-3">{{ goodie.visualEyebrow }}</p>
                          <h2 class="goodie-visual__title mb-2">{{ goodie.visualTitle }}</h2>
                          <p class="goodie-visual__subtitle mb-0">{{ goodie.visualSubtitle }}</p>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
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
useSeoMeta({
  title: 'Goodies - 関西Ruby会議09',
  ogTitle: 'Goodies - 関西Ruby会議09',
  description: '関西Ruby会議09のグッズ情報を掲載しています。',
  ogDescription: '関西Ruby会議09のグッズ情報を掲載しています。',
})

const { app: { baseURL } } = useRuntimeConfig()
const withBaseURL = (path) => `${baseURL}${path.replace(/^\/+/, '')}`
const rubyBgUrl = `url('${withBaseURL('/ruby-bg.svg')}')`
const flowerBgUrl = `url('${withBaseURL('/flower-bg.svg')}')`

const goodies = [
  {
    label: 'Speaker Materials',
    name: 'KEYNOTE TEMPLATE',
    description: '登壇者向けの Keynote Template は現在準備中です。公開までもう少しお待ちください。',
    buttonLabel: 'COMING SOON',
    disabled: true,
    variant: 'coming-soon',
    visualEyebrow: 'Speaker Kit',
    visualTitle: 'Coming Soon',
    visualSubtitle: 'Template assets are in preparation.',
  },
  {
    label: 'Official Store',
    name: 'OFFICIAL GOODS',
    url: 'https://suzuri.jp/kyobashirb/sections/35030',
    description: '関西Ruby会議09 Official Goods を SUZURI でご案内しています。気になるアイテムはオンラインストアからご確認ください。',
    buttonLabel: 'GO TO SHOP',
    disabled: false,
    variant: 'shop',
    visualEyebrow: 'SUZURI',
    visualTitle: 'Official Goods',
    visualSubtitle: 'Kansai RubyKaigi 09',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

* {
  font-family: 'Noto Sans JP', sans-serif;
  box-sizing: border-box;
  color: #041D4F;
}

.app-container {
  background-color: #ffffff !important;
  border: 10px solid #0A1C4C;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
}

.title,
.text-h4 {
  font-family: 'Questrial', sans-serif;
  color: #041D4F;
  font-weight: 500;
}

.title {
  display: flex;
  font-weight: 400;
}

.goodies-intro {
  max-width: 56rem;
  line-height: 1.9;
  color: #22365F;
}

.page-link {
  display: block;
  text-decoration: none;
}

.goodie-card {
  background: #F7F9FE;
  border: 1px solid #D6DEEE;
  border-radius: 32px !important;
  overflow: hidden;
}

.goodie-copy-column {
  padding: 2rem;
}

.goodie-visual-column {
  padding: 2rem;
  padding-left: 0;
}

.goodie-label,
.goodie-visual__eyebrow {
  font-family: 'Questrial', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.goodie-label {
  color: #6E7B9B;
}

.goodie-title,
.goodie-title-link {
  font-family: 'Questrial', sans-serif;
  font-size: clamp(1.55rem, 2vw, 1.9rem);
  line-height: 1.3;
  color: #041D4F;
}

.goodie-title-link {
  text-decoration: none;
}

.goodie-title-link:hover {
  opacity: 0.7;
}

.goodie-description {
  line-height: 1.9;
  color: #22365F;
}

.goodie-btn {
  background-color: #041D4F !important;
  color: #ffffff !important;
  font-family: 'Questrial', sans-serif;
  letter-spacing: 0.08em;
  width: 100%;
  max-width: 320px;
}

.goodie-btn.v-btn--disabled {
  background-color: #B8C2D8 !important;
  opacity: 0.85;
}

.goodie-visual {
  min-height: 260px;
  height: 100%;
  border-radius: 24px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    filter 220ms ease;
  will-change: transform;
}

.goodie-visual::before,
.goodie-visual::after {
  content: '';
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.16;
}

.goodie-visual::before {
  inset: auto -24px -28px auto;
  width: 140px;
  height: 140px;
  background-image: v-bind(rubyBgUrl);
}

.goodie-visual::after {
  inset: 20px auto auto 20px;
  width: 72px;
  height: 72px;
  background-image: v-bind(flowerBgUrl);
}

.goodie-visual::before,
.goodie-visual::after {
  transition: transform 220ms ease, opacity 220ms ease;
}

.goodie-visual--coming-soon {
  background: linear-gradient(160deg, #18336D 0%, #5476C6 100%);
}

.goodie-visual--shop {
  background: linear-gradient(160deg, #0A1C4C 0%, #23408E 100%);
}

.goodie-visual__eyebrow,
.goodie-visual__title,
.goodie-visual__subtitle {
  position: relative;
  z-index: 1;
  color: #ffffff;
}

.goodie-visual__title {
  font-family: 'Questrial', sans-serif;
  font-size: clamp(2rem, 3vw, 2.6rem);
  line-height: 1.1;
}

.goodie-visual__subtitle {
  letter-spacing: 0.08em;
}

.page-link:hover .goodie-visual,
.page-link:focus-visible .goodie-visual {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 24px 48px rgba(10, 28, 76, 0.18);
  filter: saturate(1.06);
}

.page-link:hover .goodie-visual::before,
.page-link:focus-visible .goodie-visual::before {
  transform: translate(-6px, -4px) rotate(-8deg) scale(1.04);
  opacity: 0.22;
}

.page-link:hover .goodie-visual::after,
.page-link:focus-visible .goodie-visual::after {
  transform: translate(4px, 2px) rotate(8deg) scale(1.05);
  opacity: 0.22;
}

.page-link:focus-visible .goodie-visual {
  outline: 3px solid rgba(154, 180, 255, 0.9);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .goodie-visual,
  .goodie-visual::before,
  .goodie-visual::after {
    transition: none;
  }
}

@media (max-width: 960px) {
  .goodie-copy-column,
  .goodie-visual-column {
    padding: 1.5rem;
  }

  .goodie-visual-column {
    padding-top: 0;
  }
}

@media (max-width: 959px) {
  .goodie-btn {
    display: none !important;
  }
}

@media (max-width: 600px) {
  .goodie-card {
    border-radius: 24px !important;
  }

  .goodie-copy-column,
  .goodie-visual-column {
    padding: 1.25rem;
  }

  .goodie-visual-column {
    padding-top: 0;
  }

  .goodie-btn,
  .goodies-intro {
    max-width: 100%;
  }
}
</style>
