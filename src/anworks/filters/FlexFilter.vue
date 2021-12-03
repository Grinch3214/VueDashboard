<template>
  <div>

    <div class="admins">
      <p class="text-uppercase pl-1">Фильтры
      </p>
    </div>

    <div class="card p-1">
      <div>
        <h5 class="mt-1">
          Расширенный поиск:</h5>
        <b-form-select
          v-model="formData.selected"
          :options="options"
          size="md"
          class="mt-1"
          @change="formDataSendToServer"
        />

        <b-form-select
          v-model="formData.selectOperators"
          :options="operator"
          size="md"
          class="mt-1"
          @change="formDataSendToServer"
        />

        <b-form-input
          v-model="formData.helperInput"
          placeholder="Поиск"
          size="md"
          class="mt-1"
        />
      </div>

      <p class="h6 mt-1 mb-2">
        Пользователь</p>
      <filters-radio-button
        v-model="formData.users"
        class="pb-1"
        :options="usersOptions"
        @input="onInputSelect"
      />

      <div class="text-center pb-3 mt-2">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="formDataSendToServer"
        >
          <feather-icon
            icon="PieChartIcon"
            class="mr-50"
          />
          <span class="align-middle">Применить фильтры</span>
        </b-button>
      </div>

    </div>

  </div>
</template>

<script>
import { BButton, BFormSelect, BFormInput } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import FiltersRadioButton from './filtersComponents/FiltersRadioButton.vue'

export default {
  components: {
    BButton,
    BFormSelect,
    BFormInput,
    FiltersRadioButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isActive: false,

      formData: {
        selected: 'name',
        selectOperators: '=',
        helperInput: '',
        users: 'employer',
      },

      options: [
        { value: 'name', text: 'Имя' },
        { value: 'date_register', text: 'Дата регистрации' },
        { value: 'birthday', text: 'Дата рождения' },
        { value: 'role', text: 'Роль' },
        { value: 'status', text: 'Статус' },
        { value: 'IP', text: 'IP' },
      ],

      operator: [
        { value: '=', text: '=' },
        { value: '!=', text: '!=' },
        { value: '<', text: '<' },
        { value: '>', text: '>' },
        { value: '<=', text: '<=' },
        { value: '>=', text: '>=' },
        { value: 'LIKE %%', text: 'LIKE %%' },
      ],

      usersOptions: [
        { item: 'employer', name: 'Работодатель' },
        { item: 'job-seeker', name: 'Соискатель' },
      ],
    }
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
    formDataSendToServer() {
      console.log(this.formData)
    },
  },
}
</script>
