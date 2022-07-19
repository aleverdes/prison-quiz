<template>

  <div class="answers-container">

    <div class="answers">
      <answer-element :question-id="questionId" answer-id="answer1" :selected-answer-id="selectedAnswerId"
                      :on-select="chooseAnswer"
                      text="Это было отвратительно, не хочу вспоминать"/>
      <answer-element :question-id="questionId" answer-id="answer2" :selected-answer-id="selectedAnswerId"
                      :on-select="chooseAnswer"
                      text="Да так, небольшая кража"/>
      <answer-element :question-id="questionId" answer-id="answer3" :selected-answer-id="selectedAnswerId"
                      :on-select="chooseAnswer"
                      text="Я уже и не помню"/>
    </div>

  </div>
</template>

<script>
import AnswerElement from "@/components/AnswerElement";

export default {
  name: "AnswerBlock",
  components: {AnswerElement},
  data() {
    return {
      selectedAnswerId: null
    }
  },
  props: {
    questionId: String,
  },
  methods: {
    chooseAnswer(answerId) {
      this.selectedAnswerId = answerId
    }
  }
}
</script>

<style scoped>

</style>