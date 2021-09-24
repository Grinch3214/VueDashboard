<template>
  <div>
    <create-test :formTestData="infoTest">
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
}
</script>
