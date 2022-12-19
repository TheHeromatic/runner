<script setup>

</script>
<template>
  <div style="background-color: black; height: 685px; margin:0px">
    <div class="homeScreenDiv">
      <h1 class="titleDark">Runner</h1>
        <router-link to="/gameScreenDark">
          <button class="gameScreenDark">Start Game</button>
        </router-link>
    <br>
        <router-link to="/settingsScreenDark">
         <button class="homeButtonSettingsDark">Settings</button>
        </router-link>
    </div>
  </div>
</template>