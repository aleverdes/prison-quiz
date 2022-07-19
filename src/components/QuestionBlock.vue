<template>
  <div class="white-box padding-bottom">
    <div class="box tt">
      <h1 id="question-title">{{ msg }}</h1>
    </div>
    <div class="box">
      <progress-bar number="2"/>
    </div>
    <div class="bx">
      <div class="quiz-image author-print-wrapper">
        <img src="https://quizterra.com/files/storage/2020/11/25/utvRbYh8LNBOuL69K4EkT8CENlMmaCkM.gif" alt=""
             style="display: inline; max-width: 100vw;">
      </div>
    </div>
  </div>

  <div class="answers-container">

    <div class="answers">
      <answer-block question-id="question1" answer-id="answer1" text="Это было отвратительно, не хочу вспоминать"/>
      <answer-block question-id="question1" answer-id="answer2" text="Да так, небольшая кража"/>
      <answer-block question-id="question1" answer-id="answer3" text="Я уже и не помню"/>
    </div>

  </div>

</template>

<script>
import AnswerBlock from "@/components/AnswerBlock";
import ProgressBar from "@/components/ProgressBar";

export default {
  name: 'QuestionBlock',
  components: {ProgressBar, AnswerBlock},
  props: {
    msg: String
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

.white-box {
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 5%);
  margin-bottom: 20px;
}

.padding-bottom {
  padding-bottom: 40px;
}

.quiz-image {
  text-align: center;
  margin-top: 30px;
}

.author-print-wrapper {
  position: relative;
  max-width: max-content;
  margin-left: auto;
  margin-right: auto;
}

</style>
