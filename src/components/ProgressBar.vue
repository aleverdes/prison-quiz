<template>
  <div class="quiz-progress-bar">
    <div class="dots">
      <div class="dot act"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="count">1 / 10</div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    number: Number
  }
}
</script>

<style scoped>
.quiz-progress-bar {
  overflow: hidden;
}

.quiz-progress-bar .dots {
  float: left;
}

.quiz-progress-bar .dots > div {
  background-color: #d9e1ee;
  width: 6px;
  height: 6px;
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  border-radius: 50%;
}

.quiz-progress-bar .dots > div.act {
  background-image: linear-gradient(180deg, rgb(15, 101, 239) 0%, rgb(150, 10, 249) 100%);
  width: 12px;
  height: 12px;
}

.quiz-progress-bar .count {
  float: right;
  color: #000;
  font-size: 14px;
  font-weight: 700;
}
</style>