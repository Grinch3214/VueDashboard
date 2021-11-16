<template>
  <div
    :class="{active: isActive}"
    class="col-xl-4 custom-filters"
  >

    <div
      class="admins pointer arrow-static"
      :class="{active: isActive}"
      @click="isActive = !isActive"
    >
      <p class="text-uppercase pl-1">Фильтры
      </p>
    </div>

    <div
      class="card pl-1 pr-1 toggle__filters"
      :class="{active: isActive}"
    >

      <filters-save-main />

      <p class=" h6 mt-1">От кого
      </p>
      <filters-company />

      <p class=" h6 mt-1">Кому
      </p>
      <filters-company />

      <filters-status-complaint />

      <filters-date
        v-model="form.date"
        @input="onInputSelect"
      />

      <div class="text-center pb-3 mt-2">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          type="reset"
        >
          <feather-icon
            icon="PieChartIcon"
            class="mr-50"
          />
          <span class="align-middle">Очистить всё</span>
        </b-button>
      </div>

    </div>

  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import FiltersSaveMain from './filtersComponents/FiltersSaveMain.vue'
import FiltersCompany from './filtersComponents/FiltersCompany.vue'
import FiltersStatusComplaint from './filtersComponents/FiltersStatusComplaint.vue'
import FiltersDate from './filtersComponents/FiltersDate.vue'

export default {
  components: {
    BButton,
    FiltersSaveMain,
    FiltersCompany,
    FiltersStatusComplaint,
    FiltersDate,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isActive: false,
      form: {
        date: null,
      },
    }
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
  },
}
</script>
