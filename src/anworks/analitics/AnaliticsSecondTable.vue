<template>
  <div class="card p-2">
    <b-table-simple
      caption-top
      responsive
      bordered
      :sticky-header="stickyHeader"
    >
      <!-- <caption>Test table:</caption> -->
      <colgroup><col><col></colgroup>
      <colgroup><col><col><col></colgroup>
      <colgroup><col><col></colgroup>
      <b-thead class="text-white">
        <b-tr>
          <b-th
            colspan="3"
            class="an-purple align-middle text-nowrap"
          >Direct Marketing</b-th>
          <b-th
            class="an-purple align-middle"
          >Источник перехода, чел/мес</b-th>
          <b-th
            colspan="2"
            class="an-purple align-middle text-nowrap"
          >Первая конверсия</b-th>
          <b-th
            colspan="2"
            class="an-purple align-middle"
          >Резюме</b-th>
          <b-th
            colspan="2"
            class="an-purple align-middle"
          >Тесты по технологиям, чел</b-th>
          <b-th
            colspan="2"
            class="an-purple align-middle"
          >Тесты по иностранному языку, чел</b-th>
          <b-th
            colspan="2"
            class="an-purple align-middle"
          >Рейтинг</b-th>
          <b-th
            colspan="2"
            class="an-purple align-middle text-nowrap"
          >Продление участия</b-th>
          <b-th
            colspan="2"
            class="an-purple align-middle"
          >Колличество собеседований с рекрутерами</b-th>
          <b-th
            colspan="2"
            class="an-purple align-middle"
          >Колличество собеседований с тех. лидами</b-th>
          <b-th
            class="an-purple align-middle"
          >Нанято</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap">
            Прямые переходы
          </b-td>
          <b-td>Прямые переходы на https://an.works/</b-td>
          <b-td>{{ anWorks }}</b-td>
          <b-td />
          <b-td variant="bg-green">
            Регистрации
          </b-td>
          <b-td
            variant="bg-green"
          >400</b-td>
          <b-td
            class="text-nowrap"
          >Личная инф.</b-td>
          <b-td>350</b-td>
          <b-td>Начальный уровень</b-td>
          <b-td>230</b-td>
          <b-td>А1</b-td>
          <b-td>230</b-td>
          <b-td
            variant="bg-blue"
            class="text-nowrap"
          >Топ 10</b-td>
          <b-td
            variant="bg-blue"
          >230</b-td>
          <b-td
            variant="bg-orange"
            class="text-nowrap"
          >Топ 10</b-td>
          <b-td
            variant="bg-orange"
          >230</b-td>
          <b-td>1</b-td>
          <b-td>140</b-td>
          <b-td>1</b-td>
          <b-td>140</b-td>
          <b-td
            variant="bg-yellow"
          >500</b-td>
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap">
            Чат на сайте
          </b-td>
          <b-td>Авторизовалось в чате через соцсети</b-td>
          <b-td>{{ socialAuthorization }}</b-td>
          <b-td />
          <b-td variant="bg-green">
            Авторизации
          </b-td>
          <b-td
            variant="bg-green"
          >400</b-td>
          <b-td
            class="text-nowrap"
          >Навыки</b-td>
          <b-td>350</b-td>
          <b-td>Средний уровень</b-td>
          <b-td>230</b-td>
          <b-td>А2</b-td>
          <b-td>230</b-td>
          <b-td
            variant="bg-blue"
            class="text-nowrap"
          >Топ 20</b-td>
          <b-td
            variant="bg-blue"
          >123</b-td>
          <b-td
            variant="bg-orange"
            class="text-nowrap"
          >Топ 20</b-td>
          <b-td
            variant="bg-orange"
          >123</b-td>
          <b-td>2</b-td>
          <b-td>150</b-td>
          <b-td>2</b-td>
          <b-td>150</b-td>
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap">
            Телеграм чат бот
          </b-td>
          <b-td>Активных пользователей бота</b-td>
          <b-td>{{ activeUsersBot }}</b-td>
          <b-td>{{ activeUsersBot + socialAuthorization + anWorks }}</b-td>
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td
            class="text-nowrap"
          >Опыт работы</b-td>
          <b-td>340</b-td>
          <b-td>Сложный уровень</b-td>
          <b-td>150</b-td>
          <b-td>B1</b-td>
          <b-td>150</b-td>
          <b-td
            variant="bg-blue"
            class="text-nowrap"
          >Топ 30</b-td>
          <b-td
            variant="bg-blue"
          >132</b-td>
          <b-td
            variant="bg-orange"
            class="text-nowrap"
          >Топ 30</b-td>
          <b-td
            variant="bg-orange"
          >132</b-td>
          <b-td>3</b-td>
          <b-td>123</b-td>
          <b-td>3</b-td>
          <b-td>123</b-td>
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap" />
          <b-td>Заполнили персональные данные</b-td>
          <b-td>120</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td
            class="text-nowrap"
          >Образование</b-td>
          <b-td>330</b-td>
          <b-td />
          <b-td />
          <b-td>B2</b-td>
          <b-td>150</b-td>
          <b-td
            variant="bg-blue"
            class="text-nowrap"
          >Топ 40</b-td>
          <b-td
            variant="bg-blue"
          >154</b-td>
          <b-td
            variant="bg-orange"
            class="text-nowrap"
          >Топ 40</b-td>
          <b-td
            variant="bg-orange"
          >154</b-td>
          <b-td>4</b-td>
          <b-td>123</b-td>
          <b-td>4</b-td>
          <b-td>123</b-td>
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap" />
          <b-td>Прошли тест по Hard Skills</b-td>
          <b-td>120</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td
            class="text-nowrap"
          >Локация</b-td>
          <b-td>320</b-td>
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td
            variant="bg-blue"
            class="text-nowrap"
          >Топ 50</b-td>
          <b-td
            variant="bg-blue"
          >123</b-td>
          <b-td
            variant="bg-orange"
            class="text-nowrap"
          >Топ 50</b-td>
          <b-td
            variant="bg-orange"
          >123</b-td>
          <b-td>5</b-td>
          <b-td>123</b-td>
          <b-td>5</b-td>
          <b-td>123</b-td>
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap" />
          <b-td>Прошли тест по иностранному языку</b-td>
          <b-td>120</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td
            class="text-nowrap"
          >О себе</b-td>
          <b-td>310</b-td>
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td
            variant="bg-blue"
            class="text-nowrap"
          >Топ 60</b-td>
          <b-td
            variant="bg-blue"
          >134</b-td>
          <b-td
            variant="bg-orange"
            class="text-nowrap"
          >Топ 60</b-td>
          <b-td
            variant="bg-orange"
          >134</b-td>
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td
            class="text-nowrap"
          >Телеграм канал</b-td>
          <b-td>Просмотры постов</b-td>
          <b-td>125</b-td>
          <b-td>120</b-td>
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td
            variant="bg-blue"
            class="text-nowrap"
          >Топ 70</b-td>
          <b-td variant="bg-blue">
            230</b-td>
          <b-td
            variant="bg-orange"
            class="text-nowrap"
          >Топ 70</b-td>
          <b-td variant="bg-orange">
            230</b-td>
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap">
            Телеграм канал</b-td>
          <b-td>Просмотры постов</b-td>
          <b-td>125</b-td>
          <b-td>120</b-td>
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td
            variant="bg-blue"
            class="text-nowrap"
          >Топ 70</b-td>
          <b-td variant="bg-blue">
            230</b-td>
          <b-td
            variant="bg-orange"
            class="text-nowrap"
          >Топ 70</b-td>
          <b-td variant="bg-orange">
            230</b-td>
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap" />
          <b-td>Лайки</b-td>
          <b-td>123</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td
            variant="bg-blue"
            class="text-nowrap"
          >Топ 80</b-td>
          <b-td variant="bg-blue">
            123</b-td>
          <b-td
            variant="bg-orange"
            class="text-nowrap"
          >Топ 80</b-td>
          <b-td variant="bg-orange">
            123</b-td>
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap">
            Email</b-td>
          <b-td>Отправленые письма</b-td>
          <b-td>1000</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td
            variant="bg-blue"
            class="text-nowrap"
          >Топ 90</b-td>
          <b-td variant="bg-blue">
            134</b-td>
          <b-td
            variant="bg-orange"
            class="text-nowrap"
          >Топ 90</b-td>
          <b-td variant="bg-orange">
            134</b-td>
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap" />
          <b-td>CTR писем</b-td>
          <b-td>1,5%</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <!-- Группа: ТРАФИК  -->
        <b-tr>
          <b-td
            variant="an-title"
            colspan="3"
            class="align-middle text-nowrap text-white pt-2 pb-2"
          >Трафик</b-td>
          <b-td colspan="18" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td
            rowspan="2"
            class="text-nowrap"
          >Платный Трафик <br> <span class="text-muted">PPC google</span> </b-td>
          <b-td>Количество показов</b-td>
          <b-td class="text-nowrap">
            10 000</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>CTR объявления</b-td>
          <b-td>1,5%</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td
            rowspan="3"
            class="text-nowrap"
          >
            <span class="d-block">Вирусный трафик</span><br>
            <span class="text-muted d-block">Переходы через личные <br> рекомендации и ивенты</span>
            <br>
            <span class="text-muted d-block">QR коды с отслеживанием <br> через UTM метки</span>
          </b-td>
          <b-td>Люди</b-td>
          <b-td>32</b-td>
          <b-td>120</b-td>
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap">
            QR коды</b-td>
          <b-td>22</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="text-nowrap">
            Ивенты</b-td>
          <b-td>1000</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <!-- Группа: СОЦСЕТИ -->
        <b-tr>
          <b-td
            variant="an-title"
            colspan="3"
            class="align-middle text-nowrap text-white pt-2 pb-2"
          >Социальные сети</b-td>
          <b-td colspan="18" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="h4 font-weight-bolder">
            Instagram</b-td>
          <b-td />
          <b-td>120</b-td>
          <b-td>120</b-td>
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Количество подписчиков</b-td>
          <b-td>Всего</b-td>
          <b-td>120</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Лайки</b-td>
          <b-td>От 5 до 500</b-td>
          <b-td>125</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="h4 font-weight-bolder">
            Facebook</b-td>
          <b-td />
          <b-td>120</b-td>
          <b-td>120</b-td>
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Количество подписчиков</b-td>
          <b-td>Всего</b-td>
          <b-td>120</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Лайки</b-td>
          <b-td>От 5 до 500</b-td>
          <b-td>125</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="h4 font-weight-bolder">
            LinkedIn</b-td>
          <b-td />
          <b-td>120</b-td>
          <b-td>120</b-td>
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Количество подписчиков</b-td>
          <b-td>Всего</b-td>
          <b-td>120</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Лайки</b-td>
          <b-td>От 5 до 500</b-td>
          <b-td>125</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="h4 font-weight-bolder">
            YouTube</b-td>
          <b-td />
          <b-td>120</b-td>
          <b-td>120</b-td>
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Количество подписчиков</b-td>
          <b-td>Всего</b-td>
          <b-td>120</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Лайки</b-td>
          <b-td>От 5 до 500</b-td>
          <b-td>125</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td class="h4 font-weight-bolder">
            TikTok</b-td>
          <b-td />
          <b-td>120</b-td>
          <b-td>120</b-td>
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Количество подписчиков</b-td>
          <b-td>Всего</b-td>
          <b-td>120</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Лайки</b-td>
          <b-td>От 5 до 500</b-td>
          <b-td>125</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <!-- Группа: ОРГАНИКА -->
        <b-tr>
          <b-td
            variant="an-title"
            colspan="3"
            class="align-middle text-nowrap text-white pt-2 pb-2"
          >Органика</b-td>
          <b-td colspan="18" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>SEO трафик</b-td>
          <b-td />
          <b-td />
          <b-td>120</b-td>
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Позиции страниц</b-td>
          <b-td class="text-nowrap">
            От топ 96 до топ 1</b-td>
          <b-td />
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <!-- Группа: PR ТРАФИК -->
        <b-tr>
          <b-td
            variant="an-title"
            colspan="3"
            class="align-middle text-nowrap text-white pt-2 pb-2"
          >PR трафик</b-td>
          <b-td colspan="18" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td>Онлайн издания</b-td>
          <b-td class="text-nowrap">
            Просмотры статей</b-td>
          <b-td class="text-nowrap">
            от 5 до 120</b-td>
          <b-td>120</b-td>
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>

        <b-tr class="font-weight-bold text-dark">
          <b-td />
          <b-td class="text-nowrap">
            Средний CTR  статей</b-td>
          <b-td>1,25%</b-td>
          <b-td />
          <b-td variant="bg-green" />
          <b-td variant="bg-green" />
          <b-td class="text-nowrap" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-blue" />
          <b-td variant="bg-blue" />
          <b-td variant="bg-orange" />
          <b-td variant="bg-orange" />
          <b-td />
          <b-td />
          <b-td />
          <b-td />
          <b-td variant="bg-yellow" />
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import {
  BTableSimple, BThead, BTr, BTh, BTd, BTbody,
} from 'bootstrap-vue'

export default {
  components: {
    BTableSimple,
    BThead,
    BTr,
    BTh,
    BTd,
    BTbody,
  },
  // data: () => ({
  //   anWorks: 150,
  //   socialAuthorization: 170,
  //   activeUsersBot: 520,
  // }),
  data() {
    return {
      anWorks: 150,
      socialAuthorization: 170,
      activeUsersBot: 520,
      stickyHeader: true,
    }
  },
}
</script>

<style lang="scss">
  .table:not(.table-dark):not(.table-light) thead:not(.thead-dark) .an-purple,
  .table:not(.table-dark):not(.table-light) tfoot:not(.thead-dark) .an-purple {
    background-color: #5E5873;
    color: #fff;
  }
  .table-bg-green {
    background-color: #40A47A;
  }
  .table-bg-blue {
    background-color: #4FA5EC;
  }
  .table-bg-orange {
    background-color: #FFB55F;
  }
  .table-bg-yellow {
    background-color: #F4FF7B;
  }
  .table-an-title {
    text-transform: uppercase;
    font-size: 0.857rem;
    letter-spacing: 0.5px;
    background-color: #5E5873;
    line-height: 2;
  }
</style>
