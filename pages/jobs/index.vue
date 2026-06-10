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
              <h1 class="text-h4 title align-center justify-center mb-10">
                <span><v-img :src="withBaseURL('/ruby.svg')" :width="30" class="mr-2 d-none d-md-flex" alt="" /></span>
                <span><v-img :src="withBaseURL('/ruby.svg')" :width="20" class="mr-2 d-flex d-md-none" alt="" /></span>
                JOBS
              </h1>
              <div align="left">
                <v-row>
                  <v-col
                    v-for="(content, index) in boards"
                    :key="index"
                    lg="3"
                    md="4"
                    sm="4"
                    xs="6"
                    cols="6"
                    class="justify-center d-flex"
                    align="center"
                  >
                    <v-card
                      class="job-card d-flex flex-column"
                      height="100%"
                      :elevation="0"
                      variant="outlined"
                    >
                      <div class="flex-grow-1 d-flex flex-column">
                        <a
                          :href="content.links[0].url"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="d-block text-center mb-3"
                        >
                          <v-img
                            class="link mx-auto"
                            :src="withBaseURL(content.image)"
                            :alt="content.name"
                            max-height="300px"
                            max-width="300px"
                          />
                        </a>
                        <p class="flex-grow-1 text-center">
                          {{ content.description }}
                        </p>
                      </div>
                      <div
                        class="job-actions mt-auto"
                        :class="{ 'job-actions--multiple': content.links.length > 1 }"
                      >
                        <a
                          v-for="link in content.links"
                          :key="link.url"
                          :href="link.url"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="job-action"
                        >
                          <v-btn
                            variant="outlined"
                            class="job-button"
                            block
                          >{{ link.label }}</v-btn>
                        </a>
                      </div>
                    </v-card>
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
useSeoMeta({
  title: 'Jobs - 関西Ruby会議09',
  ogTitle: 'Jobs - 関西Ruby会議09',
  description: '関西Ruby会議09のスポンサー企業様の求人情報を掲載しています。',
  ogDescription: '関西Ruby会議09のスポンサー企業様の求人情報を掲載しています。',
})

const { app: { baseURL } } = useRuntimeConfig()
const withBaseURL = (path) => `${baseURL}${path.replace(/^\/+/, '')}`
</script>

<script>
const normalizeJobLinks = (job) => ({
  ...job,
  links: job.links || [{ label: 'SEE MORE', url: job.url }],
})

export default {
  data: () => ({
    boards: [
      {
        name: '虎の穴ラボ株式会社',
        url: 'https://toranoana-lab.co.jp/recruit#recruit-job',
        description: '【フルリモート】Fantia・Creatia等オタクカルチャーを支えるエンジニア募集！大規模開発に挑みつつ、AIなど最新の技術研鑽ができる環境です。',
        image: '/sponsors/toranoanalab.jpg',
      },
      {
        name: 'エースチャイルド株式会社',
        description: 'フルリモートかつエンジニアに裁量ある環境で、技術を深く追求しませんか。業務時間内の自習時間確保や相互レビューを通じ、仲間たちと高め合えるスペシャリスト集団です。',
        image: '/sponsors/aschild.png',
        links: [
          {
            label: 'SEE MORE',
            url: 'https://www.as-child.com/recruit/articles/4918/',
          },
          {
            label: 'SEE MORE',
            url: 'https://www.as-child.com/recruit/articles/5108/',
          },
        ],
      },
      {
        name: '株式会社永和システムマネジメント',
        url: 'https://agile.esm.co.jp/hire/carrier-recruitment.html',
        description: 'Rubyとアジャイルソフトウェア開発を通じてコミュニティと成長したいエンジニアを絶賛募集中！',
        image: '/sponsors/esm.png',
      },
      {
        name: '株式会社Gaji-Labo',
        url: 'https://www.gaji.jp/recruit',
        description: '「すべての人々にとって選択の自由があることが当たり前な世界をつくる」スタートアップや事業会社のプロダクト成長を支援するソフトウェアエンジニア募集！',
        image: '/sponsors/gajilabo.png',
      },
      {
        name: '株式会社インゲージ',
        url: 'https://mite.ingage.co.jp/join-us/',
        description: "[77,97,116,122,12364,25216,34899,39015,21839,12398,73,78,71,65,71,69].pack('U*')",
        image: '/sponsors/ingage.png',
      },
      {
        name: '株式会社IVRy',
        url: 'https://herp.careers/v1/ivry/requisition-groups/d6db655f-ba88-40d3-a4dc-fe005f8b802b',
        description: '「Making "Work is Fun" a reality. "働くことは、楽しい"を常識に変えていく」仲間を募集しています！関西オフィスもあります！',
        image: '/sponsors/ivry.png',
      },
      {
        name: '株式会社Leaner Technologies',
        url: 'https://herp.careers/v1/leaner/NkEjIqCk0Lth',
        description: 'エンタープライズ向けSaaSを一緒に作ってくれるエンジニア募集！プロダクトも基盤もRuby製です。（フルリモート前提）',
        image: '/sponsors/leaner.png',
      },
      {
        name: '株式会社ネットプロテクションズ',
        url: 'https://hrmos.co/pages/netprotections/jobs/51001005',
        description: '決済ドメインの複雑な課題をRubyで解く。設計・技術選定に深く関われるシニアバックエンドエンジニアを募集しています。',
        image: '/sponsors/netprotections.png',
      },
      {
        name: 'ポノス株式会社',
        url: 'https://www.ponos.jp/recruit/mid/Recruitment/%e3%82%b5%e3%83%bc%e3%83%90%e3%83%bc%e3%82%b5%e3%82%a4%e3%83%89%e3%82%a8%e3%83%b3%e3%82%b8%e3%83%8b%e3%82%a2/',
        description: '13年以上運営中の代表タイトル「にゃんこ大戦争」は、累計1億1111万DLを突破！モバイルゲームのサーバー開発に参画いただける仲間を募集中です！',
        image: '/sponsors/ponos.png',
      },
    ].map(normalizeJobLinks),
  }),
}
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

.link {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

.title {
  font-weight: 400;
  display: flex;
  font-family: 'Questrial', sans-serif;
}

.text-h4 {
  color: #041D4F;
  font-weight: 500;
}

.job-card {
  width: 100%;
  padding: 16px;
}

.job-card p {
  color: #222222;
  line-height: 1.65;
}

.v-card--variant-outlined {
  border-color: #D6DEEE !important;
  border-width: 1px !important;
  border-radius: 8px !important;
}

.v-btn {
  font-family: 'Questrial', sans-serif;
  letter-spacing: 0.04em;
}

.job-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
  padding-top: 1rem;
}

.job-action {
  flex: 0 1 160px;
  min-width: 140px;
}

.job-actions--multiple .job-action {
  flex: 0 1 104px;
  min-width: 96px;
}

.job-button {
  min-height: 44px;
  border-color: #0A1C4C !important;
  border-radius: 6px !important;
  color: #041D4F !important;
  font-size: 0.78rem;
  font-weight: 500;
}

.job-button:hover {
  background-color: rgba(10, 28, 76, 0.06);
}

.job-button:focus-visible {
  outline: 2px solid #0A1C4C;
  outline-offset: 2px;
}

@media (max-width: 600px) {
  .v-col {
    flex-basis: inherit !important;
  }
}
</style>
