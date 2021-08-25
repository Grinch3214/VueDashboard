<template>
  <div class="pb-1 border-bottom">
    <p class=" h6 mt-1">Навыки
    </p>
    <b-form-group>
      <v-select
        v-model="mainSkill"
        multiple
        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
        label="title"
        :options="skillOption"
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
      mainSkill: { title: 'Java' },
      skillOption: [{ title: 'JavaScript' }, { title: 'HTML' }, { title: 'CSS' }, { title: 'Java' }, { title: 'C++' }, { title: 'Pyton' }, { title: 'PHP' }],
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
