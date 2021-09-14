import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Администраторы',
            active: true,
          },
        ],
      },
    },
    {
      path: '/job-seekers',
      name: 'job-seekers',
      component: () => import('@/views/JobSeekerPage.vue'),
      meta: {
        pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Соискатели',
            active: true,
          },
        ],
      },
    },
    {
      path: '/employer',
      name: 'employer',
      component: () => import('@/views/Employer.vue'),
      meta: {
        pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Работодатели',
            active: true,
          },
        ],
      },
    },
    {
      path: '/recruiters',
      name: 'recruiter',
      component: () => import('@/views/Recruiters.vue'),
      meta: {
        pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Рекрутеры',
            active: true,
          },
        ],
      },
    },
    {
      path: '/verification-page',
      name: 'verification',
      component: () => import('@/views/Verification.vue'),
      meta: {
        pageTitle: 'Верификация',
        breadcrumb: [
          {
            text: 'Работодатели',
            active: true,
          },
        ],
      },
    },
    {
      path: '/verification-profile',
      name: 'verification-profile',
      component: () => import('@/anworks/verification/VerificationProfileEmployer.vue'),
      meta: {
        pageTitle: 'Верификация',
        breadcrumb: [
          {
            text: 'Работодатели',
            active: true,
          },
        ],
      },
    },
    {
      path: '/verification-jobseeker-profile',
      name: 'verification-jobseeker-profile',
      component: () => import('@/anworks/verification/VerificationProfileJobseeker.vue'),
      meta: {
        pageTitle: 'Верификация',
        breadcrumb: [
          {
            text: 'Соискатели',
            active: true,
          },
        ],
      },
    },
    {
      path: '/verification-employer-contact',
      name: 'verification-employer-contact',
      component: () => import('@/views/VerificationEmployerContact.vue'),
      meta: {
        pageTitle: 'Верификация',
        breadcrumb: [
          {
            text: 'Контакты',
            active: true,
          },
        ],
      },
    },
    {
      path: '/verification-employer-contact-card',
      name: 'verification-employer-contact-card',
      component: () => import('@/anworks/verification/VerificationContactsUsers.vue'),
      meta: {
        pageTitle: 'Верификация',
        breadcrumb: [
          {
            text: 'Верификация контактов',
            active: true,
          },
        ],
      },
    },
    {
      path: '/verification-jobseekers',
      name: 'verification-jobseekers',
      component: () => import('@/anworks/verification/VerificationJobSeekers.vue'),
      meta: {
        pageTitle: 'Верификация',
        breadcrumb: [
          {
            text: 'Соискатели',
            active: true,
          },
        ],
      },
    },
    {
      path: '/finance-page',
      name: 'finance',
      component: () => import('@/views/Finance.vue'),
      meta: {
        pageTitle: 'Финансы',
        breadcrumb: [
          {
            text: 'ОСВ',
            active: true,
          },
        ],
      },
    },
    {
      path: '/history-token',
      name: 'history-token',
      component: () => import('@/views/HistoryToken.vue'),
      meta: {
        pageTitle: 'ОСВ',
        breadcrumb: [
          {
            text: 'История движения Токен',
            active: true,
          },
        ],
      },
    },
    {
      path: '/metrics-page',
      name: 'metrics',
      component: () => import('@/views/Metrics.vue'),
      meta: {
        pageTitle: 'Метрики',
        breadcrumb: [
          {
            text: 'Метрики работодателей',
            active: true,
          },
        ],
      },
    },
    {
      path: '/complaint-page',
      name: 'complaint-page',
      component: () => import('@/views/ComplaintPage.vue'),
      meta: {
        pageTitle: '',
        breadcrumb: [
          {
            text: 'Жалобы',
            active: true,
          },
        ],
      },
    },
    {
      path: '/notification-more',
      name: 'notificationMore',
      component: () => import('@/views/NotificationMore.vue'),
      meta: {
        // pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Уведомления',
            active: true,
          },
        ],
      },
    },
    {
      path: '/admin-card',
      name: 'adminCard',
      component: () => import('@/views/AdminCard.vue'),
      meta: {
        pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Карточка администратора',
            active: true,
          },
        ],
      },
    },
    {
      path: '/job-seekers-card',
      name: 'jobSeekersCard',
      component: () => import('@/views/JobSeekersCard.vue'),
      meta: {
        // pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Карточка соискателя',
            active: true,
          },
        ],
      },
    },
    {
      path: '/employer-card',
      name: 'emloyercard',
      component: () => import('@/views/EmployerCard.vue'),
      meta: {
        // pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Карточка работодателя',
            active: true,
          },
        ],
      },
    },
    {
      path: '/recruiter-card',
      name: 'recruitercard',
      component: () => import('@/views/RecruiterCard.vue'),
      meta: {
        // pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Карточка рекрутёра',
            active: true,
          },
        ],
      },
    },
    {
      path: '/complaint-card',
      name: 'complaintcard',
      component: () => import('@/views/ComplaintCard.vue'),
      meta: {
        // pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Детальнее',
            active: true,
          },
        ],
      },
    },
    {
      path: '/analitics-page',
      name: 'analitics',
      component: () => import('@/views/Analitics.vue'),
      meta: {
        pageTitle: 'Аналитика',
        breadcrumb: [
          {
            text: 'Сквозная аналитика',
            active: true,
          },
        ],
      },
    },
    {
      path: '/analitics-page-employers',
      name: 'analitics-employers',
      component: () => import('@/views/AnaliticsEmployerPage.vue'),
      meta: {
        pageTitle: 'Аналитика',
        breadcrumb: [
          {
            text: 'Сквозная аналитика работодатели',
            active: true,
          },
        ],
      },
    },
    {
      path: '/analitics-diagrams-general',
      name: 'analitics-diagrams-general',
      component: () => import('@/anworks/analitics/AnaliticsDiagrams.vue'),
      meta: {
        pageTitle: 'Аналитика',
        breadcrumb: [
          {
            text: 'Статистика',
            active: true,
          },
        ],
      },
    },
    {
      path: '/marketing-by-users',
      name: 'marketing-by-user',
      component: () => import('@/views/MarketingByUser.vue'),
      meta: {
        pageTitle: 'Маркетинг по пользователям',
        breadcrumb: [
          {
            text: 'Каналы связи работодателя',
            active: true,
          },
        ],
      },
    },
    {
      path: '/moderation',
      name: 'moderation',
      component: () => import('@/views/Moderation.vue'),
      meta: {
        pageTitle: 'Модерация',
        breadcrumb: [
          {
            text: 'Справочник',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
