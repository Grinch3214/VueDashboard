<template>
  <div>
    <b-form
      @submit.prevent
    >
      <b-row class="align-items-center">

        <h2 class="col-12 mb-3">
          Опыт работы</h2>

        <b-col
          sm="12"
          class="d-flex mb-4"
        > <b-form-checkbox
            v-model="workSkill.selected"
            value="A"
            class="mr-1"
          >
            В сфере IT
          </b-form-checkbox>
          <b-form-checkbox
            v-model="workSkill.selected"
            value="B"
          >
            Фриланс
          </b-form-checkbox>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Должность:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="position"
          >
            <b-form-input
              id="position"
              v-model="workSkill.position"
              placeholder="Должность"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Основной навык:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="mainSkill"
          >
            <b-form-input
              id="mainSkill"
              v-model="workSkill.mainSkill"
              placeholder="Основной навык"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Доп. навык:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group>
            <v-select
              v-model="workSkill.secondSkill"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="secondSkillOption"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Страна:</p>
        </b-col>
        <b-col lg="7">
          <b-form-select
            v-model="workSkill.country"
            :options="countryOptions"
            size="md"
            class="mt-1"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Город:</p>
        </b-col>
        <b-col lg="7">
          <b-form-select
            v-model="workSkill.city"
            :options="cityOptions"
            size="md"
            class="mt-1"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Компания:</p>
        </b-col>
        <b-col
          lg="7"
          class="mt-1"
        >
          <b-form-group
            label-for="companyStart"
          >
            <b-form-input
              id="companyStart"
              v-model="workSkill.companyStart"
              placeholder="Компания"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Период работы:</p>
        </b-col>
        <b-col
          lg="9"
          class="row align-items-center ml-0 mb-1"
        >
          <b-form-select
            v-model="workSkill.month"
            :options="monthOptions"
            size="md"
            class="mt-1 col-3 mr-1"
          />
          <b-form-select
            v-model="workSkill.date"
            :options="dateOptions"
            size="md"
            class="mt-1 col-2 mr-50"
          /> _
          <b-form-select
            v-model="workSkill.toMonth"
            :options="monthOptions"
            size="md"
            class="mt-1 col-3 mr-1 ml-50"
          />
          <b-form-select
            v-model="workSkill.toDate"
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
            v-model="workSkill.workNow"
            value="workNow"
          >
            Работаю сейчас
          </b-form-checkbox>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Описание:</p>
        </b-col>
        <b-col lg="9">
          <b-form-textarea
            id="textarea-plaintext"
            :value="workSkill.text"
            rows="4"
            class="mt-1"
          />
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
            @click="sendToServer"
          >
            Сохранить изменения
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            variant="outline-secondary"
          >
            Отменить
          </b-button>
        </b-col> <!-- Кнопки для формы -->

      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BFormCheckbox, BForm, BButton, BCol, BFormGroup, BFormInput, BRow, BFormSelect, BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'

export default {
  components: {
    BFormCheckbox,
    BForm,
    BButton,
    BCol,
    BFormGroup,
    BFormInput,
    BRow,
    vSelect,
    BFormSelect,
    BFormTextarea,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
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

      secondSkillOption: [{ title: 'Angular' }, { title: 'Vue.js' }, { title: 'React' }, { title: 'jQuery' }, { title: 'Backbone.js' }, { title: 'Node.js' }, { title: 'Ember.js' }, { title: 'Meteor' }, { title: 'Polymer' }],

      monthOptions: [
        { value: 'Jan.', text: 'Январь' }, { value: 'Feb.', text: 'Февраль' }, { value: 'Mar.', text: 'Март' }, { value: 'Apr.', text: 'Апрель' }, { value: 'May', text: 'Май' }, { value: 'June', text: 'Июнь' }, { value: 'July', text: 'Июль' }, { value: 'Aug.', text: 'Август' }, { value: 'Sept.', text: 'Сентрябрь' }, { value: 'Oct.', text: 'Октябрь' }, { value: 'Nov.', text: 'Ноябрь' }, { value: 'Dec.', text: 'Декабрь' },
      ],

      dateOptions: [
        { value: '2005', text: 2005 }, { value: '2006', text: 2006 }, { value: '2007', text: 2007 }, { value: '2008', text: 2008 }, { value: '2009', text: 2009 }, { value: '2010', text: 2010 }, { value: '2011', text: 2011 }, { value: '2012', text: 2012 }, { value: '2013', text: 2013 }, { value: '2014', text: 2014 }, { value: '2015', text: 2015 }, { value: '2016', text: 2016 }, { value: '2017', text: 2017 }, { value: '2018', text: 2018 }, { value: '2019', text: 2019 }, { value: '2020', text: 2020 }, { value: '2021', text: 2021 },
      ],
    }
  },
  setup() {
    const workSkill = ref({
      position: 'castomermail@mail.com',
      mainSkill: 'castomer.com',
      companyStart: '2004',
      selected: 'A',
      secondSkill: [{ title: 'Node.js' }],
      country: 'UA',
      city: 'Kharkiv',
      month: 'Oct.',
      toMonth: 'Feb.',
      date: '2020',
      toDate: '2021',
      workNow: 'workNow',
      text: 'EPAM Systems — американская ИТ-компания, основанная в 1993 году. Крупнейший мировой производитель заказного программного обеспечения, специалист по консалтингу, резидент Белорусского парка высоких технологий. Штаб-квартира компании расположена в Ньютауне, штат Пенсильвания, а её отделения представлены более чем в 30 странах мира',
    })
    return {
      workSkill,
    }
  },
  methods: {
    sendToServer() {
      console.log(this.workSkill)
    },
  },
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-select.scss';
</style>
