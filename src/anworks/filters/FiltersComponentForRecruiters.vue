<template>
  <div class="col-xl-4">

    <div class="admins">
      <p class="text-uppercase pl-1">Фильтры
      </p>
    </div>

    <div class="card p-1">

      <p class="h6 mt-1 mb-2">
        Активность</p>
      <filters-radio-button
        v-model="formData.activity"
        class="pb-1 border-bottom"
        :options="formDataOptions.activityOptions"
        @input="onInputSelect"
      />

      <p class="h6 mt-1">Название работодателя
      </p>
      <filters-select-badge
        v-model="formData.emploerName"
        class="mb-3 pb-1"
        :options="formDataOptions.emploerNameOption"
        placeholder="Работодатель"
        @input="onInputSelect"
      />

      <div class="text-center pb-3">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="formDataSendToServer"
        >
          <feather-icon
            icon="PieChartIcon"
            class="mr-50"
          />
          <span class="align-middle">Применить фильтры</span>
        </b-button>
      </div>

    </div>

  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import axios from 'axios'
import Ripple from 'vue-ripple-directive'
import FiltersRadioButton from './filtersComponents/FiltersRadioButton.vue'
import FiltersSelectBadge from './filtersComponents/FiltersSelectBadge.vue'

export default {
  components: {
    BButton,
    FiltersRadioButton,
    FiltersSelectBadge,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isActive: false,

      formData: {
        activity: 'activity-true',
        emploerName: [],
      },

      formDataOptions: {
        activityOptions: [],
        emploerNameOption: [],
      },
    }
  },
  created() {
    axios
      .get('/assets/examlpesJson/recruters-filter.json')
      .then(response => { this.formDataOptions = response.data })
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
    formDataSendToServer() {
      console.log(this.formData)
    },
  },
}
</script>
