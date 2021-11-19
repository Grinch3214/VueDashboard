<template>
  <div
    :class="{active: isActive}"
    class="col-xl-4 custom-filters"
  >

    <div
      :class="{active: isActive}"
      class="admins pointer arrow-static"
      @click="isActive = !isActive"
    >
      <p class="text-uppercase pointer pl-1">Фильтры
      </p>
    </div>

    <div
      class="card pl-1 pr-1 toggle__filters"
      :class="{active: isActive}"
    >

      <filters-save-main />

      <p class="h6 mt-1">Основной навык
      </p>
      <filters-select-badge
        v-model="formData.mainSkill"
        class="pb-1 border-bottom"
        :options="formDataOptions.skillOption"
        placeholder="Навык"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-2">
        Уровень</p>
      <filters-radio-button
        v-model="formData.level"
        class="pb-1 border-bottom"
        :options="formDataOptions.levelOptions"
        @input="onInputSelect"
      />

      <p class="h6 mt-1">Заявленные навыки
      </p>
      <filters-select-badge
        v-model="formData.extraSkill"
        class="pb-1 border-bottom"
        :options="formDataOptions.extraSkillOptions"
        placeholder="Дополнительные навыки"
        @input="onInputSelect"
      />

      <p class="h6 mt-1">Языки
      </p>
      <filters-select-badge
        v-model="formData.language"
        class="pb-1 border-bottom"
        :options="formDataOptions.languageOption"
        placeholder="Иностранные языки"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-3">Заработная плата: от {{ formData.payment[0] }} до {{ formData.payment[1] }}$
      </p>
      <filters-range-component
        v-model="formData.payment"
        class="pb-1 border-bottom"
        :min="min"
        :max="max"
        @change="onInputSelect"
      />

      <p class="h6 my-1">
        Вид занятости
      </p>
      <filters-check-box
        v-model="formData.busyness"
        class="pb-1 border-bottom"
        :options="formDataOptions.busynessOption"
        @input="onInputSelect"
      />

      <h4 class="mt-1">
        Локация</h4>
      <p class="h6 mt-1">
        Страна
      </p>
      <filters-select
        v-model="formData.country"
        :options="formDataOptions.countryOptions"
        @input="onInputSelect"
      />
      <p class="h6 mt-1">
        Город
      </p>
      <filters-select-badge
        v-model="formData.city"
        :options="formDataOptions.cityOption"
        placeholder="Город"
        @input="onInputSelect"
      />
      <filters-check-box
        v-model="formData.checkCity"
        class="pb-1 border-bottom"
        :options="formDataOptions.checkCityOption"
        @input="onInputSelect"
      />

      <p class="h6 mb-3 mt-1">
        Опыт работы в IT, от {{ formData.itSkill[0] }} до {{ formData.itSkill[1] }} месяцев</p>
      <filters-range-component
        v-model="formData.itSkill"
        class="pb-1 border-bottom"
        :min="minimum"
        :max="maximum"
        @change="onInputSelect"
      />

      <p class="h6 mt-1 mb-2">
        Высшее образование</p>
      <filters-radio-button
        v-model="formData.education"
        class="pb-1 border-bottom"
        :options="formDataOptions.educationOptions"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-2">
        Дополнительное образование</p>
      <filters-radio-button
        v-model="formData.secondEducation"
        class="pb-1 border-bottom"
        :options="formDataOptions.secondEducationOptions"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-2">
        Пол</p>
      <filters-radio-button
        v-model="formData.sex"
        class="pb-1 border-bottom"
        :options="formDataOptions.sexOptions"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-3">
        Возраст, лет от {{ formData.age[0] }} до {{ formData.age[1] }}</p>
      <filters-range-component
        v-model="formData.age"
        class="pb-1 border-bottom"
        :min="minAge"
        :max="maxAge"
        @change="onInputSelect"
      />

      <p class="h6 mt-1 mb-2">
        Активность</p>
      <filters-radio-button
        v-model="formData.activity"
        class="pb-1 border-bottom"
        :options="formDataOptions.activityOptions"
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
          @click="formDataTest()"
        >
          <feather-icon
            icon="PieChartIcon"
            class="mr-50"
          />
          <span class="align-middle">Применить фильтры</span>
        </b-button> <!--Очистить всё -->
      </div>

    </div>

  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import axios from 'axios'
import Ripple from 'vue-ripple-directive'
import FiltersSaveMain from './filtersComponents/FiltersSaveMain.vue'
import FiltersSelectBadge from './filtersComponents/FiltersSelectBadge.vue'
import FiltersRangeComponent from './filtersComponents/FiltersRangeComponent.vue'
import FiltersCheckBox from './filtersComponents/FiltersCheckBox.vue'
import FiltersRadioButton from './filtersComponents/FiltersRadioButton.vue'
import FiltersSelect from './filtersComponents/FiltersSelect.vue'

export default {
  components: {
    FiltersSaveMain,
    FiltersSelectBadge,
    FiltersRangeComponent,
    BButton,
    FiltersCheckBox,
    FiltersRadioButton,
    FiltersSelect,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isActive: false,

      formData: {
        mainSkill: [],
        language: [],
        extraSkill: [],
        payment: [200, 350],
        itSkill: [1, 12],
        level: 'middle',
        busyness: ['fullTime'],
        education: 'education-true',
        secondEducation: 'second-education-true',
        activity: 'activity-true',
        sex: 'sex-true',
        age: [18, 30],
        ratingStatus: ['rating'],
        attraction: [],
        country: 'UA',
        city: [],
        checkCity: ['true'],
      },

      formDataOptions: {
        skillOption: [],
        languageOption: [],
        extraSkillOptions: [],
        levelOptions: [],
        busynessOption: [],
        educationOptions: [],
        secondEducationOptions: [],
        sexOptions: [],
        activityOptions: [],
        ratingStatusOption: [],
        attractionOption: [],
        cityOption: [],
        countryOptions: [],
        checkCityOption: [],
      },

      min: 0,
      max: 2000,

      minimum: 0,
      maximum: 36,

      minAge: 18,
      maxAge: 99,
    }
  },
  created() {
    axios
      .get('/assets/examlpesJson/job-seekers-filter.json')
      .then(response => { this.formDataOptions = response.data })
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
    formDataTest() {
      console.log(this.formData)
      // return axios.post('https://ptsv2.com/t/orusa-1637250134/post', {
      //   formData: this.formData,
      // }).then(response => console.log(response))
      //   .catch(error => console.log(error))
    },
  },
}
</script>
