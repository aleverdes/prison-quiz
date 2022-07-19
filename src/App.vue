<template>
  <question-block :question-id="currentQuestionIndex"
                  :questions="questions"
                  :score="score"
                  :choose-answer="chooseAnswer"
                  :prev-question="prevQuestion"
                  :localize="localize"/>
</template>

<script>
import questions from './data/questions.json'
import localization from './data/localization.json'
import QuestionBlock from './components/QuestionBlock.vue'

export default {
  name: 'App',
  data() {
    return {
      currentQuestionIndex: 0,
      score: 0,
      questions: questions,
      localization: localization,
      currentLang: "ru"
    }
  },
  components: {
    QuestionBlock
  },
  methods: {
    localize(id) {
      return this.localization[id][this.currentLang];
    },
    chooseAnswer(answerId) {
      this.currentQuestionIndex++
      console.log(answerId)
    },
    prevQuestion() {
      this.currentQuestionIndex--
    }
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
  min-height: 100vh;
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
