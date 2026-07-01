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
              <div class="page-content" align="left">
                <h1 class="text-h4 title align-center mb-10">
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="30" class="mr-2 d-none d-md-flex" /></span>
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="20" class="mr-2 d-flex d-md-none" /></span>
                  GOODIES
                </h1>

                <section
                  v-for="(goodie, index) in goodies"
                  :key="goodie.name"
                  class="goodie-section"
                >
                  <v-card class="goodie-card" :elevation="0">
                    <v-row class="ma-0" align="center">
                      <v-col cols="12" md="7" class="goodie-copy-column">
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
                            <v-img
                              v-if="goodie.image"
                              :src="goodie.image"
                              :alt="goodie.imageAlt"
                              :aspect-ratio="goodie.imageAspectRatio"
                              class="goodie-visual__image"
                            />
                            <template v-else>
                              <p class="goodie-visual__eyebrow mb-3">{{ goodie.visualEyebrow }}</p>
                              <h2 class="goodie-visual__title mb-2">{{ goodie.visualTitle }}</h2>
                              <p class="goodie-visual__subtitle mb-0">{{ goodie.visualSubtitle }}</p>
                            </template>
                          </div>
                        </a>
                        <div
                          v-else
                          class="goodie-visual"
                          :class="`goodie-visual--${goodie.variant}`"
                        >
                          <v-img
                            v-if="goodie.image"
                            :src="goodie.image"
                            :alt="goodie.imageAlt"
                            :aspect-ratio="goodie.imageAspectRatio"
                            class="goodie-visual__image"
                          />
                          <template v-else>
                            <p class="goodie-visual__eyebrow mb-3">{{ goodie.visualEyebrow }}</p>
                            <h2 class="goodie-visual__title mb-2">{{ goodie.visualTitle }}</h2>
                            <p class="goodie-visual__subtitle mb-0">{{ goodie.visualSubtitle }}</p>
                          </template>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-divider
                    v-if="index < goodies.length - 1"
                    class="goodie-divider"
                  />
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
usePageSeo({
  title: 'Goodies - 関西Ruby会議09',
  description: '関西Ruby会議09のグッズ情報を掲載しています。',
})

const { app: { baseURL } } = useRuntimeConfig()
const withBaseURL = (path) => `${baseURL}${path.replace(/^\/+/, '')}`

const goodies = [
  {
    name: 'MAIN VISUAL',
    url: withBaseURL('/main-visual.png'),
    description: '関西Ruby会議09のMain Visualです。広報やイベント紹介などにご利用ください。',
    buttonLabel: 'OPEN IMAGE',
    disabled: false,
    variant: 'main-visual',
    image: withBaseURL('/main-visual.png'),
    imageAlt: 'Kansai RubyKaigi 9 Main Visual',
    imageAspectRatio: 1920 / 1006,
  },
  {
    name: 'KEYNOTE TEMPLATE',
    url: withBaseURL('/keynote_template_kansairubykaigi09.kth'),
    description: '登壇者向けの Keynote Template です。発表資料の作成にご利用ください。',
    buttonLabel: 'DOWNLOAD TEMPLATE',
    disabled: false,
    variant: 'keynote-template',
    image: withBaseURL('/keynote.svg'),
    imageAlt: '関西Ruby会議09 Keynote Template preview',
    imageAspectRatio: 800 / 450,
  },
  {
    name: 'OFFICIAL GOODS',
    url: 'https://suzuri.jp/kyobashirb/sections/35030',
    description: '関西Ruby会議09 Official Goods を SUZURI でご案内しています。気になるアイテムはオンラインストアからご確認ください。',
    buttonLabel: 'GO TO SHOP',
    disabled: false,
    variant: 'official-goods',
    image: withBaseURL('/goods.png'),
    imageAlt: '関西Ruby会議09 Official Goods T-shirts',
    imageAspectRatio: 800 / 450,
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

.page-content {
  width: 100%;
}

.page-link {
  display: block;
  text-decoration: none;
}

.goodie-card {
  background-color: #ffffff;
  border-radius: 0 !important;
  overflow: hidden;
}

.goodie-divider {
  margin: 1.5rem 0;
}

.goodie-copy-column {
  padding: 2.5rem 2rem;
}

.goodie-visual-column {
  padding: 2.5rem 2rem;
  padding-left: 0;
}

.goodie-visual__eyebrow {
  font-family: 'Questrial', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
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
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  transition: opacity 180ms ease;
}

.goodie-visual--main-visual,
.goodie-visual--official-goods,
.goodie-visual--keynote-template {
  min-height: 0;
  height: auto;
  padding: 0;
  justify-content: center;
}

.goodie-visual--main-visual {
  aspect-ratio: 1920 / 1006;
  background: #0A1C4C;
}

.goodie-visual--official-goods,
.goodie-visual--keynote-template {
  aspect-ratio: 800 / 450;
  background-color: #F7F9FE;
  border: 1px solid #D6DEEE;
}

.goodie-visual__image {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
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
  opacity: 0.82;
}

.page-link:focus-visible .goodie-visual {
  outline: 2px solid #0A1C4C;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .goodie-visual {
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
  .goodie-copy-column,
  .goodie-visual-column {
    padding: 1.25rem;
  }

  .goodie-visual-column {
    padding-top: 0;
  }

  .goodie-btn,
  .goodie-visual {
    max-width: 100%;
  }
}
</style>
