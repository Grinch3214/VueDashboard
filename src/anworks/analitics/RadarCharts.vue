<template>
  <div>
    <slot name="header" />
    <vue-apex-charts
      type="radar"
      height="350"
      :options="chartOptions"
      :series="series"
    />
    <slot name="body" />
    <slot name="footer" />
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: 'Регистрация',
          data: [121, 84, 100, 53, 140, 52],
        },
        {
          name: 'Найм',
          data: [100, 100, 100, 100, 14, 100],
        },
      ],
      chartOptions: {
        chart: {
          toolbar: {
            show: false,
          },
          dropShadow: {
            enabled: false,
            blur: 8,
            left: 1,
            top: 1,
            opacity: 0.2,
          },
        },
        legend: {
          show: true,
          fontSize: '14px',
          fontFamily: 'Montserrat',
          position: 'top',
          horizontalAlign: 'left',
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          categories: ['Янв', 'Фев', 'Мрт', 'Апр', 'Май', 'Июн'],
        },
        fill: {
          opacity: [1, 0.9],
        },
        stroke: {
          show: false,
          width: 0,
        },
        markers: {
          size: 0,
        },
        grid: {
          show: false,
        },
      },
    }
  },
}
</script>
