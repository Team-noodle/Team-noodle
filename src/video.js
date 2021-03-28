export default {
// IFrame Player API の読み込み
const tag = document.createElement("script")
tag.src = "https://www.youtube.com/iframe_api"
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTubeの埋め込み
// const ytPlayer;
// function onYouTubeIframeAPIReady() {
//   ytPlayer = new YT.Player(
//     "sample", // 埋め込む場所の指定
//     {
//       width: 640, // プレーヤーの幅
//       height: 480, // プレーヤーの高さ
//       videoId: "kzCeiDi8cEA", // YouTubeのID
//       events: {
//         onStateChange: onPlayerStateChange,
//       },
//     }
//   );
// }

// // プレーヤーの状態が変更されたとき
// function onPlayerStateChange(event) {
//   // 現在のプレーヤーの状態を取得
//   const ytStatus = event.target.getPlayerState();
//   // 再生終了したとき
//   if (ytStatus == YT.PlayerState.ENDED) {
//     ytPlayer.playVideo();
//   }
// }
}
