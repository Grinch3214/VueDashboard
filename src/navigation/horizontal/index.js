export default [
  {
    header: '',
    icon: 'AlignLeftIcon',
    children: [
      {
        title: 'Пользователи',
        icon: 'UsersIcon',
        children: [
          {
            title: 'Соискатели',
            route: 'job-seekers',
            icon: 'UserIcon',
          },
          {
            title: 'Работодатели',
            route: 'employer',
            icon: 'HexagonIcon',
          },
          {
            title: 'Рекрутеры',
            route: 'recruiter',
            icon: 'MehIcon',
          },
        ],
      },

      {
        title: 'Верификация',
        icon: 'CheckIcon',
        children: [
          {
            title: 'Работодатели',
            route: 'verification',
            icon: 'CheckIcon',
          },
          {
            title: 'Контакты',
            route: 'verification-employer-contact',
            icon: 'PhoneIcon',
          },
          {
            title: 'Соискатели',
            route: 'verification-jobseekers',
            icon: 'UsersIcon',
          },
        ],
      },

      {
        title: 'Финансы',
        icon: 'DollarSignIcon',
        children: [
          {
            title: 'ОСВ',
            route: 'finance',
            icon: 'DollarSignIcon',
          },
        ],
      },

      {
        title: 'Метрики',
        icon: 'TrendingUpIcon',
        children: [
          {
            title: 'Метрики работодателей',
            route: 'metrics',
            icon: 'TrendingUpIcon',
          },
        ],
      },

      {
        header: 'Жалобы',
        icon: 'ThumbsDownIcon',
        route: 'complaint-page',
        title: 'Жалобы',
      },

      {
        header: 'Маркетинг по пользователям',
        icon: 'TriangleIcon',
        route: 'marketing-by-user',
        title: 'Каналы связи работодателя',
      },

      {
        header: 'Модерация',
        icon: 'BookOpenIcon',
        route: 'moderation',
        title: 'Справочник',
      },

      {
        header: 'Тесты',
        icon: 'FolderIcon',
        route: 'tests',
        title: 'Тесты',
      },
    ],
  },

  {
    header: 'Админпанель',
    icon: 'HomeIcon',
    children: [
      {
        title: 'Администраторы',
        route: 'home',
        icon: 'HomeIcon',
      },
    ],
  },

  {
    header: 'Аналитика',
    icon: 'TrendingUpIcon',
    children: [
      {
        title: 'Сквозная аналитика',
        route: 'analitics',
        icon: 'TrendingUpIcon',
      },
      {
        title: 'Сквозная аналитика работодатели',
        route: 'analitics-employers',
        icon: 'TrendingUpIcon',
      },
      {
        title: 'Статистика',
        route: 'analitics-diagrams-general',
        icon: 'TrendingUpIcon',
      },
    ],
  },
]
