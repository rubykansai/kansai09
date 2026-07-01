import { ltSpeakers } from './speakers'

const speakerById = Object.fromEntries(ltSpeakers.map((speaker) => [speaker.id, speaker]))

const speaker = (id) => {
  const foundSpeaker = speakerById[id]

  if (!foundSpeaker) {
    throw new Error(`LT speaker not found: ${id}`)
  }

  return foundSpeaker
}

export const ltPresentations = [
  {
    id: 'haruguchi',
    title: '滋賀県環境保安協会だより',
    speaker: speaker('haruguchi'),
  },
  {
    id: 'rokuosan',
    title: 'Ruby キュー 入門',
    speaker: speaker('rokuosan'),
  },
  {
    id: 'tarosay',
    title: '数百円から始めるRuby電子工作',
    speaker: speaker('tarosay'),
  },
  {
    id: 'shiomachi',
    title: '学生がプログラミング言語処理系に向き合って良かったこと！',
    speaker: speaker('shiomachi'),
  },
  {
    id: 'fkmy',
    title: 'Aurora MySQL8.4リリース！Rubyistが備えること',
    speaker: speaker('fkmy'),
  },
  {
    id: 'ryotana',
    title: '『測定できないものは、管理できない』らしいので集中力測定アプリを作った',
    speaker: speaker('ryotana'),
  },
  {
    id: 'luccafort',
    title: '琵琶湖の水は止められても、Net::HTTPのリトライは止められない',
    speaker: speaker('luccafort'),
  },
  {
    id: 'ooharabucyou',
    title: 'Google App Script で Ruby を動かす',
    speaker: speaker('ooharabucyou'),
  },
]
