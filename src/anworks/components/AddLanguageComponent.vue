<template>
  <div>
    <div
      v-for="(field, index) in fields"
      :id="'f-'+field.id"
      :key="field.id"
      class="row"
    >
      <div class="col-12 col-md-5 mb-1">
        <b-form-select
          v-model="selectedLang[field.id]"
          :options="langOptions"
        />
      </div>

      <div class="col-10 col-md-5 mb-1">
        <b-form-select
          v-model="selectedSkill[field.id]"
          :options="skillOptions"
        />
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

    <div class="col-12 pl-0">
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

  </div>
</template>

<script>
import { BFormSelect, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BFormSelect,
    BButton,
  },
  directives: {
    Ripple,
  },
  props: {
    selectedLang: {
      type: Array,
      default() {
        return []
      },
    },
    selectedSkill: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      fields: [{
        id: 0,
      }],

      // selectedLang: [],
      langOptions: [
        { value: '0', text: 'English' },
        { value: 'a', text: 'German' },
        { value: 'b', text: 'China' },
        { value: 'c', text: 'Polish' },
        { value: 'd', text: 'Russian' },
      ],

      // selectedSkill: [],
      skillOptions: [
        { value: 'a1', text: 'Elementary' },
        { value: 'a2', text: 'Pre-Intermediate' },
        { value: 'b1', text: 'Intermediate' },
        { value: 'b2', text: 'Upper-Intermediate' },
        { value: 'c1', text: 'Advanced' },
      ],
    }
  },
  methods: {
    addField() {
      this.fields.push({
        id: this.fields.length,
      })
    },
    removeField(index) {
      this.fields.splice(index, 1)
    },
  },
}
</script>
