<template>
  <div>
    <div class="admins">
      <p class="text-uppercase pl-1">
        История движения токен</p>
    </div>

    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :rtl="direction"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm }"
      :pagination-options="{
        enabled: true,
        perPage:pageLength
      }"
      class="card bg-white p-2"
      @on-selected-rows-change="selectionChanged"
    >
      <template
        slot="table-row"
        slot-scope="props"
      >

        <!-- Column: employerName --> <!-- @click="$router.push('/admin-card?id='+props.row.id)" -->

        <!-- howManyToken -->
        <span v-if="props.column.field === 'howManyToken'">
          <span class="text-nowrap">{{ props.row.howManyToken }}</span> <br>
          <span class="text-nowrap">{{ props.row.howManyTokenPrice }}</span>
        </span>

        <!-- balanceToken -->
        <span v-else-if="props.column.field === 'balanceToken'">
          <span class="text-nowrap">{{ props.row.balanceToken }}</span> <br>
          <span class="text-nowrap">{{ props.row.balanceTokenPrice }}</span>
        </span>

        <!-- initiator -->
        <span v-else-if="props.column.field === 'initiator'">
          <span class="text-nowrap">{{ props.row.initiator }}</span> <br>
          <span class="text-nowrap">{{ props.row.initiatorHr }}</span>
        </span>

        <!-- Column: Status -->
        <span v-else-if="props.column.field === 'statusFinance'">
          <b-badge :variant="statusVariant(props.row.statusFinance)">
            {{ statusText(props.row.statusFinance) }}
          </b-badge>
        </span>

        <!-- test Button -->
        <span
          v-else-if="props.column.field === 'btn'"
        > <b-form-select
            v-model="selectedStatus"
            :options="statusOptions"
            size="sm"
            class="mb-25"
          />
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
          >
            Установить
          </b-button>
        </span>

        <!-- Column: Common -->
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>

      <!-- pagination -->
      <template
        slot="pagination-bottom"
        slot-scope="props"
      >
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap">
              Showing 1 to
            </span>
            <b-form-select
              v-model="pageLength"
              :options="['3', '5','10','15']"
              class="mx-1"
              @input="(value)=>props.perPageChanged({currentPerPage:value})"
            />
            <span class="text-nowrap "> of {{ props.total }} entries </span>
          </div>
          <div>
            <b-pagination
              :value="1"
              :total-rows="props.total"
              :per-page="pageLength"
              first-number
              last-number
              align="right"
              prev-class="prev-item"
              next-class="next-item"
              class="mt-1 mb-0"
              @input="(value)=>props.pageChanged({currentPage:value})"
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
    </vue-good-table>

  </div>
</template>

<script>
import {
  BPagination, BFormSelect, BBadge, BButton,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    VueGoodTable,
    BPagination,
    BFormSelect,
    BBadge,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      selectedRows: [],
      pageLength: 5,
      dir: false,
      selectedStatus: null,
      statusOptions: [{ value: 1, text: 'Завершен' }, { value: 2, text: 'Отменен' }],
      columns: [
        {
          label: '№',
          field: 'id',
        },
        {
          label: 'Дата и время',
          field: 'dateTime',
          filterOptions: {
            enabled: true,
            placeholder: 'Введите дату и время',
          },
        },
        {
          label: 'Тип операции',
          field: 'typeToken',
          filterOptions: {
            enabled: true,
            placeholder: 'Тип операции',
          },
        },
        {
          label: 'Кол-во токен',
          field: 'howManyToken',
          filterOptions: {
            enabled: true,
            placeholder: '100 000',
          },
        },
        {
          label: 'Остаток токен',
          field: 'balanceToken',
          filterOptions: {
            enabled: true,
            placeholder: '100 000',
          },
        },
        {
          label: 'Инициатор',
          field: 'initiator',
          filterOptions: {
            enabled: true,
            placeholder: '2223',
          },
        },
        {
          label: 'Статус',
          field: 'statusFinance',
          filterOptions: {
            enabled: true,
            placeholder: 'Статус',
            filterDropdownItems: [
              { value: 1, text: 'Завершен' },
              { value: 2, text: 'Отменен' },
            ],
          },
        },
        {
          label: 'Test',
          field: 'btn',
          html: true,
        },
      ],
      rows: [],
      searchTerm: '',
    }
  },
  computed: {
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        1: 'light-success',
        2: 'light-secondary',
        /* eslint-enable key-spacing */
      }

      return status => statusColor[status]
    },
    statusText() {
      const statusText = {
        /* eslint-disable key-spacing */
        1: 'Завершен',
        2: 'Отменен',
        /* eslint-enable key-spacing */
      }

      return status => statusText[status]
    },

    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  created() {
    this.$http.get('/assets/examlpesJson/history-of-osvfinance.json')
      .then(res => { this.rows = res.data })
  },
  methods: {
    selectionChanged(event) {
      this.selectedRows = event.selectedRows
    },
  },
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-good-table.scss';
</style>

<style lang="scss">
  .vgt-table th.sortable {
    text-align: center;
    vertical-align: middle;
}
</style>
