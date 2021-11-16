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

      <p class="h6 mt-1 mb-3">Количество персонала: от {{ numberStaff[0] }} до {{ numberStaff[1] }}
      </p>
      <filters-range-component
        v-model="numberStaff"
        class="pb-1 border-bottom"
        :min="min"
        :max="max"
        @change="onInputSelect"
      />

      <p class="h6 mt-1">
        Страна найма:
      </p>
      <filters-select
        v-model="country"
        class="pb-2 border-bottom"
        :options="countryOptions"
        @input="onInputSelect"
      />
      <p class="h6 mt-1">
        Город найма:
      </p>
      <filters-select-badge
        v-model="city"
        class="pb-1 border-bottom"
        :options="cityOption"
        :placeholder="cityPlaceholder"
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

      <p class="h6 mt-1 mb-2">
        Активность</p>
      <filters-radio-button
        v-model="activity"
        class="pb-1 border-bottom"
        :options="activityOptions"
        @input="onInputSelect"
      />

      <div class="pb-2 border-bottom">
        <p class="h6 mt-1">
          Год основания
        </p>
        <filters-select
          v-model="startYear"
          class="col-4 pl-0"
          :options="startYearOptions"
          @input="onInputSelect"
        />
      </div>

      <p class="h6 mt-1">Канал привлечения
      </p>
      <filters-select-badge
        v-model="attraction"
        class="mb-3 pb-1"
        :options="attractionOption"
        :placeholder="attractionPlaceholder"
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

      numberStaff: [10, 350],
      min: 0,
      max: 1000,

      country: 'UA',
      countryOptions: [{ value: 'UA', text: 'Украина' }, { value: 'RU', text: 'Россия' }],

      city: [],
      cityOption: [{ title: 'Харьков' }, { title: 'Киев' }, { title: 'Львов' }, { title: 'Одесса' }, { title: 'Днепр' }, { title: 'Запорожье' }, { title: 'Кривой Рог' }, { title: 'Николаев' }, { title: 'Мариуполь' }, { title: 'Винница' }, { title: 'Херсон' }, { title: 'Чернигов' }, { title: 'Полтава' }, { title: 'Чекассы' }, { title: 'Хмельницкий' }, { title: 'Черновцы' }, { title: 'Житомир' }, { title: 'Сумы' }, { title: 'Ровно' }, { title: 'Ивано-Франковск' }, { title: 'Тернополь' }, { title: 'Луцк' }, { title: 'Ужгород' }],
      cityPlaceholder: 'Город',

      ratingStatus: ['waiting', 'rating'],
      ratingStatusOption: [
        { item: 'waiting', name: 'В списке ожидания' },
        { item: 'rating', name: 'В рейтинге' },
        { item: 'create', name: 'Создан' },
        { item: 'neutral', name: 'Нейтрален' },
      ],

      activity: 'activity-true',
      activityOptions: [
        { item: 'activity-true', name: 'Активен' },
        { item: 'activity-false', name: 'Заблокирован' },
      ],

      startYear: '2019',
      startYearOptions: [{ value: '2000', text: '2000' }, { value: '2001', text: '2001' }, { value: '2002', text: '2002' }, { value: '2003', text: '2003' }, { value: '2005', text: '2005' }, { value: '2006', text: '2006' }, { value: '2007', text: '2007' }, { value: '2008', text: '2008' }, { value: '2009', text: '2009' }, { value: '2010', text: '2010' }, { value: '2011', text: '2011' }, { value: '2012', text: '2012' }, { value: '2013', text: '2013' }, { value: '2014', text: '2014' }, { value: '2015', text: '2015' }, { value: '2016', text: '2016' }, { value: '2017', text: '2017' }, { value: '2018', text: '2018' }, { value: '2019', text: '2019' }, { value: '2020', text: '2020' }, { value: '2021', text: '2021' }],

      attraction: [],
      attractionOption: [{ title: 'Instagram' }, { title: 'Google' }, { title: 'Linkedin' }, { title: 'An.Works' }, { title: 'Telegram' }],
      attractionPlaceholder: 'Способ привлечения',
    }
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
  },
}
</script>
