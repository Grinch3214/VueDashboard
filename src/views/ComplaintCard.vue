<template>
  <div class="card bg-white p-1 p-md-5 m-0 m-md-5">
    <b-tabs pills>
      <b-tab>
        <template #title>
          <feather-icon
            icon="ThumbsDownIcon"
            class="mr-50"
          />
          Жалоба
        </template>
        <div class="row border-bottom pb-4">

          <div class="col-md-6 col-sm-12 d-flex mt-2 justify-content-center">
            <div class="text-center">
              <p class="h4">
                От кого:</p>
              <b-avatar
                size="80px"
                :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
              />
              <p class="h4 mt-1">
                {{ 'Epam' }}</p>
              <span class="text-muted"><small>ID 1234567</small></span>
            </div>

            <div class="ml-4 d-flex flex-column justify-content-center">
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="outline-primary"
              >
                Связаться
              </b-button>
              <a
                href="#"
                class="d-block text-danger mt-2"
              >
                <u>Заблокировать</u></a>
            </div>
          </div>

          <div class="col-md-6 col-sm-12 d-flex mt-2 justify-content-center">
            <div class="text-center">
              <p class="h4">
                Кому:</p>
              <b-avatar
                size="80px"
                :src="require('@/assets/images/avatars/cat_avatar.jpg')"
              />
              <p class="h4 mt-1">
                {{ 'name' }}</p>
              <span class="text-muted"><small>ID 1234567</small></span>
            </div>

            <div class="ml-4 d-flex flex-column justify-content-center">
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="outline-primary"
              >
                Связаться
              </b-button>
              <a
                href="#"
                class="d-block text-danger mt-2"
              >
                <u>Заблокировать</u></a>
            </div>
          </div>
        </div>

        <div class="mt-5">
          <p class="h3 text-muted mb-5">
            Причина:<span class="pl-2 text-secondary">Не явился на собеседование</span></p>
          <p class="h3 text-muted">
            Комментарий:</p>
          <template>
            <div>
              <b-form-textarea
                id="textarea-plaintext"
                :value="text"
                rows="3"
              />
            </div>
          </template>
          <p class="h3 text-muted mt-3">
            Прикрепленные файлы:</p>
          <b-img
            :src="require('@/assets/images/elements/test_1.jpg')"
            blank-color="#ccc"
            fluid
            alt="placeholder"
            class="pr-2 mb-1"
          />
          <b-img
            :src="require('@/assets/images/elements/test_2.jpg')"
            blank-color="#ccc"
            fluid
            alt="placeholder"
            class="pr-2 mb-1"
          />
        </div>

        <div class="mt-3 text-center text-sm-left">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mb-1"
          >
            Оставить комментарий
          </b-button>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            class="ml-2 mr-2 mb-1"
          >
            Закрыть
          </b-button>
        </div>

      </b-tab>
    </b-tabs>

  </div>
</template>

<script>
import {
  BTab, BTabs, BAvatar, BButton, BFormTextarea, BImg,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BTab,
    BTabs,
    BAvatar,
    BButton,
    BFormTextarea,
    BImg,
  },
  directives: {
    Ripple,
  },

  data: () => ({
    users: [],
    model: {},
    text: 'Трижды не явился на собеседование, хотя было оговорено место и время... Ниже прикрепили скрины переписки',
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

<style lang="scss">
  @import '@core/scss/vue/libs/tree.scss';
</style>

<style lang="scss" scoped>
[dir=ltr] .badge.badge-up {
    right: -90px;
}
.badge.badge-up {
    top: -21px;
}
</style>
