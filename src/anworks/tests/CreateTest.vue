<template>
  <div class="card p-3 pl-4 pr-5">
    <slot name="header" />
    <b-form @submit.prevent>
      <div class="row">
        <b-form-group
          label="Название"
          label-for="nameTechnology"
          class="col-12 col-md-7 mb-2"
        >
          <b-form-input
            id="nameTechnology"
            v-model="formTestData.title"
            placeholder="Тест по JavaScript"
            class="max-w326"
          />
        </b-form-group>

        <b-form-group
          label="Технология"
          label-for="technology"
          class="col-12 col-md-7 mb-2"
        >
          <b-form-input
            id="technology"
            v-model="formTestData.technology"
            placeholder="JavaScript"
            class="max-w326"
          />
        </b-form-group>

        <div class="col-12 col-md-7 mb-2">
          <label for="textarea-technology">Описание теста</label>
          <b-form-textarea
            id="textarea-technology"
            v-model="formTestData.about"
            placeholder="Проверить базовые знание языка, умение анализировать и структурироватья полученную информацию"
            rows="5"
          />
        </div>

        <b-form-group
          label="Время прохождения теста"
          label-for="technology-time"
          class="col-12 col-md-7 mb-2"
        >
          <b-form-input
            id="technology-time"
            v-model="formTestData.time"
            placeholder="120 минут"
            class="max-w326"
          />
        </b-form-group>

        <div class="col-12 col-md-7 mb-2">
          <b-form-select
            v-model="formTestData.selected"
            :options="options"
            class="max-w395"
          />
        </div>

        <b-form-group
          label="Проходной балл"
          label-for="technology-scope"
          class="col-12 col-md-7 mb-2"
        >
          <b-form-input
            id="technology-scope"
            v-model="formTestData.scope"
            placeholder="25"
            class="max-w60"
          />
        </b-form-group>

        <b-form-group
          label="Количество попыток"
          label-for="technology-try"
          class="col-12 col-md-7 mb-2"
        >
          <b-form-input
            id="technology-try"
            v-model="formTestData.attempts"
            placeholder="2"
            class="max-w60"
          />
        </b-form-group>

      </div>

      <div class="d-flex justify-content-between">
        <div class="mb-4">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mr-2"
            @click="toNext()"
          >
            <slot name="btn" />
          </b-button>

          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            type="reset"
          >
            Отмена
          </b-button>
        </div>

        <div>
          <slot name="link" />
        </div>
      </div>
    </b-form>

  </div>
</template>

<script>
import {
  BFormInput, BFormGroup, BFormTextarea, BFormSelect, BButton, BForm,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BFormInput,
    BFormGroup,
    BFormTextarea,
    BFormSelect,
    BButton,
    BForm,
  },
  directives: {
    Ripple,
  },
  props: {
    formTestData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      // infoTest: {
      //   title: '',
      //   technology: '',
      //   about: '',
      //   time: '',
      //   selected: null,
      //   scope: '',
      //   attempts: '',
      // },
      options: [
        { value: null, text: 'Закрытые попытки отправляются автоматически' }, { value: 'open_try', text: 'Открытые попытки отправляются автоматически' },
      ],
    }
  },
  methods: {
    toNext() {
      console.log(this.formTestData)
    },
  },
}
</script>

<style lang="scss">
  .max-w60 {
      max-width: 60px;
  }
  .max-w326 {
      max-width: 326px;
  }
  #textarea-technology, .max-w395 {
      max-width: 395px;
  }
</style>
