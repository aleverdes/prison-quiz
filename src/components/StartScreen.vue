<template>
  <h1>{{ localize("startScreenTitle") }}</h1>
  <button @click="startGame">{{ localize("startScreenButton") }}</button>
</template>

<script>
export default {
  name: "StartScreen",
  props: {
    startGame: Function,
    localize: Function
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  button {
    width: 256px;
    height: 64px;
    background-color: #0f65ef;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 18pt;
    text-transform: uppercase;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
  }
</style>