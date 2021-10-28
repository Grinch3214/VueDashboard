<template>
  <div class="card bg-white p-2">
    <avatar-preview />
    <cards-name-login />
    <table-for-admins />

    <!-- submit and reset -->
    <div class="mt-2 d-sm-flex justify-content-between flex-wrap">
      <div class="mb-2">
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
          class="mr-1"
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
          Удалить администратора
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
            Вы уверены, что хотите удалить администратора?
          </b-card-text>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BButton, BModal, VBModal, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import CardsNameLogin from '@/anworks/components/CardsNameLogin.vue'
import TableForAdmins from '@/anworks/tables/TableForAdmins.vue'
import AvatarPreview from '@/anworks/components/AvatarPreview.vue'

export default {
  components: {
    CardsNameLogin,
    TableForAdmins,
    BButton,
    BModal,
    BCardText,
    AvatarPreview,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
}
</script>
