<template>
  <div>
    <create-test
      v-if="step == 1"
      :formTestData="infoTest"
      @toNext="toNext"
      @prevStep="prevStep"
    >
      <template v-slot:header>
        <h1>Создание теста</h1>
        <p class="h4 mb-3">
          Общая информация
        </p>
      </template>
      <template v-slot:btn>
        <span>Следующий шаг</span>
      </template>
    </create-test>

    <add-questions v-else-if="step == 2">

    </add-questions>
  </div>
</template>

<script>
import AddQuestions from './AddQuestions.vue'
import CreateTest from './CreateTest.vue'

export default {
  components: {
    CreateTest,
    AddQuestions,
  },
  data() {
    return {
      step: 1,
      infoTest: {
        title: '',
        technology: '',
        about: '',
        time: '',
        selected: null,
        scope: '',
        attempts: '',
      },

    }
  },
  methods: {
    toNext() {
      this.step += 1
    },
    prevStep() {
      this.step -= 1
    },
  },
}
</script>
