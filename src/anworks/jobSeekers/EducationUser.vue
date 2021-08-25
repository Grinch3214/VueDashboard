<template>
  <div>
    <b-form
      @submit.prevent
    >
      <b-row class="align-items-center">

        <h2 class="col-12 mb-3">
          Образование</h2>

        <b-col lg="3">
          <p class="h5 mt-1 mb-0">
            Страна:</p>
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
          <p class="h5 mt-1 mb-0">
            Город:</p>
        </b-col>
        <b-col lg="7">
          <b-form-select
            v-model="city"
            :options="cityOptions"
            size="md"
            class="mt-1"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-1 mb-0">
            Учебное заведение:</p>
        </b-col>
        <b-col
          lg="7"
          class="mt-1"
        >
          <b-form-select
            v-model="institute"
            :options="instituteOptions"
            size="md"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-1 mb-0">
            Специальность:</p>
        </b-col>
        <b-col
          lg="7"
          class="mt-1"
        >
          <b-form-select
            v-model="specialty"
            :options="specialtyOptions"
            size="md"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-1 mb-0">
            Степень:</p>
        </b-col>
        <b-col
          lg="7"
          class="mt-1"
        >
          <b-form-select
            v-model="degree"
            :options="degreeOptions"
            size="md"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-1 mb-1">
            Период работы:</p>
        </b-col>
        <b-col
          lg="9"
          class="row align-items-center ml-0 mb-1"
        >
          <b-form-select
            v-model="month"
            :options="monthOptions"
            size="md"
            class="mt-1 col-3 mr-1"
          />
          <b-form-select
            v-model="date"
            :options="dateOptions"
            size="md"
            class="mt-1 col-2 mr-50"
          /> _
          <b-form-select
            v-model="month"
            :options="monthOptions"
            size="md"
            class="mt-1 col-3 mr-1 ml-50"
          />
          <b-form-select
            v-model="date"
            :options="dateOptions"
            size="md"
            class="mt-1 col-2"
          />
        </b-col>
        <b-col
          lg="7"
          offset-lg="3"
          class="mt-1"
        >
          <b-form-checkbox
            v-model="studyNow"
            value="studyNow"
          >
            Еще учусь
          </b-form-checkbox>
        </b-col>

        <b-col
          sm="12"
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
  BFormCheckbox, BForm, BButton, BCol, BRow, BFormSelect,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BFormCheckbox,
    BForm,
    BButton,
    BCol,
    BRow,
    BFormSelect,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      selected: ['B', 'C'],
      studyNow: 'studyNow',

      country: null,
      countryOptions: [
        { value: null, text: 'Украина' },
        { text: 'Россия' },
      ],

      city: null,
      cityOptions: [
        { value: null, text: 'Киев' },
        { text: 'Харьков' },
        { text: 'Одесса' },
        { text: 'Львов' },
        { text: 'Полтава' },
        { text: 'Кривой Рог' },
      ],

      institute: null,
      instituteOptions: [
        { value: null, text: 'ХНУ им.Каразина' },
        { text: 'ХНУВС' },
        { text: 'ХИРЭ' },
        { text: 'ХНУВС' },
        { text: 'ХИРЭ' },
        { text: 'ХНУВС' },
      ],

      specialty: null,
      specialtyOptions: [
        { value: null, text: 'Программист' },
        { text: 'Строитель' },
      ],

      degree: null,
      degreeOptions: [
        { value: null, text: 'Магистр' }, { text: 'Бакалавр' }, { text: 'Специалист' },
      ],

      month: null,
      monthOptions: [
        { value: null, text: 'Январь' }, { text: 'Февраль' }, { text: 'Март' }, { text: 'Апрель' }, { text: 'Май' }, { text: 'Июнь' }, { text: 'Июль' }, { text: 'Август' }, { text: 'Сентрябрь' }, { text: 'Октябрь' }, { text: 'Ноябрь' }, { text: 'Декабрь' },
      ],

      date: null,
      dateOptions: [
        { text: 2020 }, { text: 2006 }, { text: 2007 }, { text: 2008 }, { text: 2009 }, { text: 2010 }, { text: 2011 }, { text: 2012 }, { text: 2013 }, { text: 2014 }, { text: 2015 }, { text: 2016 }, { text: 2017 }, { text: 2018 }, { text: 2019 }, { text: 2020 }, { text: 2021 },
      ],
    }
  },
}
</script>
