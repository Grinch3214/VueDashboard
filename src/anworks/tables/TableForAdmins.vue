<template>
  <div class="border mt-2 rounded">
    <div class="d-flex mt-2 pl-2">
      <feather-icon
        icon="ClockIcon"
        size="26"
        class="text-secondary"
      />
      <p class="h3 pl-1">
        История действий
      </p>
    </div>
    <!-- table -->
    <b-table
      responsive
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
      :current-page="currentPage"
      :per-page="perPage"
      class="mt-2"
    />
    <div class="pl-2 pr-2 mt-2 d-flex justify-content-between align-items-center flex-wrap">
      <p class="text-black-50">
        Действий <span>{{ perPage }} из {{ totalRows }}</span></p>
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
import axios from 'axios'

export default {
  components: {
    BTable,
    BPagination,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 4,
      fields: ['Действие', 'Время', 'Дата', 'IP'],
      items: [],
      tableVariants: [
        'none',
        'primary',
        'secondary',
        'info',
        'danger',
        'warning',
        'success',
        'light',
        'dark',
      ],
      striped: true,
      bordered: false,
      borderless: true,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: 'none',
      noCollapse: false,
    }
  },
  computed: {
    totalRows() {
      return this.items.length
    },
  },
  created() {
    axios
      .get('/assets/examlpesJson/active-history-for-admin.json')
      .then(response => { this.items = response.data })
  },
}
</script>
