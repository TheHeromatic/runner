<script>
import ThemeButton from "@/components/ThemeButton";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {ThemeButton},
};
</script>
<template>
  <div class="homeScreenDiv">
    <h1 class="settingsTitle">Settings</h1>
  </div>
  <router-link to="/settingsScreenDark">
    <button class="lightButtonSettingsDark">Dark Mode</button>
  </router-link>
  <button class="lightButtonSettings">Light Mode</button>
  <br>
  <router-link to="/">
  <button class="buttonHomeScreen">Back to Menu</button>
</router-link>

</template>
<style>

</style>