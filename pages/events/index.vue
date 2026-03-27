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
                  <span><v-img src="/ruby.svg" :width="30" class="mr-2 d-none d-md-flex" /></span>
                  <span><v-img src="/ruby.svg" :width="20" class="mr-2 d-flex d-md-none" /></span>
                  EVENTS
                </h1>

                <section
                  v-for="day in eventDays"
                  :key="day.day"
                  class="day-section mb-12"
                >
                  <div class="day-header mb-6">
                    <p class="day-label mb-2">{{ day.day }}</p>
                    <h2 class="text-h5 mb-3">{{ day.title }}</h2>
                  </div>

                  <template v-if="day.events.length">
                    <v-card
                      v-for="event in day.events"
                      :key="event.name"
                      class="event-card mb-6"
                      :elevation="0"
                    >
                      <v-row class="ma-0" align="stretch">
                        <v-col cols="12" md="7" class="event-copy-column">
                          <p class="mb-4">
                            <a
                              v-if="event.url"
                              :href="event.url"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="event-title-link"
                            >
                              {{ event.name }}
                            </a>
                            <span v-else class="event-title">{{ event.name }}</span>
                          </p>

                          <v-divider class="mb-4"></v-divider>

                          <p v-if="event.time" class="event-meta mb-3">
                            <v-icon icon="mdi-clock-time-two-outline" />
                            <span>{{ event.time }}</span>
                          </p>
                          <p v-if="event.price" class="event-meta mb-3">
                            <v-icon icon="mdi-currency-jpy" />
                            <span>{{ event.price }}</span>
                          </p>
                          <p v-if="event.place" class="event-meta mb-5">
                            <v-icon icon="mdi-map-marker-outline" />
                            <span>{{ event.place }}</span>
                          </p>

                          <div v-if="event.url && !event.buttonDisabled" class="mb-5">
                            <a
                              :href="event.url"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="page-link"
                            >
                              <v-btn
                                size="large"
                                rounded
                                class="event-btn"
                              >
                                {{ event.buttonLabel || 'REGISTRATION' }}
                              </v-btn>
                            </a>
                          </div>
                          <div v-else-if="event.buttonLabel || event.buttonDisabled" class="mb-5">
                            <v-btn
                              size="large"
                              rounded
                              class="event-btn"
                              disabled
                            >
                              {{ event.buttonLabel || 'REGISTRATION' }}
                            </v-btn>
                          </div>

                          <p v-if="event.sponsored" class="event-sponsor mb-0">
                            {{ event.sponsorPrefix || 'Sponsored and hosted by' }}
                            <a
                              :href="event.sponsoredUrl"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="event-sponsor-link"
                            >
                              {{ event.sponsored }}
                            </a>
                          </p>
                        </v-col>

                        <v-col cols="12" md="5" class="event-visual-column">
                          <a
                            v-if="event.url && event.image"
                            :href="event.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="page-link"
                          >
                            <v-img
                              :src="event.image"
                              :aspect-ratio="3"
                              cover
                              class="event-image"
                            />
                          </a>
                          <v-img
                            v-else-if="event.image"
                            :src="event.image"
                            :aspect-ratio="3"
                            cover
                            class="event-image"
                          />
                          <div v-else class="event-visual">
                            <p class="event-visual__eyebrow mb-3">Kansai RubyKaigi 09</p>
                            <h3 class="event-visual__title mb-2">{{ day.day }}</h3>
                            <p class="event-visual__subtitle mb-0">{{ day.shortDate }}</p>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>
                  </template>

                  <v-card
                    v-else
                    class="event-card event-card--placeholder"
                    :elevation="0"
                  >
                    <v-row class="ma-0" align="stretch">
                      <v-col cols="12" md="7" class="event-copy-column">
                        <p class="event-title mb-4">Coming Soon</p>
                        <v-divider class="mb-4"></v-divider>
                        <p class="event-meta mb-3">
                          <v-icon icon="mdi-clock-time-two-outline" />
                          <span>詳細は後日公開します</span>
                        </p>
                        <p class="event-meta mb-3">
                          <v-icon icon="mdi-currency-jpy" />
                          <span>TBD</span>
                        </p>
                        <p class="event-meta mb-5">
                          <v-icon icon="mdi-map-marker-outline" />
                          <span>TBD</span>
                        </p>
                        <p class="event-placeholder-copy mb-0"></p>
                      </v-col>

                      <v-col cols="12" md="5" class="event-visual-column">
                        <div class="event-visual event-visual--placeholder">
                          <p class="event-visual__eyebrow mb-3">Upcoming Events</p>
                          <h3 class="event-visual__title mb-2">{{ day.day }}</h3>
                          <p class="event-visual__subtitle mb-0">{{ day.shortDate }}</p>
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
  title: 'Events - 関西Ruby会議09',
  ogTitle: 'Events - 関西Ruby会議09',
  description: '関西Ruby会議09の関連イベント情報を掲載しています。',
  ogDescription: '関西Ruby会議09の関連イベント情報を掲載しています。',
})

const { app: { baseURL } } = useRuntimeConfig()
const withBaseURL = (path) => `${baseURL}${path.replace(/^\/+/, '')}`

const eventDays = [
  {
    day: 'Day0',
    title: 'Fri, July 17',
    shortDate: '07.17 FRI',
    events: [
      {
        name: '関西Ruby会議09 前夜祭',
        image: withBaseURL('/events/preparty.png'),
        time: 'July 17, 18:30 - 20:30',
        place: '下田屋',
        price: '¥6,000',
        sponsorPrefix: 'hosted by',
        sponsored: 'Kyoto.rb',
        sponsoredUrl: 'https://kyotorb.connpass.com/',
        buttonLabel: 'REGISTRATION',
        buttonDisabled: true,
      },
    ],
  },
  {
    day: 'Day1',
    title: 'Sat, July 18',
    shortDate: '07.18 SAT',
    events: [
      {
        name: '関西Ruby会議09 Official Party',
        url: 'https://rubykansai.doorkeeper.jp/events/196021',
        image: withBaseURL('/events/officialparty.png'),
        time: 'July 18, 19:00 - 21:00',
        place: 'THE CALENDAR',
        price: '¥5,000',
        buttonLabel: 'REGISTRATION',
      },
    ],
  },
  {
    day: 'Day2',
    title: 'Sun, July 19',
    shortDate: '07.19 SUN',
    events: [],
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

.v-application {
  color: #041D4F;
  position: relative;
}

.v-card-item {
  color: #222222;
}

.title {
  font-weight: 400;
  display: flex;
  font-family: 'Questrial', sans-serif;
}

.text-h4,
.text-h5 {
  font-family: 'Questrial', sans-serif;
  color: #041D4F;
  font-weight: 500;
}

.text-body-1 {
  line-height: 1.9;
}

.page-link {
  text-decoration: none;
}

.event-btn {
  color: white !important;
  font-family: 'Questrial', sans-serif;
  letter-spacing: 0.08em;
}

.day-section:first-of-type .day-header {
  border-top: none;
  padding-top: 0;
}

.day-header {
  border-top: 1px solid #D6DEEE;
  padding-top: 1.75rem;
}

.day-label {
  font-family: 'Questrial', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6E7B9B;
}

.event-card {
  background: #F7F9FE;
  border: 1px solid #D6DEEE;
  border-radius: 32px !important;
  overflow: hidden;
}

.event-card--placeholder {
  background: linear-gradient(135deg, #FBFCFF 0%, #F0F4FD 100%);
}

.event-copy-column {
  padding: 2rem;
}

.event-visual-column {
  padding: 2rem;
  padding-left: 0;
}

.event-title,
.event-title-link {
  font-family: 'Questrial', sans-serif;
  font-size: clamp(1.55rem, 2vw, 1.9rem);
  line-height: 1.3;
  color: #041D4F;
}

.event-title-link {
  text-decoration: none;
}

.event-title-link:hover {
  opacity: 0.7;
}

.event-meta {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #22365F;
  line-height: 1.7;
}

.event-meta :deep(.v-icon) {
  margin-top: 2px;
  color: #041D4F;
}

.event-btn {
  background-color: #041D4F !important;
  width: 100%;
  max-width: 320px;
}

.event-btn.v-btn--disabled {
  background-color: #B8C2D8 !important;
  color: #ffffff !important;
  opacity: 0.85;
}

.event-sponsor,
.event-placeholder-copy {
  color: #516181;
  line-height: 1.8;
}

.event-sponsor-link {
  color: #041D4F;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.event-image,
.event-visual {
  height: 100%;
  min-height: 260px;
  border-radius: 24px;
}

.event-image {
  background: #ffffff;
}

.event-visual {
  background: linear-gradient(160deg, #0A1C4C 0%, #23408E 100%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
}

.event-visual::before {
  content: '';
  position: absolute;
  inset: auto -24px -28px auto;
  width: 140px;
  height: 140px;
  background: url('/ruby-bg.svg') center / contain no-repeat;
  opacity: 0.18;
}

.event-visual::after {
  content: '';
  position: absolute;
  inset: 20px auto auto 20px;
  width: 72px;
  height: 72px;
  background: url('/flower-bg.svg') center / contain no-repeat;
  opacity: 0.16;
}

.event-visual--placeholder {
  background: linear-gradient(160deg, #18336D 0%, #5476C6 100%);
}

.event-visual__eyebrow,
.event-visual__title,
.event-visual__subtitle {
  position: relative;
  z-index: 1;
  color: #ffffff;
}

.event-visual__eyebrow {
  font-family: 'Questrial', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.event-visual__title {
  font-family: 'Questrial', sans-serif;
  font-size: clamp(2rem, 3vw, 2.6rem);
  line-height: 1.1;
}

.event-visual__subtitle {
  font-size: 1rem;
  letter-spacing: 0.08em;
}

@media (max-width: 960px) {
  .event-copy-column,
  .event-visual-column {
    padding: 1.5rem;
  }

  .event-visual-column {
    padding-top: 0;
  }

  .event-image {
    height: auto;
    min-height: 0;
  }

  .event-visual {
    min-height: 220px;
  }
}

@media (max-width: 600px) {
  .event-card {
    border-radius: 24px !important;
  }

  .event-copy-column,
  .event-visual-column {
    padding: 1.25rem;
  }

  .event-visual-column {
    padding-top: 0;
  }

  .event-btn {
    max-width: 100%;
  }
}
</style>
