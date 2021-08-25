<template>
  <div>
    <b-card>
      <p class="h4 mb-2">
        Профиль соискателя</p>
      <p class="h5">
        {{ profileInfo.fullName }}</p>
      <avatar-selector />
      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Дата регистрации:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="dateRegister"
            class="mb-0"
          >
            <b-form-input
              id="dateRegister"
              v-model="profileInfo.dateRegister"
              placeholder="Дата"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Почта:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="postInput"
            class="mb-0"
          >
            <b-form-input
              id="postInput"
              v-model="profileInfo.postInput"
              placeholder="Почта"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Имя и фамилия:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="fullName"
            class="mb-0"
          >
            <b-form-input
              id="fullName"
              v-model="profileInfo.fullName"
              placeholder="Имя"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Пол:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group>
            <b-form-radio
              v-model="Selected"
              name="gender-user"
              value="A"
              class="d-inline-block mr-2"
            >
              Мужской
            </b-form-radio>
            <b-form-radio
              v-model="Selected"
              name="gender-user"
              value="B"
              class="d-inline-block mr-2"
            >
              Женский
            </b-form-radio>
            <b-form-radio
              v-model="Selected"
              name="gender-user"
              value="С"
              class="d-inline-block mr-2"
            >
              Другой
            </b-form-radio>
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Дата рождения:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group>
            <flat-pickr
              v-model="dateDefault"
              class="form-control"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Основной телефон:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="mainPhone"
            class="mb-0"
          >
            <b-form-input
              id="mainPhone"
              v-model="profileInfo.mainPhone"
              placeholder="Телефон"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Доп. телефон:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="secondPhone"
            class="mb-0"
          >
            <b-form-input
              id="secondPhone"
              v-model="profileInfo.secondPhone"
              placeholder="Доп. телефон"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Telegram:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="telegram"
            class="mb-0"
          >
            <b-form-input
              id="telegram"
              v-model="profileInfo.telegram"
              placeholder="@nickname"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Viber:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="viber"
            class="mb-0"
          >
            <b-form-input
              id="viber"
              v-model="profileInfo.viber"
              placeholder="Номер телефона"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Skype:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="skype"
            class="mb-0"
          >
            <b-form-input
              id="skype"
              v-model="profileInfo.skype"
              placeholder="nickname"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Должность:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="position"
            class="mb-0"
          >
            <b-form-input
              id="position"
              v-model="profileInfo.position"
              placeholder="Должность"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Уровень:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-select
            v-model="level"
            :options="levelOptions"
            size="md"
            class="mt-1"
          />
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Навык:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-select
            v-model="mainSkill"
            :options="mainSkillOptions"
            size="md"
            class="mt-1"
          />
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Доп. навыки:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group>
            <v-select
              v-model="secondSkill"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="secondSkillOption"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Язык:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-select
            v-model="language"
            :options="languageOptions"
            size="md"
            class="mt-1"
          />
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2 border-bottom pb-4">
        <div class="col-sm-12 col-md-3 h5"></div>
        <div class="col-sm-12 col-md-4">
          <b-form-select
            v-model="languageSkill"
            :options="languageSkillOptions"
            size="md"
            class="mt-1"
          />
        </div>
      </div>

      <div class="mt-2 mt-md-5 mb-2 text-center text-md-left">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          class="mr-3 mb-1"
        >
          Подтвердить кандидата
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          class="mr-3 mb-1"
        >
          Заблокировать кандидата
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BCard, BFormInput, BFormGroup, BFormSelect, BButton, BFormRadio,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import AvatarSelector from '../components/AvatarSelector.vue'

export default {
  components: {
    BCard,
    AvatarSelector,
    BFormGroup,
    BFormInput,
    BFormSelect,
    vSelect,
    BButton,
    BFormRadio,
    flatPickr,
  },
  directives: {
    Ripple,
  },
  data() {
    return {

      dateDefault: '1990.10.23',

      Selected: 'A',

      level: 'junior',
      levelOptions: [
        { value: 'trainee', text: 'Trainee' },
        { value: 'junior', text: 'Junior' },
        { value: 'middle', text: 'Middle' },
        { value: 'senior', text: 'Senior' },
      ],

      mainSkill: 'javascript',
      mainSkillOptions: [
        { value: 'javascript', text: 'JavaScript' },
        { value: 'java', text: 'Java' },
        { value: 'c++', text: 'C++' },
        { value: 'php', text: 'PHP' },
        { value: 'markup', text: 'HTML/CSS' },
      ],

      secondSkill: [{ title: 'Node.js' }, { title: 'Vue.js' }],
      secondSkillOption: [{ title: 'Node.js' }, { title: 'React' }, { title: 'Angular' }, { title: 'Vue.js' }, { title: 'JQuery' }, { title: 'Backbone.js' }, { title: 'Ember.js' }, { title: 'Meteor' }, { title: 'Polymer' }, { title: 'Aurelia' }],

      language: 'en',
      languageOptions: [
        { value: 'en', text: 'Английский' },
        { value: 'ge', text: 'Немецкий' },
        { value: 'pu', text: 'Португальский' },
        { value: 'fr', text: 'Французкий' },
        { value: 'pl', text: 'Польский' },
      ],

      languageSkill: 'preinte',
      languageSkillOptions: [
        { value: 'elementary', text: 'Elementary' },
        { value: 'preinte', text: 'Pre-Inretmediate' },
        { value: 'inte', text: 'Inretmediate' },
        { value: 'upper', text: 'Upper Inretmediate' },
        { value: 'advanced', text: 'Advanced' },
      ],
    }
  },
  setup() {
    const profileInfo = ref({
      dateRegister: '17.06.2021',
      postInput: 'castomermail@mail.com',
      fullName: 'Иван Иванов',
      mainPhone: '+38 063 562 8743',
      secondPhone: '+38 063 562 8743',
      telegram: '@angryCat',
      viber: '+38 063 562 8743',
      skype: 'angryCat',
      position: 'Developer',
    })
    return {
      profileInfo,
    }
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
    @import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>

<style lang="scss" scoped>
    [dir] .mt-1, [dir] .my-1 {
    margin-top: 0rem !important;
}
[dir] .form-group {
    margin-bottom: 0rem;
}
</style>
