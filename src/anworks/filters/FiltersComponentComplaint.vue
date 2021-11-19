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
      <filters-select-badge
        v-model="company"
        class="pb-1 border-bottom"
        :options="companyOptions"
        placeholder="Введите имя, компанию или ID"
        @input="onInputSelect"
      />

      <p class=" h6 mt-1">Кому
      </p>
      <filters-select-badge
        v-model="companyWhom"
        class="pb-1 border-bottom"
        :options="companyWhomOptions"
        placeholder="Введите имя, компанию или ID"
        @input="onInputSelect"
      />

      <p class="h6 my-1">
        Статус
      </p>
      <filters-check-box
        v-model="ratingStatus"
        class="pb-1 border-bottom"
        :options="ratingStatusOption"
        @input="onInputSelect"
      />

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
import FiltersDate from './filtersComponents/FiltersDate.vue'
import FiltersSelectBadge from './filtersComponents/FiltersSelectBadge.vue'
import FiltersCheckBox from './filtersComponents/FiltersCheckBox.vue'

export default {
  components: {
    BButton,
    FiltersSaveMain,
    FiltersDate,
    FiltersSelectBadge,
    FiltersCheckBox,
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

      company: [],
      companyOptions: [{ title: 'Epam' }, { title: 'NIX' }, { title: 'SoftServe' }, { title: 'GlobalLogic' }, { title: 'Luxoft Ukraine' }],

      companyWhom: [],
      companyWhomOptions: [{ title: 'Epam' }, { title: 'NIX' }, { title: 'SoftServe' }, { title: 'GlobalLogic' }, { title: 'Luxoft Ukraine' }],

      ratingStatus: ['consideration'],
      ratingStatusOption: [
        { item: 'waiting', name: 'Ожидает' },
        { item: 'consideration', name: 'На рассмотрении' },
        { item: 'approval', name: 'Рассмотрена' },
      ],
    }
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
  },
}
</script>
