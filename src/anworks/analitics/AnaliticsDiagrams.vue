<template>
  <b-tabs pills>
    <b-tab
      title="Общее"
      active
    >
      <div class="row mt-3">
        <div class="col-md-6 col-lg-3 mt-2">
          <div class="card px-2 h-100">
            <pie-charts>
              <template v-slot:header>
                <h4 class="text-center my-2">
                  Трафик
                </h4>
              </template>

              <template v-slot:body>
                <h4 class="mt-5 mb-2">
                  Каналы
                </h4>
                <ul
                  class="pl-0"
                >
                  <li
                    v-for="item in items"
                    :key="item.channel"
                    class="d-flex"
                  >
                    <p class="mr-auto">
                      {{ item.channel }}</p>
                    <p>{{ item.people }}</p>
                  </li>
                </ul>
              </template>
              <template v-slot:footer>
                <div class="text-center">
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                  >
                    Подробнее
                  </b-button>
                </div>
              </template>
            </pie-charts>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mt-2">
          <div class="card px-2 h-100">
            <pie-charts>
              <template v-slot:header>
                <h4 class="text-center my-2">
                  Конверсия
                </h4>
              </template>

              <template v-slot:body>
                <div class="d-flex mt-5 mb-2">
                  <h4>
                    Всего</h4>
                  <p class="ml-auto">{{ total[0].people + total[1].people }}
                  </p>
                </div>
                <ul
                  class="pl-0"
                >
                  <li
                    v-for="item in total"
                    :key="item.registered"
                    class="d-flex"
                  >
                    <p class="mr-auto">
                      {{ item.registered }}</p>
                    <p>{{ item.people }}</p>
                  </li>
                </ul>
              </template>
              <template v-slot:footer>
                <div class="text-center">
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                  >
                    Подробнее
                  </b-button>
                </div>
              </template>
            </pie-charts>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mt-2">
          <div class="card px-2 h-100">
            <pie-charts>
              <template v-slot:header>
                <h4 class="text-center my-2">
                  Рейтинг
                </h4>
              </template>

              <template v-slot:body>
                <div class="d-flex mt-5 mb-2">
                  <h4>
                    Всего</h4>
                  <p class="ml-auto">{{ raitings[0].people + raitings[5].people }}
                  </p>
                </div>
                <ul
                  class="pl-0"
                >
                  <li
                    v-for="item in raitings"
                    :key="item.top"
                    class="d-flex"
                  >
                    <p class="mr-auto">
                      {{ item.top }}</p>
                    <p>{{ item.people }}</p>
                  </li>
                </ul>
              </template>
              <template v-slot:footer>
                <div class="text-center">
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                  >
                    Подробнее
                  </b-button>
                </div>
              </template>
            </pie-charts>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mt-2">
          <div class="card px-2 h-100">
            <pie-charts>
              <template v-slot:header>
                <h4 class="text-center my-2">
                  Продление участия
                </h4>
              </template>

              <template v-slot:body>
                <div class="d-flex mt-5 mb-2">
                  <h4>
                    Всего</h4>
                  <p class="ml-auto">{{ raitings[0].people + raitings[5].people }}
                  </p>
                </div>
                <ul
                  class="pl-0"
                >
                  <li
                    v-for="item in raitings"
                    :key="item.top"
                    class="d-flex"
                  >
                    <p class="mr-auto">
                      {{ item.top }}</p>
                    <p>{{ item.people }}</p>
                  </li>
                </ul>
              </template>
              <template v-slot:footer>
                <div class="text-center">
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                  >
                    Подробнее
                  </b-button>
                </div>
              </template>
            </pie-charts>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mt-2">
          <div class="card px-2 h-100">
            <pie-charts>
              <template v-slot:header>
                <h4 class="text-center my-2">
                  Нанято
                </h4>
              </template>

              <template v-slot:body>
                <div class="d-flex mt-5 mb-2">
                  <h4>
                    Всего</h4>
                  <p class="ml-auto">{{ raitings[0].people + raitings[5].people }}
                  </p>
                </div>
                <ul
                  class="pl-0"
                >
                  <li
                    v-for="item in raitings"
                    :key="item.top"
                    class="d-flex"
                  >
                    <p class="mr-auto">
                      {{ item.top }}</p>
                    <p>{{ item.people }}</p>
                  </li>
                </ul>
              </template>
              <template v-slot:footer>
                <div class="text-center">
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                  >
                    Подробнее
                  </b-button>
                </div>
              </template>
            </pie-charts>
          </div>
        </div>

      </div>
    </b-tab>
    <b-tab title="Аналитика">
      <div class="row mt-3">
        <div class="col-md-6 col-lg-4 my-2">
          <div class="card px-2 h-100">
            <pie-charts>
              <template v-slot:header>
                <div class="d-flex justify-content-between align-items-center">
                  <h4 class="text-center my-2">
                    Пользователи
                  </h4>
                  <p class="text-muted my-2">
                    Last 7 Days
                  </p>
                </div>
              </template>

              <template v-slot:body>
                <ul
                  class="pl-0"
                >
                  <li
                    v-for="item in users"
                    :key="item.user"
                    class="d-flex"
                  >
                    <p class="mr-auto">
                      {{ item.user }}</p>
                    <p>{{ item.people }}</p>
                  </li>
                </ul>
              </template>
            </pie-charts>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 my-2">
          <div class="card px-2 h-100">
            <radar-charts>
              <template v-slot:header>
                <div>
                  <h4 class="mt-2">
                    Конверсия
                  </h4>
                  <p class="text-muted">
                    Последние 6 месяцев
                  </p>
                </div>
              </template>
            </radar-charts>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 my-2 d-flex flex-wrap">
          <cards-static-line class="col-5 mr-2">
            <template v-slot:header>
              <div>
                <h4>
                  Соискатели
                </h4>
                <p class="h1 font-weight-bolder">
                  1 456
                </p>
              </div>
            </template>
          </cards-static-line>

          <cards-static-line class="col-5">
            <template v-slot:header>
              <div>
                <h4>
                  Рекрутёры
                </h4>
                <p class="h1 font-weight-bolder">
                  567
                </p>
              </div>
            </template>
          </cards-static-line>

          <cards-static-line class="col-5">
            <template v-slot:header>
              <div>
                <h4>
                  Работодатели
                </h4>
                <p class="h1 font-weight-bolder">
                  2 800
                </p>
              </div>
            </template>
          </cards-static-line>
        </div>
      </div>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BButton, BTab, BTabs } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import PieCharts from './PieCharts.vue'
import RadarCharts from './RadarCharts.vue'
import CardsStaticLine from './CardsStaticLine.vue'

export default {
  components: {
    PieCharts,
    BButton,
    BTab,
    BTabs,
    RadarCharts,
    CardsStaticLine,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      items: [
        {
          channel: 'Instagram',
          people: 890,
        },
        {
          channel: 'Facebook',
          people: 258,
        },
        {
          channel: 'YouTube',
          people: 149,
        },
        {
          channel: 'Linkedin',
          people: 149,
        },
        {
          channel: 'Другое',
          people: 149,
        },
      ],
      total: [
        {
          registered: 'Зарегестрировалось',
          people: 891,
        },
        {
          registered: 'Авторизировалось',
          people: 258,
        },
      ],
      raitings: [
        {
          top: 'Топ 10',
          people: 890,
        },
        {
          top: 'Топ 20',
          people: 258,
        },
        {
          top: 'Топ 30',
          people: 149,
        },
        {
          top: 'Топ 40',
          people: 149,
        },
        {
          top: 'Топ 50',
          people: 146,
        },
        {
          top: 'Топ 60',
          people: 1298,
        },
        {
          top: 'Топ 70',
          people: 754,
        },
        {
          top: 'Топ 80',
          people: 54,
        },
        {
          top: 'Топ 90',
          people: 157,
        },
      ],
      users: [
        {
          user: 'Соискатели',
          people: 891,
        },
        {
          user: 'Работодатели',
          people: 258,
        },
        {
          user: 'Рекрутеры',
          people: 146,
        },
      ],
    }
  },
}
</script>
