<template>
  <b-card
    class="card-tiny-line-stats p-0"
    body-class="p-1"
  >
    <slot name="header" />
    <!-- chart -->
    <vue-apex-charts
      height="70"
      :options="statisticsProfit.chartOptions"
      :series="statisticsProfit.series"
    />
    <slot name="body" />
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'

export default {
  components: {
    BCard,
    VueApexCharts,
  },
  data() {
    return {
      statisticsProfit: {
        series: [
          {
            data: [0, 20, 5, 30, 15, 45, 67],
          },
        ],
        chartOptions: {
          chart: {

            type: 'line',
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          grid: {
            borderColor: '#EBEBEB',
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
            padding: {
              top: -30,
              bottom: -10,
            },
          },
          stroke: {
            width: 3,
          },
          colors: [$themeColors.info],
          markers: {
            size: 2,
            colors: $themeColors.info,
            strokeColors: $themeColors.info,
            strokeWidth: 2,
            strokeOpacity: 1,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [
              {
                seriesIndex: 0,
                dataPointIndex: 6,
                fillColor: '#ffffff',
                strokeColor: $themeColors.info,
                size: 5,
              },
            ],
            shape: 'circle',
            radius: 2,
            hover: {
              size: 3,
            },
          },
          xaxis: {
            labels: {
              show: true,
              style: {
                fontSize: '0px',
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
          tooltip: {
            x: {
              show: false,
            },
          },
        },
      },
    }
  },
}
</script>
