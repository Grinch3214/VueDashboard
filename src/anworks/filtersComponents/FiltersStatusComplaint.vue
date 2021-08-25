<template>
  <div class="mt-2 pb-1 border-bottom">
    <p class="h6 mb-1">
      Статус
    </p>
    <b-form-checkbox
      v-model="checkFilter"
      value="waiting"
      class="mb-1"
    >
      Ожидает
    </b-form-checkbox>
    <b-form-checkbox
      v-model="checkFilter"
      value="rating"
      class="mb-1"
    >
      На рассмотрении
    </b-form-checkbox>
    <b-form-checkbox
      v-model="checkFilter"
      value="create"
      class="mb-1"
    >
      Рассмотрена
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
      checkFilter: ['rating'],
    }
  },
}
</script>
