<template>
  <v-app class="app-container">
    <AppHeaderIndex />
    <v-container fluid class="main-content">
      <v-row>
        <v-col align="center" class="pb-0 mt-12">
          <v-card
            class="py-10 my-15 px-md-10 px-4 sponsors-card"
            :elevation="0"
          >
          <v-card-item>
            <h1 class="text-h4 title align-center mb-15">
              <span><v-img :src="withBaseURL('/ruby.svg')" :width="30" class="mr-2 d-none d-md-flex" alt="" /></span>
              <span><v-img :src="withBaseURL('/ruby.svg')" :width="20" class="mr-2 d-flex d-md-none" alt="" /></span>
              SPONSORS
            </h1>
            <div align="left">
              <section
                v-for="section in sponsorSections"
                :key="section.title"
              >
                <div class="sponsors-header">
                  <h2 align="center" class="text-h6 title">
                    {{ section.title }}
                  </h2>
                </div>
                <v-card
                  v-for="(content, index) in section.sponsors"
                  :key="content.name"
                  class="py-10 px-md-10 px-4"
                  :elevation="0"
                >
                  <v-row>
                    <v-col
                      lg="3"
                      md="12"
                      sm="12"
                      xs="12"
                      class="justify-center"
                      align="center"
                    >
                      <a
                        v-if="content.url && content.image"
                        :href="content.url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <v-img
                          class="link"
                          :src="withBaseURL(content.image)"
                          :alt="content.name"
                          max-height="300px"
                          max-width="300px"
                        />
                      </a>
                      <v-img
                        v-else-if="content.image"
                        :src="withBaseURL(content.image)"
                        :alt="content.name"
                        max-height="300px"
                        max-width="300px"
                      />
                      <div
                        v-else
                        class="sponsor-logo-placeholder"
                      >
                        {{ content.name }}
                      </div>
                    </v-col>
                    <v-col>
                      <v-chip
                        size="large"
                        color="#041D4F"
                        variant="flat"
                        class="my-3 px-8"
                        v-if="content.custom"
                      >{{ content.custom }}</v-chip>
                      <p>
                        <a
                          v-if="content.url"
                          class="text-link text-h5 mb-2 name"
                          :href="content.url"
                          target="_blank"
                          rel="noopener noreferrer"
                        >{{ content.name }}</a>
                        <span
                          v-else
                          class="text-h5 mb-2 name"
                        >{{ content.name }}</span>
                      </p>
                      <p v-if="content.url">
                        <a
                          class="text-link text-caption"
                          :href="content.url"
                          target="_blank"
                          rel="noopener noreferrer"
                        >{{ content.url }}</a>
                      </p>
                      <p v-if="content.description" class="text-body-1 mt-5">
                        {{ content.description }}
                      </p>
                    </v-col>
                  </v-row>
                  <v-divider
                    v-if="index < section.sponsors.length - 1"
                    class="mt-10"
                  ></v-divider>
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
  title: 'Sponsors - 関西Ruby会議09',
  ogTitle: 'Sponsors - 関西Ruby会議09',
  description: '関西Ruby会議09のスポンサー情報を掲載しています。',
  ogDescription: '関西Ruby会議09のスポンサー情報を掲載しています。',
})

const { app: { baseURL } } = useRuntimeConfig()
const withBaseURL = (path) => `${baseURL}${path.replace(/^\/+/, '')}`
</script>

<script>
const sponsorNameCollator = new Intl.Collator('ja', {
  numeric: true,
  sensitivity: 'base',
})
const sortSponsorsByName = (sponsors) => [...sponsors].sort((a, b) => (
  sponsorNameCollator.compare(a.name, b.name)
))

export default {
  data: () => ({
    biwa: [
      {
        name: '虎の穴ラボ株式会社',
        url: 'https://toranoana-lab.co.jp/',
        description: '虎の穴ラボ株式会社は、同人誌通販サイト「とらのあな通信販売」をはじめ、クリエイター支援プラットフォーム「Fantia（ファンティア）」「Creatia(クリエイティア)」など、オタクカルチャーを支えるWebサービスの開発・運営を行う企業です。「クリエイターのファミリーになる」という理念のもと、すべてのクリエイターの創作活動を支援し、ファンとの新しい繋がりの場を提供しています。その中でFantiaは、登録ユーザー数2,000万人を超える大規模なサービスへと成長しました。私たちは、この急成長するサービスの膨大なトラフィックとデータ処理を、Ruby on Railsを中心とした技術スタックで支えています。今後も、大規模サービスならではの技術的課題に挑戦し、次世代のクリエイターエコノミーを技術の力で牽引していきます。世界中のクリエイターとファンを繋ぐプラットフォームを、共に作り上げる仲間を募集しています。',
        image: '/sponsors/toranoanalab.jpg',
      },
    ],
    gold: [
      {
        name: '株式会社永和システムマネジメント',
        url: 'https://esm.co.jp/',
        description: '永和システムマネジメントにはアジャイルな開発を20年以上続けて培った、実践知、価値観、そしてそれを届ける人がいます。私たちは情熱をもって Ruby を使ってアジャイルにお客さまに価値を届けます。 また、コミュニティ活動への参加も積極的に行っており、OSS へのコントリビューション、登壇、イベントスタッフ、スポンサーなど様々な形で関わっています。',
        image: '/sponsors/esm.png',
      },
      {
        name: '株式会社インゲージ',
        url: 'https://ingage.co.jp/',
        description: 'インゲージは、「ひとり一人に向き合うをカタチにする」をミッションにコミュニケーションプラットフォーム『Re:lation（リレーション）』を開発・提供しています。2014年の創業以来「使って楽しい」「導入して良かった」を感じていただけるサービスの提供を第一に、日々開発を進めています。『Re:lation』は、リリース12年で導入社数は6,000社を超え、企業の業務効率化や人材教育、事業成長に貢献しています。',
        image: '/sponsors/ingage.png',
      },
      {
        name: 'エースチャイルド株式会社',
        url: 'https://www.as-child.com/',
        description: '「ITのチカラで、子どもの未来を明るく。」をミッションに、SNS見守りや自治体シェアトップクラスの相談システム等のSaaSを展開しています。元エンジニアの代表のもと、Ruby on Railsを技術スタックの中心に据え、全員がスペシャリストを目指し研鑽しています。社会貢献と利益を両立し、子どもたちが安心安全に育つ社会の実現に、技術の力で挑み続けるチームです。',
        image: '/sponsors/aschild.png',
      },
      {
        name: '株式会社ネットプロテクションズ',
        url: 'https://corp.netprotections.com/',
        description: '株式会社ネットプロテクションズは、後払い決済「NP後払い」「atone」を開発・運営する企業です。プロダクトの中核にRubyを据え、決済ドメインの複雑な課題に向き合っています。技術と事業を深く理解したエンジニアが設計から意思決定まで担い、「つぎのアタリマエをつくる」ことに挑戦し続けています。',
        image: '/sponsors/netprotections.png',
      },
      {
        name: 'ポノス株式会社',
        url: 'https://www.ponos.jp/',
        description: 'ポノスは、1990年の創業以来一貫してゲームを通してエンターテインメントという文化の発展に貢献してまいりました。【求められるモノは創らない、それ以上を創り出す。】を掲げ、求められるモノの中に、自分たちしか創れない価値をプラスしていくことを私たちは大切にしています。現在は、スマートデバイス向けのオリジナルゲーム開発を核に事業を展開し、代表タイトル『にゃんこ大戦争』は、累計DL数1億1111万回（2026年3月現在）を超え、多くのお客様に楽しんでいただいております。',
        image: '/sponsors/ponos.png',
      },
      {
        name: '株式会社アジャイルウェア',
        url: 'https://agileware.jp/',
        description: 'アジャイルウェアはウェルビーイング経営を実践する大阪発のIT企業です。導入企業7,000社超のRedmineベースのプロジェクト管理ツール「Lychee Redmine」を開発・提供しています。2025年4月には「自宅より居心地の良いオフィス」をコンセプトにWELL-BEING OFFICEをオープン。大阪にお越しの際は、ぜひオフィス見学ツアーへお越しください！',
        image: '/sponsors/agileware.png',
      },
      {
        name: '株式会社IVRy',
        url: 'https://ivry.jp/',
        description: '株式会社IVRyは「最高の技術を、すべての人と企業に届ける」をミッションに掲げ、対話AIプラットフォーム「アイブリー」を開発・提供しています。24時間365日稼働するAIが、電話応対を自動化・標準化し、業務効率と顧客体験の質を同時に向上させます。あらゆるコミュニケーションデータをAIで解析・活用し、企業の成長を支援します。',
        image: '/sponsors/ivry.png',
      },
      {
        name: '株式会社Leaner Technologies',
        url: 'https://leaner.co.jp/',
        description: 'リーナーテクノロジーズは 調達購買（企業の買い物）の領域でクラウドサービスを展開するスタートアップです。見積業務・購買業務をアナログからデジタル化し、調達活動の高度化・効率化・コスト低減を実現します。',
        image: '/sponsors/leaner.png',
      },
      {
        name: '株式会社Gaji-Labo',
        url: 'https://www.gaji.jp/',
        description: 'Gaji-Labo はプロダクトチーム支援の専門企業です。フロントエンド開発や UI デザインなどの専門技術の提供を軸に、リソース提供ではなく優れたチームワークをデリバリーし、プロダクトを成長させることに取り組んでいます。関西Ruby会議08から技術コミュニティ参加をはじめ、RubyKaigi 2026 のデザインスポンサーを任せていただくことが出来ました。きっかけをありがとうございます！',
        image: '/sponsors/gajilabo.png',
      },
    ],
    silver: [
      {
        name: '株式会社Ruby開発',
        url: 'https://www.ruby-dev.jp/',
        description: '株式会社Ruby開発は、Rubyをコア技術としたWebサービス開発のプロフェッショナル集団です。RubyCommitterが2名在籍し、高い技術力と豊富な開発実績を誇ります。AIとRubyを組み合わせ、革新的なサービスの創造を目指します。',
        image: '/sponsors/rubydevelopment.jpg',
      },
      {
        name: '株式会社SmartHR',
        url: 'https://smarthr.co.jp/',
        description: 'SmartHRは、クラウド人事労務ソフトです。「worker-friendly 働くみんなが使いやすい」というビジョンのもと、企業の生産性を向上し、誰もがその人らしく働ける環境づくりに貢献します。',
        image: '/sponsors/smarthr.png',
      },
      {
        name: '株式会社ネットワーク応用通信研究所',
        url: 'https://www.netlab.jp/',
        description: 'ネットワーク応用通信研究所(NaCl)はまつもとゆきひろさんと共に、2001年からお客様のためにRubyアプリケーションを開発してきました。NaClにはRubyが好きなメンバーが集まっています。',
        image: '/sponsors/nacl.png',
      },
    ],
    tool: [
      {
        name: '合同会社esa',
        url: 'https://esa.io/',
        image: '/sponsors/esa.png',
      },
    ],
  }),
  computed: {
    sponsorSections() {
      return [
        {
          title: 'Biwa Sponsor',
          sponsors: sortSponsorsByName(this.biwa),
        },
        {
          title: 'Gold Sponsor',
          sponsors: sortSponsorsByName(this.gold),
        },
        {
          title: 'Silver Sponsor',
          sponsors: sortSponsorsByName(this.silver),
        },
        {
          title: 'Tool Sponsor',
          sponsors: sortSponsorsByName(this.tool),
        },
      ]
    },
  },
}
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

.sponsors-card {
  max-width: 70vw;
}

@media (max-width: 1280px) {
  .sponsors-card {
    max-width: 90vw;
  }
}

.v-application {
  color: #041D4F;
  position: relative;
}

.name {
  color: #041D4F !important;
}

.text-link {
  color: #041D4F;
  text-decoration: none;
}

.text-link:hover {
  color: #0A1C4C;
  text-decoration: underline;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: all 0.1s ease-in-out;
}

@media (max-width: 600px) {
  .v-col {
    flex-basis: inherit !important;
  }
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

.text-h5 {
  color: #041D4F;
  font-weight: 600;
}

.text-h6 {
  color: #041D4F;
}

.text-body-1 {
  line-height: 1.7;
  font-family: 'Noto Sans JP', sans-serif;
}

.sponsors-header {
  width: 100%;
  background-color: #EEF3FF;
  border: 1px solid #D6DEEE;
  padding: .5rem 1rem;
}

.link {
  cursor: pointer;
}

.sponsor-logo-placeholder {
  width: min(100%, 300px);
  min-height: 180px;
  border: 1px solid #D6DEEE;
  background-color: #F7F9FE;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  font-family: 'Questrial', 'Noto Sans JP', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
}
</style>
