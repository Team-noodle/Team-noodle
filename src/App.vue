<template>
<div class="header">
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
       <router-link to="/search" class="link"><font-awesome-icon icon="book-open" /> recipe</router-link>
      <router-link to="/about"><font-awesome-icon icon="film" /> youtube</router-link> 
      
    </div>
    <router-view />
  </div>
  </div>
</template>

<style>


#app {
   size: 60px;
    justify-content: space-between;
    align-items: stretch;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #619fdd;
  background: rgb(255, 186, 37); 
  
  
}
#nav {
  /* margin: 30px; */
  size: 100px;
  color: #619fdd;
  font-family: 'Corben', cursive;
  font-size: 25px;
  margin-left: auto;
margin-right: auto;

}

#nav a {
  font-weight: bold;
  color: #4c4747;
  margin-top: 10px;
}

#nav a.router-link-exact-active {
  color: #2581f8;
  size: 60px;
}
.link{
  padding-right: 50px;
}

</style>
