<template>
  <div class="pb-1 mb-2 border-bottom">
    <p class=" h6 mt-1 mb-1">Название работодателя
    </p>
    <b-form-group>
      <v-select
        v-model="emploer"
        placeholder="Работодатель"
        multiple
        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
        label="title"
        :options="emploerOption"
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
      emploer: false,
      emploerOption: [{ title: 'Epam' }, { title: 'SoftServe' }, { title: 'GlobalLogic' }, { title: 'Luxoft Ukraine' }, { title: 'Ciklum' }, { title: 'NIX' }],
    }
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
</style>
