<template>
  <app-collapse>
    <app-collapse-item
      class="h6 "
      title="СОХРАНЁННЫЕ ФИЛЬТРЫ"
    >
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

      <b-form-checkbox
        v-model="checkFilter"
        value="A"
        class="custom-control-primary mt-2 pb-1 border-bottom"
      >
        Сохранить критерии поиска
      </b-form-checkbox>
    </app-collapse-item>
  </app-collapse>
</template>

<script>
import {
  BFormSelect, BFormInput, BFormCheckbox,
} from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    BFormSelect,
    BFormInput,
    BFormCheckbox,
    AppCollapse,
    AppCollapseItem,
  },

  data() {
    return {
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
    }
  },
}
</script>
