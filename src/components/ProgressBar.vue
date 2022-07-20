<template>
  <div class="quiz-progress-bar">
    <div class="dots">
      <template v-for="item in getProgress()" :key="item.index">
        <div class="dot" :class="{ act: item.value }"></div>
      </template>
    </div>
    <div class="count">{{ number + 1 }} / {{ maxNumber }}</div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    number: Number,
    maxNumber: Number,
  },
  methods: {
    getProgress() {
      let array = new Array(this.maxNumber)
      for (let i = 0; i < this.maxNumber; i++) {
        array[i] = {
          index: i,
          value: i <= this.number
        }
      }
      return array
    }
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