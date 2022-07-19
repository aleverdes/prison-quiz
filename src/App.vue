<template>
  <div id="app">
    <QuestionBlock msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import QuestionBlock from './components/QuestionBlock.vue'

export default {
  name: 'App',
  components: {
    QuestionBlock
  }
}
</script>

<style>
html {
  font-family: "Montserrat", sans-serif
}

body {
  background: #f7fcff;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app {
  width: 100%;
  max-width: 75vh;
}
</style>
