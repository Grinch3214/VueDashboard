<template>
  <div class="card bg-white p-2 p-lg-5">
    <b-tabs pills>
      <b-tab active>
        <template #title>
          <feather-icon
            icon="UserIcon"
            class="mr-50 d-inline d-sm-none"
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
          <info-recruiter-user />
        </b-card-text>
      </b-tab>
      <b-tab>
        <template #title>
          <feather-icon
            icon="PhoneIcon"
            class="mr-50"
          />
          <span class="d-none d-sm-inline">Контакты</span>
        </template>
        <b-card-text>

          <contact-tab-user />

          <!-- buttons -->
          <div class="mt-4">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              type="submit"
              variant="primary"
              class="mr-1"
            >
              Сохранить
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="reset"
              variant="outline-primary"
            >
              Отмена
            </b-button>
          </div>

        </b-card-text>
      </b-tab>
      <b-tab>
        <template #title>
          <feather-icon
            icon="ThumbsDownIcon"
            class="mr-50"
            badge="2"
            badge-classes="badge-danger badge-glow"
          />
          <span class="d-none d-sm-inline">Жалобы</span>
        </template>
        <b-card-text>
          <empty-complains-for-tab />
        </b-card-text>
      </b-tab>
    </b-tabs>

  </div>
</template>

<script>
import {
  BCardText, BTab, BTabs, BAvatar, BButton,
} from 'bootstrap-vue'
import InfoRecruiterUser from '@/anworks/components/InfoRecruiterUser.vue'
import ContactTabUser from '@/anworks/components/ContactTabUser.vue'
import EmptyComplainsForTab from '@/anworks/components/EmptyComplainsForTab.vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCardText,
    BTab,
    BTabs,
    BAvatar,
    InfoRecruiterUser,
    ContactTabUser,
    EmptyComplainsForTab,
    BButton,
  },
  directives: {
    Ripple,
  },

  data: () => ({
    users: [],
    model: {},
  }),
  created() {
    this.$http.get('/assets/job-seekers-users.json')
      .then(res => { this.users = res.data })
      .then(() => { this.model = this.users.find(o => o.id === +this.$route.query.id) })
      // eslint-disable-next-line no-alert
      .then(() => (this.model.fullName))
  },
}
</script>

<style lang="scss" scoped>
[dir=ltr] .badge.badge-up {
    right: -90px;
}
.badge.badge-up {
    top: -21px;
}
@media screen and (max-width: 575px) {
  [dir=ltr] .badge.badge-up {
    right: -30px;
  }
}
</style>
