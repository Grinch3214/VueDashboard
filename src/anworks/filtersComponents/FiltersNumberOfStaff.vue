<template>
  <div class="mt-1 pb-1 border-bottom">
    <p class="h6 mt-1 mb-3">Количество персонала: от {{ staff[0] }} до {{ staff[1] }}
    </p>
    <vue-slider
      v-model="staff"
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
      staff: [10, 350],
      min: 1,
      max: 800,
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
