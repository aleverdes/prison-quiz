<template>
  <div class="white-box padding-bottom">
    <div class="box tt">
      <h1 id="question-title">{{ getQuestionText }}</h1>
    </div>
    <div class="box">
      <progress-bar :number="questionId" :max-number="getQuestionCount" />
    </div>
    <div class="quiz-image">
      <img :src="getQuestionImageUrl">
    </div>
  </div>
  <answer-block :question-id="getQuestionId" :answers="getAnswers" :localize="localize" :choose-answer="chooseAnswer"/>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import AnswerBlock from "@/components/AnswerBlock";

export default {
  name: 'QuestionBlock',
  components: {AnswerBlock, ProgressBar},
  props: {
    questionId: Number,
    questions: Object,
    localize: Function,
    chooseAnswer: Function,
    prevQuestion: Function,
    score: Number
  },
  computed: {
    getQuestionId() {
      return `q${this.questionId + 1}`
    },
    getQuestionCount() {
      return this.questions.questions.length
    },
    getQuestionText() {
      return this.localize(this.questions.questions[this.questionId].text)
    },
    getQuestionImageUrl() {
      return this.questions.questions[this.questionId].image
    },
    getAnswers() {
      return this.questions.questions[this.questionId].answers
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.box {
  padding: 40px;
}

.tt {
  border-bottom: 1px solid #e8e8e8;
}

.padding-bottom {
  padding-bottom: 40px;
}

#question-title {
  max-width: 100vw;
  overflow: hidden;
}

.quiz-image {
  text-align: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}

.quiz-image img {
  display: inline;
  max-width: 100vw;
}

</style>
