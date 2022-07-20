<template>
  <div class="answers-container">
    <div class="answers">
      <answer-element v-for="answer in answers" :key="answer"
                      :question-id="questionId"
                      :answer-id="answer"
                      :selected-answer-id="selectedAnswerId"
                      :on-select="selectAnswer"
                      :text="localize(answer)" />
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
    answers: Object,
    localize: Function,
    chooseAnswer: Function
  },
  methods: {
    selectAnswer(answerId) {
      this.selectedAnswerId = answerId

      setTimeout(() => {
        this.chooseAnswer(answerId)
      }, 30);
    }
  }
}
</script>

<style scoped>

</style>