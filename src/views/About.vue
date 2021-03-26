<template>
  <div class="main">
  <div class="top">
    <div class="mes"><font size="6" color="#86AAD7">youtubeで検索</font>
  <br>
  <div class="kensaku">
    <fa-icon icon="user-secret"></fa-icon>
  <input size="40" height="50" id="sbox4" v-model="keyword" placeholder="検索キーワードを入力">
  <button id="sbtn4" class="kensaku" @click="search_video"><font-awesome-icon icon="search" /></button>
  </div>
  </div>
  </div>
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
    image: String,


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
/* table{
  background-color: rgba(255, 255, 240, 0.685);
  text-align: center;
} */

.main{
  text-align: center;
   min-height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-image:url(../assets/newcook.jpg);
   /* background-image: radial-gradient(rgba(255, 255, 251, 0.507) 15%, transparent 20%),
                      radial-gradient(rgba(255, 253, 223, 0.493) 15%, transparent 20%),
                      linear-gradient(135deg, #fcffce 0%,#fcfbb5 40%,#ffe798 60%,#ffee56 100%);
    background-size: 30px 30px, 30px 30px, 100% 100%;
    background-position: 0 0, 15px 15px, center center; */
   /* background-image: 
    linear-gradient(to left,   transparent 100px, rgb(255, 236, 174)),
    linear-gradient(to bottom, transparent 100px, rgb(255, 212, 95)); */
}

.kensaku{
  margin-bottom: 30px;

  
}

.top{
    background-image: 
    linear-gradient(to left,   transparent 100px, rgb(252, 226, 140)),
    linear-gradient(to bottom, transparent 100px, rgb(255, 212, 95));
  background-color: rgb(255, 239, 185);
   position: sticky;
    top: 0;

}




.mes{
  /* 検索欄 */
  widows: 100%;
  height: 100px;
  padding-bottom: 20px;
   flex-direction: column;
  justify-content: center;
  background-image: radial-gradient(rgba(255, 255, 251, 0.507) 15%, transparent 20%),
                      radial-gradient(rgba(255, 253, 223, 0.493) 15%, transparent 20%),
                      linear-gradient(135deg, #f9ffac 0%,#fdf479 40%,#ffe798 60%,#ffee56 100%);
    background-size: 30px 30px, 30px 30px, 100% 100%;
    background-position: 0 0, 15px 15px, center center;
}

table{
  background-color: rgba(252, 251, 199, 0.74);
}

#sbox4{
  height:50px;
padding:0 10px; 

/* position:absolute; 
left:50;
top:50;  */
border-radius:20px;
outline:0;
background:rgb(255, 254, 209);
font-size: initial;
}

#sbtn4 :hover{
  background-color: #fff;
}

#sbtn4{
height:50px;
/* position:absolute; 
left:255px;アイコン左右の位置調整 */
background:none;
color:rgb(75, 50, 34);
border:none;
font-size:20px;/*アイコンサイズ*/
}




#sbtn4 .fa-search{
font-size:20px;	
}

</style>