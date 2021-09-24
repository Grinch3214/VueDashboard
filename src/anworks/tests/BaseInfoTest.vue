<template>
  <div>
    <create-test
      v-if="step == 1"
      :formTestData="infoTest"
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
    <div v-else-if="step == 2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore, nulla dolorum magnam illum doloremque soluta sit quas laboriosam. Odit dolores ad eos beatae harum iusto alias nemo voluptas numquam.
    </div>
    <button @click.prevent="prevStep">Prev</button>
    <button @click.prevent="nextStep">Next</button>
  </div>
</template>

<script>
import CreateTest from './CreateTest.vue'

export default {
  components: {
    CreateTest,
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
    nextStep() {
      this.step += 1
    },
    prevStep() {
      this.step -= 1
    },
  },
}
</script>
