<template>
  <div>
    <vue-slider
      v-model="slider"
      :direction="direction"
      :min="min"
      :max="max"
      class="mb-2"
      @change="$emit('change', slider)"
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
  model: {
    event: 'change',
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      },
    },
    min: {
      type: Number,
      default() {
        return []
      },
    },
    max: {
      type: Number,
      default() {
        return []
      },
    },
  },

  data() {
    return {
      slider: JSON.parse(JSON.stringify(this.value)),
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
