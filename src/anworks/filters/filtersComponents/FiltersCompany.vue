<template>
  <div class="pb-1 border-bottom">

    <b-form-group>
      <v-select
        v-model="company"
        multiple
        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
        label="title"
        placeholder="Введите имя, компанию или ID"
        :options="companyOption"
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

  data() {
    return {
      company: false,
      companyOption: [{ title: 'Epam' }, { title: 'NIX' }, { title: 'SoftServe' }, { title: 'GlobalLogic' }, { title: 'Luxoft Ukraine' }],
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
