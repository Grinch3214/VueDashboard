<template>
  <div>
    <div>
      <b-form
        ref="form"
        :style="{height: trHeight}"
        class="repeater-form"
        @submit.prevent="repeateAgain"
      >

        <!-- Row Loop -->
        <b-row
          v-for="(item, index) in items"
          :id="item.id"
          :key="item.id"
          ref="row"
          class="align-items-center"
        >

          <!-- Телефон -->
          <b-col>
            <b-form-group
              label="Телефон"
              label-for="item-phone"
            >
              <b-form-input
                id="item-phone"
                type="number"
                placeholder="+380999992211"
              />
            </b-form-group>
          </b-col>

          <!-- Делит кнопочка -->
          <b-col
            md="2"
            cols="2"
          >
            <b-button
              v-ripple.400="'rgba(234, 84, 85, 0.15)'"
              variant="flat-danger"
              class="btn-icon rounded-circle"
              @click="removeItem(index)"
            >
              <feather-icon
                icon="XIcon"
              />
            </b-button>
          </b-col>
        </b-row>
      </b-form>
      <!-- ад кнопочка -->
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="flat-primary"
        class="btn-icon rounded-circle"
        @click="repeateAgain"
      >
        <feather-icon
          icon="PlusIcon"
        />
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton,
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      items: [{
        id: 1,
        // selected: 'male',
        // selected1: 'designer',
        // prevHeight: 0,
      }],
      nextTodoId: 2,
    }
  },

  mounted() {
    this.initTrHeight()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {
    repeateAgain() {
      this.items.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    removeItem(index) {
      this.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>
