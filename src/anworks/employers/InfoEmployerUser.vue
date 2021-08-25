<template>
  <div>
    <b-form
      class="mt-3"
      @submit.prevent
    >
      <b-row class="mb-1">
        <b-col md="4">
          <b-form-group
            label="Название компании"
            label-for="nameCompany"
          >
            <b-form-input
              id="nameCompany"
              v-model="employerInfo.nameCompany"
              placeholder="Имя компании"
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
              v-model="employerInfo.dop"
              placeholder="dop"
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
              v-model="employerInfo.idUser"
              placeholder="idUser"
              disabled
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

      <b-row>
        <b-col md="4">
          <b-form-group
            label="Главный офис"
            label-for="office"
          >
            <b-form-input
              id="office"
              v-model="employerInfo.office"
              placeholder="Город, Страна"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
          offset-md="1"
        >
          <b-form-group>
            <span class="input__text">Статус</span>
            <v-select
              v-model="selectedStatus"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="optionStatus"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
        >
          <b-form-group
            label="Количество персонала"
            label-for="staff"
          >
            <b-form-input
              id="staff"
              v-model="employerInfo.staff"
              placeholder=""
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
          offset-md="1"
        >
          <span class="input__text">Канал Привлечения
          </span>
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

      </b-row>
      <!-- submit and reset -->
      <div class="mt-2 mt-lg-5 d-flex justify-content-sm-between justify-content-center flex-wrap col-lg-9 pl-0">
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
            Удалить соискателя
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
              Вы уверены, что хотите удалить соискателя?
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
import vSelect from 'vue-select'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormRadio,
    BForm,
    vSelect,
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

      selectedStatus: { title: 'Верифицирован' },
      optionStatus: [{ title: 'Нейтрален' }, { title: 'Ожидает' }, { title: 'В рейтинге' }, { title: 'Создан' }, { title: 'Верифицирован' }],

      attraction: { title: 'Instagram' },
      attractionOption: [{ title: 'Instagram' }, { title: 'Google' }, { title: 'Linkedin' }, { title: 'An.Works' }, { title: 'Telegram' }],

    }
  },
  setup() {
    const employerInfo = ref({
      nameCompany: 'Epam',
      dop: '1997.08.06',
      idUser: '1654997654567',
      office: 'Харьков, Украина',
      staff: '50-100',
    })
    return {
      employerInfo,
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
