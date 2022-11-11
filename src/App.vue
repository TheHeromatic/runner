<template>
  <div>&nbsp; </div>
  <div>&nbsp; </div>
  <div>&nbsp; </div>
  <div>&nbsp; </div>
  <h1 class="title">Runner</h1>
  <div>&nbsp; </div>
  <div>&nbsp; </div>
  <button class="buttonStartGame">Start Game</button>
  <div></div>
  <button class="buttonSettings">Settings</button>
</template>

<script setup>


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: red;
  margin-top: 70px;

}
.buttonStartGame {
  background-color: #590377 ;
  border: none;
  color: white;
  padding: 40px 93px;
  text-align: center;
  display: inline-block;
  font-size: 30px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

.buttonSettings {
  background-color: #C5C5C5;
  border: none;
  color: black;
  padding: 15px 141px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

.title {
  font-size: 60px;
  color: #590377;
  font-family: 'Courier New', monospace;
}
</style>
