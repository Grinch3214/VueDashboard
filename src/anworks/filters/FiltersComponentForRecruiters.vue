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
      class="card p-1 toggle__filters"
      :class="{active: isActive}"
    >

      <p class="h6 mt-1 mb-2">
        Активность</p>
      <filters-radio-button
        v-model="activity"
        class="pb-1 border-bottom"
        :options="activityOptions"
        @input="onInputSelect"
      />

      <p class="h6 mt-1">Название работодателя
      </p>
      <filters-select-badge
        v-model="emploerName"
        class="mb-3 pb-1"
        :options="emploerNameOption"
        :placeholder="placeholderValue"
        @input="onInputSelect"
      />

      <div class="text-center pb-3">
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
import FiltersRadioButton from './filtersComponents/FiltersRadioButton.vue'
import FiltersSelectBadge from './filtersComponents/FiltersSelectBadge.vue'

export default {
  components: {
    BButton,
    FiltersRadioButton,
    FiltersSelectBadge,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isActive: false,

      activity: 'activity-true',
      activityOptions: [
        { item: 'activity-true', name: 'Активен' },
        { item: 'activity-false', name: 'Заблокирован' },
      ],

      emploerName: [],
      emploerNameOption: [{ title: 'Epam' }, { title: 'SoftServe' }, { title: 'GlobalLogic' }, { title: 'Luxoft Ukraine' }, { title: 'Ciklum' }, { title: 'NIX' }],

      placeholderValue: 'Работодатель',
    }
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
  },
}
</script>
