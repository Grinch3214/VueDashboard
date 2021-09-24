<template>
  <div>
    <h2>Тесты</h2>
    <div class="align-items-center pt-3 row">
      <div
        v-for="folder in folders"
        :key="folder.title"
        class="col-12 col-md-3"
        @click="$router.push('/tests-test')"
      >
        <div class="rounded bg-white d-flex justify-content-center align-items-center card-tests mb-2 h5">
          {{ folder.title }}
        </div>
      </div>
      <div class="mb-2 ml-3">
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-modal.modal-tests
          variant="flat-secondary"
          class="btn-icon rounded-circle"
        >
          <feather-icon
            icon="PlusIcon"
            size="45"
          />
        </b-button>
      </div>
      <b-modal
        id="modal-tests"
        cancel-variant="secondary"
        centered
        size="md"
        hide-header
        hide-footer
        content-class="test-round"
      >
        <h1 class="text-center pt-3 mb-5">
          Введите название</h1>
        <b-form-group class="mb-5">
          <b-form-input
            id="test-input"
            v-model="newFold.title"
            placeholder="Тест по каким-то там технологиям"
          />
        </b-form-group>
        <div class="text-center mb-3">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            @click="addFold(), $root.$emit('bv::hide::modal', 'modal-tests', $event.target)"
          >
            Сохранить
          </b-button>
        </div>
      </b-modal>
    </div>

  </div>
</template>

<script>
import {
  BButton, BModal, VBModal, BFormInput, BFormGroup,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BModal,
    BFormInput,
    BFormGroup,
  },
  directives: {
    Ripple,
    'b-modal': VBModal,
  },
  data() {
    return {
      newFold: {
        title: '',
      },
      folders: [
        {
          title: 'Тесты по технологиям',
        },
      ],
    }
  },
  methods: {
    addFold() {
      if (this.newFold.title !== '') {
        this.folders.push({
          title: this.newFold.title,
        })
        this.newFold.title = ''
      }
    },
  },
}
</script>

<style lang="scss">
    .card-tests {
        min-height: 200px;
        cursor: pointer;
        transition: all .4s;
        &:hover {
            box-shadow: 0 4px 14px rgba(130, 134, 139, 0.38);
        }
    }
    .test-round {
        border-radius: 25px;
    }
</style>
