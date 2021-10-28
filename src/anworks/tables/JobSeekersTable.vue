<template>
  <div class="col-xl-8">
    <div class="admins">
      <p class="text-uppercase pl-1">Соискатели
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
          @click="$router.push('/job-seekers-card?id='+props.row.id)"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span class="text-nowrap">{{ props.row.fullName }}</span>
        </div>

        <!-- Column: Verification -->
        <span v-else-if="props.column.field === 'verification'">
          <b-badge :variant="verificationVariant(props.row.verification)">
            {{ verificationText(props.row.verification) }}
          </b-badge>
        </span>

        <!-- Column: Profile -->
        <span
          v-else-if="props.column.field === 'profile'"
          class="h2 text-primary text-center"
        >
          {{ props.row.profile }}
        </span>

        <!-- Column: Hired -->
        <span v-else-if="props.column.field === 'hired'">
          <b-badge :variant="hiredVariant(props.row.hired)">
            {{ hiredText(props.row.hired) }}
          </b-badge>
        </span>

        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'action'">
          <span>
            <b-button
              v-ripple.400="'rgba(40, 199, 111, 0.15)'"
              variant="flat"
              class="btn-icon rounded-circle"
            >
              <feather-icon
                icon="ThumbsDownIcon"
                size="18"
              />
            </b-button>
          </span>
        </span>

        <!-- Column: Common -->
        <span
          v-else
          class="text-nowrap"
        >
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
          label: 'Соискатель, ID',
          field: 'fullName',
          filterOptions: {
            styleClass: 'form-control',
            enabled: true,
            placeholder: 'Имя соискателя',
          },
        },
        {
          label: 'Дата регистрации',
          field: 'date',
          filterOptions: {
            enabled: true,
            placeholder: 'Дата',
          },
        },
        {
          label: 'Навык',
          field: 'skill',
          filterOptions: {
            enabled: true,
            placeholder: 'Навык',
          },
        },
        {
          label: 'Пол',
          field: 'gender',
          filterOptions: {
            enabled: true,
            placeholder: 'Пол',
            filterDropdownItems: ['Мужской', 'Женский'],
          },
        },
        {
          label: 'Статус',
          field: 'status',
          filterOptions: {
            enabled: true,
            placeholder: 'Статус',
            filterDropdownItems: ['Создан', 'В рейтинге', 'Ожидает', 'Нейтрален'],
          },
        },
        {
          label: 'Верификация',
          field: 'verification',
          filterOptions: {
            enabled: true,
            placeholder: 'Верификация',
            filterDropdownItems: [
              { value: 1, text: 'Верифицирован' },
              { value: 2, text: 'Заблокирован' },
            ],
          },
        },
        {
          label: 'Школа',
          field: 'itSchool',
          filterOptions: {
            enabled: true,
            placeholder: 'Школа',
          },
        },
        {
          label: 'Профиль',
          field: 'profile',
          filterOptions: {
            enabled: true,
            placeholder: 'Профиль',
          },
        },
        {
          label: 'Найм',
          field: 'hired',
          filterOptions: {
            enabled: true,
            placeholder: 'Найм',
            filterDropdownItems: [
              { value: 1, text: 'Нанят' },
              { value: 2, text: 'Не Нанят' },
              { value: 3, text: 'Нанят не через сервис' },
            ],
          },
        },
        {
          label: 'Тест по hard skills',
          field: 'skillTest',
        },
        {
          label: 'Тест по иностранному',
          field: 'languageTest',
        },
        {
          label: 'Жалобы',
          field: 'action',
        },
      ],
      rows: [],
      searchTerm: '',
    }
  },
  computed: {
    verificationVariant() {
      const verificationColor = {
        /* eslint-disable key-spacing */
        1: 'light-success',
        2: 'light-danger',
        /* eslint-enable key-spacing */
      }

      return verification => verificationColor[verification]
    },
    verificationText() {
      const verificationText = {
        /* eslint-disable key-spacing */
        1: 'Верифицирован',
        2: 'Заблокирован',
        /* eslint-enable key-spacing */
      }

      return verification => verificationText[verification]
    },

    hiredVariant() {
      const hiredColor = {
        /* eslint-disable key-spacing */
        1: 'light-primary',
        2: 'light-danger',
        3: 'light-success',
        /* eslint-enable key-spacing */
      }

      return hired => hiredColor[hired]
    },
    hiredText() {
      const hiredText = {
        /* eslint-disable key-spacing */
        1: 'Нанят',
        2: 'Не нанят',
        3: 'Нанят не через сервис',
        /* eslint-enable key-spacing */
      }

      return hired => hiredText[hired]
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
    this.$http.get('/assets/examlpesJson/job-seekers-users.json')
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
.vgt-table thead th {
    vertical-align: middle;
}
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
