<script setup>

</script>
<template>
  <div class="homeScreenDiv">
   <h1 class="title">Runner</h1>
    <router-link to="/gameScreen">
      <button class="gameScreen">Start Game</button>
    </router-link>
    <br>
    <router-link to="/settingsScreen">
      <button class="homeButtonSettings">Settings</button>
    </router-link>
  </div>
</template>
