<template>
  <div>
    <div class="row">
      <div class="col-2">
        <p class="text-primary font-weight-bold small">
          {{ settings.leftColumnTitle }}
        </p>
      </div>
      <div class="col-10">
        <p class="text-primary font-weight-bold small">
          {{ settings.rightColumnTitle }}
        </p>
      </div>
    </div>
    <div
      v-for="(field, index) in fields"
      :id="field.id"
      :key="index"
      class="row"
    >

      <div class="col-2 mb-1 pt-50">
        <b-form-checkbox
          v-model="field.checked"
        />
      </div>

      <div class="col-10 col-md-6 mb-25">
        <b-form-group
          label-for="selectedQuestion"
        >
          <b-form-input
            id="selectedQuestion"
            v-model="field.text"
            placeholder="Добавить вариант ответа"
            @change="addField(field)"
            @focus="addField(field)"
          />
        </b-form-group>
      </div>

      <div class="col-2 mb-25 pl-0">
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          variant="flat-secondary"
          class="btn-icon rounded-circle"
          @click="removeField(index)"
        >
          <feather-icon
            icon="XIcon"
            size="18"
          />
        </b-button>
      </div>
    </div>

  </div>
</template>

<script>
import {
  BFormGroup, BFormInput, BButton, BFormCheckbox,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  props: {
    settings: {
      type: Object,
      default() {
        return {
          defaultVariantSize: 4,
          leftColumnTitle: '',
          rightColumnTitle: '',
        }
      },
    },
  },
  data() {
    return {
      fields: [],
    }
  },
  computed: {
    stateInput() {
      for (let i = 0; i <= this.fields.field; i += 1) {
        console.log(this.field.length >= 2)
      }
      console.log(this.field >= 2)
      return this.field >= 2
    },
  },
  created() {
    for (let i = 1; i <= this.settings.defaultVariantSize; i += 1) {
      this.fields.push(this.createFieldObject({
        text: '',
      }))
    }
  },
  methods: {
    createFieldObject(options = {}) {
      return {
        ...{
          id: this.fields.length,
          text: '',
          checked: false,
        },
        ...options,
      }
    },
    addField(field) {
      if (!this.fields.length || (field.text && this.fields[this.fields.length - 1].text)) {
        console.log(this.fields)
        this.fields.push(this.createFieldObject({
          text: '',
        }))
      }
    },
    removeField(index) {
      if (this.fields.length > 1) {
        this.fields.splice(index, 1)
      }
    },
  },
}
</script>
