<template>
  <div class="mt-2 pb-1 border-bottom">
    <p class="h6 mb-1">
      Вид занятости
    </p>
    <b-form-checkbox
      v-model="checkFilter"
      value="fat"
      class="mb-1"
    >
      Полная
    </b-form-checkbox>
    <b-form-checkbox
      v-model="checkFilter"
      value="notFat"
      class="mb-1"
    >
      Неполная
    </b-form-checkbox>
    <b-form-checkbox
      v-model="checkFilter"
      value="distantWork"
      class="mb-1"
    >
      Удалённая работа
    </b-form-checkbox>
    <b-form-checkbox
      v-model="checkFilter"
      value="traineeship"
      class="mb-1"
    >
      Стажировка
    </b-form-checkbox>
  </div>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  components: {
    BFormCheckbox,
  },

  data() {
    return {
      checkFilter: ['notFat', 'traineeship'],
    }
  },
}
</script>
