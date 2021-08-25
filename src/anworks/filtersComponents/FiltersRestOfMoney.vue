<template>
  <div class="mt-1 pb-1 border-bottom">
    <p class="h6 mt-1 mb-3">Остаток на конец месяца: от {{ restOf[0] }} до {{ restOf[1] }}
    </p>
    <vue-slider
      v-model="restOf"
      :direction="direction"
      :min="min"
      :max="max"
      class="mb-2"
    />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    VueSlider,
  },

  data() {
    return {
      restOf: [10, 346],
      min: 0,
      max: 999,
      dir: 'ltr',
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
