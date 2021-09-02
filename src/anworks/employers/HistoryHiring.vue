<template>
  <div>

    <div class="admins mb-0">
      <p class="text-uppercase pl-1">
        История наймов</p>
    </div>

    <b-table
      responsive
      :fields="fields"
      :items="items"
      table-class="text-nowrap"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template #cell(recruter)="data">
        <span> {{ data.value.name }}</span><br>
        <span> {{ data.value.lastName }}</span><br>
        <span class="text-muted"> {{ data.value.idRecruter }}</span>
      </template>

      <template #cell(jobseeker)="data">
        <span> {{ data.value.name }}</span><br>
        <span class="text-muted"> {{ data.value.idJobSeeker }}</span>
      </template>

      <template #cell(contacts)="data">
        <span> {{ data.value.phone }}</span><br>
        <span> {{ data.value.email }}</span><br>
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          variant="flat-secondary"
          class="btn-icon rounded-circle"
        >
          <feather-icon
            icon="EyeIcon"
            size="18"
          />
        </b-button>
      </template>

      <template #cell(status)="data">
        <b-badge :variant="data.value.variant">
          {{ data.value.statusEP }}</b-badge>
      </template>
    </b-table>

    <div class="d-flex justify-content-between align-items-center">
      <span class="text-muted">Контактов {{ perPage }} из {{ totalRows }}</span>
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        first-number
        last-number
        prev-class="prev-item"
        next-class="next-item"
      >
        <template #prev-text>
          <feather-icon
            icon="ChevronLeftIcon"
            size="18"
          />
        </template>
        <template #next-text>
          <feather-icon
            icon="ChevronRightIcon"
            size="18"
          />
        </template>
      </b-pagination>
    </div>

  </div>
</template>

<script>
import {
  BTable, BButton, BBadge, BPagination,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BTable,
    BButton,
    BBadge,
    BPagination,
  },
  directives: {
    Ripple,
  },
  data() {
    return {

      currentPage: 1,
      perPage: 4,
      totalRows: 0,

      fields: [
        { date: 'Дата' },
        { recruter: 'Рекрутер' },
        { jobseeker: 'Соискатель' },
        { position: 'Должность' },
        { contacts: 'Контакты' },
        { price: 'Цена' },
        { status: 'Статус' },
      ],

      items: [],
    }
  },

  created() {
    this.$http.get('/assets/history-test.json')
      .then(res => { this.items = res.data })

    this.$http.get('/assets/history-test.json')
      .then(res => { this.totalRows = res.data.length })
  },
}
</script>
