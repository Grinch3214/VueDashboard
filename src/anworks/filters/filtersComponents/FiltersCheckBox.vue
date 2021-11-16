<template>
  <div>
    <b-form-checkbox-group
      v-model="selected"
      :options="options"
      value-field="item"
      text-field="name"
      stacked
      class="custom-margin"
      @input="$emit('input', selected)"
    />
  </div>
</template>

<script>
import { BFormCheckboxGroup } from 'bootstrap-vue'

export default {
  components: {
    BFormCheckboxGroup,
  },
  props: {
    value: {
      type: Array,
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
    .custom-margin > .custom-checkbox {
        margin-bottom: 1rem;
    }
</style>
