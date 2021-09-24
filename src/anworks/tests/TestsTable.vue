<template>
  <div>
    <h1>
      {{ tests.title }}</h1>
    <div class="card table-hover">
      <b-table
        responsive="sm"
        hover
        :fields="fields"
        :items="items"
        @row-clicked="selectedEditTest"
      />
    </div>
    <div>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="$router.push('/tests-test-base?id=')"
      >
        Добавить тест
      </b-button>
    </div>
  </div>
</template>

<script>
import { BTable, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BTable,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      tests: { title: 'Тесты по технологиям' },
      fields: [
        { technology: 'Технология' },
        { questions: 'Кол-во вопросов' },
        { maxScore: 'Макс. балл' },
        { time: 'Время прохождения, мин' },
      ],
      items: [
        {
          technology: 'JavaScript', questions: 60, maxScore: 100, time: 120,
        },
        {
          technology: 'JavaScript', questions: 60, maxScore: 100, time: 120,
        },
        {
          technology: 'JavaScript', questions: 60, maxScore: 100, time: 120,
        },
        {
          technology: 'JavaScript', questions: 60, maxScore: 100, time: 120,
        },
        {
          technology: 'JavaScript', questions: 60, maxScore: 100, time: 120,
        },
        {
          technology: 'JavaScript', questions: 60, maxScore: 100, time: 120,
        },
      ],
    }
  },
  methods: {
    selectedEditTest() {
      this.$router.push({ path: '/tests-test-base-edit?id=' })
    },
  },
}
</script>

<style lang="scss">
  .table-hover {
      .table-hover tbody tr:hover {
          background-color: unset;
          box-shadow: 0 4px 14px rgba(130, 134, 139, 0.38);
      }
  }
</style>
