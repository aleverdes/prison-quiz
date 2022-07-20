<template>
  <template v-if="startScreen">
    <start-screen :start-game="startGame"/>
  </template>
  <template v-else-if="resultScreen">
    <result-screen :start-game="startGame"/>
  </template>
  <template v-else>
    <question-block :question-id="currentQuestionIndex"
                    :questions="questions"
                    :selectedAnswers="selectedAnswers"
                    :choose-answer="chooseAnswer"
                    :prev-question="prevQuestion"
                    :localize="localize"/>
  </template>
</template>

<script>
import questions from './data/questions.json'
import localization from './data/localization.json'
import QuestionBlock from './components/QuestionBlock.vue'
import StartScreen from "@/components/StartScreen";
import ResultScreen from "@/components/ResultScreen";

export default {
  name: 'App',
  data() {
    return {
      startScreen: true,
      resultScreen: false,
      currentQuestionIndex: 0,
      selectedAnswers: [],
      questions: questions,
      localization: localization,
      currentLang: "ru"
    }
  },
  components: {
    ResultScreen,
    StartScreen,
    QuestionBlock
  },
  methods: {
    localize(id) {
      return this.localization[id][this.currentLang];
    },
    chooseAnswer(answerId) {
      this.selectedAnswers.push(answerId)
      this.currentQuestionIndex++
      if (this.currentQuestionIndex === questions.questions.length) {
        this.resultScreen = true
      }
    },
    prevQuestion() {
      this.currentQuestionIndex--
    },
    startGame() {
      this.startScreen = false
      this.currentQuestionIndex = 0
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
