<template>
 <div >
 <h2>使いたい食材で料理レシピを検索</h2>
  <input id="input" type="text">
 <button @click="test">検索</button>
 </div>
</template>

<script>
export default {
 data() {
  return {
        recipe:[]
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
  })
}}}
</script>