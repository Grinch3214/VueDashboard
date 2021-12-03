<template>
  <div>
    <validation-observer ref="simpleRules">
      <b-form
        @submit.prevent
      >
        <b-row class="align-items-center">

          <b-card-text class="col-12 mb-4">
            <p class="h4">
              {{ userInfo.mcFirstName }}</p>
            <b-avatar
              rounded="sm"
              variant="light-primary"
              size="104px"
              :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
            />

          </b-card-text>

          <b-col lg="3">
            <p class="h5 mb-1">
              Дата регистрации:</p>
          </b-col>
          <b-col lg="7">
            <b-form-group
              label-for="startDate"
            >
              <validation-provider
                #default="{ errors }"
                rules="required|min:10"
              >
                <b-form-input
                  id="startDate"
                  v-model="userInfo.startDate"
                  :state="errors.length > 0 ? false:null"
                  placeholder="startDate"
                />
              </validation-provider>
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
              <validation-provider
                #default="{ errors }"
                rules="email"
              >
                <b-form-input
                  id="post"
                  v-model="userInfo.post"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Email"
                />
              </validation-provider>
            </b-form-group>
          </b-col>

          <b-col lg="3">
            <p class="h5 mb-1">
              Статус:</p>
          </b-col>
          <b-col lg="7">
            <b-form-group>
              <v-select
                v-model="userInfo.userStatus"
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
                v-model="userInfo.attraction"
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
              <validation-provider
                #default="{ errors }"
                rules="required|min:3"
              >
                <b-form-input
                  id="mcFirstName"
                  v-model="userInfo.mcFirstName"
                  :state="errors.length > 0 ? false:null"
                  placeholder="mcFirstName"
                />
              </validation-provider>
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
                v-model="userInfo.Selected"
                name="gender-user"
                value="A"
                class="d-inline-block mr-2 mb-1"
              >
                Мужской
              </b-form-radio>
              <b-form-radio
                v-model="userInfo.Selected"
                name="gender-user"
                value="B"
                class="d-inline-block mr-2 mb-1"
              >
                Женский
              </b-form-radio>
              <b-form-radio
                v-model="userInfo.Selected"
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
              <validation-provider
                #default="{ errors }"
                rules="required|min:10"
              >
                <b-form-input
                  id="mc-date"
                  v-model="userInfo.dop"
                  :state="errors.length > 0 ? false:null"
                  placeholder="dop"
                />
              </validation-provider>
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
              <validation-provider
                #default="{ errors }"
                rules="required|min:8"
              >
                <b-form-input
                  id="mainNumber"
                  v-model="userInfo.phone"
                  :state="errors.length > 0 ? false:null"
                  placeholder="mainNumber"
                />
              </validation-provider>
            </b-form-group>
          </b-col>

          <b-col lg="3">
            <p class="h5 mb-1">
              Доп. телефон:</p>
          </b-col>

          <b-col lg="7">
            <input-repeat
              v-model="userInfo.phoneList"
              :value="userInfo.phoneList.value"
              type="number"
              placeholder="+38 0"
            />
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
    </validation-observer>

    <!-- submit and reset -->
    <div class="mt-2 mt-lg-5 d-flex justify-content-sm-between justify-content-center flex-wrap col-lg-9 pl-0">
      <div class="mb-1">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          class="mr-1"
          @click="formDataSendToServer"
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
  </div>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormRadio, BForm, BModal, VBModal, BButton, BCardText, BAvatar,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import { ref } from '@vue/composition-api'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import InputRepeat from '@/anworks/components/InputRepeat.vue'

export default {
  components: {
    BRow,
    BButton,
    BCol,
    BFormGroup,
    BFormInput,
    BFormRadio,
    BForm,
    vSelect,
    BModal,
    BCardText,
    InputRepeat,
    ValidationObserver,
    ValidationProvider,
    BAvatar,
  },
  directives: {
    Ripple,
    'b-modal': VBModal,
  },
  data() {
    return {
      required,
      userStatusOption: [{ title: 'На модерации' }, { title: 'Подтверждён' }, { title: 'В рейтинге' }, { title: 'Нанят' }, { title: 'Не нанят' }, { title: 'Нанят не через сервис' }],

      attractionOption: [{ title: 'Instagram' }, { title: 'Google' }, { title: 'Linkedin' }, { title: 'An.Works' }, { title: 'Telegram' }],
    }
  },
  setup() {
    const userInfo = ref({
      mcFirstName: 'Мария Иванова',
      dop: '08.06.1997',
      startDate: '12.05.2021',
      post: 'emailapplicant@mail.com',
      phone: '+380991005010',
      telegram: '@telega',
      viber: '+380991005010',
      skype: 'nickname',
      linkedin: 'Maria Ivanova',
      Selected: 'B',
      phoneList: [
        { id: 0, value: '+380931112233' },
      ],
      userStatus: [{ title: 'Подтверждён' }, { title: 'На модерации' }],
      attraction: { title: 'Instagram' },
    })
    return {
      userInfo,
    }
  },
  methods: {
    formDataSendToServer() {
      console.log(this.userInfo)
    },
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
