# 3行
* webページを構築する際、モバイルフレンドリーであることの重要性が高い
* レスポンシブデザインは全ての画面幅に対応する最先端のモバイルフレンドリーなwebデザイン
* デザイン時には優先するデバイスや見せたい情報を設定し、それを中心に考える

# モバイルフレンドリーなwebページ
今更言うまでもなく、webページにアクセスするデバイスとしてスマホは当たり前のものとなっている。   
具体的には日本に限ってもここ2年におけるスマホからwebページへのアクセスシェアは4割前後で推移しており、世界で見れば過半数を占めている。    
https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/japan/#monthly-202111-202311  
https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/#monthly-202111-202311

重ねて**googleが兼ねてよりモバイルファーストを推奨**しており、実際に約10年前には**スマホ対応したサイトのモバイル検索順位を上げている**。    
https://developers.google.com/search/blog/2012/04/responsive-design-harnessing-power-of?hl=ja  
https://developers.google.com/search/blog/2015/02/finding-more-mobile-friendly-search?hl=ja  

ユーザー事情も世界的にスマホからのアクセスシェアは2012年に10%を超え、2014年に四半分を超えて2017年にはデスクトップを追い越している事実から、スマホ対応の優先度は年々高くなっている。  (因みにiphoneの登場が2007年7月)  
https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/#yearly-2009-2023

つまり、現代において**webページがモバイルフレンドリーであることの重要性は年々高まっている**。    

## 多様なデバイスに歩み寄るwebデザイン

かつてwebデザインは固定幅でデザインすることが一般的だった。   
しかし技術の進化とともに次から次へと様々なデバイスが世に出続ける。当然、画面サイズは百人百様。その種類は増えに増え続けて現在では解像度の組み合わせは枚挙に暇がなく、**画面幅に限っても300強～4000超と振れ幅はとても大きい**。(現実的には1600pxまで考慮するので十分。とは言えそれでも振れ幅が大きいことに変わりはない)。    
固定幅では健全な表示が出来ないデバイスが増え、それに伴いwebページもCSSの進化とともに以下のようなデザイン手法を取ることで対応していた。  

* リキッドレイアウト  
レイアウト幅を固定値ではなく画面幅の割合で設定する。
* モバイル表示/SP表示  
スマホやかつてのガラケー専用に別デザインのwebサイトを作成し、そこにアクセスさせてコンテンツを表示する。  
* アダプティブデザイン   
デバイスまたは画面幅を読み取り、それに近い特定の画面幅に合わせたデザインを適用する。

しかしどの手法も画面幅によっては空白が目立つ、コンテンツが圧迫されるなどの表示上の問題があり、**常に最適な表示になるとは言い難く**、最適に近づけようとするほど**開発/保守コストの増加**など課題があった。  

##  レスポンシブデザイン

上記のリキッドレイアウトとアダプティブデザインの延長として全ての画面幅に対応した**レスポンシブデザイン**が考案され、**モバイルフレンドリーなwebページのデザイン手法として最適解に近いものとして普及している**。    

レスポンシブデザインの要素は以下の3つとされる。  
* 流動的なグリッド(コンテンツのコンテナ化と配置の変更)
* 柔軟なメディア(サイズ可変な画像や背景)
* メディアクエリ(画面幅に合わせたCSSの切り替え)

乱暴に言ってしまえば、レスポンシブデザインとは**コンテンツをパーツ化して、画面幅に応じてパーツを拡大縮小、再配置、表示非表示にする**デザイン手法のこと。

### レスポンシブ参考サイト
* CORPEC様:https://www.coprec.co.jp/
* バイオリン工房 Studio Mora Mora 様:https://studio-moramora.com/
* 小川ぶどう園様:https://ogawa-vineyard.studio.site/


### レスポンシブデザインの設計
レスポンシブデザインの設計における初歩的な考えを記す。

#### 最も見せたいコンテンツとファーストデバイスの設定
レスポンシブデザインは全ての画面幅に対応すると言っても、レイアウトが崩れることがないというレベルである。勿論  
故に一番初めに設定すべきは**誰に何を見せたいのか**、あるいは**何を誰に見せたいのか**である。  
その後、**誰某が使用するデバイスを想定し**、そのデバイスを中心として(ファーストデバイスに設定)デザインする。   

例えば業務用ページで管理者にデータを見せたい場合は「管理者にデータを見せたい」「管理者はPCからの利用を前提としている」としてPCをファーストデバイスとして設定する。その後タブレット及びスマホへの対応が必要かを検討し、必要であればレスポンシブデザインを採用する。ファーストデバイスであるPCを先にデザインし、次にタブレットやスマホのデザインを行う。    
また同じPC利用でもPCの画面サイズも考慮する必要がある。HDとフルHDでは見せられる情報の量は大きく違う。  

実例としてyoutubeの場合、トップページは  
* 多くの人に動画(または広告)のサムネイルを見てほしい
* 多くの人はあらゆるデバイスを使う

ので画面幅によるレイアウトが崩れにくく、一覧性優れるタイル状でサムネイルを並べている。  
https://www.youtube.com/

#### マクロレイアウト
デザインの最初は大枠を作ることから始まる。   
代表的な大枠のデザインパターンは以下の通り。  
(画面幅によって各コンテンツのサイズが変更するのは共通)

*  Mostly fluid   
画面幅によって各枠組みの幅のサイズが調整される。
* Column drop  
画面幅によって各枠組みが積み重なる 
* Layout shifter  
画面幅によってレイアウトが変わる
* Tiny tweadks  
シングルカラムで画面幅によってメインコンテンツの幅、マージンが変わる
* Off canvas  
画面幅によって枠組みの表示非表示を切り替える 

https://qiita.com/nakoro/items/f5370cbf2067c8ac38dd  
https://medium.com/@daniaherrera/responsive-design-layout-patterns-70e710551818


実例としてQiitaはOff Canvasを採用している。   
中央にメインコンテンツを置き、左右のペインに非表示でも問題ないサブコンテンツを表示し、画面幅が一定以下を下回ると非表示になる。  
https://qiita.com/

#### gridとflexbox
上記のマクロレイアウトを含んだwebページのレイアウトを実際にCSSで実現する方法はいくつかある。   
かつてはtableレイアウト、floatレイアウトなどがあったが共に過去の遺物となっており、現在は**gridレイアウトが主流**であり、使い方によってはflexboxレイアウトが用いられる。   
この両者の違いはいくつかあるが、大雑把に言えば以下の通りである。  

* grid  
親要素で格子状のレイアウトを指定し、子要素を配置する。(二次元でレイアウト)  
基本的にはこちらを使用する   
* flexbox  
親要素で並び方や折返し等を指定し、子要素を順に配置する。(一次元+折返しでレイアウト)   
子要素のサイズによって詰め方を変えたい場合はこちらを使用

固定的なレイアウトが求められる場合はgridが使用される。  
gridジェネレーター:https://cssgrid-generator.netlify.app/


またgirdは格子状という性質上tableの代わりに使用する場合が多い。  
tableよりもセルの調整や段組みの入れ替え等が簡単に記述でき、なおかつ融通が効くからである。   

# 参考
* https://web.dev/learn/design/welcome?hl=ja
* https://alistapart.com/article/responsive-web-design/
