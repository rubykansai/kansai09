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
                <h1 id="schedule-title" class="text-h4 title align-center mb-10">
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="30" class="mr-2 d-none d-md-flex" /></span>
                  <span><v-img :src="withBaseURL('/ruby.svg')" :width="20" class="mr-2 d-flex d-md-none" /></span>
                  SCHEDULE
                </h1>

                <div class="schedule-timeline" aria-labelledby="schedule-title">
                  <article
                    v-for="item in scheduleItems"
                    :key="`${item.start}-${item.end}-${itemTitle(item)}`"
                    class="schedule-item"
                    :class="itemClasses(item)"
                  >
                    <time class="schedule-time" :datetime="item.start">
                      {{ item.start }}~{{ item.end }}
                    </time>

                    <div class="schedule-detail">
                      <template v-if="item.presentation || item.speakerName">
                        <v-chip
                          size="small"
                          :color="typeColor(item)"
                          variant="flat"
                          density="comfortable"
                          class="schedule-chip mb-3"
                        >
                          {{ typeLabel(item) }}
                        </v-chip>
                        <NuxtLink
                          v-if="item.presentation"
                          :to="presentationPath(item)"
                          class="schedule-title schedule-title--link"
                        >
                          {{ itemTitle(item) }}
                        </NuxtLink>
                        <p v-else class="schedule-title mb-0">
                          {{ itemTitle(item) }}
                        </p>
                        <div class="schedule-speaker">
                          <v-img
                            v-if="itemSpeakerImage(item)"
                            :src="itemSpeakerImageSrc(item)"
                            :alt="itemSpeaker(item)"
                            width="32"
                            height="32"
                            :cover="!item.speakerImage"
                            class="schedule-speaker__avatar"
                            :class="{ 'schedule-speaker__avatar--logo': item.speakerImage }"
                          />
                          <span>{{ itemSpeaker(item) }}</span>
                        </div>
                      </template>
                      <template v-else-if="item.path">
                        <v-chip
                          size="small"
                          :color="typeColor(item)"
                          variant="flat"
                          density="comfortable"
                          class="schedule-chip mb-3"
                        >
                          {{ typeLabel(item) }}
                        </v-chip>
                        <NuxtLink
                          :to="item.path"
                          class="schedule-title schedule-title--link"
                        >
                          {{ itemTitle(item) }}
                        </NuxtLink>
                      </template>
                      <p v-else class="schedule-title schedule-title--plain mb-0">
                        {{ itemTitle(item) }}
                      </p>
                    </div>

                    <NuxtLink
                      v-if="item.presentation || item.path"
                      :to="itemPath(item)"
                      class="schedule-more"
                      :aria-label="`${itemTitle(item)} の詳細`"
                    >
                      MORE
                      <v-icon icon="mdi-chevron-right" size="small" />
                    </NuxtLink>
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
import { scheduleItems } from '~/data/schedule'

usePageSeo({
  title: 'Schedule - 関西Ruby会議09',
  description: '関西Ruby会議09のスケジュールです。',
})

const { app: { baseURL } } = useRuntimeConfig()
const withBaseURL = (path) => `${baseURL}${path.replace(/^\/+/, '')}`

const labels = {
  reception: 'DOOR OPEN',
  ceremony: 'CEREMONY',
  keynote: 'KEYNOTE',
  session: 'SESSION',
  break: 'BREAK',
  lt: 'Lightning Talks',
  sponsor: 'SPONSOR LT',
  party: 'AFTER PARTY',
}

const colors = {
  keynote: '#F5C6CA',
  session: '#BFE7B8',
  lt: '#F8DFA8',
  sponsor: '#D8D3F2',
}

const itemTitle = (item) => item.presentation?.title ?? item.title
const itemSpeaker = (item) => item.presentation?.speaker?.name ?? item.speakerName ?? '-'
const itemSpeakerImage = (item) => item.presentation?.speaker?.image ?? item.speakerImage ?? null
const itemSpeakerImageSrc = (item) => {
  const image = itemSpeakerImage(item)

  if (!image) {
    return null
  }

  return image.startsWith('/') ? withBaseURL(image) : image
}
const presentationPath = (item) => `/presentations/${item.presentation.id}`
const itemPath = (item) => item.path ?? presentationPath(item)
const typeLabel = (item) => labels[item.type] ?? item.type.toUpperCase()
const typeColor = (item) => colors[item.type] ?? '#E3EDF7'
const rowTone = (item) => {
  if (['reception', 'party'].includes(item.type)) {
    return 'schedule-item--blue'
  }

  if (item.type === 'break' && item.title === 'ランチ') {
    return 'schedule-item--blue'
  }

  if (item.type === 'break') {
    return 'schedule-item--gray'
  }

  if (['ceremony', 'sponsor'].includes(item.type)) {
    return 'schedule-item--compact'
  }

  return 'schedule-item--normal'
}
const itemClasses = (item) => [
  `schedule-item--${item.type}`,
  rowTone(item),
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

.title {
  display: flex;
  font-family: 'Questrial', sans-serif;
  color: #041D4F;
  font-weight: 400;
}

.text-h4 {
  font-family: 'Questrial', sans-serif;
  color: #041D4F;
  font-weight: 500;
}

.schedule-timeline {
  width: 100%;
  margin-top: 2.5rem;
  text-align: left;
}

.schedule-item {
  display: grid;
  grid-template-columns: 145px minmax(0, 1fr) 112px;
  column-gap: 1.75rem;
  align-items: center;
  min-height: 142px;
  padding: 1.55rem 1.25rem 1.55rem 0;
  border-top: 1px solid #0A1C4C;
}

.schedule-item:last-child {
  border-bottom: 1px solid #0A1C4C;
}

.schedule-item--blue {
  min-height: 82px;
  background-color: #D7E2F1;
}

.schedule-item--gray {
  min-height: 82px;
  background-color: #F4F4F4;
}

.schedule-item--compact {
  min-height: 82px;
}

.schedule-time {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333333;
  border-right: 1px dashed #0A1C4C;
  font-family: 'Questrial', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.schedule-detail {
  min-width: 0;
  text-align: left;
}

.schedule-title {
  display: block;
  color: #333333;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.55;
  text-align: left;
  overflow-wrap: anywhere;
}

.schedule-title--plain {
  font-family: 'Questrial', sans-serif;
  letter-spacing: 0.03em;
}

.schedule-title--link {
  text-decoration: none;
  transition: color 0.2s ease;
}

.schedule-title--link:hover {
  color: #0A1C4C;
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.schedule-chip {
  color: #0A1C4C !important;
  font-family: 'Questrial', sans-serif;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.schedule-speaker {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  justify-content: flex-start;
  color: #333333;
  font-size: 0.84rem;
  text-align: left;
  line-height: 1.5;
  margin-top: 0.65rem;
}

.schedule-speaker__avatar {
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #D9D9D9;
}

.schedule-speaker__avatar--logo {
  border-radius: 4px;
  background-color: #ffffff;
}

.schedule-more {
  display: inline-flex;
  align-items: center;
  justify-self: end;
  gap: 0.2rem;
  color: #0A1C4C;
  font-family: 'Questrial', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s ease;
}

.schedule-more:hover {
  opacity: 0.72;
}

@media (max-width: 959px) {
  .schedule-item {
    grid-template-columns: 128px minmax(0, 1fr) 92px;
    column-gap: 1.25rem;
  }
}

@media (max-width: 600px) {
  .v-col {
    flex-basis: inherit !important;
  }

  .schedule-item {
    grid-template-columns: 1fr;
    gap: 0.85rem;
    min-height: 0;
    padding: 1.2rem;
  }

  .schedule-time {
    justify-content: flex-start;
    border-right: 0;
    border-bottom: 1px dashed #0A1C4C;
    padding-bottom: 0.75rem;
  }

  .schedule-more {
    justify-self: start;
  }
}
</style>
