<template>
  <div>
    <div class="admins">
      <p class="text-uppercase pl-1">
        Модерация структуры знаний</p>
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

        <!-- Column: Status -->
        <span v-if="props.column.field === 'status'">
          <b-badge :variant="statusVariant(props.row.status)">
            {{ statusText(props.row.status) }}
          </b-badge>
        </span>

        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'action'">
          <span class="font-weight-bold mr-1">
            <b-button
              v-ripple.400="'rgba(40, 199, 111, 0.15)'"
              variant="flat-secondary"
              class="btn-icon rounded-circle"
            >
              <feather-icon
                size="18"
                icon="PlusCircleIcon"
              />
            </b-button>В базу
          </span>
          <span class="font-weight-bold mr-3">
            <b-button
              v-ripple.400="'rgba(40, 199, 111, 0.15)'"
              variant="flat-secondary"
              class="btn-icon rounded-circle"
            >
              <feather-icon
                size="18"
                icon="PlusCircleIcon"
              />
            </b-button>В профиль
          </span>
          <span class="mr-2">
            <b-button
              v-ripple.400="'rgba(40, 199, 111, 0.15)'"
              variant="flat-secondary"
              class="btn-icon rounded-circle"
            >
              <feather-icon
                size="18"
                icon="Edit2Icon"
              />
            </b-button>
          </span>
          <span>
            <b-button
              v-ripple.400="'rgba(40, 199, 111, 0.15)'"
              variant="flat-secondary"
              class="btn-icon rounded-circle"
            >
              <feather-icon
                size="18"
                icon="TrashIcon"
              />
            </b-button>
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
              <b-dropdown-item v-b-modal.modal-delete-tehnology>
                Удалить
              </b-dropdown-item>
            </b-dropdown>
            <b-modal
              id="modal-delete-tehnology"
              centered
              hide-footer
              hide-header
            >
              <p class="text-center mt-2 text-warning">
                <feather-icon
                  icon="AlertCircleIcon"
                  size="90"
                />
              </p>
              <p class="h2 my-1 text-center">
                Вы уверены что хотите удалить выбранные технологии?
              </p>
              <div class="text-center mt-3 mb-3">
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="danger"
                  class="mr-2"
                >
                  Да, удалить
                </b-button>
                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline-primary"
                >
                  Отмена
                </b-button>
              </div>
            </b-modal>
          </div>
        </div>
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap">
              Технологий: {{ pageLength }} из {{ props.total }}
            </span>
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
  BBadge, BPagination, BDropdown, BDropdownItem, BButton,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    VueGoodTable,
    BBadge,
    BPagination,
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
      pageLength: 4,
      dir: false,
      columns: [
        {
          label: 'Технология, ID',
          field: 'tehnology',
          filterOptions: {
            styleClass: 'form-control',
            enabled: true,
            placeholder: 'Технология',
          },
        },
        {
          label: 'Фреймворки',
          field: 'fraemworks',
          filterOptions: {
            enabled: true,
            placeholder: 'Фреймворки',
          },
        },
        {
          label: 'Статус',
          field: 'status',
          filterOptions: {
            enabled: true,
            placeholder: 'Укажите статус',
            filterDropdownItems: [
              { value: 1, text: 'Утверждён' },
              { value: 2, text: 'В базу' },
              { value: 3, text: 'В профиль' },
              { value: 4, text: 'На модерации' },
            ],
          },
        },
        {
          label: 'Действия',
          field: 'action',
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
        2: 'light-primary',
        3: 'light-info',
        4: 'light-danger',
        /* eslint-enable key-spacing */
      }

      return status => statusColor[status]
    },
    statusText() {
      const statusText = {
        /* eslint-disable key-spacing */
        1: 'Утверждён',
        2: 'В базу',
        3: 'В профиль',
        4: 'На модерации',
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
    this.$http.get('/assets/examlpesJson/moderation-know.json')
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
