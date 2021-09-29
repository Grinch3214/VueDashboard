<template>
  <div>
    <create-test
      v-if="step == 1"
      :formTestData="infoTest"
      @toNext="toNext"
      @prevStep="prevStep"
    >
      <template v-slot:header>
        <div class="d-flex justify-content-between">
          <div>
            <h1>Редактирование теста</h1>
            <p class="h4 mb-3">
              Общая информация
            </p>
          </div>
          <div>
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="outline-primary"
            >
              Вопросы
            </b-button>
          </div>
        </div>
      </template>
      <template v-slot:btn>
        <span>Сохранить изменения</span>
      </template>
      <template v-slot:link>
        <a class="mb-4" href="#"><u>Удалить тест</u></a>
      </template>
    </create-test>
    <div v-else-if="step == 2" class="test">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odio ullam assumenda inventore tempora esse ducimus alias velit non neque, impedit, maiores corporis repellat officia reprehenderit modi iste ipsa debitis.
    </div>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import CreateTest from './CreateTest.vue'

export default {
  components: {
    CreateTest,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      step: 1,
      infoTest: {
        title: 'Тесты по HTML/CSS',
        technology: 'HTML/CSS',
        about: 'Проверить знания по языку разметки и каскадных таблиц',
        time: '45 мин',
        selected: 'open_try',
        scope: '100',
        attempts: '1',
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
