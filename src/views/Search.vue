<template>
 <div >
  <div v-for="(cook, index) in result" :key="index">
      {{ index }}:{{ cook.categoryName }}:
      <a :href="cook.categoryUrl">{{ cook.categoryUrl }}</a>
  </div>
 <h2>使いたい食材で料理レシピを検索</h2>
 <input id="input" type="text" v-model="inputtext">
 <button @click="test">get</button>
 <button @click="search">検索</button>
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
