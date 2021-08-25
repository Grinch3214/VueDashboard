<template>
  <div>
    <b-card>
      <p class="h4">Профиль работодателя</p>
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
          Сайт работодателя:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="siteEmployer"
            class="mb-0"
          >
            <b-form-input
              id="siteEmployer"
              v-model="profileInfo.siteEmployer"
              placeholder="Сайт"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Доп. домены работодателя:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="domenAdd"
            class="mb-0"
          >
            <b-form-input
              id="domenAdd"
              v-model="profileInfo.domenAdd"
              placeholder="Домен"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Страна:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-select
            v-model="country"
            :options="countryOptions"
            size="md"
            class="mt-1"
          />
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Главный офис:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group>
            <v-select
              v-model="city"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="cityOption"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Год основания:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="yearInput"
            class="mb-0"
          >
            <b-form-input
              id="yearInput"
              v-model="profileInfo.yearInput"
              placeholder="Почта"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Количество персонала:
        </div>
        <div class="col-sm-12 col-md-4">
          <vue-slider
            v-model="staff"
            :direction="direction"
            :min="min"
            :max="max"
          />
          <span>От {{ staff[0] }} до {{ staff[1] }}
          </span>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2 border-bottom pb-4">
        <div class="col-sm-12 col-md-3 h5">
          О работодателе:
        </div>
        <div class="col-sm-12 col-md-7">
          <b-form-textarea
            id="textarea-plaintext"
            :value="newText"
            rows="3"
          />
        </div>
      </div>

      <div class="mt-5 mb-2 text-center text-md-left">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          class="mr-1 mr-md-3 mb-1 mb-md-0"
        >
          Подтвердить работодателя
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          class="mr-1 mr-md-3 mb-1 mb-md-0"
        >
          Заблокировать работодателя
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BCard, BFormInput, BFormGroup, BFormSelect, BFormTextarea, BButton,
} from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
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
    VueSlider,
    BFormTextarea,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {

      staff: [100, 500],
      min: 1,
      max: 1000,
      dir: 'ltr',

      country: null,
      countryOptions: [
        { text: 'Украина' },
        { text: 'Россия' },
      ],

      city: { title: 'Харьков' },
      cityOption: [{ title: 'Харьков' }, { title: 'Киев' }, { title: 'Львов' }, { title: 'Одесса' }, { title: 'Днепр' }, { title: 'Запорожье' }, { title: 'Кривой Рог' }, { title: 'Николаев' }, { title: 'Мариуполь' }, { title: 'Винница' }, { title: 'Херсон' }, { title: 'Чернигов' }, { title: 'Полтава' }, { title: 'Чекассы' }, { title: 'Хмельницкий' }, { title: 'Черновцы' }, { title: 'Житомир' }, { title: 'Сумы' }, { title: 'Ровно' }, { title: 'Ивано-Франковск' }, { title: 'Тернополь' }, { title: 'Луцк' }, { title: 'Ужгород' }],

      newText: 'EPAM Systems — американская ИТ-компания, основанная в 1993 году. Крупнейший мировой производитель заказного программного обеспечения, специалист по консалтингу, резидент Белорусского парка высоких технологий. Штаб-квартира компании расположена в Ньютауне, штат Пенсильвания, а её отделения представлены более чем в 30 странах мира.',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
  setup() {
    const profileInfo = ref({
      dateRegister: '17.06.2021',
      postInput: 'castomermail@mail.com',
      siteEmployer: 'castomer.com',
      domenAdd: 'castomer',
      yearInput: '2004',
    })
    return {
      profileInfo,
    }
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
    @import '@core/scss/vue/libs/vue-slider.scss';
</style>

<style lang="scss" scoped>
    [dir] .mt-1, [dir] .my-1 {
    margin-top: 0rem !important;
}
[dir] .form-group {
    margin-bottom: 0rem;
}
</style>
