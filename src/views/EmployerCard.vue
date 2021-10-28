<template>
  <div class="card bg-white p-2 p-lg-5 castom-tab">
    <b-tabs
      pills
      vertical
      class="flex-nowrap for-overflow"
    >
      <b-tab
        active
      >
        <template #title>
          <feather-icon
            icon="UserIcon"
            class="mr-50 d-inline"
          />
          <span class="d-none d-sm-inline">Основная информация</span>
        </template>
        <b-card-text>
          <p class="h4">
            {{ 'name' }}</p>
          <b-avatar
            rounded="sm"
            variant="light-primary"
            size="104px"
            :src="require('@/assets/images/avatars/epam.png')"
          />
          <info-employer-user />
        </b-card-text>
      </b-tab>

      <b-tab>
        <template #title>
          <feather-icon
            icon="BriefcaseIcon"
            class="mr-50"
          />
          <span class="d-none d-sm-inline">Ведущий рекрутер</span>
        </template>
        <b-card-text>
          <p class="h4">
            {{ 'name' }}</p>
          <b-avatar
            rounded="sm"
            variant="light-primary"
            size="104px"
            :src="require('@/assets/images/avatars/epam.png')"
          />
          <main-recruter />

          <!-- buttons -->
          <div class="mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              type="submit"
              variant="primary"
              class="mr-1 mb-1"
            >
              Сохранить изменения
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="reset"
              variant="outline-primary"
              class="mb-1"
            >
              Отмена
            </b-button>
          </div>

        </b-card-text>
      </b-tab>

      <b-tab>
        <template #title>
          <feather-icon
            icon="BookIcon"
            class="mr-50"
          />
          <span class="d-none d-sm-inline">История наймов</span>
        </template>
        <b-card-text>
          <history-hiring />

        </b-card-text>
      </b-tab>

      <b-tab>
        <template #title>
          <feather-icon
            icon="LockIcon"
            class="mr-50"
          />
          <span class="d-none d-sm-inline">Журнал действий</span>
        </template>
        <b-card-text>
          <activity-log />
        </b-card-text>
      </b-tab>
    </b-tabs>

  </div>
</template>

<script>
import {
  BCardText, BTab, BTabs, BAvatar, BButton,
} from 'bootstrap-vue'
import InfoEmployerUser from '@/anworks/employers/InfoEmployerUser.vue'
import MainRecruter from '@/anworks/employers/MainRecruter.vue'
import HistoryHiring from '@/anworks/employers/HistoryHiring.vue'
import ActivityLog from '@/anworks/employers/ActivityLog.vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCardText,
    BTab,
    BTabs,
    BAvatar,
    InfoEmployerUser,
    MainRecruter,
    HistoryHiring,
    ActivityLog,
    BButton,
  },
  directives: {
    Ripple,
  },

  data: () => ({
    users: [],
    model: {},
  }),
}
</script>

<style lang="scss">
  .castom-tab {
    .nav-pills {
    align-items: flex-start;
    }
  }
  .for-overflow > .tab-content {
    overflow: hidden;
  }
</style>
