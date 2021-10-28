<template>
  <div class="col-xl-8">
    <div class="admins">
      <p class="text-uppercase pl-1">
        ОСВ</p>
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
        <div
          v-if="props.column.field === 'employerName'"
          class="text-nowrap pointer d-flex align-items-center"
          @click="$router.push('/history-token?id='+props.row.id)"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <div class="d-flex flex-column">
            <span class="text-nowrap">{{ props.row.employerName }}</span>
            <!-- <span class="text-muted">{{ props.row.idCompany }}</span> -->
          </div>
        </div>

        <!-- startPeriod -->
        <span v-else-if="props.column.field === 'startPeriod'">
          <span class="text-nowrap">{{ props.row.startPeriod }}</span> <br>
          <span class="text-nowrap">{{ props.row.startPeriodMoney }}</span>
        </span>

        <!-- comingToken -->
        <span v-else-if="props.column.field === 'comingToken'">
          <span class="text-nowrap">{{ props.row.comingToken }}</span> <br>
          <span class="text-nowrap">{{ props.row.comingTokenMoney }}</span>
        </span>

        <!-- rateToken -->
        <span v-else-if="props.column.field === 'rateToken'">
          <span class="text-nowrap">{{ props.row.rateToken }}</span> <br>
          <span class="text-nowrap">{{ props.row.rateTokenMoney }}</span>
        </span>

        <!-- lastPeriod -->
        <span v-else-if="props.column.field === 'lastPeriod'">
          <span class="text-nowrap">{{ props.row.lastPeriod }}</span> <br>
          <span class="text-nowrap">{{ props.row.lastPeriodMoney }}</span>
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

    <div class="card pt-1">
      <div class="row">
        <div class="col-4 pl-4 pb-50 h4 d-flex align-items-end">
          Итого:
        </div>
        <div class="col-12 col-sm-8 row ml-0">
          <div class="col-3 col-sm-2">
            <p>350</p>
            <p>240$</p>
          </div>
          <div class="col-3 col-sm-2">
            <p>350</p>
            <p>240$</p>
          </div>
          <div class="col-3 col-sm-2">
            <p>350</p>
            <p>240$</p>
          </div>
          <div class="col-3 col-sm-2">
            <p>350</p>
            <p>240$</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BAvatar, BPagination, BFormSelect,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'

export default {
  components: {
    VueGoodTable,
    BAvatar,
    BPagination,
    BFormSelect,
  },
  data() {
    return {
      selectedRows: [],
      pageLength: 5,
      dir: false,
      columns: [
        {
          label: '№',
          field: 'id',
        },
        {
          label: 'Работодатель, ID',
          field: 'employerName',
          filterOptions: {
            styleClass: 'form-control',
            enabled: true,
            placeholder: 'Работодатель',
          },
        },
        {
          label: 'В начале периода',
          field: 'startPeriod',
          filterOptions: {
            enabled: true,
            placeholder: '23',
          },
        },
        {
          label: 'Приход токен',
          field: 'comingToken',
          filterOptions: {
            enabled: true,
            placeholder: '33',
          },
        },
        {
          label: 'Расход токен',
          field: 'rateToken',
          filterOptions: {
            enabled: true,
            placeholder: '54',
          },
        },
        {
          label: 'В конце периода',
          field: 'lastPeriod',
          filterOptions: {
            enabled: true,
            placeholder: '32',
          },
        },
        {
          label: 'Дата последней покупки',
          field: 'lastDate',
          filterOptions: {
            enabled: true,
            placeholder: '12.08.2021',
          },
        },
      ],
      rows: [],
      searchTerm: '',
    }
  },
  computed: {

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
    this.$http.get('/assets/examlpesJson/finance-osv.json')
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
