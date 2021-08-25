<template>
  <div>
    <div class="admins">
      <p class="text-uppercase pl-1">
        Администраторы</p>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        class="admins__btn"
        variant="flat-primary"
      >
        Добавить
      </b-button>
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
          @click="$router.push('/admin-card?id='+props.row.id)"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span class="text-nowrap">{{ props.row.fullName }}</span>
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
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="outline-secondary"
              class="mr-1"
            >
              Отмена
            </b-button>
            <b-dropdown
              id="dropdown-admins"
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              text="Удалить"
              variant="outline-secondary"
            >
              <b-dropdown-item>Действие</b-dropdown-item>
              <b-dropdown-item>Просмотреть</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
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
          label: 'Администратор, ID',
          field: 'fullName',
          filterOptions: {
            styleClass: 'form-control',
            enabled: true,
            placeholder: 'Search Name',
          },
        },
        {
          label: 'Логин',
          field: 'email',
          filterOptions: {
            enabled: true,
            placeholder: 'Search Email',
          },
        },
        {
          label: 'Роль',
          field: 'salary',
          filterOptions: {
            enabled: true,
            placeholder: 'Укажите роль',
            filterDropdownItems: ['Админ', 'Злой админ', 'Модератор'],
          },
        },
        {
          label: 'Статус',
          field: 'status',
          filterOptions: {
            enabled: true,
            placeholder: 'Укажите статус',
            filterDropdownItems: [
              { value: 1, text: 'Активен' },
              { value: 2, text: 'Неактивен' },
              { value: 3, text: 'Заблокирован' },
            ],
          },
        },
        {
          label: 'Дата',
          field: 'startDate',
          filterOptions: {
            enabled: true,
            placeholder: 'Search Date',
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
        2: 'light-secondary',
        3: 'light-danger',
        /* eslint-enable key-spacing */
      }

      return status => statusColor[status]
    },
    statusText() {
      const statusText = {
        /* eslint-disable key-spacing */
        1: 'Активен',
        2: 'Неактивен',
        3: 'Заблокирован',
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
    this.$http.get('/assets/example-users.json')
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

<style scoped lang="scss">
  .btn-flat-secondary:hover:not(.disabled):not(:disabled) {
    background-color: unset;
  }
  .btn-flat-secondary:active,
  .btn-flat-secondary.active,
  .btn-flat-secondary:focus {
    background-color: unset;
  }
</style>
