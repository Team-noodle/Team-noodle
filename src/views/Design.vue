<template>
  <div>
    <button v-on:click="fetch">fetch</button>
    <button v-on:click="movie">検索</button>
    <div v-for="(Id, index) in videoID" v-bind:key="index">
      {{ Id[0].id.videoId }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoID: [],
    };
  },
  methods: {
    fetch() {
      fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&q='料理'&key=AIzaSyCRsv5A9sgNRMoiai7pREKtpcxH13S9uVY"
      ).then((res) => {
        res.json().then((data) => {
          this.videoID.push(data.items);
          //   console.log(data);
          console.log(data.items);
        });
      });
    },
    movie() {
      fetch(
        "https://www.googleapis.com/youtube/v3/videos?id=https://www.youtube.com/watch?v='vide'&key=AIzaSyCRsv5A9sgNRMoiai7pREKtpcxH13S9uVY&part=snippet,contentDetails,statistics,status"
      ).then((res) => {
        res.json().then((data) => {
          console.log(data);
        });
      });
    },
  },
};
</script>
