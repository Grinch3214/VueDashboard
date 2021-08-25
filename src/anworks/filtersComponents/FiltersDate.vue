<template>
  <div>
    <b-form-group
      label="Дата"
      label-for="date"
      class="mt-1"
    >
      <cleave
        id="date"
        v-model="form.date"
        class="form-control"
        :raw="false"
        :options="date"
        placeholder="YYYY-MM-DD"
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
  data() {
    return {
      form: {
        date: null,
      },
      date: {
        date: true,
        delimiter: '-',
        datePattern: ['Y', 'm', 'd'],
      },
    }
  },
}
</script>
