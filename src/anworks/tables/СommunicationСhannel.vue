<template>
  <div>
    <div class="admins">
      <p class="text-uppercase pl-1">Каналы связи работодателя
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
          @click="$router.push('/employer-card?id='+props.row.id)"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span class="text-nowrap">{{ props.row.fullName }}</span>
        </div>

        <!-- Column: ChatBot -->
        <span v-else-if="props.column.field === 'chatBot'">
          <b-badge :variant="chatVariant(props.row.chatBot)">
            {{ chatText(props.row.chatBot) }}
          </b-badge>
        </span>

        <!-- Column: Media -->
        <!-- <span v-else-if="props.column.field === 'media'">
          <span>
            <feather-icon
              icon="CheckIcon"
              size="23"
              class="text-success"
            />
            <img src="@/assets/images/svg/check.svg">
          </span>
        </span> -->

        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'action'">
          <span>
            <b-button
              v-ripple.400="'rgba(40, 199, 111, 0.15)'"
              variant="flat"
              class="btn-icon rounded-circle"
            >
              <feather-icon
                icon="EyeIcon"
                size="18"
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

        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap">
              Showing {{ pageLength }} of {{ props.total }} entries
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
  BAvatar, BBadge, BPagination, BButton,
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
          label: 'Пользователь, ID',
          field: 'fullName',
          filterOptions: {
            enabled: true,
            placeholder: 'Имя пользователя',
          },
        },
        {
          label: 'Чат бот',
          field: 'chatBot',
          filterOptions: {
            enabled: true,
            placeholder: 'Чат',
            filterDropdownItems: [
              { value: 1, text: 'Есть' },
              { value: 2, text: 'Нет' },
            ],
          },
        },
        {
          label: 'Последнее письмо',
          field: 'lastLetter',
          filterOptions: {
            enabled: true,
            placeholder: 'Письмо',
            filterDropdownItems: ['Открыто', 'Не открыто'],
          },
        },
        {
          label: 'Почта',
          field: 'post',
          filterOptions: {
            enabled: true,
            placeholder: 'Почта',
          },
        },
        {
          label: 'Gmail',
          field: 'gmail',
          filterOptions: {
            enabled: true,
            placeholder: 'Почта',
          },
        },
        {
          label: 'Соц сети (подтвер.)',
          field: 'media',
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

    chatVariant() {
      const chatColor = {
        /* eslint-disable key-spacing */
        1: 'light-success',
        2: 'light-danger',
        /* eslint-enable key-spacing */
      }

      return chat => chatColor[chat]
    },
    chatText() {
      const chatText = {
        /* eslint-disable key-spacing */
        1: 'Есть',
        2: 'Нет',
        /* eslint-enable key-spacing */
      }

      return chat => chatText[chat]
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
    this.$http.get('/assets/channel-users.json')
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
  .pointer{
    cursor: pointer;
  }
</style>
