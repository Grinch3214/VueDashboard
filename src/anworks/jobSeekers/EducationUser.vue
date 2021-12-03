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
            v-model="formData.country"
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
            v-model="formData.city"
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
            v-model="formData.institute"
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
            v-model="formData.specialty"
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
            v-model="formData.degree"
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
            v-model="formData.month"
            :options="monthOptions"
            size="md"
            class="mt-1 col-3 mr-1"
          />
          <b-form-select
            v-model="formData.date"
            :options="dateOptions"
            size="md"
            class="mt-1 col-2 mr-50"
          /> _
          <b-form-select
            v-model="formData.toMonth"
            :options="monthOptions"
            size="md"
            class="mt-1 col-3 mr-1 ml-50"
          />
          <b-form-select
            v-model="formData.toDate"
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
            v-model="formData.studyNow"
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
            @click="sendTo"
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

      formData: {
        studyNow: 'studyNow',
        country: 'UA',
        city: 'Lviv',
        institute: 'Karazin',
        specialty: 'developer',
        degree: 'baclagan',
        month: 'Oct.',
        toMonth: 'Dec.',
        date: '2020',
        toDate: '2020',
      },

      countryOptions: [
        { value: 'UA', text: 'Украина' },
        { value: 'RU', text: 'Россия' },
      ],

      cityOptions: [
        { value: 'Kiev', text: 'Киев' },
        { value: 'Kharkiv', text: 'Харьков' },
        { value: 'Odesa', text: 'Одесса' },
        { value: 'Lviv', text: 'Львов' },
        { value: 'Poltava', text: 'Полтава' },
        { value: 'KrivoyRog', text: 'Кривой Рог' },
      ],

      instituteOptions: [
        { value: 'Karazin', text: 'ХНУ им.Каразина' },
        { value: 'ХНУВС', text: 'ХНУВС' },
        { value: 'ХИРЭ', text: 'ХИРЭ' },
        { value: 'ХНУВС', text: 'ХНУВС' },
        { value: 'ХИРЭ', text: 'ХИРЭ' },
        { value: 'ХНУВС', text: 'ХНУВС' },
      ],

      specialtyOptions: [
        { value: 'developer', text: 'Программист' },
        { value: 'build-man', text: 'Строитель' },
      ],

      degreeOptions: [
        { value: 'magistr', text: 'Магистр' }, { value: 'baclagan', text: 'Бакалавр' }, { value: 'specialist', text: 'Специалист' },
      ],

      monthOptions: [
        { value: 'Jan.', text: 'Январь' }, { value: 'Feb.', text: 'Февраль' }, { value: 'Mar.', text: 'Март' }, { value: 'Apr.', text: 'Апрель' }, { value: 'May', text: 'Май' }, { value: 'June', text: 'Июнь' }, { value: 'July', text: 'Июль' }, { value: 'Aug.', text: 'Август' }, { value: 'Sept.', text: 'Сентрябрь' }, { value: 'Oct.', text: 'Октябрь' }, { value: 'Nov.', text: 'Ноябрь' }, { value: 'Dec.', text: 'Декабрь' },
      ],

      dateOptions: [
        { value: '2005', text: 2005 }, { value: '2006', text: 2006 }, { value: '2007', text: 2007 }, { value: '2008', text: 2008 }, { value: '2009', text: 2009 }, { value: '2010', text: 2010 }, { value: '2011', text: 2011 }, { value: '2012', text: 2012 }, { value: '2013', text: 2013 }, { value: '2014', text: 2014 }, { value: '2015', text: 2015 }, { value: '2016', text: 2016 }, { value: '2017', text: 2017 }, { value: '2018', text: 2018 }, { value: '2019', text: 2019 }, { value: '2020', text: 2020 }, { value: '2021', text: 2021 },
      ],
    }
  },
  methods: {
    sendTo() {
      console.log(this.formData)
    },
  },
}
</script>
