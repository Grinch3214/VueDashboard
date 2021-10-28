<template>
  <div class="col-xl-8">
    <div class="admins">
      <p class="text-uppercase pl-1">Жалобы
      </p>
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

        <!-- Column: Name -->
        <div
          v-if="props.column.field === 'fullName'"
          class="text-nowrap pointer"
          @click="$router.push('/complaint-card?id='+props.row.id)"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span class="text-nowrap">{{ props.row.fullName }}</span>
        </div>

        <div
          v-else-if="props.column.field === 'whoName'"
          class="text-nowrap pointer"
          @click="$router.push('/complaint-card?id='+props.row.id)"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span class="text-nowrap">{{ props.row.whoName }}</span>
        </div>

        <!-- Column: Status -->
        <span v-else-if="props.column.field === 'status'">
          <b-badge :variant="statusVariant(props.row.status)">
            {{ statusText(props.row.status) }}
          </b-badge>
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
        <div class="d-flex justify-content-between align-items-center flex-wrap mt-1">
          <div class="text-nowrap mt-1">
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="flat-secondary"
              class="btn-icon rounded-circle"
            >
              <feather-icon
                icon="XIcon"
                size="30"
              />
            </b-button>
            <p class="d-inline-block pl-1 mb-0">
              Выбрано: <span> {{ selectedRows.length }} </span></p>
          </div>
          <!-- buttoms -->
          <div class="mt-1">
            <b-dropdown
              id="dropdown-admins"
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              text="Удалить"
              variant="outline-secondary"
              class="mr-1"
            >
              <b-dropdown-item>Действие</b-dropdown-item>
              <b-dropdown-item>Просмотреть</b-dropdown-item>
            </b-dropdown>
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="outline-secondary"
            >
              Применить
            </b-button>
          </div>
        </div>
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap">
              Showing 1 to
            </span>
            <b-form-select
              v-model="pageLength"
              :options="['3','5','7','10']"
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
  BAvatar, BBadge, BPagination, BFormSelect, BDropdown, BDropdownItem, BButton,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    VueGoodTable,
    BAvatar,
    BBadge,
    BPagination,
    BFormSelect,
    BDropdown,
    BDropdownItem,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      selectedRows: [],
      pageLength: 3,
      dir: false,
      columns: [
        {
          label: 'От кого',
          field: 'fullName',
          filterOptions: {
            styleClass: 'form-control',
            enabled: true,
            placeholder: 'Введите имя, компанию или ID',
          },
        },
        {
          label: 'Дата',
          field: 'date',
          filterOptions: {
            enabled: true,
            placeholder: 'Дата',
          },
        },
        {
          label: 'Кому',
          field: 'whoName',
          filterOptions: {
            styleClass: 'form-control',
            enabled: true,
            placeholder: 'Введите имя, компанию или ID',
          },
        },
        {
          label: 'Причина',
          field: 'reason',
          filterOptions: {
            enabled: true,
            placeholder: 'Причина',
          },
        },
        {
          label: 'Статус',
          field: 'status',
          filterOptions: {
            enabled: true,
            placeholder: 'Статус',
            filterDropdownItems: [
              { value: 1, text: 'Рассмотрена' },
              { value: 2, text: 'Ожидает' },
              { value: 3, text: 'На рассмотрении' },
            ],
          },
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
        2: 'light-danger',
        3: 'light-primary',
        /* eslint-enable key-spacing */
      }

      return status => statusColor[status]
    },
    statusText() {
      const statusText = {
        /* eslint-disable key-spacing */
        1: 'Рассмотрена',
        2: 'Ожидает',
        3: 'На рассмотрении',
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
    this.$http.get('/assets/examlpesJson/complaints.json')
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
