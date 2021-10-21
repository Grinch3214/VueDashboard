<template>
  <div>

    <b-form-group class="col-sm-12 col-md-6 col-lg-3 mb-3">
      <h5>Диапазон дат</h5>
      <label class="flat-label">
        <flat-pickr
          v-model="rangeDate"
          placeholder="Дата"
          class="form-control"
          :config="{ mode: 'range', dateFormat: 'd.m.Y' }"
        />
      </label>
    </b-form-group>
    <analitics-custom-table
      :tabledata="employerTable"
    >
      <template v-slot:footerTable>
        <!-- Группа: Лидген -->
        <b-tr>
          <b-td
            variant="an-title"
            colspan="3"
            class="align-middle text-nowrap text-white pt-2 pb-2"
          >Лидген</b-td>
          <b-td colspan="18" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Заявка на онлайн презентацию</b-td>
          <b-td class="text-nowrap">
            Количество заявок</b-td>
          <b-td class="text-nowrap">
            {{ employerTable.liedgen.onlineApplicationPresentation.numberOfApplications }}</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td />
          <b-td class="text-nowrap">
            Заинтересовались</b-td>
          <b-td>{{ employerTable.liedgen.onlineApplicationPresentation.interestedIn }}</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Холодные звонки</b-td>
          <b-td class="text-nowrap">
            Количество обзвонённых</b-td>
          <b-td class="text-nowrap">
            {{ employerTable.liedgen.coldCalls.numberOfPeopleCalled }}</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td />
          <b-td class="text-nowrap">
            Заинтересовались</b-td>
          <b-td>{{ employerTable.liedgen.coldCalls.interestedIn }}</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>
      </template>
    </analitics-custom-table>
  </div>
</template>

<script>
import { BFormGroup, BTr, BTd } from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import AnaliticsCustomTable from '@/anworks/analitics/AnaliticsCustomTable.vue'
import axios from 'axios'

export default {
  components: {
    flatPickr,
    BFormGroup,
    AnaliticsCustomTable,
    BTr,
    BTd,
  },
  data() {
    return {
      rangeDate: null,
      allowInput: true,

      employerTable: {
        firstConversion: {},
        resume: {},
        technologyTests: {},
        foreignLanguageTests: {},
        rating: {},
        renewalOfParticipation: {},
        numberOfInterviewsWithRecruiters: {},
        numberOfInterviewsWithTechLeads: {},
        hired: {},

        directMarketing: {
          telegramChatBot: {},
          telegramChannel: {},
          email: {},
        },

        traffic: {
          paidTraffic: {},
          viralTraffic: {},
        },

        socialNetworks: {
          instagram: {},
          facebook: {},
          linkedin: {},
          youTube: {},
          tikTok: {},
        },

        organic: {},
        prTraffic: {},

        liedgen: {
          onlineApplicationPresentation: {},
          coldCalls: {},
        },
      },
    }
  },
  created() {
    axios
      .get('/assets/analitics-employer-table.json')
      .then(response => { this.employerTable = response.data })
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}
.flat-label {
  width: 100%;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 11px;
    right: 11px;
    width: 9px;
    height: 9px;
    background-color: transparent;
    border-bottom: 2px solid #777;
    border-right: 2px solid #777;
    transform: rotate(45deg);
  }
}
</style>
