<template>
  <template v-if="startScreen">
    <start-screen :start-game="startGame"
                  :localize="localize"/>
  </template>
  <template v-else-if="preResultScreen">
    <pre-result-screen :go-to-result-screen="goToResultScreen"
                       :localize="localize"/>
  </template>
  <template v-else-if="resultScreen">
    <result-screen :start-game="startGame"
                   :score="score"
                   :localize="localize"/>
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
import answersScore from './data/score.json'
import questions from './data/questions.json'
import localization from './data/localization.json'
import QuestionBlock from './components/QuestionBlock.vue'
import StartScreen from "@/components/StartScreen";
import ResultScreen from "@/components/ResultScreen";
import PreResultScreen from "@/components/PreResultScreen";

export default {
  name: 'App',
  data() {
    return {
      loader: true,
      startScreen: true,
      preResultScreen: false,
      resultScreen: false,
      currentQuestionIndex: 0,
      selectedAnswers: [],
      score: 0,
      questions: questions,
      localization: localization,
      currentLang: window.ysdk.environment.i18n.lang
    }
  },
  components: {
    ResultScreen,
    StartScreen,
    QuestionBlock,
    PreResultScreen
  },
  methods: {
    localize(id) {
      return this.localization[id][this.currentLang];
    },
    chooseAnswer(answerId) {
      this.selectedAnswers.push(answerId)
      this.currentQuestionIndex++

      if (this.currentQuestionIndex === 4 || this.currentQuestionIndex === 8) {
        window.ysdk.adv.showFullscreenAdv()
      }

      if (this.currentQuestionIndex === questions.questions.length) {
        this.preResultScreen = true
        this.calculateScore()
      }

      this.saveProgress()
    },
    prevQuestion() {
      this.currentQuestionIndex--
    },
    startGame() {
      this.startScreen = false
      this.resultScreen = false
      this.preResultScreen = false
      this.currentQuestionIndex = 0
      this.saveProgress()
    },
    goToResultScreen() {
      this.startScreen = false
      this.preResultScreen = false
      this.resultScreen = true
      this.currentQuestionIndex = 0
      this.saveProgress()
    },
    calculateScore() {
      let score = 0;
      this.selectedAnswers.forEach(function (item) {
        score += answersScore[item]
      })
      this.score = score
    },
    saveProgress() {
      window.player.setData({
        currentQuestionIndex: this.currentQuestionIndex,
        selectedAnswers: this.selectedAnswers,
        startScreen: this.startScreen,
        resultScreen: this.resultScreen,
        preResultScreen: this.preResultScreen
      })
    }
  },
  created() {
    window.player.getData().then(data => {
      this.currentQuestionIndex = data.currentQuestionIndex ?? 0
      this.selectedAnswers = data.selectedAnswers ?? []
      this.startScreen = data.startScreen ?? true
      this.resultScreen = data.resultScreen ?? false
      this.preResultScreen = data.preResultScreen ?? false
    })
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
