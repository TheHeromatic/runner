<script setup>
</script>

<template>
  <div id="field"> <div id="player"></div>
  </div>
</template>

<style>
#field {
  background-color: greenyellow;
  height: 900px;
  width: 680px;
  position: relative;
  border: solid 5px black;
}
#player {
  background-color: orangered;
  height: 40px;
  width: 40px;
  position: absolute;
  border: solid 3px black;
  z-index: 1000;
}
</style>