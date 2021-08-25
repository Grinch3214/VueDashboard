<template>
  <div>
    <div class="admins">
      <p class="text-uppercase pl-1">
        Работодатели</p>
    </div>

    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :rtl="direction"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm }"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true,
        selectionInfoClass: 'custom-control-primary',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true,
        selectAllByGroup: true,
      }"
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

        <!-- Column: nameCompany -->
        <div
          v-if="props.column.field === 'nameCompany'"
          class="text-nowrap pointer"
          @click="$router.push('/employer-card?id='+props.row.id)"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span class="text-nowrap">{{ props.row.nameCompany }}</span>
        </div>

        <!-- Column: startVerification -->
        <span
          v-else-if="props.column.field === 'startVerification'"
          @click="$router.push('/verification-profile?id='+props.row.id)"
        >
          <span class="pointer text-primary">
            <u>Начать верификацию</u>
          </span>
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
  BAvatar, BPagination, BFormSelect,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'

export default {
  components: {
    VueGoodTable,
    BAvatar,
    // BBadge,
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
          label: 'ID',
          field: 'idName',
          filterOptions: {
            styleClass: 'form-control',
            enabled: true,
            placeholder: '123456',
          },
        },
        {
          label: 'Ожидает С:',
          field: 'waiting',
          filterOptions: {
            enabled: true,
            placeholder: 'Дата',
          },
        },
        {
          label: 'Логин',
          field: 'login',
          filterOptions: {
            enabled: true,
            placeholder: 'Логин',
          },
        },
        {
          label: 'Название',
          field: 'nameCompany',
          filterOptions: {
            enabled: true,
            placeholder: 'Компания',
          },
        },
        {
          label: 'Верификация',
          field: 'startVerification',
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
    this.$http.get('/assets/verification-employer-table.json')
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
