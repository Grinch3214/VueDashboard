<template>
  <div>
    <slot name="header" />
    <vue-apex-charts
      type="pie"
      height="250"
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
      series: [890, 258, 149, 149, 149],
      chartOptions: {
        chart: {
          width: 280,
          type: 'pie',
        },
        labels: ['Instagram', 'Facebook', 'YooTube', 'Linkedin', 'Other'],
        legend: {
          show: false,
          position: 'bottom',
          horizontalAlign: 'left',
          itemMargin: {
            horizontal: 10,
            vertical: 10,
          },
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
    }
  },
}
</script>
