<template>
  <div>
    <b-form
      @submit.prevent
    >
      <b-row class="align-items-start">

        <h2 class="col-12 mb-3">
          Навыки</h2>

        <b-col lg="3">
          <p class="h5 mt-2 mb-0">
            Должность:</p>
        </b-col>
        <b-col lg="7">
          <b-form-select
            v-model="positionUser"
            :options="positionUserOptions"
            size="md"
            class="mt-1"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-2 mb-0">
            Уровень:</p>
        </b-col>
        <b-col lg="7">
          <b-form-select
            v-model="levelUser"
            :options="levelUserOptions"
            size="md"
            class="mt-1"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-2 mb-0">
            Основной навык:</p>
        </b-col>
        <b-col lg="7">
          <b-form-select
            v-model="mainSkillUser"
            :options="mainSkillUserOptions"
            size="md"
            class="mt-1"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mt-2 mb-0">
            Дополнительные навыки:</p>
        </b-col>
        <b-col lg="7">
          <v-select
            v-model="secondSkill"
            multiple
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="title"
            :options="secondSkillOption"
            class="mt-1"
          />
        </b-col>

        <b-col lg="3">
          <p class="h5 mb-0 mt-2">
            Язык:</p>
        </b-col>
        <b-col
          lg="7"
          class="pt-1"
        >
          <add-language-component />
        </b-col>

        <b-col
          sm="12"
          class="mt-4"
        >
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Сохранить изменения
          </b-button>
        </b-col> <!-- Кнопки для формы -->

      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BForm, BButton, BCol, BRow, BFormSelect,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import AddLanguageComponent from '../components/AddLanguageComponent.vue'

export default {
  components: {
    BForm,
    BButton,
    BCol,
    BRow,
    BFormSelect,
    vSelect,
    AddLanguageComponent,
  },
  directives: {
    Ripple,
  },
  data() {
    return {

      positionUser: null,
      positionUserOptions: [
        { value: null, text: 'Developer' },
        { text: 'Project Manager' },
        { text: 'Software Architect' },
        { text: 'Team Lead' },
        { text: 'Tech Lead' },
        { text: 'Sales Managers' },
        { text: 'HR' },
      ],

      levelUser: null,
      levelUserOptions: [
        { value: null, text: 'Junior' },
        { text: 'Trainee' },
        { text: 'Middle' },
        { text: 'Senior' },
      ],

      mainSkillUser: null,
      mainSkillUserOptions: [
        { value: null, text: 'JavaScript' },
        { text: 'HTML' },
        { text: 'CSS' },
        { text: 'Java' },
        { text: 'C++' },
        { text: 'Pyton' },
        { text: 'PHP' },
      ],

      secondSkill: [{ title: 'Vue.js' }, { title: 'jQuery' }],
      secondSkillOption: [{ title: 'Angular' }, { title: 'Vue.js' }, { title: 'React' }, { title: 'jQuery' }, { title: 'Backbone.js' }, { title: 'Node.js' }, { title: 'Ember.js' }, { title: 'Meteor' }, { title: 'Polymer' }],

    }
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
</style>
