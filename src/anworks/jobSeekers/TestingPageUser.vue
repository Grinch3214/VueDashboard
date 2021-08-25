<template>
  <div>

    <div class="admins mb-0">
      <p class="text-uppercase pl-1">
        Тестирование</p>
    </div>

    <b-table
      responsive
      :fields="fields"
      :items="items"
      table-class="text-nowrap"
    >
      <template #cell(result)="data">
        <span class="text-info">{{ data.value }}</span>
        <div id="chart">
          <vue-apex-charts
            type="radialBar"
            width="60"
            height="50"
            :options="chartOptions"
            :series="series"
          />
        </div>
      </template>

      <template #cell(status)="data">
        <span class="text-success">{{ data.value }}</span>
      </template>
    </b-table>

  </div>
</template>

<script>
import { BTable } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    BTable,
    VueApexCharts,
  },
  data() {
    return {

      series: [45],
      chartOptions: {
        chart: {
          height: 40,
          type: 'radialBar',
        },
        colors: ['#28C56F'],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '100%',
            },
          },
        },
        labels: [''],
      },

      fields: [
        { skill: 'Навык' },
        { result: 'Результат' },
        { time: 'Время' },
        { status: 'Статус' },
        { valid: 'Действителен до' },
        { public: 'Публиковать' },
      ],
      items: [
        {
          skill: 'JavaScript', result: '', time: '14м 47с', status: 'Успешно', valid: '13.12.2021', public: '',
        },
        {
          skill: 'JavaScript', result: '', time: '14м 47с', status: 'Успешно', valid: '13.12.2021', public: '',
        },
        {
          skill: 'JavaScript', result: '', time: '14м 47с', status: 'Успешно', valid: '13.12.2021', public: '',
        },
        {
          skill: 'JavaScript', result: '', time: '14м 47с', status: 'Успешно', valid: '13.12.2021', public: '',
        },

      ],

    }
  },
}
</script>
