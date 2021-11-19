<template>
  <div>

    <b-form-group>

      <v-select
        v-model="selected"
        multiple
        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
        label="title"
        :placeholder="placeholder"
        :options="options"
        @input="$emit('input', selected)"
      />

    </b-form-group>
  </div>
</template>

<script>
import { BFormGroup } from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BFormGroup,
    vSelect,
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
    placeholder: {
      type: String,
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
@import '@core/scss/vue/libs/vue-select.scss';
</style>
