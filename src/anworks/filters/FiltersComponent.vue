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
        v-model="mainSkill"
        class="pb-1 border-bottom"
        :options="skillOption"
        :placeholder="skillPlaceholder"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-2">
        Уровень</p>
      <filters-radio-button
        v-model="level"
        class="pb-1 border-bottom"
        :options="levelOptions"
        @input="onInputSelect"
      />

      <p class="h6 mt-1">Заявленные навыки
      </p>
      <filters-select-badge
        v-model="extraSkill"
        class="pb-1 border-bottom"
        :options="extraSkillOptions"
        :placeholder="extraPlaceholder"
        @input="onInputSelect"
      />

      <p class="h6 mt-1">Языки
      </p>
      <filters-select-badge
        v-model="language"
        class="pb-1 border-bottom"
        :options="languageOption"
        :placeholder="languagePlaceholder"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-3">Заработная плата: от {{ payment[0] }} до {{ payment[1] }}$
      </p>
      <filters-range-component
        v-model="payment"
        class="pb-1 border-bottom"
        :min="min"
        :max="max"
        @change="onInputSelect"
      />

      <p class="h6 my-1">
        Вид занятости
      </p>
      <filters-check-box
        v-model="busyness"
        class="pb-1 border-bottom"
        :options="busynessOption"
        @input="onInputSelect"
      />

      <h4 class="mt-1">
        Локация</h4>
      <p class="h6 mt-1">
        Страна
      </p>
      <filters-select
        v-model="country"
        :options="countryOptions"
        @input="onInputSelect"
      />
      <p class="h6 mt-1">
        Город
      </p>
      <filters-select-badge
        v-model="city"
        :options="cityOption"
        :placeholder="cityPlaceholder"
        @input="onInputSelect"
      />
      <filters-check-box
        v-model="checkCity"
        class="pb-1 border-bottom"
        :options="checkCityOption"
        @input="onInputSelect"
      />

      <p class="h6 mb-3 mt-1">
        Опыт работы в IT, от {{ itSkill[0] }} до {{ itSkill[1] }} месяцев</p>
      <filters-range-component
        v-model="itSkill"
        class="pb-1 border-bottom"
        :min="minimum"
        :max="maximum"
        @change="onInputSelect"
      />

      <p class="h6 mt-1 mb-2">
        Высшее образование</p>
      <filters-radio-button
        v-model="education"
        class="pb-1 border-bottom"
        :options="educationOptions"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-2">
        Дополнительное образование</p>
      <filters-radio-button
        v-model="secondEducation"
        class="pb-1 border-bottom"
        :options="secondEducationOptions"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-2">
        Пол</p>
      <filters-radio-button
        v-model="sex"
        class="pb-1 border-bottom"
        :options="sexOptions"
        @input="onInputSelect"
      />

      <p class="h6 mt-1 mb-3">
        Возраст, лет от {{ age[0] }} до {{ age[1] }}</p>
      <filters-range-component
        v-model="age"
        class="pb-1 border-bottom"
        :min="minAge"
        :max="maxAge"
        @change="onInputSelect"
      />

      <p class="h6 mt-1 mb-2">
        Активность</p>
      <filters-radio-button
        v-model="activity"
        class="pb-1 border-bottom"
        :options="activityOptions"
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
      mainSkill: [],
      skillOption: [{ title: 'JavaScript' }, { title: 'HTML' }, { title: 'CSS' }, { title: 'Java' }, { title: 'C++' }, { title: 'Pyton' }, { title: 'PHP' }],
      skillPlaceholder: 'Навык',

      language: [],
      languageOption: [{ title: 'Английский' }, { title: 'Русский' }, { title: 'Украинский' }, { title: 'Немецкий' }],
      languagePlaceholder: 'Иностранные языки',

      extraSkill: [],
      extraSkillOptions: [{ title: 'Vue' }, { title: 'React' }, { title: 'Angular' }, { title: 'JQuery' }, { title: 'Bootstrap' }],
      extraPlaceholder: 'Дополнительные навыки',

      payment: [200, 350],
      min: 0,
      max: 2000,

      itSkill: [1, 12],
      minimum: 0,
      maximum: 36,

      level: 'middle',
      levelOptions: [
        { item: 'middle', name: 'Middle' },
        { item: 'junior', name: 'Junior' },
        { item: 'trainee', name: 'Trainee' },
      ],

      busyness: ['fullTime', 'internship'],
      busynessOption: [
        { item: 'fullTime', name: 'Полная' },
        { item: 'undertime', name: 'Неполная' },
        { item: 'remoteWork', name: 'Удалённая работа' },
        { item: 'internship', name: 'Стажировка' },
      ],

      education: 'education-true',
      educationOptions: [
        { item: 'education-true', name: 'Есть' },
        { item: 'education-false', name: 'Нет' },
      ],

      secondEducation: 'second-education-true',
      secondEducationOptions: [
        { item: 'second-education-true', name: 'Есть' },
        { item: 'second-education-false', name: 'Нет' },
      ],

      activity: 'activity-true',
      activityOptions: [
        { item: 'activity-true', name: 'Активен' },
        { item: 'activity-false', name: 'Заблокирован' },
      ],

      sex: 'sex-true',
      sexOptions: [
        { item: 'sex-true', name: 'Мужской' },
        { item: 'sex-false', name: 'Женский' },
      ],

      age: [18, 30],
      minAge: 18,
      maxAge: 99,

      ratingStatus: ['waiting', 'rating'],
      ratingStatusOption: [
        { item: 'waiting', name: 'В списке ожидания' },
        { item: 'rating', name: 'В рейтинге' },
        { item: 'create', name: 'Создан' },
        { item: 'neutral', name: 'Нейтрален' },
      ],

      attraction: [],
      attractionOption: [{ title: 'Instagram' }, { title: 'Google' }, { title: 'Linkedin' }, { title: 'An.Works' }, { title: 'Telegram' }],
      attractionPlaceholder: 'Способ привлечения',

      country: 'UA',
      countryOptions: [{ value: 'UA', text: 'Украина' }, { value: 'RU', text: 'Россия' }],

      city: [],
      cityOption: [{ title: 'Харьков' }, { title: 'Киев' }, { title: 'Львов' }, { title: 'Одесса' }, { title: 'Днепр' }, { title: 'Запорожье' }, { title: 'Кривой Рог' }, { title: 'Николаев' }, { title: 'Мариуполь' }, { title: 'Винница' }, { title: 'Херсон' }, { title: 'Чернигов' }, { title: 'Полтава' }, { title: 'Чекассы' }, { title: 'Хмельницкий' }, { title: 'Черновцы' }, { title: 'Житомир' }, { title: 'Сумы' }, { title: 'Ровно' }, { title: 'Ивано-Франковск' }, { title: 'Тернополь' }, { title: 'Луцк' }, { title: 'Ужгород' }],
      cityPlaceholder: 'Город',

      checkCity: ['true'],
      checkCityOption: [{ item: 'true', name: 'Готов к переезду' }],
    }
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
  },
}
</script>
