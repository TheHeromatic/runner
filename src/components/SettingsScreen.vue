<script setup>

</script>
<template>
  <div class="homeScreenDiv">
    <h1 class="settingsTitle">Settings</h1>
  </div>
  <router-link to="/settingsScreenDark">
    <button class="buttonDarkModeSelected">Dark Mode</button>
  </router-link>
  <button class="buttonLightMode">Light Mode</button>
  <br>
  <router-link to="/">
  <button class="buttonHomeScreen">Back to Menu</button>
</router-link>
</template>

