<template>
  <div class="mt-2 pb-2 border-bottom">
    <b-card-text class="h6 mb-3">
      Возраст, лет от {{ age[0] }} до {{ age[1] }}</b-card-text>
    <vue-slider
      v-model="age"
      :direction="direction"
      :min="min"
      :max="max"
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
      age: [18, 30],
      min: 18,
      max: 99,
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
