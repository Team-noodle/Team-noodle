<template>
  <div class="main">
  <div class="top">
    <div class="mes"><font size="6" color="#86AAD7">youtubeで検索</font>
  <br>
  <input size="40"  v-model="keyword" placeholder="検索キーワードを入力">
  <button class="kensaku" @click="search_video">探す</button>
  </div>
  
  </div>
  <img class="pcture" src="../assets/food.jpg">
   <table cellspacing="0" cellpadding="5" v-show="results">
  

    <tr v-for="(movie, index) in results" v-bind:key="movie.id.videoId">
      <!-- No -->
      <td  valign="top" width="50" color="#C88A4D">{{ index + 1 }}</td>
      
      <td valign="top" width="300">
        <a v-bind:href="'https://www.youtube.com/watch?v=' + movie.id.videoId">
          <img width="300" height="200" v-bind:src="movie.snippet.thumbnails.medium.url">
        </a>
      </td>
     
      <td align="left" valign="top" width="700">
        <font size="5" color="#C88A4D"><b>{{ movie.snippet.title }}</b></font>
        <br>
        {{ movie.snippet.description}}</td>
    </tr>
   </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SearchVideo",
  data: function() {
    return {
      results: null,
      keyword: "料理",
      order: "viewCount", // リソースを再生回数の多い順に並べます。
      params: {
        q: "", // 検索クエリを指定します。
        part: "snippet",
        type: "video",
        maxResults: "20", // 最大検索数
        key: "AIzaSyCRsv5A9sgNRMoiai7pREKtpcxH13S9uVY"
      }
    };
  },
  props: {
    msg: String,
    image: String
  },
  methods: {
    search_video: function() {
      this.params.q = this.keyword;
      var self = this;
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: this.params
        })
        .then(function(res) {
          self.results = res.data.items;
        })
    }
  }
};
</script>

<style scoped>
.main{
  background-color: rgb(255, 235, 147);
   min-height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
   background-image: 
    linear-gradient(to left,   transparent 100px, rgb(255, 236, 174)),
    linear-gradient(to bottom, transparent 100px, rgb(255, 212, 95));
}

.kensaku{
  color: rgb(3, 3, 3);
  background-color: #86AAD7;
   border-radius: 5px;
   margin: 30px auto;
  
}

.top{
  background-color: rgb(255, 255, 255);
   position: sticky;
    top: 0;

}

.mes{
  widows: 100%;
  height: 100px;
  padding-bottom: 20px;
}
.picture{
  border-image: space;
  height: 100;
}

</style>