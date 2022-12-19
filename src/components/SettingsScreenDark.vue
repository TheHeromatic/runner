
<template>
  <div style="background-color: black; height: 685px; margin:0px">
    <div class="homeScreenDiv">
    <h1 class="settingsTitleDark">Settings</h1>
  </div>
  <router-link to="/settingsScreenDark">
    <button class="buttonSettingsDark">Dark Mode</button>
  </router-link>
    <router-link to="/settingsScreen">
  <button class="buttonSettings">Light Mode</button>
    </router-link>
  <br>
  <router-link to="/homeScreenDark">
    <button class="buttonHomeScreenDark">Back to Menu</button>
  </router-link>
</div>
</template>
<style>

</style>