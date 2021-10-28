<template>
  <div class="mt-1 pb-1 border-bottom">
    <p class="h6 mt-1 mb-2">
      Высшее образование</p>
    <b-form-radio
      v-model="Selected"
      name="true-education"
      value="A"
      class="mb-1"
    >
      Есть
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="false-education"
      value="B"
      class="mb-1"
    >
      Нет
    </b-form-radio>
  </div>
</template>

<script>
import { BFormRadio } from 'bootstrap-vue'

export default {
  components: {
    BFormRadio,
  },

  data() {
    return {
      Selected: 'B',
    }
  },
}
</script>
