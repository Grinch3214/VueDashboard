<template>
  <div class="mt-1 pb-1 border-bottom">
    <slot name="radioButtons" />
    <b-form-radio
      v-model="Selected"
      name="activity"
      value="A"
      class="mb-1"
    >
      <slot name="radioButtons-1" />
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="blocked"
      value="B"
      class="mb-1"
    >
      <slot name="radioButtons-2" />
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
