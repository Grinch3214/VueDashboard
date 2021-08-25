<template>
  <div>
    <div>
      <p class=" h6 mt-1">
        Страна найма:
      </p>
      <b-form-select
        v-model="country"
        :options="countryOptions"
        size="md"
        class="mt-1"
      />
    </div>

    <div class="pb-1 mb-1 border-bottom">
      <p class=" h6 mt-1 mb-1">
        Город найма:
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

  </div>
</template>

<script>
import { BFormGroup, BFormSelect } from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BFormGroup,
    vSelect,
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
