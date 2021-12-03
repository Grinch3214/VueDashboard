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

          <info-job-seeker-user />

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

            <skill-work />

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
              icon="FolderIcon"
              class="mr-50"
            />
            <span class="d-none d-sm-inline">Тестирование</span>
          </template>
          <b-card-text>

            <testing-page-user />

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
              icon="UserCheckIcon"
              class="mr-50"
            />
            <span class="d-none d-sm-inline">О себе</span>
          </template>
          <b-card-text>

            <about-user />

          </b-card-text>
        </b-tab>

      </b-tabs>

    </div>
  </div>
</template>

<script>
import {
  BCardText, BTab, BTabs,
} from 'bootstrap-vue'
import InfoJobSeekerUser from '@/anworks/jobSeekers/InfoJobSeekerUser.vue'
import SkillWork from '@/anworks/jobSeekers/SkillWork.vue'
import EducationUser from '@/anworks/jobSeekers/EducationUser.vue'
import SkillsUserComponent from '@/anworks/jobSeekers/SkillsUserComponent.vue'
import LocationUser from '@/anworks/jobSeekers/LocationUser.vue'
import AboutUser from '@/anworks/jobSeekers/AboutUser.vue'
import TestingPageUser from '@/anworks/jobSeekers/TestingPageUser.vue'

export default {
  components: {
    BCardText,
    BTab,
    BTabs,
    InfoJobSeekerUser,
    SkillWork,
    EducationUser,
    SkillsUserComponent,
    LocationUser,
    AboutUser,
    TestingPageUser,
  },
  data: () => ({
    users: [],
    model: {},
    items: [{}],
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
