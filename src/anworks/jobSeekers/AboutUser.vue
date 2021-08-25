<template>
  <div>
    <b-form
      @submit.prevent
    >
      <b-row class="align-items-center">

        <h2 class="col-12 mb-3">
          О себе</h2>

        <b-col lg="12">
          <h5>О себе</h5>
          <b-form-textarea
            id="textarea-about-user"
            :value="aboutUser"
            rows="4"
          />
        </b-col>

        <b-col lg="12">
          <h5 class="mt-1">
            Ожидания от работы</h5>
          <b-form-textarea
            id="textarea-wait-job"
            :value="waitJob"
            rows="7"
          />
        </b-col>

        <b-col lg="12">
          <h5 class="mt-1">
            Достижения</h5>
          <b-form-textarea
            id="textarea-achievement-user"
            :value="achievementUser"
            rows="4"
          />
        </b-col>

        <b-col lg="12">
          <h5 class="mt-1">
            Хобби</h5>
          <b-form-textarea
            id="textarea-hobby-user"
            :value="hobbyUser"
            rows="4"
          />
        </b-col>

        <b-col
          lg="12"
          class="mt-4"
        >
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type=""
            variant="primary"
            class="mr-1"
          >
            Сохранить изменения
          </b-button>
        </b-col> <!-- Кнопки для формы -->

      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BForm, BButton, BCol, BRow, BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BForm,
    BButton,
    BCol,
    BRow,
    BFormTextarea,
  },
  directives: {
    Ripple,
  },
  data() {
    return {

      aboutUser: 'Графа «о себе» в резюме сложная: в ней вы показываете личность, стоящую за сухим перечислением навыков и пройденных курсов. Рассказываем, как грамотно заполнить этот раздел и показать, что вы — лучший кандидат.',

      waitJob: 'Графа «о себе» в резюме сложная: в ней вы показываете личность, стоящую за сухим перечислением навыков и пройденных курсов. Рассказываем, как грамотно заполнить этот раздел и показать, что вы — лучший кандидат.',

      achievementUser: 'Графа «о себе» в резюме сложная: в ней вы показываете личность, стоящую за сухим перечислением навыков и пройденных курсов. Рассказываем, как грамотно заполнить этот раздел и показать, что вы — лучший кандидат.',

      hobbyUser: 'Графа «о себе» в резюме сложная: в ней вы показываете личность, стоящую за сухим перечислением навыков и пройденных курсов. Рассказываем, как грамотно заполнить этот раздел и показать, что вы — лучший кандидат.',
    }
  },
}
</script>
