<template>
  <div>

    <div class="admins mb-0">
      <p class="text-uppercase pl-1">
        Журнал действий</p>
    </div>

    <b-table
      responsive
      :fields="fields"
      :items="items"
      :current-page="currentPage"
      :per-page="perPage"
    />

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
  BTable, BPagination,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BTable,
    BPagination,
  },
  directives: {
    Ripple,
  },
  data() {
    return {

      currentPage: 1,
      perPage: 6,
      totalRows: 0,

      fields: [
        { date: 'Дата и время' },
        { activity: 'Действие' },
      ],

      items: [],
    }
  },

  created() {
    this.$http.get('/assets/activity-log.json')
      .then(res => { this.items = res.data })

    this.$http.get('/assets/activity-log.json')
      .then(res => { this.totalRows = res.data.length })
  },
}
</script>
