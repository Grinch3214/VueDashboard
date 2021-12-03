<template>
  <div
    class="col-xl-4"
  >

    <div
      class="admins"
    >
      <p class="text-uppercase pl-1">Фильтры
      </p>
    </div>

    <div
      class="card pl-1 pr-1"
    >

      <filters-save-main />

      <p class=" h6 mt-1">От кого
      </p>
      <filters-select-badge
        v-model="formData.company"
        class="pb-1 border-bottom"
        :options="formDataOptions.companyOptions"
        placeholder="Введите имя, компанию или ID"
        @input="onInputSelect"
      />

      <p class=" h6 mt-1">Кому
      </p>
      <filters-select-badge
        v-model="formData.companyWhom"
        class="pb-1 border-bottom"
        :options="formDataOptions.companyWhomOptions"
        placeholder="Введите имя, компанию или ID"
        @input="onInputSelect"
      />

      <p class="h6 my-1">
        Статус
      </p>
      <filters-check-box
        v-model="formData.ratingStatus"
        class="pb-1 border-bottom"
        :options="formDataOptions.ratingStatusOption"
        @input="onInputSelect"
      />

      <filters-date
        v-model="formData.form.date"
        @input="onInputSelect"
      />

      <div class="text-center pb-3 mt-2">
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
import Ripple from 'vue-ripple-directive'
import axios from 'axios'
import FiltersSaveMain from './filtersComponents/FiltersSaveMain.vue'
import FiltersDate from './filtersComponents/FiltersDate.vue'
import FiltersSelectBadge from './filtersComponents/FiltersSelectBadge.vue'
import FiltersCheckBox from './filtersComponents/FiltersCheckBox.vue'

export default {
  components: {
    BButton,
    FiltersSaveMain,
    FiltersDate,
    FiltersSelectBadge,
    FiltersCheckBox,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isActive: false,

      formData: {
        company: [],
        companyWhom: [],
        ratingStatus: ['consideration'],
        form: {
          date: null,
        },
      },

      formDataOptions: {
        companyOptions: [],
        companyWhomOptions: [],
        ratingStatusOption: [],
      },
    }
  },
  created() {
    axios
      .get('/assets/examlpesJson/complaint-filter.json')
      .then(response => { this.formDataOptions = response.data })
  },
  methods: {
    onInputSelect(data) {
      console.log(data)
    },
    formDataSendToServer() {
      console.log(this.formData)
      // return axios.post('https://webhook.site/edb1ff5d-393a-4501-a25e-a86c6dc5eb45', {
      //   formData: this.formData,
      // }).then(response => console.log(response))
      //   .catch(error => console.log(error))
    },
  },
}
</script>
