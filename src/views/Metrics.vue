<template>
  <div>
    <div class="admins">
      <p class="text-uppercase pl-1">
        метрики работодателей</p>
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

        <!-- Column: companyName -->
        <div
          v-if="props.column.field === 'companyName'"
          class="text-nowrap pointer d-flex align-items-center"
          @click="$router.push('/admin-card?id='+props.row.id)"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <div class="d-flex flex-column">
            <span class="text-nowrap">{{ props.row.companyName }}</span>
            <span class="text-muted">{{ props.row.idCompany }}</span>
          </div>
        </div>

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
      pageLength: 3,
      dir: false,
      columns: [
        {
          label: '№',
          field: 'id',
        },
        {
          label: 'Компания, ID',
          field: 'companyName',
          filterOptions: {
            styleClass: 'form-control',
            enabled: true,
            placeholder: 'Search Name',
          },
        },
        {
          label: 'Баланс, токен',
          field: 'tokenBalance',
          filterOptions: {
            enabled: true,
            placeholder: '12',
          },
        },
        {
          label: 'Баланс, грн',
          field: 'uaBalance',
          filterOptions: {
            enabled: true,
            placeholder: '100 000',
          },
        },
        {
          label: 'Баланс, usd',
          field: 'usdBalance',
          filterOptions: {
            enabled: true,
            placeholder: '30 000',
          },
        },
        {
          label: 'Дата и время покупки',
          field: 'priceDate',
          filterOptions: {
            enabled: true,
            placeholder: 'Введите дату и время',
          },
        },
        {
          label: 'Кол-во потраченных токенов',
          field: 'spentToken',
          filterOptions: {
            enabled: true,
            placeholder: '32',
          },
        },
        {
          label: 'Средняя стоимость 1-го найма',
          field: 'costFirstToken',
          filterOptions: {
            enabled: true,
            placeholder: '12',
          },
        },
        {
          label: 'Количество открытий контактов',
          field: 'quantityOpenContact',
          filterOptions: {
            enabled: true,
            placeholder: '12',
          },
        },
        {
          label: 'Средняя стоимость открытия контакта',
          field: 'costOpenContact',
          filterOptions: {
            enabled: true,
            placeholder: '12',
          },
        },
        {
          label: 'Дата последнего открытия',
          field: 'lastDate',
          filterOptions: {
            enabled: true,
            placeholder: '12.07.2021',
          },
        },
        {
          label: 'Количество наймов соискателей',
          field: 'quantityJobSeekers',
          filterOptions: {
            enabled: true,
            placeholder: '12',
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
    this.$http.get('/assets/metrics-users-page.json')
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
