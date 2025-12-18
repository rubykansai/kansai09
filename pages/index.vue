<template>
  <v-app class="fill-height">
    <AppHeaderIndex />
    <v-row>
      <v-col align="center" class="d-flex justify-center align-center">
        <v-card
          min-width="100vw"
          :elevation="0"
        >
          <v-card-item class="justify-center">
            <v-img src="/logo.png" width="30vh" class="mb-16 d-none d-md-block"/>
            <v-img src="/logo.png" width="20vh" class="mb-8 d-block d-md-none"/>
            <div class="text-h5 tagline mb-6 d-none d-md-block">
              Mother Lake and Ruby
            </div>
            <div class="text-h5 tagline mb-6 d-block d-md-none">
              Mother Lake and Ruby
            </div>
            <div class="text-h4 date-text mb-3 d-none d-md-block">
              2026.7.18 <span class="text-h5 date-day">(Sat)</span>
            </div>
            <div class="text-h4 date-text mb-3 d-block d-md-none">
              2026.7.18 <span class="text-h5 date-day">(Sat)</span>
            </div>
            <div class="text-h5 venue-text mb-8 d-none d-md-block">
              <a class="venue-link" href="https://www.otsu-dengei.jp/" target="_blank">
                @Otsu Traditional Performing Arts Center
              </a>
            </div>
            <div class="text-h5 venue-text mb-8 d-block d-md-none">
              <a class="venue-link" href="https://www.otsu-dengei.jp/" target="_blank">
                @Otsu Traditional Performing Arts Center
              </a>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<style scoped>
* {
  color: #fff;
  box-sizing: border-box;
}

.v-application, .v-card {
  background-color: #041D4F !important;
  position: relative;
}

.v-card {
  background: transparent !important;
}

.v-row {
  margin: 0 !important;
}

.date-text {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.date-day {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}

.venue-text {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
  letter-spacing: 0.05em;
}

.venue-link {
  color: #fff;
  text-decoration: underline 1px;
  transition: color 0.3s ease;
}

.venue-link:hover {
  color: #87CEEB;
}

.tagline {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #87CEEB;
  font-size: 1.5rem !important;
}

.message {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.3rem !important;
  font-weight: 300;
  letter-spacing: 0.1em;
}

/* デスクトップ用のサイズ調整 */
.text-h4.date-text {
  font-size: 2rem !important;
  font-weight: 500;
}

.text-h5.date-day {
  font-size: 1.5rem !important;
}

.text-h5.venue-text {
  font-size: 1.3rem !important;
}

/* モバイル用の調整 */
@media (max-width: 768px) {
  .text-h4.date-text {
    font-size: 1.5rem !important;
  }

  .text-h5.date-day {
    font-size: 1.2rem !important;
  }

  .text-h5.venue-text {
    font-size: 1.1rem !important;
  }

  .tagline {
    font-size: 1.2rem !important;
    letter-spacing: 0.15em;
  }

  .message {
    font-size: 1.1rem !important;
  }
}
</style>
