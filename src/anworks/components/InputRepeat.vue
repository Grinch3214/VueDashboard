<template>
  <div>
    <div
      v-for="(field, index) in fields"
      :id="field.id"
      :key="field.id"
      class="row"
    >
      <div class="col-10">
        <b-form-group
          label=""
          label-for="item-input"
        >
          <b-form-input
            id="item-input"
            type="text"
            placeholder=""
          />
        </b-form-group>
      </div>

      <div class="col-2 mb-1 pl-0">
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          variant="flat-secondary"
          class="btn-icon rounded-circle"
          @click="RemoveField(index)"
        >
          <feather-icon
            icon="TrashIcon"
            size="18"
          />
        </b-button>
      </div>

    </div>

    <div class="col-12 pl-0">
      <b-button
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        variant="flat-secondary"
        class="btn-icon rounded-circle"
        @click="AddField"
      >
        <feather-icon
          icon="PlusIcon"
          size="25"
        />
      </b-button>
    </div>

  </div>
</template>

<script>
import { BButton, BFormGroup, BFormInput } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BFormGroup,
    BFormInput,
  },
  directives: {
    Ripple,
  },
  data() {
    return {

      fields: [{
        id: 1,
      }],
      nextTodoId: 2,
    }
  },
  methods: {
    AddField() {
      this.fields.push({
        id: this.nextTodoId += this.nextTodoId,
      })
    },
    RemoveField(index) {
      this.fields.splice(index, 1)
    },
  },
}
</script>
