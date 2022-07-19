<template>
  <div id="app">
    <question-block question-text="Welcome to Your Vue.js App"/>
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

.white-box {
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 5%);
  margin-bottom: 20px;
}
</style>
