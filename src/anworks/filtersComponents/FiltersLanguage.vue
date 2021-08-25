<template>
  <div class="pb-1 border-bottom">
    <p class=" h6 mt-1">Языки
    </p>
    <b-form-group>
      <v-select
        v-model="language"
        multiple
        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
        label="title"
        :options="languageOption"
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
      language: { title: 'Английский' },
      languageOption: [{ title: 'Английский' }, { title: 'Русский' }, { title: 'Украинский' }, { title: 'Немецкий' }],
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
