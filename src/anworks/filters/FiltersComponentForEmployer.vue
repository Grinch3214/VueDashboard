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

      <p class="h6 mt-1 mb-3">Количество персонала: от {{ formData.numberStaff[0] }} до {{ formData.numberStaff[1] }}
      </p>
      <filters-range-component
        v-model="formData.numberStaff"
        class="pb-1 border-bottom"
        :min="min"
        :max="max"
        @change="onInputSelect"
      />

      <p class="h6 mt-1">
        Страна найма:
      </p>
      <filters-select
        v-model="formData.country"
        class="pb-2 border-bottom"
        :options="formDataOptions.countryOptions"
        @input="onInputSelect"
      />
      <p class="h6 mt-1">
        Город найма:
      </p>
      <filters-select-badge
        v-model="formData.city"
        class="pb-1 border-bottom"
        :options="formDataOptions.cityOption"
        placeholder="Город"
        @input="onInputSelect"
      />

      <p class="h6 my-1">
        Статус
      </p>
      <filters-check-box
        v-model="formData.ratingStatus"
        class="pb-1 border-bottom"
        :options="formDataOptions.ratingStatusOption"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-2">
        Активность</p>
      <filters-radio-button
        v-model="formData.activity"
        class="pb-1 border-bottom"
        :options="formDataOptions.activityOptions"
        @input="onInputSelect"
      />

      <div class="pb-2 border-bottom">
        <p class="h6 mt-1">
          Год основания
        </p>
        <filters-select
          v-model="formData.startYear"
          class="col-4 pl-0"
          :options="formDataOptions.startYearOptions"
          @input="onInputSelect"
        />
      </div>

      <p class="h6 mt-1">Канал привлечения
      </p>
      <filters-select-badge
        v-model="formData.attraction"
        class="mb-3 pb-1"
        :options="formDataOptions.attractionOption"
        placeholder="Способ привлечения"
        @input="onInputSelect"
      />

      <div class="text-center pb-3">
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
import FiltersRangeComponent from './filtersComponents/FiltersRangeComponent.vue'
import FiltersSelect from './filtersComponents/FiltersSelect.vue'
import FiltersSelectBadge from './filtersComponents/FiltersSelectBadge.vue'
import FiltersCheckBox from './filtersComponents/FiltersCheckBox.vue'
import FiltersRadioButton from './filtersComponents/FiltersRadioButton.vue'

export default {
  components: {
    FiltersSaveMain,
    BButton,
    FiltersRangeComponent,
    FiltersSelect,
    FiltersSelectBadge,
    FiltersCheckBox,
    FiltersRadioButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isActive: false,

      formData: {
        country: 'UA',
        city: [],
        ratingStatus: ['waiting', 'rating'],
        activity: 'activity-true',
        startYear: '2019',
        attraction: [],
        numberStaff: [10, 350],
      },

      formDataOptions: {
        countryOptions: [],
        cityOption: [],
        ratingStatusOption: [],
        activityOptions: [],
        startYearOptions: [],
        attractionOption: [],
      },

      min: 0,
      max: 1000,
    }
  },
  created() {
    axios
      .get('/assets/examlpesJson/employer-filter.json')
      .then(response => { this.formDataOptions = response.data })
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
    formDataSendToServer() {
      console.log(this.formData)
      // return axios.post('http://jsonplaceholder.typicode.com/users/1/posts', {
      //   formData: this.formData,
      // }).then(response => console.log(response))
      //   .catch(error => console.log(error))
    },
  },
}
</script>
