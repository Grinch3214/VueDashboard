<template>
  <div class="pb-2 border-bottom">
    <b-card-text class="h6 mb-3">
      Опыт работы в IT, от {{ itSkill[0] }} до {{ itSkill[1] }} месяцев</b-card-text>
    <vue-slider
      v-model="itSkill"
      :direction="direction"
      :min="minimum"
      :max="maximum"
      class="mb-2"
    />
  </div>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    VueSlider,
    BCardText,
  },

  data() {
    return {
      itSkill: [1, 12],
      minimum: 0,
      maximum: 36,
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-slider.scss';
</style>
