<template>
  <div>
    <span>Контакт от 11.07.2021</span>
    <p class="h4 mt-1">
      Junior Frontend Developer</p>
    <p class="h4 mb-0">
      Epam</p>
    <span class="text-muted"><small>12345678</small></span>
    <div class="mt-2 card bg-danger bg-lighten-5">
      <p class="h4 shadow-sm p-1 text-danger">
        Внимание!</p>
      <p class="pl-1 pr-1 pt-50 text-danger">
        Позвоните компании, для подтверждения найма. Если вы не дозвонились - отложите верификацию. Только после получения ответа позвоните соискателю!</p>
    </div>

    <div class="row ml-25 mr-25 text-darken">
      <div class="col-lg-6 col-sm-12">
        <div class="row">
          <div class="col-md-7 col-12 text-uppercase h5 font-weight-bolder pt-1 pb-1 bg-secondary bg-lighten-5 mb-0">
            Рекрутер</div>
          <div class="col-5 text-uppercase h5 font-weight-bolder pt-1 pb-1 bg-secondary bg-lighten-5 mb-0 text-nowrap d-none d-md-block">
            Статус рекрутера</div>
        </div>
        <div class="row bg-white pt-1">
          <div class="col-md-7 col-12">
            <div class="pb-3">
              <p class="h4">
                Иван Иванов</p>
              <span class="text-muted"><small>12345678</small></span>
            </div>
            <div class="row">
              <p class="col-5">
                Телефон:</p>
              <p class="col-7">
                +38 063 562 8743</p>
            </div>
            <div class="row">
              <p class="col-5"></p>
              <p class="col-7">
                +38 063 562 8743</p>
            </div>
            <div class="row">
              <p class="col-5">
                Telegram:</p>
              <p class="col-7">
                @telega</p>
            </div>
            <div class="row">
              <p class="col-5">
                Viber:</p>
              <p class="col-7">
                +38 063 562 8743</p>
            </div>
            <div class="row">
              <p class="col-5">
                Linkedin:</p>
              <p class="col-7">
                Иван Иванов</p>
            </div>
          </div>
          <div class="col-md-5 col-12 mb-2 mb-md-0">
            <b-form-select
              v-model="selected"
              :options="options"
            />
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-sm-12">
        <div class="row">
          <div class="col-md-7 col-12 text-uppercase h5 font-weight-bolder pt-1 pb-1 bg-secondary bg-lighten-5 mb-0">
            Соискатель</div>
          <div class="col-5 text-uppercase h5 font-weight-bolder pt-1 pb-1 bg-secondary bg-lighten-5 mb-0 text-nowrap d-none d-md-block">
            Статус соискателя</div>
        </div>
        <div class="row bg-white pt-1">
          <div class="col-md-7 col-12">
            <div class="pb-3">
              <p class="h4">
                Иван Иванов</p>
              <span class="text-muted"><small>12345678</small></span>
            </div>
            <div class="row">
              <p class="col-5">
                Телефон:</p>
              <p class="col-7">
                +38 063 562 8743</p>
            </div>
            <div class="row">
              <p class="col-5"></p>
              <p class="col-7">
                +38 063 562 8743</p>
            </div>
            <div class="row">
              <p class="col-5">
                Telegram:</p>
              <p class="col-7">
                @telega</p>
            </div>
            <div class="row">
              <p class="col-5">
                Viber:</p>
              <p class="col-7">
                +38 063 562 8743</p>
            </div>
            <div class="row">
              <p class="col-5">
                Linkedin:</p>
              <p class="col-7">
                Иван Иванов</p>
            </div>
          </div>
          <div class="col-12 col-md-5">
            <b-form-select
              v-model="selected1"
              :options="options"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row ml-25 mr-25 bg-white pt-3 pb-4">
      <div class="col-md-3 col-sm-12 text-center mb-1">
        <b-form-select
          v-model="mainSelected"
          :options="options"
        />
      </div>
      <div class="col-md-3 col-sm-12 text-center mb-1">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          disabled
        >
          Верефицировать
        </b-button>
      </div>
      <div class="col-md-6 col-sm-12 text-md-right text-center mb-1">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="outline-primary"
        >
          Отложить верефикацию
        </b-button>
      </div>
    </div>

  </div>
</template>

<script>
// import VerificationEmployerContact from '@/anworks/verification/VerificationEmployerContact.vue'
import { BFormSelect, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BFormSelect,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      selected: false,
      selected1: false,
      mainSelected: null,
      options: [
        { value: null, text: 'Статус' },
        { value: false, text: 'Не нанят' },
        { value: true, text: 'Нанят' },
      ],
    }
  },
}
</script>
