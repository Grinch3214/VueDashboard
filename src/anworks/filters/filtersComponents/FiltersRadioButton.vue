<template>
  <div>
    <b-form-radio-group
      v-model="selected"
      :options="options"
      value-field="item"
      text-field="name"
      class="custom-margin"
      stacked
      @input="$emit('input', selected)"
    />
  </div>
</template>

<script>
import { BFormRadioGroup } from 'bootstrap-vue'

export default {
  components: {
    BFormRadioGroup,
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

<style lang="scss">
    .custom-margin > .custom-radio {
        margin-bottom: 1rem;
    }
</style>
