<template>
  <div>
    <b-form-group
      label="Дата"
      label-for="date"
      class="mt-1"
    >
      <cleave
        id="date"
        v-model="form"
        class="form-control"
        :raw="false"
        :options="date"
        placeholder="DD.MM.YYYY"
        @input="$emit('input', form)"
      />
    </b-form-group>
  </div>
</template>

<script>
import { BFormGroup } from 'bootstrap-vue'
import Cleave from 'vue-cleave-component'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'cleave.js/dist/addons/cleave-phone.us'

export default {
  components: {
    BFormGroup,
    Cleave,
  },
  props: {
    value: {
      type: String,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      form: JSON.parse(JSON.stringify(this.value)),
      // form: {
      //   date: null,
      // },
      date: {
        date: true,
        delimiter: '.',
        datePattern: ['d', 'm', 'Y'],
      },
    }
  },
}
</script>
