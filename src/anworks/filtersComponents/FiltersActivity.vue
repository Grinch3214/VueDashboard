<template>
  <div class="mt-1 pb-1 border-bottom">
    <p class="h6 mt-1 mb-2">
      Активность</p>
    <b-form-radio
      v-model="Selected"
      name="activity"
      value="A"
      class="mb-1"
    >
      Активен
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="blocked"
      value="B"
      class="mb-1"
    >
      Заблокирован
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
