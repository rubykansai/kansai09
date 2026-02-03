<template>
  <v-app class="app-container">
    <AppHeaderIndex />
    <div class="background-patterns d-none d-md-block">
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-1" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-2" />
      <img src="/leaf.svg" class="pattern pattern-desktop-3" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-4" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-5" />
      <img src="/leaf.svg" class="pattern pattern-desktop-6" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-7" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-8" />
      <img src="/leaf.svg" class="pattern pattern-desktop-9" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-10" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-11" />
      <img src="/leaf.svg" class="pattern pattern-desktop-12" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-13" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-14" />
      <img src="/leaf.svg" class="pattern pattern-desktop-15" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-16" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-17" />
      <img src="/leaf.svg" class="pattern pattern-desktop-18" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-19" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-20" />
      <img src="/leaf.svg" class="pattern pattern-desktop-21" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-22" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-23" />
      <img src="/leaf.svg" class="pattern pattern-desktop-24" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-25" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-26" />
      <img src="/leaf.svg" class="pattern pattern-desktop-27" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-28" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-29" />
      <img src="/leaf.svg" class="pattern pattern-desktop-30" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-31" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-32" />
      <img src="/leaf.svg" class="pattern pattern-desktop-33" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-34" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-35" />
      <img src="/leaf.svg" class="pattern pattern-desktop-36" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-37" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-38" />
      <img src="/leaf.svg" class="pattern pattern-desktop-39" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-40" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-41" />
      <img src="/leaf.svg" class="pattern pattern-desktop-42" />
      <img src="/ruby-bg.svg" class="pattern pattern-desktop-43" />
      <img src="/flower-bg.svg" class="pattern pattern-desktop-44" />
    </div>

    <div class="background-patterns d-block d-md-none">
      <img src="/ruby-bg.svg" class="pattern pattern-mobile-1" />
      <img src="/flower-bg.svg" class="pattern pattern-mobile-2" />
      <img src="/leaf.svg" class="pattern pattern-mobile-3" />
      <img src="/leaf.svg" class="pattern pattern-mobile-4" />
      <img src="/ruby-bg.svg" class="pattern pattern-mobile-5" />
      <img src="/flower-bg.svg" class="pattern pattern-mobile-6" />
      <img src="/flower-bg.svg" class="pattern pattern-mobile-7" />
      <img src="/leaf.svg" class="pattern pattern-mobile-8" />
      <img src="/ruby-bg.svg" class="pattern pattern-mobile-9" />
      <img src="/ruby-bg.svg" class="pattern pattern-mobile-10" />
      <img src="/flower-bg.svg" class="pattern pattern-mobile-11" />
      <img src="/leaf.svg" class="pattern pattern-mobile-12" />
      <img src="/leaf.svg" class="pattern pattern-mobile-13" />
      <img src="/ruby-bg.svg" class="pattern pattern-mobile-14" />
      <img src="/flower-bg.svg" class="pattern pattern-mobile-15" />
      <img src="/flower-bg.svg" class="pattern pattern-mobile-16" />
      <img src="/leaf.svg" class="pattern pattern-mobile-17" />
      <img src="/ruby-bg.svg" class="pattern pattern-mobile-18" />
    </div>
    <v-container fluid class="main-content">
      <v-row class="content-row">
        <v-col align="center" class="d-flex justify-center align-center">
        <v-card
          min-width="100vw"
          :elevation="0"
        >
          <v-card-item class="justify-center">
            <div class="three-column-layout d-none d-md-flex">
              <div class="left-column">
                <div class="vertical-text-questrial">Mother Lake and Ruby</div>
                <div class="ruby-logo-container">
                  <v-img src="/ruby.svg" width="40px" class="ruby-logo"/>
                </div>
              </div>
              <div class="center-column">
                <v-img src="/logo.png" width="300px" class="mb-8"/>
              </div>
              <div class="right-column">
                <div class="vertical-text-hina venue-text-vertical">
                  <a href="https://www.otsu-dengei.jp/" target="_blank" class="venue-link-vertical">＠大津市伝統芸能会館</a>
                </div>
                <div class="vertical-text-hina date-text-vertical">二〇二六年七月十八日</div>
              </div>
            </div>

            <div class="d-block d-md-none">
              <div class="mobile-tagline-container mb-6">
                <span class="tagline-questrial">Mother Lake and Ruby</span>
                <v-img src="/ruby.svg" width="20px" class="ruby-logo-mobile"/>
              </div>
              <v-img src="/logo.png" width="20vh" class="mb-8"/>
              <div class="text-h4 date-text-mobile mb-3">
                二〇二六年七月十八日
              </div>
              <div class="text-h5 venue-text mb-8">
                <a class="venue-link" href="https://www.otsu-dengei.jp/" target="_blank">
                  ＠大津市伝統芸能会館
                </a>
              </div>
            </div>

            <div class="keynote-names d-none d-md-block">
              <span class="keynote-label">基調講演：</span>成瀬ゆい (<a class="keynote-link" href="https://github.com/nurse" target="_blank" rel="noopener">@nurse</a>) / はすじょい (<a class="keynote-link" href="https://github.com/hsjoihs" target="_blank" rel="noopener">@hsjoihs</a>)
            </div>
            <div class="justify-center gap-4 mb-8 d-none d-md-flex">
              <v-btn
                size="large"
                color="#0A1C4C"
                class="cta-button px-8"
                disabled
              >
                Register Now
              </v-btn>
              <v-btn
                size="large"
                color="#0A1C4C"
                class="cta-button px-8"
                href="https://esa-pages.io/p/sharing/22789/posts/19/b1085a24df458e23c0c1.html"
                target="_blank"
              >
                Become a Sponsor
              </v-btn>
            </div>
            <div class="keynote-names d-md-none">
              <span class="keynote-label">基調講演： </span>成瀬ゆい (<a class="keynote-link" href="https://github.com/nurse" target="_blank" rel="noopener">@nurse</a>) / はすじょい (<a class="keynote-link" href="https://github.com/hsjoihs" target="_blank" rel="noopener">@hsjoihs</a>)
            </div>
            <div class="d-flex d-md-none flex-column align-center gap-3 mb-8">
              <v-btn
                size="large"
                color="#0A1C4C"
                class="cta-button px-8"
                disabled
              >
                Register Now
              </v-btn>
              <v-btn
                size="large"
                color="#0A1C4C"
                class="cta-button px-8"
                href="https://esa-pages.io/p/sharing/22789/posts/19/b1085a24df458e23c0c1.html"
                target="_blank"
              >
                Become a Sponsor
              </v-btn>
            </div>
          </v-card-item>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Questrial&family=Hina+Mincho&display=swap');

* {
  color: #041D4F;
  box-sizing: border-box;
}

.app-container {
  background-color: #ffffff !important;
  border: 10px solid #0A1C4C;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
}

.background-patterns {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.pattern {
  position: absolute;
  height: auto;
}

.pattern-desktop-1 { top: 8%; left: -5%; width: 100px; }
.pattern-desktop-2 { top: 8%; left: 10%; width: 100px; }
.pattern-desktop-3 { top: 8%; left: 25%; width: 100px; }
.pattern-desktop-4 { top: 8%; left: 40%; width: 100px; }
.pattern-desktop-5 { top: 8%; left: 55%; width: 100px; }
.pattern-desktop-6 { top: 8%; left: 70%; width: 100px; }
.pattern-desktop-7 { top: 8%; left: 85%; width: 100px; }

.keynote-names {
  font-family: 'Hina Mincho', sans-serif;
  font-size: 20px;
  letter-spacing: 0.02em;
  margin-top: -8px;
  margin-bottom: 50px;
  text-align: center;
}

.keynote-link {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 600px) {
  .keynote-label {
    display: block;
    margin-bottom: 4px;
  }
}
.pattern-desktop-8 { top: 20%; left: 2%; width: 100px; }
.pattern-desktop-9 { top: 20%; left: 17%; width: 100px; }
.pattern-desktop-10 { top: 20%; left: 32%; width: 100px; }
.pattern-desktop-11 { top: 20%; left: 47%; width: 100px; }
.pattern-desktop-12 { top: 20%; left: 62%; width: 100px; }
.pattern-desktop-13 { top: 20%; left: 77%; width: 100px; }
.pattern-desktop-14 { top: 35%; left: -5%; width: 100px; }
.pattern-desktop-15 { top: 35%; left: 10%; width: 100px; }
.pattern-desktop-16 { top: 35%; left: 25%; width: 100px; }
.pattern-desktop-17 { top: 35%; left: 40%; width: 100px; }
.pattern-desktop-18 { top: 35%; left: 55%; width: 100px; }
.pattern-desktop-19 { top: 35%; left: 70%; width: 100px; }
.pattern-desktop-20 { top: 35%; left: 85%; width: 100px; }
.pattern-desktop-21 { top: 50%; left: 2%; width: 100px; transform: translateY(-50%); }
.pattern-desktop-22 { top: 50%; left: 17%; width: 100px; transform: translateY(-50%); }
.pattern-desktop-23 { top: 50%; left: 32%; width: 100px; transform: translateY(-50%); }
.pattern-desktop-24 { top: 50%; left: 47%; width: 100px; transform: translateY(-50%); }
.pattern-desktop-25 { top: 50%; left: 62%; width: 100px; transform: translateY(-50%); }
.pattern-desktop-26 { top: 50%; left: 77%; width: 100px; transform: translateY(-50%); }
.pattern-desktop-27 { top: 65%; left: -5%; width: 100px; }
.pattern-desktop-28 { top: 65%; left: 10%; width: 100px; }
.pattern-desktop-29 { top: 65%; left: 25%; width: 100px; }
.pattern-desktop-30 { top: 65%; left: 40%; width: 100px; }
.pattern-desktop-31 { top: 65%; left: 55%; width: 100px; }
.pattern-desktop-32 { top: 65%; left: 70%; width: 100px; }
.pattern-desktop-33 { top: 65%; left: 85%; width: 100px; }
.pattern-desktop-34 { top: 80%; left: 2%; width: 100px; }
.pattern-desktop-35 { top: 80%; left: 17%; width: 100px; }
.pattern-desktop-36 { top: 80%; left: 32%; width: 100px; }
.pattern-desktop-37 { top: 80%; left: 47%; width: 100px; }
.pattern-desktop-38 { top: 80%; left: 62%; width: 100px; }
.pattern-desktop-39 { top: 80%; left: 77%; width: 100px; }
.pattern-desktop-40 { bottom: 3%; left: 10%; width: 100px; }
.pattern-desktop-41 { bottom: 3%; left: 30%; width: 100px; }
.pattern-desktop-42 { bottom: 3%; left: 50%; width: 100px; }
.pattern-desktop-43 { bottom: 3%; left: 70%; width: 100px; }
.pattern-desktop-44 { bottom: 3%; left: 90%; width: 100px; }

.pattern-mobile-1 { top: 5%; left: 10%; width: 85px; }
.pattern-mobile-2 { top: 10%; left: 50%; width: 85px; transform: translateX(-50%); }
.pattern-mobile-3 { top: 5%; right: 10%; width: 85px; }
.pattern-mobile-4 { top: 22%; left: 10%; width: 85px; }
.pattern-mobile-5 { top: 27%; left: 50%; width: 85px; transform: translateX(-50%); }
.pattern-mobile-6 { top: 22%; right: 10%; width: 85px; }
.pattern-mobile-7 { top: 40%; left: 10%; width: 85px; }
.pattern-mobile-8 { top: 45%; left: 50%; width: 85px; transform: translateX(-50%); }
.pattern-mobile-9 { top: 40%; right: 10%; width: 85px; }
.pattern-mobile-10 { top: 58%; left: 10%; width: 85px; }
.pattern-mobile-11 { top: 63%; left: 50%; width: 85px; transform: translateX(-50%); }
.pattern-mobile-12 { top: 58%; right: 10%; width: 85px; }
.pattern-mobile-13 { top: 75%; left: 10%; width: 85px; }
.pattern-mobile-14 { top: 80%; left: 50%; width: 85px; transform: translateX(-50%); }
.pattern-mobile-15 { top: 75%; right: 10%; width: 85px; }
.pattern-mobile-16 { bottom: 5%; left: 10%; width: 85px; }
.pattern-mobile-17 { bottom: 0%; left: 50%; width: 85px; transform: translateX(-50%); }
.pattern-mobile-18 { bottom: 5%; right: 10%; width: 85px; }

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  margin: 0 !important;
  overflow: hidden;
  position: relative;
  z-index: 10;
}

.content-row {
  flex: 1;
  margin: 0 !important;
  height: 100%;
}

.v-card {
  background: transparent !important;
}

.v-col {
  height: 100%;
}

.v-card-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.three-column-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  width: 100%;
  flex: 1;
  margin-bottom: 3rem;
}

.left-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  flex-shrink: 0;
  gap: 1.5rem;
}

.ruby-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ruby-logo {
  flex-shrink: 0;
}

.right-column {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 200px;
  flex-shrink: 0;
}

.center-column {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.vertical-text-questrial {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: 'Questrial', sans-serif;
  font-size: 22px;
  letter-spacing: 0.3em;
  color: #0A1C4C;
  font-weight: 400;
}

.vertical-text-hina {
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-family: 'Hina Mincho', serif;
  letter-spacing: 0.2em;
  color: #0A1C4C;
  font-weight: 400;
}

.date-text-vertical {
  font-size: 34px;
}

.venue-text-vertical {
  font-size: 30px;
}

.venue-link-vertical {
  color: #0A1C4C;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.venue-link-vertical:hover {
  opacity: 0.7;
}

.date-text {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.date-text-mobile {
  font-family: 'Hina Mincho', serif;
  font-weight: 400;
  letter-spacing: 0.15em;
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
  color: #041D4F;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.venue-link:hover {
  opacity: 0.7;
}

.cta-button {
  color: #ffffff !important;
  font-family: 'Questrial', sans-serif;
  font-weight: 400;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  border-radius: 0 !important;
}

.cta-button:hover {
  opacity: 0.8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(10, 28, 76, 0.4);
}

.gap-3 {
  gap: 0.75rem;
}

.gap-4 {
  gap: 1rem;
}

.tagline {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #0A1C4C;
  font-size: 1.5rem !important;
}

.mobile-tagline-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.tagline-questrial {
  font-family: 'Questrial', sans-serif;
  font-size: 1.0rem;
  letter-spacing: 0.15em;
  color: #0A1C4C;
}

.ruby-logo-mobile {
  flex-shrink: 0;
  min-width: 20px;
  max-width: 20px;
}

.message {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.3rem !important;
  font-weight: 300;
  letter-spacing: 0.1em;
}

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

@media (max-width: 768px) {
  .text-h4.date-text-mobile {
    font-size: 1.5rem !important;
  }

  .text-h5.venue-text {
    font-family: 'Hina Mincho', serif;
    font-size: 1.1rem !important;
    letter-spacing: 0.1em;
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
