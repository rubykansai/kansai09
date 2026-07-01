import{k as o,s as a}from"./BNfY_bJO.js";const r=[...o,...a],n=Object.fromEntries(r.map(e=>[e.id,e])),t=e=>{const s=n[e];if(!s)throw new Error(`Speaker not found: ${e}`);return s},i=[{id:"nurse",type:"keynote",title:"Keynote",speaker:t("nurse"),abstract:"詳細は後日公開します。"},{id:"harukasan",type:"session",title:"「照らす技術」をRubyで照らす",speaker:t("harukasan"),abstract:`ステージを華やかに彩る照明や、演者の影でせわしなく動き回るムービングライト。これらを裏側で制御する共通言語が「DMX512」という通信プロトコルです。本セッションでは、ふだん裏方に徹している「ステージを照らす技術」にスポットライトを当て、そのプロトコルの実装を紹介します。

具体的には、PicoRubyを用いてRubyスクリプトでDMX512-A信号を生成し、ムービングライトと直接通信する手法を取り上げます。普段触れる機会の少ない業務用プロトコルの実装を通して、その技術的仕様の裏側にどのような仕組みがあるのかを紐解いていきます。

また、Raspberry Pi Pico 2Wを用いた照明コントローラーの実装を通じ、物理層で要求される厳密なタイミング制御を、マイコンのハードウェア機能を用いてどうRubyから扱うのか、その内部構造を解説します。PicoRubyを使えば、一見複雑な通信規格も直感的に実装できるようになり、Rubyで操れる物理世界の可能性が大きくひろがります。

セッションの最後には、実際に会場へ持ち込んだムービングライトを、Rubyコードを用いてリアルタイムに制御するデモンストレーションを実施する予定です。Rubyが多様なプロトコルを話すことで広がる、新たな表現の可能性をぜひ体感してください。`},{id:"aim2bpg",type:"session",title:"Project Naraku 外伝 —— レールロード図で照らすOnigmoのバグ",speaker:t("aim2bpg"),abstract:`「spoiler: Naraku was Onigumo.」——README の冒頭にそう記されています。Oniguruma（鬼車）・Onigmo（鬼雲）を受け継いだ Ruby 専用の正規表現エンジン、それが Naraku（奈落）。その存在を知ったのは RubyKaigi 2026、makenowjust さんの発表でした。

発表では、Onigmo のバグが紹介されていました。ケースフォールディングの揺れ、文字クラスの意外な振る舞い——自作の正規表現エディタ Rubree のレールロード図で照らすと、鬼の影がくっきりと浮かびました。さらにその奥には、触れた途端にプロセスを封じる——ReDoSという名の瘴気（しょうき）も潜んでいます。

「VM とコンパイラはまだない」——Claude Code があれば辿り着けるかもしれない。そう思って踏み出したところ、行く手には結界が張られています。Claude Code の力で打ち破り、門の前に辿り着きました。結界を解けば、次に来る者の入口も開きます。

踏み込んだ先には、正規表現エンジンの本質的な問いが待っていました。どうすれば瘴気を構造から断ち切れるのか。先行していた Ruby の分身を手がかりに、少しずつ試行を重ねていく——照らすほど、見えてくるものがあります。

手探りの試みを重ねてきた過程を、Project Naraku の外伝としてお届けします。`},{id:"se4weed",type:"session",title:"torikago - Ruby::Boxで照らすモジュラモノリスの実行境界",speaker:t("se4weed"),abstract:`packwerkやRails::Engineを使うと、Railsのモジュラモノリスに構造上の境界を作ることができます。依存関係を明確にし、「どこに影響が出るか分からずコードを触れない」といった大規模なコードベースの困りごとを減らすうえで、とても有効です。

一方で、実行時には共通のRuby VMを使っているため、定数参照、monkey patch、暗黙の結合といった問題は残ります。構造としては分かれていても、実行時に本当に境界が効いているのかは分かりにくいままです。

本発表では、Ruby 4の実験的機能Ruby::Boxを使って、moduleごとの実行境界を扱うgem torikagoを紹介します。torikagoでは、module間の呼び出し方を統一し、どのmoduleがどのPackage APIを参照してよいかをあらかじめ定義します。これによって、torikagoを使うことでmodule間依存に実行時の制約を設け、意図していない参照を防げるようにします。さらに、他のmoduleからは直接定数などを参照できないことや、moduleごとにmonkey patchや依存するgemのバージョンをモジュール内に閉じ込められます。

普段は見えにくいモジュラモノリスの実行時の境界を照らし、何が分けられて、何がまだ難しいのかを、実例とともに共有する発表です。`},{id:"4geru",type:"session",title:"ひとつの指示で、部屋にあかりを。",speaker:t("4geru"),abstract:`ひとつの指示で、LED が呼吸をするように部屋を照らします。

2024年末から、MCP（Model Context Protocol）が AI エージェントの標準プロトコルとして広まっています。
Claude Code や Cursor などの AI ツールは、MCP を通じて外部サービスと連携できます。
今回は Rails で Remote MCP サーバーを実装し、AI と LED をつなげました。

本セッションでは、Rails で Remote MCP サーバーの作成の流れを、認証・実装・セキュリティの観点から一緒に追いかけます。
ライブラリなしの実装と modelcontextprotocol/ruby-sdk の比較。OAuth を 0 から実装し、LINE ログインとの連携。セキュリティ実装を通じて、Doorkeeper・Devise が何を解決してくれているかが見えてきます。

Rails を触ったことがある方なら、すぐに試せる内容です。Rails と AI の可能性を感じてください。`},{id:"kinoppyd",type:"session",title:"チャリンコ・オブザーバビリティ",speaker:t("kinoppyd"),abstract:`照、それはつまり可視化です。暗闇に光を照らすことによって、人類は発展してきました。

オブザーバビリティとは、システムのデータをメトリクスやトレースの形で可視化することにより、システムの状態を把握することを指します。まさに照らし、可視化することです。普段我々はコンピュータのシステムやネットワークのオブザーバビリティを重視しますが、その技術の応用によって日常の多くのものを可視化することが可能です。

可視化が特に大切な分野の一つに、スポーツがあります。現代スポーツの進歩は、可視化の進歩と言っても過言ではありません。競技者である人間の体をセンサで計測することにより、最適な負荷を知り最高のパフォーマンスを出すのです。人間の体だけではなく機械を使うスポーツ、例えばモータースポーツなどは、機械そのものから大量のメトリクスを取り分析しながらチームで戦う、いわばオブザーバビリティの最先端とも言えます。

このセッションでは、ロードバイクのオブザーバビリティについてお話します。ロードバイクもまた、様々なセンサを使いリアルタイムで状況を知りながら戦うスポーツです。自転車競技用のセンサは数多ありますが、それをPicoRubyを使って再実装してみたら、一体どうなるでしょう？　自分が欲しかった、本物のチャリンコ・オブザーバビリティを手に入れられるのではないか、という可能性を実証しようと思います。`},{id:"ikotome",type:"session",title:"Rubyで未来を照らす 〜占いを実装する技術〜",speaker:t("ikotome"),abstract:`関西、伝統芸能、そして「照」。
この3つを見た時、最初に思い浮かぶのは天照大神ですよね。

天岩戸の神話では、アメノウズメの舞が神楽の起源とされ、さらに神々は「どうすれば太陽神が戻るのか」を占いによって決めたと言われています。
「照らすこと」と「占うこと」は、昔から隣にあったのかもしれません。

…という長い導入はここまでにして、本題に入ります。

そんなわけで、Rubyで四柱推命gemを作りました。

四柱推命を調べてみると、そこには干支、十干十二支、暦、命式計算など、長い時間をかけて積み重ねられたルールと構造がありました。

本セッションでは、
・古典的な概念をどうデータ構造へ落とし込んだか
・曖昧な概念である占いをどうソフトウェアとして扱ったか
を、実際のコードとともに紹介します。`},{id:"yhara",type:"session",title:"Can you see? I'm GC",speaker:t("yhara"),abstract:"Ruby処理系にとって欠かせない構成要素であるにもかかわらず、日ごろあまり顧みられることのないGC。本トークではそんなGCに光をあてます。Ruby 3.4から導入されたModular GC機能を用いてカスタムのGCを作成し、最終的にGCの苦労を体験可能にします。"},{id:"yujiyokoo",type:"session",title:"VMとAOTコンパイラ開発で照らす8Bit機の世界",speaker:t("yujiyokoo"),abstract:`Z80という8Bit CPU向けのmruby VMを実装しています。
現段階ではセガのマスターシステムのみをサポートして、サポートするプラットフォームは今後拡大予定ですが、若干手間取っております。

今は最近の流行に乗ってVMとは対照的なアプローチであるAOTコンパイラをコーディングエージェントに開発してもらっています。

今年の福岡Rubyist会議でもRubyKaigi 2026でもこのVMについて発表しましたが、今回はこの対照的なアプローチであるAOTも含め、8Bit機の世界を照らして行きます。
8Bit機という組み込み機ともPCとも違う環境特有のお話などをしたいと思います。`},{id:"hsjoihs",type:"keynote",title:"Keynote",speaker:t("hsjoihs"),abstract:"詳細は後日公開します。"}],d=Object.fromEntries(i.map(e=>[e.id,e])),u=[{start:"9:00",end:"10:00",duration:"1:00",title:"Door Open & 受付",type:"reception"},{start:"10:00",end:"10:10",duration:"0:10",title:"Opening",type:"ceremony"},{start:"10:10",end:"10:40",duration:"0:30",presentationId:"nurse",type:"keynote"},{start:"10:50",end:"11:10",duration:"0:20",presentationId:"harukasan",type:"session"},{start:"11:20",end:"11:40",duration:"0:20",presentationId:"aim2bpg",type:"session"},{start:"11:40",end:"13:10",duration:"1:30",title:"ランチ",type:"break"},{start:"13:10",end:"13:30",duration:"0:20",presentationId:"se4weed",type:"session"},{start:"13:40",end:"14:00",duration:"0:20",presentationId:"4geru",type:"session"},{start:"14:10",end:"14:30",duration:"0:20",presentationId:"kinoppyd",type:"session"},{start:"14:30",end:"14:50",duration:"0:20",title:"休憩",type:"break"},{start:"14:50",end:"15:10",duration:"0:20",presentationId:"ikotome",type:"session"},{start:"15:20",end:"15:40",duration:"0:20",presentationId:"yhara",type:"session"},{start:"15:50",end:"16:10",duration:"0:20",presentationId:"yujiyokoo",type:"session"},{start:"16:10",end:"16:30",duration:"0:20",title:"休憩",type:"break"},{start:"16:30",end:"17:20",duration:"0:50",title:"関西LT保安協会",type:"lt"},{start:"17:30",end:"17:35",duration:"0:05",title:"Sponsor LT",type:"sponsor"},{start:"17:35",end:"18:05",duration:"0:30",presentationId:"hsjoihs",type:"keynote"},{start:"18:05",end:"18:20",duration:"0:15",title:"Closing",type:"ceremony"},{start:"19:00",end:"21:00",duration:"2:00",title:"AfterParty",type:"party"}].map(e=>({...e,presentation:e.presentationId?d[e.presentationId]:null}));export{d as p,u as s};
