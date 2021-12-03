<template>
  <div>
    <validation-observer ref="simpleRules">
      <div
        v-for="(field, index) in fields"
        :id="'f-'+field.id"
        :key="field.id"
        class="row"
      >
        <div class="col-10">
          <b-form-group
            label-for="item-input"
          >
            <validation-provider
              #default="{ errors }"
              rules="required|regex:^([0-9]+)$"
            >
              <b-form-input
                id="item-input"
                v-model="field.value"
                :state="errors.length > 0 ? false:null"
                :type="type"
                :placeholder="placeholder"
              />
            </validation-provider>
          </b-form-group>
        </div>

        <div class="col-2 mb-1 pl-0">
          <b-button
            v-ripple.400="'rgba(40, 199, 111, 0.15)'"
            variant="flat-secondary"
            class="btn-icon rounded-circle"
            @click="removeField(index)"
          >
            <feather-icon
              icon="TrashIcon"
              size="18"
            />
          </b-button>
        </div>

      </div>

      <div class="col-12 pl-0 mb-1">
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          variant="flat-secondary"
          class="btn-icon rounded-circle"
          @click="addField"
        >
          <feather-icon
            icon="PlusIcon"
            size="25"
          />
        </b-button>
      </div>
    </validation-observer>

  </div>
</template>

<script>
import { BButton, BFormGroup, BFormInput } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'

export default {
  components: {
    BButton,
    BFormGroup,
    BFormInput,
    ValidationObserver,
    ValidationProvider,
  },
  directives: {
    Ripple,
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      },
    },
    type: {
      type: String,
      default() {
        return ''
      },
    },
    placeholder: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      required,
      fields: [],
    }
  },
  watch: {
    fields: {
      deep: true,
      handler(old, test) {
        this.$emit('input', test)
      },
    },
  },
  created() {
    this.field = JSON.parse(JSON.stringify(this.value))
    // console.log(this.value)
  },
  methods: {
    addField() {
      this.fields.push({
        id: this.fields.length,
      })
    },
    removeField(index) {
      // if (this.fields.length <= 1) {
      //   return this.fields
      // }
      return this.fields.splice(index, 1)
    },
  },
}
</script>
