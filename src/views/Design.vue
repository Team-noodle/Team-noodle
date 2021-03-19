<template>
  <div>
    <input size="40" v-model="keyword" placeholder="検索キーワードを入力">
  <button @click="search_video">検索</button>
  <div>
    <youtube :video-id="videoId" />
  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
  data() {
    return {
      videoId: 'fHuO3Xaje98'
    }
  }
}
</script>