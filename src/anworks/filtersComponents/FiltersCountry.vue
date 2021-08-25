<template>
  <div>
    <div>
      <p class=" h6 mt-1">
        Страна
      </p>
      <b-form-select
        v-model="country"
        :options="countryOptions"
        size="md"
        class="mt-1"
      />
    </div>

    <div>
      <p class=" h6 mt-1 mb-1">
        Город
      </p>
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

    <b-form-checkbox
      v-model="checkFilter"
      value="true"
      class="custom-control-primary pb-1 mb-1 border-bottom"
    >
      Готов к переезду
    </b-form-checkbox>
  </div>
</template>

<script>
import { BFormGroup, BFormCheckbox, BFormSelect } from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BFormGroup,
    vSelect,
    BFormCheckbox,
    BFormSelect,
  },

  data() {
    return {
      checkFilter: ['true'],

      country: null,
      countryOptions: [
        { text: 'Украина' },
        { text: 'Россия' },
      ],

      city: { title: 'Харьков' },
      cityOption: [{ title: 'Харьков' }, { title: 'Киев' }, { title: 'Львов' }, { title: 'Одесса' }, { title: 'Днепр' }, { title: 'Запорожье' }, { title: 'Кривой Рог' }, { title: 'Николаев' }, { title: 'Мариуполь' }, { title: 'Винница' }, { title: 'Херсон' }, { title: 'Чернигов' }, { title: 'Полтава' }, { title: 'Чекассы' }, { title: 'Хмельницкий' }, { title: 'Черновцы' }, { title: 'Житомир' }, { title: 'Сумы' }, { title: 'Ровно' }, { title: 'Ивано-Франковск' }, { title: 'Тернополь' }, { title: 'Луцк' }, { title: 'Ужгород' }],
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
