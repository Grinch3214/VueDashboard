<template>
  <div
    class="col-xl-4"
  >

    <div
      class="admins"
    >
      <p class="text-uppercase pl-1">Фильтры
      </p>
    </div>

    <div
      class="card pl-1 pr-1"
    >

      <filters-save-main />

      <p class="h6 mt-1">Название работодателя
      </p>
      <filters-select-badge
        v-model="formData.emploerName"
        class="border-bottom pb-1"
        placeholder="Работодатель"
        :options="formDataOptions.emploerNameOption"
        @input="onInputSelect"
      />

      <p class="h6 mt-1">
        Страна найма:
      </p>
      <filters-select
        v-model="formData.country"
        class="pb-2"
        :options="formDataOptions.countryOptions"
        @input="onInputSelect"
      />
      <p class="h6 mt-1">
        Город найма:
      </p>
      <filters-select-badge
        v-model="formData.city"
        class="pb-1 border-bottom"
        placeholder="Город"
        :options="formDataOptions.cityOption"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-3">Количество персонала: от {{ formData.numberStaff[0] }} до {{ formData.numberStaff[1] }}
      </p>
      <filters-range-component
        v-model="formData.numberStaff"
        class="pb-1 border-bottom"
        :min="min"
        :max="max"
        @change="onInputSelect"
      />

      <p class="h6 mt-1 mb-3">Количество персонала: от {{ formData.balance[0] }} до {{ formData.balance[1] }}
      </p>
      <filters-range-component
        v-model="formData.balance"
        class="pb-1 border-bottom"
        :min="minBalance"
        :max="maxBalance"
        @change="onInputSelect"
      />

      <div class="text-center pt-2 pb-3">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="formDataSendToServer"
        >
          <feather-icon
            icon="PieChartIcon"
            class="mr-50"
          />
          <span class="align-middle">Применить фильтры</span>
        </b-button>
      </div>

    </div>

  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import axios from 'axios'
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

      formData: {
        emploerName: [],
        country: 'UA',
        city: [],
        numberStaff: [10, 350],
        balance: [100, 400],
      },

      formDataOptions: {
        emploerNameOption: [],
        countryOptions: [],
        cityOption: [],
      },

      min: 0,
      max: 1000,

      minBalance: 0,
      maxBalance: 1000,
    }
  },
  created() {
    axios
      .get('/assets/examlpesJson/finance-filter.json')
      .then(response => { this.formDataOptions = response.data })
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
    formDataSendToServer() {
      console.log(this.formData)
      // return axios.post('https://webhook.site/edb1ff5d-393a-4501-a25e-a86c6dc5eb45', {
      //   formData: this.formData,
      // }).then(response => console.log(response))
      //   .catch(error => console.log(error))
    },
  },
}
</script>
