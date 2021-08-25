<template>
  <div>
    <b-form
      @submit.prevent
    >
      <b-row class="align-items-center">

        <h2 class="col-12 mb-3">
          Локация</h2>

        <b-col lg="3">
          <p class="h5 mt-1">
            Страна проживания:</p>
        </b-col>
        <b-col lg="7">
          <b-form-select
            v-model="country"
            :options="countryOptions"
            size="md"
            class="mt-1"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-1">
            Город проживания:</p>
        </b-col>
        <b-col lg="7">
          <b-form-select
            v-model="cityLife"
            :options="cityLifeOptions"
            size="md"
            class="mt-1"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-1">
            Переезд в Украине:</p>
        </b-col>
        <b-col lg="7">
          <b-form-checkbox
            v-model="travelUa"
            value="travelUa"
            class="mt-1"
          >
            <span class="small">Готов переехать</span>
          </b-form-checkbox>
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-1">
            Переезд в:</p>
        </b-col>
        <b-col lg="7">
          <b-form-select
            v-model="cityIn"
            :options="cityInOptions"
            size="md"
            class="mt-1"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-1">
            Переезд заграницу:</p>
        </b-col>
        <b-col lg="7">
          <b-form-checkbox
            v-model="travelAbroad"
            value="travelAbroad"
            class="mt-1"
          >
            <span class="small">Готов переехать</span>
          </b-form-checkbox>
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-1">
            Переезд в:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group>
            <v-select
              v-model="inAbroadCountry"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="inAbroadCountryOption"
              class="mt-1"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-1">
            Вид занятости:</p>
        </b-col>
        <b-col lg="7">
          <b-form-checkbox
            v-model="typeJob"
            value="fullWork"
            class="mt-1"
          >
            <span class="small">Полная занятость</span>
          </b-form-checkbox>
        </b-col>
        <b-col
          lg="7"
          offset-lg="3"
        >
          <b-form-checkbox
            v-model="typeJob"
            value="notFullWork"
            class="mt-1"
          >
            <span class="small">Неполная занятость</span>
          </b-form-checkbox>
        </b-col>
        <b-col
          lg="7"
          offset-lg="3"
        >
          <b-form-checkbox
            v-model="typeJob"
            value="farWork"
            class="mt-1"
          >
            <span class="small">Удалённая работа</span>
          </b-form-checkbox>
        </b-col>
        <b-col
          lg="7"
          offset-lg="3"
        >
          <b-form-checkbox
            v-model="typeJob"
            value="trainyWork"
            class="mt-1"
          >
            <span class="small">Стажировка</span>
          </b-form-checkbox>
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-1">
            Нежелательный <br> работодатель:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group>
            <v-select
              v-model="badEmployer"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="badEmployerOption"
              class="mt-1"
            />
          </b-form-group>
        </b-col>

        <b-col
          lg="9"
          offset-lg="3"
          class="mt-4"
        >
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type=""
            variant="primary"
            class="mr-1"
          >
            Сохранить изменения
          </b-button>
        </b-col> <!-- Кнопки для формы -->

      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BFormCheckbox, BForm, BButton, BCol, BFormGroup, BRow, BFormSelect,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'

export default {
  components: {
    BFormCheckbox,
    BForm,
    BButton,
    BCol,
    BFormGroup,
    BRow,
    vSelect,
    BFormSelect,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      selected: ['B', 'C'],
      travelUa: 'travelUa',
      travelAbroad: 'travelAbroad',
      typeJob: ['notFullWork', 'trainyWork'],

      country: null,
      countryOptions: [
        { value: null, text: 'Украина' },
        { text: 'Россия' },
      ],

      cityLife: null,
      cityLifeOptions: [
        { value: null, text: 'Киев' },
        { text: 'Харьков' },
        { text: 'Одесса' },
        { text: 'Львов' },
        { text: 'Полтава' },
        { text: 'Кривой Рог' },
      ],

      cityIn: null,
      cityInOptions: [
        { value: null, text: 'Харьков' },
        { text: 'Киев' },
        { text: 'Одесса' },
        { text: 'Львов' },
        { text: 'Полтава' },
        { text: 'Кривой Рог' },
      ],

      inAbroadCountry: [{ title: 'Германия' }, { title: 'Нидерланды' }],
      inAbroadCountryOption: [{ title: 'США' }, { title: 'Англия' }, { title: 'Франция' }, { title: 'Канада' }, { title: 'Мухосранск' }, { title: 'Германия' }, { title: 'Нидерланды' }],

      badEmployer: [{ title: 'Epam' }],
      badEmployerOption: [{ title: 'NIX Solution' }, { title: 'Epam' }, { title: 'GlobalIT' }, { title: 'Sirs' }, { title: 'Google' }, { title: 'Yandex' }, { title: 'GitLab' }],

      text: 'EPAM Systems — американская ИТ-компания, основанная в 1993 году. Крупнейший мировой производитель заказного программного обеспечения, специалист по консалтингу, резидент Белорусского парка высоких технологий. Штаб-квартира компании расположена в Ньютауне, штат Пенсильвания, а её отделения представлены более чем в 30 странах мира',
    }
  },
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-select.scss';
</style>
