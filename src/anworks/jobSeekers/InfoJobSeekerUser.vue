<template>
  <div>
    <b-form
      class="mt-3"
      @submit.prevent
    >
      <b-row class="align-items-center">

        <b-col lg="3">
          <p class="h5 mb-1">
            Дата регистрации:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="startDate"
          >
            <b-form-input
              id="startDate"
              v-model="userInfo.startDate"
              placeholder="startDate"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Почта:
          </p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="post"
          >
            <b-form-input
              id="post"
              v-model="userInfo.post"
              placeholder="Email"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Статус:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group>
            <v-select
              v-model="userStatus"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="userStatusOption"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Канал привлечения:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group>
            <v-select
              v-model="attraction"
              placeholder="Способ привлечения"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="attractionOption"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Имя и фамилия:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="mcFirstName"
          >
            <b-form-input
              id="mcFirstName"
              v-model="userInfo.mcFirstName"
              placeholder="mcFirstName"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Пол:</p>
        </b-col>
        <b-col lg="7">
          <p
            class="mb-50 d-none d-lg-block"
            style="font-size: 0.857rem;"
          >Пол</p>
          <b-form-group>
            <b-form-radio
              v-model="Selected"
              name="gender-user"
              value="A"
              class="d-inline-block mr-2 mb-1"
            >
              Мужской
            </b-form-radio>
            <b-form-radio
              v-model="Selected"
              name="gender-user"
              value="B"
              class="d-inline-block mr-2 mb-1"
            >
              Женский
            </b-form-radio>
            <b-form-radio
              v-model="Selected"
              name="gender-user"
              value="С"
              class="d-inline-block mr-2 mb-1"
            >
              Другой
            </b-form-radio>
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Дата рождения:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="mc-date"
          >
            <b-form-input
              id="mc-date"
              v-model="userInfo.dop"
              placeholder="dop"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Основной телефон:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="mainNumber"
          >
            <b-form-input
              id="mainNumber"
              v-model="userInfo.mainNumber"
              placeholder="mainNumber"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Доп. телефон:</p>
        </b-col>
        <b-col lg="7">
          <form-search-repeat />
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Telegram:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="telegram-n"
          >
            <b-form-input
              id="telegram-n"
              v-model="userInfo.telegram"
              placeholder="Telegram"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Viber:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="viber-n"
          >
            <b-form-input
              id="viber-n"
              v-model="userInfo.viber"
              placeholder="Viber"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Skype:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="skype-n"
          >
            <b-form-input
              id="skype-n"
              v-model="userInfo.skype"
              placeholder="Skype"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Linkedin:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="linkedin-n"
          >
            <b-form-input
              id="linkedin-n"
              v-model="userInfo.linkedin"
              placeholder="Linkedin"
            />
          </b-form-group>
        </b-col>

      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormRadio, BForm,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import { ref } from '@vue/composition-api'
import FormSearchRepeat from '@/anworks/components/FormSearchRepeat.vue'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormRadio,
    BForm,
    vSelect,
    FormSearchRepeat,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      Selected: 'B',

      userStatus: [{ title: 'Подтверждён' }, { title: 'На модерации' }],
      userStatusOption: [{ title: 'На модерации' }, { title: 'Подтверждён' }, { title: 'В рейтинге' }, { title: 'Нанят' }, { title: 'Не нанят' }, { title: 'Нанят не через сервис' }],

      attraction: { title: 'Instagram' },
      attractionOption: [{ title: 'Instagram' }, { title: 'Google' }, { title: 'Linkedin' }, { title: 'An.Works' }, { title: 'Telegram' }],

    }
  },
  setup() {
    const userInfo = ref({
      mcFirstName: 'Мария Иванова',
      dop: '08.06.1997',
      startDate: '12.05.2021',
      post: 'emailapplicant@mail.com',
      mainNumber: '+380991005010',
      telegram: '@telega',
      viber: '+380991005010',
      skype: 'nickname',
      linkedin: 'Maria Ivanova',
    })
    return {
      userInfo,
    }
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
</style>

<style lang="scss" scoped>
    .input__text{
        color: #5e5873;
        font-size: 0.857rem;
        margin-bottom: 0.2857rem;
        display: block;
    }
</style>
