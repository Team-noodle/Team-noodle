<template>
  <div>
    検索
    <div id="v-for">
    <h3>v-for</h3>
    <div v-for="cooking recipie">{{recipe}}</div>    
  </div>
  <button @click="cooking">検索</button>
</div>  
</template>

<script>
export default {
  data() {
    return {
      recipe: [
        {
          categoryname:"ハンバーグ"
          url:""
        }
        {
          categoryname:"パスタ"
          url:"" 
        }
         {
          categoryname:"かつ丼"
          url:"" 
        } {
          categoryname:"ポテトサラダ"
          url:"" 
        } {
          categoryname:"肉じゃが"
          url:"" 
        }
      ]
    }
  }
}
    

</script>
<style></style>