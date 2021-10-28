<template>
  <div class="pb-1 mb-2 border-bottom">
    <p class=" h6 mt-1 mb-1">Канал привлечения
    </p>
    <b-form-group>
      <v-select
        v-model="attraction"
        placeholder="Способ привлечения"
        multiple
        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
        label="title"
        :options="attractionOption"
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
      attraction: false,
      attractionOption: [{ title: 'Instagram' }, { title: 'Google' }, { title: 'Linkedin' }, { title: 'An.Works' }, { title: 'Telegram' }],
    }
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
</style>
