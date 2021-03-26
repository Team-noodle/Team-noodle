<template>
 <div class="body">
   
  
  
 <h2>食材でレシピを検索</h2>
 <input id="input" type="text" v-model="inputtext">
 <button v-on:click="test" class="btn btn--pink btn--border-ridge">get</button>
 <button v-on:click="search" href="" class="btn btn-flat"><span>search</span></button>
<div class="result" v-for="(cook, index) in result" :key="index">
      {{ cook.categoryName }}:
      <a :href="cook.categoryUrl">{{ cook.categoryUrl }}</a>
  </div>
 <!-- <button class="button" @click="search">検索</button> -->
 
 </div>
</template>

<script>
export default {
 data() {
  return {
        recipe:[],
        cook:[],
        inputtext:"",
        result:[],
      }
    },
  
methods:{
// 指定したサーバーにデータを取りに行く
test(){
fetch("https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=1078745517464883372")
  .then ((res)=>{
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then ((data)=>{
    
    console.log(data)
    this.recipe.push(data.result.small)
    console.log(data.result.small)
    data.result.small.map(item=>{
      console.log(item.categoryName)
      this.cook.push(item.categoryName)
      this.recipe.push(item)
      console.log(this.cook)
    })
   
});} 
,
search(){
// indexに入力した奴がcookNameの配列のうちの何番目なのかという情報を入れる
      // findIndexは引数にとったitemが入力欄に書いた奴（this.searchtext）と
      // 同じかどうか判断して一致したらその時の番号を返す
      const index = this.cook.findIndex((item) => item === this.inputtext);
      console.log(index)
      this.result.push(this.recipe[index+1]);
      // indexを元にしてrecipe配列から選んだデータ結果をresult配列に入れる！
      // 結果は6~9行目に表示させてる！

}}}

  
</script>

<style scoped>
.body {
  background-color: #FFCC99;
  font-family:sans-serif;
  margin: 0 auto;
  height: 700px;
  text-align: center;
  background-image: url("../images2/table-2777180_1280.jpg");
}

#input {
  height: 50px;
}


.btn--pink.btn--border-ridge {
  border: 6px ridge #FF99FF;
  background-color: #FF6699;
  width: 5px;
  height: 8px;
}


*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 62.5%;
}

.btn,
.btn,
button.btn {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  text-align: center;
  border-radius: 0.5rem;
}

.btn-flat {
  overflow: hidden;

  padding: 1.5rem 6rem;
  font-size: 20px;
  color: #fff;
  border-radius: 0;
  background: #66CC00	;
  width: 5px;
  height: 10px;
  text-align: center;
}

.btn-flat span {
  position: relative;
}

.btn-flat:before {
  position: absolute;
  top: 0;
  left: 0;

  width: 150%;
  height: 500%;

  content: "";
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);

  background: #FF9933;
}

.btn-flat:hover:before {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}

</style>


