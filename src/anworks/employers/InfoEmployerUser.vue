<template>
  <div>
    <b-form
      class="mt-3"
      @submit.prevent
    >
      <b-row class="mb-1 align-items-center">

        <b-col lg="3">
          <p class="h5 mb-1">
            Дата регистрации:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="startDateEmployer"
          >
            <b-form-input
              id="startDateEmployer"
              v-model="employerInfo.startDateEmployer"
              placeholder="startDateEmployer"
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
              v-model="employerInfo.post"
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
            Название компании:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="nameCompany"
          >
            <b-form-input
              id="startDate"
              v-model="employerInfo.nameCompany"
              placeholder="Имя компании"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1">
            Сайт работодателя:</p>
        </b-col>
        <b-col lg="7">
          <b-form-group
            label-for="mainSite"
          >
            <b-form-input
              id="mainSite"
              v-model="employerInfo.mainSite"
              placeholder="Сайт"
            />
          </b-form-group>
        </b-col>

        <b-col
          lg="3"
          class="mb-auto"
        ><p class="h5 mt-50">
          Доп. домены:</p>
        </b-col>
        <b-col lg="7">
          <input-repeat />
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1 mt-50">
            Страна:</p>
        </b-col>
        <b-col
          lg="7"
          class="mt-50"
        >
          <b-form-group
            label-for="countryJob"
          >
            <b-form-input
              id="countryJob"
              v-model="employerInfo.countryJob"
              placeholder="Страна"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1 mt-50">
            Главный офис:</p>
        </b-col>
        <b-col
          lg="7"
          class="mt-50"
        >
          <b-form-group
            label-for="office"
          >
            <b-form-input
              id="office"
              v-model="employerInfo.office"
              placeholder="Город"
            />
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1 mt-50">
            Количество персонала:</p>
        </b-col>
        <b-col
          lg="7"
          class="mt-50"
        >
          <vue-slider
            v-model="personal"
            :direction="direction"
            :min="min"
            :max="max"
            class="mb-2"
          />
        </b-col>

        <b-col
          lg="3"
          class="mb-auto"
        >
          <p class="h5 mb-1 mt-50">
            О работодателе:</p>
        </b-col>
        <b-col
          lg="9"
          class="mt-50"
        >
          <b-form-textarea
            id="textarea-about-mployer"
            :value="aboutEmployer"
            rows="4"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-1 mt-1">
            Бонусы:</p>
        </b-col>
        <b-col lg="9">
          <b-form-group>
            <v-select
              v-model="bonus"
              placeholder="Бонус"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="bonusOption"
              class="mt-1"
            />
          </b-form-group>
        </b-col>

        <b-col
          lg="3"
          class="mb-auto"
        >
          <p class="h5 mb-1 mt-50">
            Доп. бонусы:</p>
        </b-col>
        <b-col
          lg="9"
          class="mt-50"
        >
          <b-form-textarea
            id="textarea-about-second-bonus"
            :value="secondBonus"
            rows="4"
          />
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
            Сохранить изменения
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            variant="outline-primary"
          >
            Отмена
          </b-button>
        </div>
        <!-- <div>
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
        </div> -->
      </div>

    </b-form>
  </div>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BForm, BButton, BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import { ref } from '@vue/composition-api'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
import InputRepeat from '../components/InputRepeat.vue'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    vSelect,
    BButton,
    // BModal,
    // BCardText,
    InputRepeat,
    VueSlider,
    BFormTextarea,
  },
  directives: {
    Ripple,
    // 'b-modal': VBModal,
  },
  data() {
    return {
      testInput: 'secondsite.com',
      userStatus: [{ title: 'Подтверждён' }, { title: 'На модерации' }],
      userStatusOption: [{ title: 'На модерации' }, { title: 'Подтверждён' }, { title: 'В рейтинге' }, { title: 'Нанят' }, { title: 'Не нанят' }, { title: 'Нанят не через сервис' }],

      Selected: 'true-user-activity',

      selectedStatus: { title: 'Верифицирован' },
      optionStatus: [{ title: 'Нейтрален' }, { title: 'Ожидает' }, { title: 'В рейтинге' }, { title: 'Создан' }, { title: 'Верифицирован' }],

      attraction: { title: 'Instagram' },
      attractionOption: [{ title: 'Instagram' }, { title: 'Google' }, { title: 'Linkedin' }, { title: 'An.Works' }, { title: 'Telegram' }],

      personal: [40, 235],
      min: 0,
      max: 500,
      dir: 'ltr',

      aboutEmployer: 'EPAM Systems — американская ИТ-компания, основанная в 1993 году. Крупнейший мировой производитель заказного программного обеспечения, специалист по консалтингу, резидент Белорусского парка высоких технологий. Штаб-квартира компании расположена в Ньютауне, штат Пенсильвания, а её отделения представлены более чем в 30 странах мира',

      bonus: [{ title: 'Спортзал' }, { title: 'Гибкий график' }, { title: 'Уточка' }],
      bonusOption: [{ title: 'Спортзал' }, { title: 'Гибкий график' }, { title: 'Зона отдыха' }, { title: 'Столовая' }, { title: 'Игровой зал' }, { title: 'Корпаративы' }, { title: 'Уточка' }],

      secondBonus: 'EPAM Systems — американская ИТ-компания, основанная в 1993 году. Крупнейший мировой производитель заказного программного обеспечения, специалист по консалтингу, резидент Белорусского парка высоких технологий. Штаб-квартира компании расположена в Ньютауне, штат Пенсильвания, а её отделения представлены более чем в 30 странах мира',

    }
  },
  setup() {
    const employerInfo = ref({
      startDateEmployer: '17.06.2021',
      post: 'castomermail@mail.com',
      nameCompany: 'Epam',
      mainSite: 'castomer.com',
      countryJob: 'Украина',
      office: 'Харьков',
    })
    return {
      employerInfo,
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
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
    @import '@core/scss/vue/libs/vue-slider.scss';
</style>

<style lang="scss" scoped>
    .input__text{
        color: #5e5873;
        font-size: 0.857rem;
        margin-bottom: 0.2857rem;
        display: block;
    }
</style>
