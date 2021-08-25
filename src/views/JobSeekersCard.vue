<template>
  <div
    class="card bg-white p-2 p-lg-5 castom-tab"
  >
    <div
      v-for="(item) in items"
      :key="item.id"
    >

      <b-tabs
        pills
        vertical
        class="flex-nowrap for-overflow"
      > <b-tab
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
            <p class="h4 mt-2">
              Мария Иванова</p>
            <b-avatar
              rounded="sm"
              variant="light-primary"
              size="104px"
              :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
            />

            <info-job-seeker-user />

            <!-- submit and reset -->
            <div class="mt-2 mt-lg-5 d-flex justify-content-sm-between justify-content-center flex-wrap col-lg-9 pl-0">
              <div class="mb-1">
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
              <div>
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  v-b-modal.modal-danger
                  type="submit"
                  variant="danger"
                  class="mr-1"
                >
                  Удалить соискателя
                </b-button>
                <b-modal
                  id="modal-danger"
                  ok-variant="danger"
                  modal-class="modal-danger"
                  centered
                  ok-title="Да, уверен"
                  cancel-title="Отмена"
                  cancel-variant="outline-primary"
                >
                  <b-card-text class="h3 text-center">
                    <feather-icon
                      icon="AlertCircleIcon"
                      size="70"
                      class="text-warning d-block mx-auto"
                    />
                    Вы уверены, что хотите удалить соискателя?
                  </b-card-text>
                </b-modal>
              </div>
            </div>
          </b-card-text>
        </b-tab>

        <b-tab>
          <template #title>
            <feather-icon
              icon="BriefcaseIcon"
              class="mr-50"
            />
            <span class="d-none d-sm-inline">Опыт работы</span>
          </template>
          <b-card-text>

            <skill-work>
              <template v-slot:companeSkill>
                <p>В сфере IT</p>
              </template>
              <template v-slot:FreelanceSkill>
                <p>Фриланс</p>
              </template>
            </skill-work>

          </b-card-text>
        </b-tab>

        <b-tab>
          <template #title>
            <feather-icon
              icon="BookIcon"
              class="mr-50"
            />
            <span class="d-none d-sm-inline">Образование</span>
          </template>
          <b-card-text>
            <education-user />
          </b-card-text>
        </b-tab>

        <b-tab>
          <template #title>
            <feather-icon
              icon="LockIcon"
              class="mr-50"
            />
            <span class="d-none d-sm-inline">Навыки</span>
          </template>
          <b-card-text>
            <skills-user-component />
          </b-card-text>
        </b-tab>

        <b-tab>
          <template #title>
            <feather-icon
              icon="PhoneIcon"
              class="mr-50"
            />
            <span class="d-none d-sm-inline">Тестирование</span>
          </template>
          <b-card-text>

            <testing-page-user />

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
              icon="MapPinIcon"
              class="mr-50"
            />
            <span class="d-none d-sm-inline">Локация и вид занятости</span>
          </template>
          <b-card-text>

            <location-user />

          </b-card-text>
        </b-tab>

        <b-tab>
          <template #title>
            <feather-icon
              icon="MapPinIcon"
              class="mr-50"
            />
            <span class="d-none d-sm-inline">О себе</span>
          </template>
          <b-card-text>

            <about-user />

          </b-card-text>
        </b-tab>

        <b-tab>
          <template #title>
            <feather-icon
              icon="ThumbsDownIcon"
              class="mr-50"
            />
            <span class="d-none d-sm-inline">Жалобы</span>
          </template>
          <b-card-text>
            <complaints-for-tab />
          </b-card-text>
        </b-tab>
      </b-tabs>

    </div>
  </div>
</template>

<script>
import {
  BButton, BModal, VBModal, BCardText, BTab, BTabs, BAvatar,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import InfoJobSeekerUser from '@/anworks/jobSeekers/InfoJobSeekerUser.vue'
import ComplaintsForTab from '@/anworks/components/ComplaintsForTab.vue'
import SkillWork from '@/anworks/jobSeekers/SkillWork.vue'
import EducationUser from '@/anworks/jobSeekers/EducationUser.vue'
import SkillsUserComponent from '@/anworks/jobSeekers/SkillsUserComponent.vue'
import LocationUser from '@/anworks/jobSeekers/LocationUser.vue'
import AboutUser from '@/anworks/jobSeekers/AboutUser.vue'
import TestingPageUser from '@/anworks/jobSeekers/TestingPageUser.vue'

export default {
  components: {
    BButton,
    BModal,
    BCardText,
    BTab,
    BTabs,
    BAvatar,
    InfoJobSeekerUser,
    ComplaintsForTab,
    SkillWork,
    EducationUser,
    SkillsUserComponent,
    LocationUser,
    AboutUser,
    TestingPageUser,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data: () => ({
    users: [],
    model: {},
    items: [{}],
  }),
  created() {
    this.$http.get('/assets/job-seekers-users.json')
      .then(res => { this.users = res.data })
      .then(() => { this.model = this.users.find(o => o.id === +this.$route.query.id) })
      // eslint-disable-next-line no-alert
      .then(() => (this.model.fullName))
  },
  methods: {
    // RemoveField() {
    //   this.items.pop()
    // },
  },
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
