<template>
  <v-app class="app-container">
    <AppHeaderIndex />
    <v-container fluid class="main-content">
      <v-row>
        <v-col align="center" class="pb-0 mt-12">
          <v-card
            max-width="90vw"
            min-width="90vw"
            class="venue-card py-10 my-15 px-md-10 px-4"
            :elevation="0"
          >
            <v-card-item>
              <h1 class="text-h4 title align-center mb-10">
                <span><v-img :src="withBaseURL('/ruby.svg')" :width="30" class="mr-2 d-none d-md-flex" alt="" /></span>
                <span><v-img :src="withBaseURL('/ruby.svg')" :width="20" class="mr-2 d-flex d-md-none" alt="" /></span>
                VENUE
              </h1>

              <section class="venue-hero">
                <v-img
                  :src="withBaseURL('/venue.png')"
                  alt="大津市伝統芸能会館の能舞台"
                  class="venue-image"
                  cover
                />
              </section>

              <section class="venue-content">
                <div class="venue-heading">
                  <h2 class="venue-name">大津市伝統芸能会館</h2>
                  <p class="venue-address">〒520-0036 大津市園城寺町246-24</p>
                </div>

                <div class="venue-actions">
                  <a
                    v-for="link in venueLinks"
                    :key="link.url"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="venue-action"
                  >
                    <v-btn
                      variant="outlined"
                      class="venue-button"
                      block
                    >
                      <v-icon :icon="link.icon" size="18" class="mr-2" />
                      {{ link.label }}
                    </v-btn>
                  </a>
                </div>

                <div class="access-list">
                  <div
                    v-for="item in accessItems"
                    :key="item.label"
                    class="access-item"
                  >
                    <p class="access-label">{{ item.label }}</p>
                    <p class="access-text">{{ item.text }}</p>
                  </div>
                </div>
              </section>
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
  title: 'Venue - 関西Ruby会議09',
  ogTitle: 'Venue - 関西Ruby会議09',
  description: '関西Ruby会議09の会場情報を掲載しています。',
  ogDescription: '関西Ruby会議09の会場情報を掲載しています。',
})

const { app: { baseURL } } = useRuntimeConfig()
const withBaseURL = (path) => `${baseURL}${path.replace(/^\/+/, '')}`

const venueLinks = [
  {
    label: 'OFFICIAL SITE',
    url: 'https://www.otsu-dengei.jp/',
    icon: 'mdi-open-in-new',
  },
  {
    label: 'GOOGLE MAPS',
    url: 'https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B4%A5%E5%B8%82%E4%BC%9D%E7%B5%B1%E8%8A%B8%E8%83%BD%E4%BC%9A%E9%A4%A8',
    icon: 'mdi-map-marker-outline',
  },
]

const accessItems = [
  {
    label: 'Keihan',
    text: '京阪石坂線「大津市役所前」駅から徒歩約5分（約400m）',
  },
  {
    label: 'Keihan',
    text: '京阪石坂線「三井寺」駅から徒歩約10分',
  },
  {
    label: 'JR Biwako Line',
    text: 'JR琵琶湖線「大津」駅から徒歩約25分（約1.8km）',
  },
  {
    label: 'JR Kosei Line',
    text: 'JR湖西線「大津京」駅から徒歩約20分',
  },
  {
    label: 'Bus',
    text: 'JR大津駅から「市役所前」方面の路線バスあり。下車後、徒歩約5分',
  },
  {
    label: 'Parking',
    text: '御来館者専用の無料駐車場があります（先着50台程度）',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Noto Sans JP', sans-serif;
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

a {
  color: inherit;
  text-decoration: none;
}

.title {
  display: flex;
  font-family: 'Questrial', sans-serif;
  font-weight: 400;
}

.text-h4 {
  color: #041D4F;
  font-weight: 500;
}

.venue-card {
  border-radius: 8px !important;
}

.venue-hero {
  overflow: hidden;
  max-width: 920px;
  margin: 0 auto;
  border: 1px solid #D6DEEE;
  border-radius: 8px;
}

.venue-image {
  aspect-ratio: 16 / 9;
  width: 100%;
  max-height: 520px;
}

.venue-content {
  max-width: 920px;
  margin: 2.5rem auto 0;
}

.venue-heading {
  text-align: center;
}

.venue-name {
  color: #041D4F;
  font-size: clamp(1.65rem, 2.5vw, 2.35rem);
  font-weight: 700;
  line-height: 1.35;
}

.venue-address {
  color: #222222;
  line-height: 1.7;
  margin-top: 0.75rem;
}

.venue-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin: 2rem 0 2.5rem;
}

.venue-action {
  flex: 0 1 180px;
}

.venue-button {
  min-height: 44px;
  border-color: #0A1C4C !important;
  border-radius: 6px !important;
  color: #041D4F !important;
  font-family: 'Questrial', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.venue-button:hover {
  background-color: rgba(10, 28, 76, 0.06);
}

.venue-button:focus-visible {
  outline: 2px solid #0A1C4C;
  outline-offset: 2px;
}

.access-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid #D6DEEE;
}

.access-item {
  padding: 1.25rem;
  border-bottom: 1px solid #D6DEEE;
}

.access-item:nth-child(odd) {
  border-right: 1px solid #D6DEEE;
}

.access-label {
  color: #5B6784;
  font-family: 'Questrial', sans-serif;
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
}

.access-text {
  color: #222222;
  line-height: 1.7;
  margin-bottom: 0;
}

@media (max-width: 700px) {
  .venue-image {
    aspect-ratio: 4 / 3;
    max-height: 360px;
  }

  .venue-content {
    margin-top: 2rem;
  }

  .venue-action {
    flex-basis: 100%;
  }

  .access-list {
    grid-template-columns: 1fr;
  }

  .access-item {
    padding: 1rem 0;
  }

  .access-item:nth-child(odd) {
    border-right: 0;
  }
}
</style>
