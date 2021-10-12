<template>
  <div class="card p-3 pl-4 pr-5">
    <slot name="header" />
    <validation-observer ref="simpleRules">
      <b-form
        @submit.prevent
      >
        <div class="row">
          <b-form-group
            label="Название"
            label-for="nameTechnology"
            class="col-12 col-md-7 mb-2"
          >
            <validation-provider
              #default="{ errors }"
              rules="required|min:5"
            >
              <b-form-input
                id="nameTechnology"
                v-model="formTestData.title"
                :state="errors.length > 0 ? false:null"
                placeholder="Тест по JavaScript"
                class="max-w326"
                trim
              />
            </validation-provider>
          </b-form-group>

          <b-form-group
            label="Технология"
            label-for="technology"
            class="col-12 col-md-7 mb-2"
          >
            <validation-provider
              #default="{ errors }"
              rules="required|min:5"
            >
              <b-form-input
                id="technology"
                v-model="formTestData.technology"
                :state="errors.length > 0 ? false:null"
                placeholder="JavaScript"
                class="max-w326"
              />
            </validation-provider>
          </b-form-group>

          <div class="col-12 col-md-7 mb-2">
            <label for="textarea-technology">Описание теста</label>
            <validation-provider
              #default="{ errors }"
              rules="required|min:15"
            >
              <b-form-textarea
                id="textarea-technology"
                v-model="formTestData.about"
                :state="errors.length > 0 ? false:null"
                placeholder="Проверить базовые знание языка, умение анализировать и структурироватья полученную информацию"
                rows="5"
              />
            </validation-provider>
          </div>

          <b-form-group
            label="Время прохождения теста"
            label-for="technology-time"
            class="col-12 col-md-7 mb-2"
          >
            <validation-provider
              #default="{ errors }"
              rules="required"
            >
              <b-form-input
                id="technology-time"
                v-model="formTestData.time"
                :state="errors.length > 0 ? false:null"
                placeholder="120 минут"
                class="max-w326"
              />
            </validation-provider>
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
            <validation-provider
              #default="{ errors }"
              rules="required"
            >
              <b-form-input
                id="technology-scope"
                v-model="formTestData.scope"
                :state="errors.length > 0 ? false:null"
                placeholder="25"
                class="max-w60"
              />
            </validation-provider>
          </b-form-group>

          <b-form-group
            label="Количество попыток"
            label-for="technology-try"
            class="col-12 col-md-7 mb-2"
          >
            <validation-provider
              #default="{ errors }"
              rules="required"
            >
              <b-form-input
                id="technology-try"
                v-model="formTestData.attempts"
                :state="errors.length > 0 ? false:null"
                placeholder="2"
                class="max-w60"
              />
            </validation-provider>
          </b-form-group>

        </div>

        <div class="d-flex justify-content-between">
          <div class="mb-4">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
              @click.prevent="toNext"
            >
              <slot name="btn" />
            </b-button>

            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="outline-primary"
              type="reset"
              @click="prevStep()"
            >
              Отмена
            </b-button>
          </div>

          <div>
            <slot name="link" />
          </div>
        </div>
      </b-form>
    </validation-observer>

  </div>
</template>

<script>
import {
  BFormInput, BFormGroup, BFormTextarea, BFormSelect, BButton, BForm,
} from 'bootstrap-vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Ripple from 'vue-ripple-directive'
import { required } from '@validations'

export default {
  components: {
    BFormInput,
    BFormGroup,
    BFormTextarea,
    BFormSelect,
    BButton,
    BForm,
    ValidationObserver,
    ValidationProvider,
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
      required,
      options: [
        { value: null, text: 'Закрытые попытки отправляются автоматически' }, { value: 'open_try', text: 'Открытые попытки отправляются автоматически' },
      ],
    }
  },
  methods: {
    toNext() {
      console.log(this.formTestData)
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          console.log('form submitted!')
          this.$emit('toNext', this.step += 1)
        }
      })
    },
    prevStep() {
      this.$emit('toNext', this.step -= 1)
    },
  },
}
</script>

<style lang="scss">
  .max-w60 {
      max-width: 90px;
  }
  .max-w326 {
      max-width: 326px;
  }
  #textarea-technology, .max-w395 {
      max-width: 395px;
  }
</style>
