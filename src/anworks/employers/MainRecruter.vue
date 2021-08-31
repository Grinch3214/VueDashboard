<template>
  <div>

    <!-- Form: Personal Info Form -->
    <b-form class="mt-1">
      <b-row class="mb-1 align-items-center">

        <b-col lg="3">
          <p class="h5 mb-1">
            Дата регистрации:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="startDateRecruter"
          >
            <b-form-input
              id="startDateRecruter"
              v-model="employerForRecruter.startDateRecruter"
              placeholder="Дата регистрации"
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
            label-for="postRecruter"
          >
            <b-form-input
              id="postRecruter"
              v-model="employerForRecruter.post"
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
              v-model="recruterStatus"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="recruterStatusOption"
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
              v-model="selectGender"
              name="gender-user"
              value="A"
              class="d-inline-block mr-2 mb-1"
            >
              Мужской
            </b-form-radio>
            <b-form-radio
              v-model="selectGender"
              name="gender-user"
              value="B"
              class="d-inline-block mr-2 mb-1"
            >
              Женский
            </b-form-radio>
            <b-form-radio
              v-model="selectGender"
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
            label-for="recruter-date"
          >
            <b-form-input
              id="recruter-date"
              v-model="employerForRecruter.dop"
              placeholder="Дата рождения"
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
              v-model="employerForRecruter.mainNumber"
              placeholder="mainNumber"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Доп. телефон:</p>
        </b-col>
        <b-col lg="7">
          <input-repeat />
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
              v-model="employerForRecruter.telegram"
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
              v-model="employerForRecruter.viber"
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
              v-model="employerForRecruter.skype"
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
              v-model="employerForRecruter.linkedin"
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
  BForm, BRow, BCol, BFormGroup, BFormInput, BFormRadio,
} from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'
import InputRepeat from '../components/InputRepeat.vue'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    vSelect,
    BFormRadio,
    InputRepeat,
  },
  data() {
    return {
      recruterStatus: [{ title: 'Подтверждён' }, { title: 'На модерации' }],
      recruterStatusOption: [{ title: 'На модерации' }, { title: 'Подтверждён' }, { title: 'В рейтинге' }, { title: 'Нанят' }, { title: 'Не нанят' }, { title: 'Нанят не через сервис' }],

      selectGender: 'B',
    }
  },
  setup() {
    const employerForRecruter = ref({
      startDateRecruter: '17.06.2021',
      post: 'castomermail@mail.com',
      dop: '08.06.1997',
      mainNumber: '+380991005010',
      telegram: '@telega',
      viber: '+380991005010',
      skype: 'nickname',
      linkedin: 'Maria Ivanova',
    })
    return {
      employerForRecruter,
    }
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
</style>
