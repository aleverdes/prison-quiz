<template>
  <label :for="getAnswerId">
    <div
        class="ch-box white-box answers-block checkbox-answer choose-answer block-vertical-margin-mini"
        :class="isSelected ? 'answer-sel' : 'answer-unsel'">
      <div class="chk-area" :class="isSelected ? 'chk-checked' : 'chk-unchecked'">
        <span></span>
      </div>
      <input type="radio" :id="getAnswerId" :name="questionId" :value="answerId" style="display: none" @click="onAnswerClick">
      <span>{{ text }}</span>
    </div>
  </label>
</template>

<script>
export default {
  name: 'AnswerElement',
  props: {
    questionId: String,
    answerId: String,
    text: String,
    onSelect: Function,
    isSelected: Boolean
  },
  computed: {
    getAnswerId() {
      return `${this.questionId}-${this.answerId}`
    }
  },
  methods: {
    onAnswerClick() {
      this.onSelect(this.answerId)
    }
  }
}
</script>

<style scoped>

.checkbox-answer * {
  font-size: 15px;
  font-weight: 700;
}

.choose-answer {
}

.answer-unsel {
  background-color: #ffffff;
  color: #000000;
  height: 100%;
  margin-bottom: 0;
}

.block-vertical-margin-mini {
  margin-bottom: 10px;
}

.answers-block {
  cursor: pointer;
}

.ch-box {
  padding: 15px 20px;
  overflow: hidden;
  margin-bottom: 10px;
}

/*Checks*/
.ch-box .chk-area {
  display: inline-block;
  vertical-align: middle;
  float: none;
}

.chk-area {
  background-size: contain !important;
}

.chk-area, .answers-block label {
  pointer-events: none;
}

.chk-area {
  border: 2px solid #dfe6ea;
  border-radius: 3px;
  margin: 0 10px 0 0;
  float: left;
  width: 25px;
  height: 25px;
}

.ch-box label {
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  max-width: 80%;
}

.choose-answer.answer-sel {
  background: #d6e6ff !important;
}

.choose-answer.answer-sel .chk-area.chk-checked {
  background-color: #0f65ef !important;
  border-color: #0f65ef !important;
}

.chk-checked {
  border: 2px solid #0f65ef;
  background: #0f65ef url("/ch.png") 50% 50% no-repeat;
}
</style>