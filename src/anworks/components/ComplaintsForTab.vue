<template>
  <div>
    <div class="border-bottom d-md-flex row align-items-center d-none">
      <div class="d-flex align-items-center col-1 p-1">
        <span class="h5 mb-0">№</span>
      </div>
      <div class="col-3">
        <span class="h5 mb-0">Пользователь, ID</span>
      </div>
      <div class="col-2">
        <span class="h5 mb-0">Дата</span>
      </div>
      <div class="col-6">
        <span class="h5 mb-0">Комментарий</span>
      </div>
    </div>

    <div class="border-bottom row align-items-center">
      <div class="col-1 h5">
        <span>1</span>
      </div>
      <div class="d-flex align-items-center col-8 col-md-3 p-1">
        <b-avatar
          size="70px"
          :src="require('@/assets/images/avatars/cat_avatar.jpg')"
        />
        <p class="ml-1 h5">
          Иванов Иван
          <small class="text-muted d-block">ID123456</small>
        </p>
      </div>
      <div class="col-12 col-md-2 mb-1 mb-md-0 text-right text-md-left">
        <span>15.06.2021</span>
      </div>
      <div class="col-12 col-md-6 pb-1">
        <app-collapse
          accordion
          :type="collapseType"
        >
          <app-collapse-item
            title="Жалоба"
            class="mycollapse"
          >
            Неуважительно относятся к другим работникам, грубят, проявляют хамство, оскорбительно выражаются в адрес сотрудников, их семей, товарищей, прочее;
            Занимаются махинациями, связанными с несвоевременной выплатой зарплаты, снижением ее размера, невыплатой премиальных (такие проступки совершаются руководящими лицами предприятия).
          </app-collapse-item>
        </app-collapse>
      </div>
    </div>

    <div class="border-bottom row align-items-center">
      <div class="col-1 h5">
        <span>2</span>
      </div>
      <div class="d-flex align-items-center col-8 col-md-3 p-1">
        <b-avatar
          size="70px"
          :src="require('@/assets/images/avatars/cat_avatar.jpg')"
        />
        <p class="ml-1 h5">
          Иванов Иван
          <small class="text-muted d-block">ID123456</small>
        </p>
      </div>
      <div class="col-12 col-md-2 mb-1 mb-md-0 text-right text-md-left">
        <span>15.06.2021</span>
      </div>
      <div class="col-12 col-md-6 pb-1">
        <app-collapse
          accordion
          :type="collapseType"
        >
          <app-collapse-item
            title="Жалоба"
            class="mycollapse"
          >
            Неуважительно относятся к другим работникам, грубят, проявляют хамство, оскорбительно выражаются в адрес сотрудников, их семей, товарищей, прочее;
            Занимаются махинациями, связанными с несвоевременной выплатой зарплаты, снижением ее размера, невыплатой премиальных (такие проступки совершаются руководящими лицами предприятия).
          </app-collapse-item>
        </app-collapse>
      </div>
    </div>

    <div class="border-bottom row align-items-center">
      <div class="col-1 h5">
        <span>3</span>
      </div>
      <div class="d-flex align-items-center col-8 col-md-3 p-1">
        <b-avatar
          size="70px"
          :src="require('@/assets/images/avatars/cat_avatar.jpg')"
        />
        <p class="ml-1 h5">
          Иванов Иван
          <small class="text-muted d-block">ID123456</small>
        </p>
      </div>
      <div class="col-12 col-md-2 mb-1 mb-md-0 text-right text-md-left">
        <span>15.06.2021</span>
      </div>
      <div class="col-12 col-md-6 pb-1">
        <app-collapse
          accordion
          :type="collapseType"
        >
          <app-collapse-item
            title="Жалоба"
            class="mycollapse"
          >
            Неуважительно относятся к другим работникам, грубят, проявляют хамство, оскорбительно выражаются в адрес сотрудников, их семей, товарищей, прочее;
            Занимаются махинациями, связанными с несвоевременной выплатой зарплаты, снижением ее размера, невыплатой премиальных (такие проступки совершаются руководящими лицами предприятия).
          </app-collapse-item>
        </app-collapse>
      </div>
    </div>

    <template>
      <div class="d-flex justify-content-between align-items-center mt-2">
        <span class="text-muted">Жалоб: <span>{{ 3 }} из {{ 3 }}</span></span>
      </div>
    </template>

  </div>
</template>

<script>
import {
  BAvatar,
} from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    AppCollapse,
    AppCollapseItem,
    BAvatar,
  },
  data: () => ({
    collapseType: 'border',
  }),
}
</script>

<style lang="scss">
    .mycollapse .collapsed,  .mycollapse.open{
    .collapse-title{
    font-weight: 400;
    font-size: 1rem;
    color: #6e6b7b;
}
    }
</style>
