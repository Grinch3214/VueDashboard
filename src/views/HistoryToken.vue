<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <h2>История движения Токен в количественном выражении</h2>
        <h1>{{ 'Epam' }}</h1>
        <p class="h4 mb-1">
          12345678</p>
      </div>

      <div class="col-md-4 text-right">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-modal.addTokenModal
          variant="primary"
        >
          Начислить подарок ТОКЕН
        </b-button>

        <b-modal
          id="addTokenModal"
          ok-only
          ok-title="Отмена"
          centered
          title="Начислить подарок Токен"
          title-class="m-auto h4"
          ok-variant="flat-secondary"
          header-class="bg-transparent border-bottom"
          footer-class="justify-content-center"
        >
          <div class="text-center mb-3">
            <h4>{{ 'Epam' }}</h4>
            <p>
              12345678</p>
          </div>
          <div class="px-1 px-md-5 mb-1">
            <v-select
              v-model="selectLink"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="option"
            />
          </div>
          <div class="d-flex flex-wrap justify-content-center align-items-center spinbutton-color mb-3">
            <b-form-spinbutton
              id="spinbutton"
              v-model="value"
              inline
              size="sm"
              wrap
              min="1"
              max="999"
              class="mb-1"
            />
            <div class="ml-1 mb-1">
              <feather-icon
                icon="AlertCircleIcon"
                class="mr-25"
                size="20"
              />
              <span>Лимит 10 токенов</span>
            </div>
          </div>
          <div class="text-center">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
            >
              Начислить
            </b-button>
          </div>
        </b-modal>
      </div>
    </div>
    <div class="mt-2">
      <history-run-token />
    </div>
  </div>
</template>

<script>
import HistoryRunToken from '@/anworks/finance/HistoryRunToken.vue'
import {
  BButton, BModal, VBModal, BFormSpinbutton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'

export default {
  components: {
    HistoryRunToken,
    BButton,
    BModal,
    vSelect,
    BFormSpinbutton,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data: () => ({
    selectLink: { title: 'Рефельная ссылка' },
    option: [
      { title: 'Понятия не имею, что тут писать' },
      { title: 'Аналогичная ситуация и тут' },
      { title: 'Без комментариев' },
      { title: 'Главное, что работает' },
      { title: 'А остальное суета' },
    ],
    value: 50,
  }),
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
    .spinbutton-color {
      .btn {
        background: $primary;
        color: $white;
      }
    }
</style>
