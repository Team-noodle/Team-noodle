<template>
  <div>
    入力フォーム
    <div id="v-for=(cooking,index) in recipe" :key="index">
    {{ index }}:{{ cooking.categoryname }}:

    <!-- <a href="cookig.categoryUrl">{{ cooking.categoryUrl }}</a> -->
  </div>
  <button @click="cooking">検索</button>
  <input v-model="message" placeholder="入力"> 
  <p> {{message}} </p>
  </div> 
  
 </template>

<script>
export default {
  data() {
    return {
      recipe: [
        {
           id: 1,
            name: "ハンバーグ"
          
        },
        {
           id: 2,
            name: "パスタ"
          
        },
         {
           id: 3,
            name: "かつ丼"
          
        }, 
        {
           id: 4,
            name: "ポテトサラダ"
          
        }, 
        {
           id: 5,
            name: "肉じゃが"
          
        }
      ],
    };
  },
  

methods: {
    cooking(){
     const a = "ハンバーグ"
     const ary = ["ハンバーグ", "パスタ", "肉じゃが"]
     const result = ary.find(item => item === a)
     console.log(result);
     }
     

}
}  
</script>
