<template>
  <div>
    <b-form
      class="mt-3"
      @submit.prevent
    >
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Логин"
            label-for="mc-login-name"
          >
            <b-form-input
              id="mc-login-name"
              placeholder="Eleanor.Aguilar@mail.com"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col
          md="4"
          offset-md="1"
        >
          <b-form-group
            label="ID пользователя"
            label-for="mc-id-user"
            disabled
          >
            <b-form-input
              id="mc-id-user"
              placeholder="165656123311"
              disabled
            />
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group
            label="Имя"
            label-for="mc-first-name"
          >
            <b-form-input
              id="mc-first-name"
              placeholder="Eleanor Aguilar"
              disabled
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
          offset-md="1"
        >
          <b-form-group
            label="Последнее посещение"
            label-for="mc-visit"
          >
            <b-form-input
              id="mc-visit"
              placeholder="17.06.2021"
              disabled
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
        >
          <b-form-group>
            <p>Статус</p>
            <b-form-radio
              v-model="Selected"
              name="some-radios"
              value="A"
              class="d-inline-block mr-2 mb-2"
            >
              Активен
            </b-form-radio>
            <b-form-radio
              v-model="Selected"
              name="some-radios"
              value="B"
              class="d-inline-block"
            >
              Неактивен
            </b-form-radio>
          </b-form-group>
        </b-col>

        <b-col
          md="4"
          offset-md="1"
        >
          <b-form-group>
            <p>Роль</p>
            <b-form-radio
              v-model="Selected1"
              name="some-radios1"
              value="C"
              class="d-inline-block mr-2 mb-2"
            >
              Админ
            </b-form-radio>
            <b-form-radio
              v-model="Selected1"
              name="some-radios1"
              value="D"
              class="d-inline-block"
            >
              Модератор
            </b-form-radio>
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

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormRadio,
    BForm,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      Selected: 'A',
      Selected1: 'D',
    }
  },
}
</script>
