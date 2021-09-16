<template>
  <div>
    <slot name="header" />
    <vue-apex-charts
      type="bar"
      height="200"
      max-width="350"
      :options="chartOptions"
      :series="series"
    />
    <slot name="body" />
    <slot name="footer" />
    <!-- <p>{{ chartOptions.xaxis.categories[1] }}: {{ series[0].data[1] }}</p> -->
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
      series: [{
        name: 'Иностранный язык',
        data: [98, 198, 298, 398, 498, 211],
      }],
      chartOptions: {
        chart: {
          toolbar: {
            show: false,
          },
          type: 'bar',
        },
        plotOptions: {
          bar: {
            columnWidth: '55%',
            distributed: true,
            endingShape: 'rounded',
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            'Английский',
            'Немецкий',
            'Испанский',
            'Китайский',
            'Польский',
            'Другие',
          ],
          labels: {
            show: false,
            style: {
              fontSize: '12px',
            },
          },
        },
      },
    }
  },
}
</script>
