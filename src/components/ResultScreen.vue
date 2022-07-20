<template>
  <h1>
    {{ localize(resultTitle) }}
  </h1>
  <p>
    {{ localize(resultDesc) }}
  </p>
  <p>
    {{ localize("share") }}
  </p>
  <button @click="startGame">{{ localize("resultScreenButton") }}</button>
</template>

<script>
export default {
  name: "ResultScreen",
  props: {
    startGame: Function,
    localize: Function,
    score: Number
  },
  computed: {
    resultTitle() {
      if (this.score > 7) {
        return "resultScreenTitle2"
      } else if (this.score > -4) {
        return "resultScreenTitle1"
      } else {
        return "resultScreenTitle0"
      }
    },
    resultDesc() {
      if (this.score > 7) {
        return "resultScreenDesc2"
      } else if (this.score > -4) {
        return "resultScreenDesc1"
      } else {
        return "resultScreenDesc0"
      }
    }
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

p {
  padding: 0 20px 20px;
}
</style>