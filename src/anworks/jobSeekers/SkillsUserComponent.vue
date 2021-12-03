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
            v-model="formData.positionUser"
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
            v-model="formData.levelUser"
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
            v-model="formData.mainSkillUser"
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
            v-model="formData.secondSkill"
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
          <add-language-component
            :selected-lang="formData.selectedLang"
            :selected-skill="formData.selectedSkill"
          />
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
            @click="sendToServer"
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
      formData: {
        positionUser: 'developer',
        levelUser: 'trainee',
        mainSkillUser: 'HTML',
        secondSkill: [{ title: 'Vue.js' }, { title: 'jQuery' }],
        selectedLang: [],
        selectedSkill: [],
      },

      positionUserOptions: [
        { value: 'developer', text: 'Developer' },
        { value: 'PM', text: 'Project Manager' },
        { value: 'SA', text: 'Software Architect' },
        { value: 'TeamL', text: 'Team Lead' },
        { value: 'TechL', text: 'Tech Lead' },
        { value: 'SM', text: 'Sales Managers' },
        { value: 'HR', text: 'HR' },
      ],

      levelUserOptions: [
        { value: 'trainee', text: 'Trainee' },
        { value: 'junior', text: 'Junior' },
        { value: 'middle', text: 'Middle' },
        { value: 'senior', text: 'Senior' },
      ],

      mainSkillUserOptions: [
        { value: 'JavaScript', text: 'JavaScript' },
        { value: 'HTML', text: 'HTML' },
        { value: 'CSS', text: 'CSS' },
        { value: 'Java', text: 'Java' },
        { value: 'C++', text: 'C++' },
        { value: 'Pyton', text: 'Pyton' },
        { value: 'PHP', text: 'PHP' },
      ],

      secondSkill: [{ title: 'Vue.js' }, { title: 'jQuery' }],
      secondSkillOption: [{ title: 'Angular' }, { title: 'Vue.js' }, { title: 'React' }, { title: 'jQuery' }, { title: 'Backbone.js' }, { title: 'Node.js' }, { title: 'Ember.js' }, { title: 'Meteor' }, { title: 'Polymer' }],

    }
  },
  methods: {
    sendToServer() {
      console.log(this.formData)
    },
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
</style>
