<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      size="md"
      class="mt-1"
      label="text"
      @input="$emit('input', selected)"
    />
  </div>
</template>

<script>
import { BFormSelect } from 'bootstrap-vue'

export default {
  components: {
    BFormSelect,
  },
  props: {
    value: {
      type: String,
      default() {
        return []
      },
    },
    options: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      selected: JSON.parse(JSON.stringify(this.value)),
    }
  },
}
</script>
