<template>
  <div>
    <b-form
      class="mt-3"
      @submit.prevent
    >
      <b-row class="mb-1">
        <b-col md="4">
          <b-form-group
            label="Имя"
            label-for="name"
          >
            <b-form-input
              id="name"
              v-model="recruiterInfo.name"
              placeholder="Имя"
            />
          </b-form-group>
        </b-col>
        <b-col
          md="4"
          offset-md="1"
        >
          <b-form-group
            label="Дата регистрации"
            label-for="register-date"
          >
            <b-form-input
              id="register-date"
              v-model="recruiterInfo.registerDate"
              placeholder="Дата регистрации"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
        >
          <b-form-group
            label="ID пользователя"
            label-for="idUser"
          >
            <b-form-input
              id="idUser"
              v-model="recruiterInfo.idUser"
              placeholder="idUser"
              disabled
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
          offset-md="1"
        >
          <b-form-group
            label="Дата рождения"
            label-for="mc-date"
          >
            <b-form-input
              id="mc-date"
              v-model="recruiterInfo.dop"
              placeholder="dop"
            />
          </b-form-group>
        </b-col>

      </b-row>

      <b-row>
        <b-col md="4">
          <b-form-group
            label="Компания"
            label-for="company"
          >
            <b-form-input
              id="company"
              v-model="recruiterInfo.company"
              placeholder="Компания"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
          offset-md="1"
        >
          <b-form-group>
            <p>Пол</p>
            <b-form-radio
              v-model="Gender"
              name="gender-user"
              value="A"
              class="d-inline-block mr-2 pb-sm-0 pb-2"
            >
              Мужской
            </b-form-radio>
            <b-form-radio
              v-model="Gender"
              name="gender-user"
              value="B"
              class="d-inline-block mr-2 pb-sm-0 pb-2"
            >
              Женский
            </b-form-radio>
            <b-form-radio
              v-model="Gender"
              name="gender-user"
              value="С"
              class="d-inline-block mr-2"
            >
              Другой
            </b-form-radio>
          </b-form-group>
        </b-col>

        <b-col
          md="4"
        >
          <b-form-group
            label="Лимит трат"
            label-for="spend"
          >
            <b-form-input
              id="spend"
              v-model="recruiterInfo.spend"
              placeholder="Лимит трат"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
          offset-md="1"
        >
          <b-form-group>
            <p>Активность</p>
            <b-form-radio
              v-model="Selected"
              name="activity-user"
              value="true-user-activity"
              class="d-inline-block mr-2"
            >
              Активен
            </b-form-radio>
            <b-form-radio
              v-model="Selected"
              name="activity-user"
              value="false-user-activity"
              class="d-inline-block"
            >
              Неактивен
            </b-form-radio>
          </b-form-group>
        </b-col>

      </b-row>
      <!-- submit and reset -->
      <div class=" mt-4 d-flex justify-content-center justify-content-md-between col-12 col-md-9 pl-0 flex-wrap">
        <div class="mb-1">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Сохранить
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            variant="outline-primary"
            class="mr-1"
          >
            Отмена
          </b-button>
        </div>
        <div>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            v-b-modal.modal-danger
            type="submit"
            variant="danger"
            class="mr-1"
          >
            Удалить рекрутера
          </b-button>
          <b-modal
            id="modal-danger"
            ok-variant="danger"
            modal-class="modal-danger"
            centered
            ok-title="Да, уверен"
            cancel-title="Отмена"
            cancel-variant="outline-primary"
          >
            <b-card-text class="h3 text-center">
              <feather-icon
                icon="AlertCircleIcon"
                size="70"
                class="text-warning d-block mx-auto"
              />
              Вы уверены, что хотите удалить рекрутера?
            </b-card-text>
          </b-modal>
        </div>
      </div>

    </b-form>
  </div>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormRadio, BForm, BButton, BModal, VBModal, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormRadio,
    BForm,
    BButton,
    BModal,
    BCardText,
  },
  directives: {
    Ripple,
    'b-modal': VBModal,
  },
  data() {
    return {

      Selected: 'true-user-activity',
      Gender: 'С',

    }
  },
  setup() {
    const recruiterInfo = ref({
      name: 'Мария Иванова',
      registerDate: '2021.07.12',
      dop: '1997.08.06',
      company: 'EPAM',
      idUser: '1654997654567',
      spend: '100',
    })
    return {
      recruiterInfo,
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
