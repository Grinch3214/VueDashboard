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
            v-model="selected"
            value="A"
            class="mr-1"
          >
            <slot name="companeSkill" />
          </b-form-checkbox>
          <b-form-checkbox
            v-model="selected"
            value="B"
          >
            <slot name="FreelanceSkill" />
          </b-form-checkbox>
        </b-col> <!-- Чекбоксы -->

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
              v-model="secondSkill"
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
            v-model="country"
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
            v-model="city"
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
            v-model="workNow"
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
            :value="text"
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
      selected: ['B', 'C'],
      workNow: 'workNow',

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

      secondSkill: [{ title: 'Node.js' }],
      secondSkillOption: [{ title: 'Angular' }, { title: 'Vue.js' }, { title: 'React' }, { title: 'jQuery' }, { title: 'Backbone.js' }, { title: 'Node.js' }, { title: 'Ember.js' }, { title: 'Meteor' }, { title: 'Polymer' }],

      month: null,
      monthOptions: [
        { value: null, text: 'Январь' }, { text: 'Февраль' }, { text: 'Март' }, { text: 'Апрель' }, { text: 'Май' }, { text: 'Июнь' }, { text: 'Июль' }, { text: 'Август' }, { text: 'Сентрябрь' }, { text: 'Октябрь' }, { text: 'Ноябрь' }, { text: 'Декабрь' },
      ],

      date: null,
      dateOptions: [
        { text: 2005 }, { text: 2006 }, { text: 2007 }, { text: 2008 }, { text: 2009 }, { text: 2010 }, { text: 2011 }, { text: 2012 }, { text: 2013 }, { text: 2014 }, { text: 2015 }, { text: 2016 }, { text: 2017 }, { text: 2018 }, { text: 2019 }, { text: 2020 }, { text: 2021 },
      ],
      text: 'EPAM Systems — американская ИТ-компания, основанная в 1993 году. Крупнейший мировой производитель заказного программного обеспечения, специалист по консалтингу, резидент Белорусского парка высоких технологий. Штаб-квартира компании расположена в Ньютауне, штат Пенсильвания, а её отделения представлены более чем в 30 странах мира',
    }
  },
  setup() {
    const workSkill = ref({
      position: 'castomermail@mail.com',
      mainSkill: 'castomer.com',
      companyStart: '2004',
    })
    return {
      workSkill,
    }
  },
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-select.scss';
</style>
