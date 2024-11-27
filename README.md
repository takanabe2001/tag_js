# tag_js
 
## 使い方
1. videoフォルダを作成し、アノテーション付与したい動画を入れる
2. VSCodeにLive Serverを拡張機能でダウンロードする
3. index_video.htmlをVSCode上で表示し、右クリック→Open with Live Serverを選択する
4. ユーザー名を入力する (これが出力CSVファイルの名前の最後につく)
5. 画面左上の"ファイルを選択"を押し、アノテーション付与したい動画を選択する
6. 動画が最後まで再生されると、アノテーション結果がCSVファイルとして出力される 

    (出力ファイル名:動画名_ユーザ名.csv)

## 感情ラベルについて
感情ラベルはラッセルの円環モデルをもとに作成しました。

感情の強度は中心ほど弱く、外側に行くほど強いものとします。

マウスの座標を1秒ごとに取得。取得した中身は[x,y,時間]となっています。

## そのほか機能について
動画の一時停止・再生は左クリックで行えます。

ラベル付与で間違った場合などで手直ししたい場合は、一時停止をしたうえで、シークバーを戻すことによって再度ラベル付与が可能です。


## 推奨環境
Google Chrome

## How to use
1. create a video folder and put the videos you want to annotate. 
2. download the Live Server extension to VSCode.
3. display index_video.html on VSCode, right-click on it, and select Open with Live Server. 
4. enter a user name (this will be added to the end of the name of the output CSV file).
5. click “Select File” in the upper left corner of the screen and select the video you wish to annotate.
6. When the video is played to the end, the annotation result will be output as a CSV file. 

    (Output file name: video_user_name.csv)

## About emotion labels
Emotion labels were created based on Russell's circle model.

Emotion intensity is assumed to be weaker in the center and stronger toward the outside.

Mouse coordinates are acquired every second. The acquired contents are [x,y,time].

## Other functions
Video can be paused and played by left-clicking.

If you make a mistake in labeling and want to correct it, you can pause the video and then return to the seek bar to re-label it.


## Recommended environment
Google Chrome