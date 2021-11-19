<template>
  <div
    :class="{active: isActive}"
    class="custom-filters"
  >

    <div
      class="admins pointer arrow-static"
      :class="{active: isActive}"
      @click="isActive = !isActive"
    >
      <p class="text-uppercase pl-1">Фильтры
      </p>
    </div>

    <div
      class="card p-1 toggle__filters"
      :class="{active: isActive}"
    >
      <div>
        <h5 class="mt-1">
          Расширенный поиск:</h5>
        <b-form-select
          v-model="selected"
          :options="options"
          size="md"
          class="mt-1"
        />

        <b-form-select
          v-model="selectOperators"
          :options="operator"
          size="md"
          class="mt-1"
        />

        <b-form-input
          id="helperInput"
          placeholder="Поиск"
          size="md"
          class="mt-1"
        />
      </div>

      <p class="h6 mt-1 mb-2">
        Пользователь</p>
      <filters-radio-button
        v-model="users"
        class="pb-1"
        :options="usersOptions"
        @input="onInputSelect"
      />

      <div class="text-center pb-3 mt-2">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          type="reset"
        >
          <feather-icon
            icon="PieChartIcon"
            class="mr-50"
          />
          <span class="align-middle">Очистить всё</span>
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

      checkFilter: ['A'],

      selected: null,
      options: [
        { text: 'Имя' },
        { text: 'Дата регистрации' },
        { text: 'Дата рождения' },
        { text: 'Роль' },
        { text: 'Статус' },
        { text: 'IP' },
      ],

      selectOperators: null,
      operator: [
        { text: '=' },
        { text: '!=' },
        { text: '<' },
        { text: '>' },
        { text: '<=' },
        { text: '>=' },
        { text: 'LIKE %%' },
      ],

      users: 'employer',
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
  },
}
</script>
