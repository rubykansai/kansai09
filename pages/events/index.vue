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
                <h1 class="text-h4 title align-center mb-10">
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="30" class="mr-2 d-none d-md-flex" /></span>
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="20" class="mr-2 d-flex d-md-none" /></span>
                  EVENTS
                </h1>

                <div align="left">
              <section
                v-for="day in eventDays"
                :key="day.day"
              >
                <h2 align="center" class="text-h5 mb-2">
                  {{ day.day }} - {{ day.title }}
                </h2>

                <template v-if="day.events.length">
                  <v-card
                    v-for="event in day.events"
                    :key="event.name"
                    class="py-10 px-10 event-card"
                    :elevation="0"
                  >
                    <v-row>
                      <v-col lg="6" md="12" sm="12" xs="12">
                        <p>
                          <a
                            v-if="event.url"
                            class="text-link text-h5 mb-2 name"
                            :href="event.url"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {{ event.name }}
                          </a>
                          <span v-else class="text-h5 mb-2 name">
                            {{ event.name }}
                          </span>
                        </p>

                        <v-divider class="my-4"></v-divider>

                        <p v-if="event.time" class="text-body-1 event-meta mb-3">
                          <v-icon icon="mdi-clock-time-two-outline"></v-icon>
                          {{ event.time }}
                        </p>
                        <p v-if="event.price" class="text-body-1 event-meta mb-3">
                          <v-icon icon="mdi-currency-jpy"></v-icon>
                          {{ event.price }}
                        </p>
                        <p v-if="event.place" class="text-body-1 event-meta mb-5">
                          <v-icon icon="mdi-map-marker-outline"></v-icon>
                          {{ event.place }}
                        </p>

                        <a
                          v-if="event.url && !event.buttonDisabled"
                          :href="event.url"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="page-link"
                        >
                          <v-btn
                            size="large"
                            color="#041D4F"
                            rounded
                            class="register-btn mb-5"
                          >
                            {{ getButtonLabel(event) }}
                          </v-btn>
                        </a>
                        <v-btn
                          v-else-if="event.buttonLabel || event.buttonDisabled"
                          size="large"
                          color="#041D4F"
                          rounded
                          disabled
                          class="register-btn mb-5"
                        >
                          {{ getButtonLabel(event) }}
                        </v-btn>

                        <p v-if="event.sponsored" class="text-body-1 event-sponsor mb-2">
                          {{ event.sponsorPrefix || 'Sponsored and hosted by' }}
                          <a
                            class="name"
                            :href="event.sponsoredUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {{ event.sponsored }}
                          </a>
                        </p>
                      </v-col>

                      <v-col>
                        <a
                          v-if="event.url && event.image"
                          :href="event.url"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <v-img
                            class="link"
                            :src="event.image"
                            max-height="600px"
                          />
                        </a>
                        <v-img
                          v-else-if="event.image"
                          class="link"
                          :src="event.image"
                          max-height="600px"
                        />
                        <div v-else class="event-placeholder">
                          <p class="event-placeholder__label mb-2">Kansai RubyKaigi 09</p>
                          <p class="event-placeholder__date mb-0">{{ day.shortDate }}</p>
                        </div>
                      </v-col>
                    </v-row>
                    <v-divider class="mt-5"></v-divider>
                  </v-card>
                </template>

                <v-card
                  v-else
                  class="py-10 px-10 event-card"
                  :elevation="0"
                >
                  <v-row>
                    <v-col lg="6" md="12" sm="12" xs="12">
                      <p class="text-h5 mb-2 name">Coming Soon</p>
                      <v-divider class="my-4"></v-divider>
                      <p class="text-body-1 event-meta mb-3">
                        <v-icon icon="mdi-clock-time-two-outline"></v-icon>
                        詳細は後日公開します
                      </p>
                      <p class="text-body-1 event-meta mb-3">
                        <v-icon icon="mdi-currency-jpy"></v-icon>
                        TBD
                      </p>
                      <p class="text-body-1 event-meta mb-5">
                        <v-icon icon="mdi-map-marker-outline"></v-icon>
                        TBD
                      </p>
                    </v-col>
                    <v-col>
                      <div class="event-placeholder">
                        <p class="event-placeholder__label mb-2">Upcoming Events</p>
                        <p class="event-placeholder__date mb-0">{{ day.shortDate }}</p>
                      </div>
                    </v-col>
                  </v-row>
                  <v-divider class="mt-5"></v-divider>
                </v-card>
              </section>
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
usePageSeo({
  title: 'Events - 関西Ruby会議09',
  description: '関西Ruby会議09の関連イベント情報を掲載しています。',
})

const { app: { baseURL } } = useRuntimeConfig()
const withBaseURL = (path) => `${baseURL}${path.replace(/^\/+/, '')}`
const getButtonLabel = (event) => (
  event.buttonDisabled && event.buttonLabel === 'REGISTRATION'
    ? 'COMING SOON'
    : event.buttonLabel || 'REGISTRATION'
)

const eventDays = [
  {
    day: 'Day0',
    title: 'Fri, July 17',
    shortDate: '07.17 FRI',
    events: [
      {
        name: '関西Ruby会議09 前夜祭',
        url: 'https://kyotorb.connpass.com/event/388788/',
        image: withBaseURL('/events/preparty.png'),
        time: 'July 17, 18:30 - 20:30',
        place: '下田屋（しもたや）',
        price: '¥6,000',
        sponsorPrefix: 'hosted by',
        sponsored: 'Kyoto.rb',
        sponsoredUrl: 'https://kyotorb.connpass.com/',
        buttonLabel: 'REGISTRATION',
      },
      {
        name: '関西Ruby会議09 前夜祭 Welcome Beer Bash!!',
        url: 'https://kyobashirb.connpass.com/event/396176/',
        image: withBaseURL('/events/beerbash.png'),
        time: 'July 17, 18:30 - 20:30',
        place: 'craft beer house B.B',
        price: '¥6,000 (仮)',
        sponsorPrefix: 'hosted by',
        sponsored: 'Kyobashi.rb',
        sponsoredUrl: 'https://kyobashirb.connpass.com/',
        buttonLabel: 'REGISTRATION',
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

.name {
  color: #222222 !important;
}

.text-link {
  color: #222222;
  text-decoration: none;
}

.text-link:hover {
  color: #041D4F;
  text-decoration: underline;
  box-sizing: border-box;
  transition: all 0.1s ease-in-out;
}

.page-link {
  display: block;
  text-decoration: none;
}

.register-btn {
  width: 100%;
  font-family: 'Questrial', sans-serif;
  letter-spacing: 0.08em;
}

.event-card {
  background-color: #ffffff;
}

.event-meta {
  color: #222222;
  line-height: 1.65;
}

.event-meta :deep(.v-icon) {
  color: #041D4F;
  margin-right: 0.25rem;
  vertical-align: -0.12em;
}

.event-sponsor {
  color: #222222;
}

.link {
  cursor: pointer;
}

.event-placeholder {
  min-height: 240px;
  border: 1px solid rgba(4, 29, 79, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

.event-placeholder__label {
  font-family: 'Questrial', sans-serif;
  color: #041D4F;
  font-weight: 600;
}

.event-placeholder__date {
  font-family: 'Questrial', sans-serif;
  color: #222222;
  font-size: 1.25rem;
}

.title {
  font-weight: 400;
  display: flex;
  font-family: 'Questrial', sans-serif;
}

.text-h4,
.text-h5,
.text-h6 {
  font-family: 'Questrial', sans-serif;
  color: #041D4F;
}

.text-h4 {
  font-weight: 500;
}

.text-h5 {
  font-weight: 600;
}

@media (max-width: 600px) {
  .v-col {
    flex-basis: inherit !important;
  }

  .event-card {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}
</style>
