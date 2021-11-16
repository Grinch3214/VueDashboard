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

      <p class="h6 mt-1">Название работодателя
      </p>
      <filters-select-badge
        v-model="emploerName"
        class="border-bottom pb-1"
        placeholder="Работодатель"
        :options="emploerNameOption"
        @input="onInputSelect"
      />

      <p class="h6 mt-1">
        Страна найма:
      </p>
      <filters-select
        v-model="country"
        class="pb-2"
        :options="countryOptions"
        @input="onInputSelect"
      />
      <p class="h6 mt-1">
        Город найма:
      </p>
      <filters-select-badge
        v-model="city"
        class="pb-1 border-bottom"
        placeholder="Город"
        :options="cityOption"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-3">Количество персонала: от {{ numberStaff[0] }} до {{ numberStaff[1] }}
      </p>
      <filters-range-component
        v-model="numberStaff"
        class="pb-1 border-bottom"
        :min="min"
        :max="max"
        @change="onInputSelect"
      />

      <p class="h6 mt-1 mb-3">Количество персонала: от {{ balance[0] }} до {{ balance[1] }}
      </p>
      <filters-range-component
        v-model="balance"
        class="pb-1 border-bottom"
        :min="minBalance"
        :max="maxBalance"
        @change="onInputSelect"
      />

      <div class="text-center pt-2 pb-3">
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
import FiltersSelectBadge from './filtersComponents/FiltersSelectBadge.vue'
import FiltersSelect from './filtersComponents/FiltersSelect.vue'
import FiltersRangeComponent from './filtersComponents/FiltersRangeComponent.vue'

export default {
  components: {
    FiltersSaveMain,
    BButton,
    FiltersSelectBadge,
    FiltersSelect,
    FiltersRangeComponent,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isActive: false,

      emploerName: [],
      emploerNameOption: [{ title: 'Epam' }, { title: 'SoftServe' }, { title: 'GlobalLogic' }, { title: 'Luxoft Ukraine' }, { title: 'Ciklum' }, { title: 'NIX' }],

      country: 'UA',
      countryOptions: [{ value: 'UA', text: 'Украина' }, { value: 'RU', text: 'Россия' }],

      city: [],
      cityOption: [{ title: 'Харьков' }, { title: 'Киев' }, { title: 'Львов' }, { title: 'Одесса' }, { title: 'Днепр' }, { title: 'Запорожье' }, { title: 'Кривой Рог' }, { title: 'Николаев' }, { title: 'Мариуполь' }, { title: 'Винница' }, { title: 'Херсон' }, { title: 'Чернигов' }, { title: 'Полтава' }, { title: 'Чекассы' }, { title: 'Хмельницкий' }, { title: 'Черновцы' }, { title: 'Житомир' }, { title: 'Сумы' }, { title: 'Ровно' }, { title: 'Ивано-Франковск' }, { title: 'Тернополь' }, { title: 'Луцк' }, { title: 'Ужгород' }],

      numberStaff: [10, 350],
      min: 0,
      max: 1000,

      balance: [100, 400],
      minBalance: 0,
      maxBalance: 1000,
    }
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
  },
}
</script>
