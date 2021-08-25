<template>
  <div>

    <b-form-group class="col-sm-12 col-md-6 col-lg-3 mb-3">
      <h5>Диапазон дат</h5>
      <label class="flat-label">
        <flat-pickr
          v-model="rangeDate"
          placeholder="Дата"
          class="form-control"
          :config="{ mode: 'range', dateFormat: 'd.m.Y' }"
        />
      </label>
    </b-form-group>
    <analitics-table-employers />
  </div>
</template>

<script>
import { BFormGroup } from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import AnaliticsTableEmployers from '@/anworks/analitics/AnaliticsTableEmployers.vue'

export default {
  components: {
    flatPickr,
    BFormGroup,
    AnaliticsTableEmployers,
  },
  data() {
    return {
      rangeDate: null,
      allowInput: true,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}
.flat-label {
  width: 100%;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 11px;
    right: 11px;
    width: 9px;
    height: 9px;
    background-color: transparent;
    border-bottom: 2px solid #777;
    border-right: 2px solid #777;
    transform: rotate(45deg);
  }
}
</style>
